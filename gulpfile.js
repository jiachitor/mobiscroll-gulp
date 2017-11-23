let exec = require('child_process').exec,
    fs = require('fs'),
    path = require('path'),
    extend = require('util')._extend,
    http = require('http'),
    url = require('url')

let gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    // ssh = require('gulp-ssh'),
    tar = require('gulp-tar'),
    gzip = require('gulp-gzip'),
    replace = require('gulp-just-replace'),
    // shell = require('gulp-shell'),
    uglify = require('gulp-uglify'),
    gutil = require("gulp-util"),
    del = require('del'),
    targz = require('tar.gz'),
    browserSync = require('browser-sync'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    gulpif = require('gulp-if'),
    streamify = require('gulp-streamify'),
    argv = require('yargs').argv,
    open = require('open'),
    // concat = require('gulp-concat'),
    merge = require('merge-stream'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    base64 = require('gulp-base64'),
    md5 = require("gulp-md5-plus"),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber')

/* ------------------------------------------开发项目------------------------------------------- */

let config_dev = {
    less_src_path: path.join(process.cwd(), 'bundles'),
    less_dest_path: path.join(process.cwd(), 'dist', 'css'),
    js_src_path: path.join(process.cwd(), 'bundles'),
    js_dest_path: path.join(process.cwd(), 'dist', 'js')
};

let jsFileArr = [
        {
            "fileName": "mobiscroll.javascript.js"
        }
    ],
    jsFileTaskObj = {};

function lessTask(callback) {
    // Serve files from the root of this project
    gulp.src(config_dev.less_src_path + '/mobiscroll.less')
        .pipe(plumber())
        .pipe(less())
        .on('error', gutil.log)
        .pipe(rename('mobiscroll.css'))
        //.pipe(minifycss())
        .pipe(gulp.dest(config_dev.less_dest_path))
        .pipe(browserSync.stream({stream: true}))
        //.pipe(notify('common.css to build complete'))
        .on('finish', callback)
}

function browserifyTask(options) {
    let bundler = browserify({
        entries: [options.base + options.entries],
        transform: [babelify.configure({
                presets: ["es2015"],
                plugins: [
                    ["transform-runtime"]
                ]
            })],
        debug: false,
        cache: {},
        packageCache: {},
        fullPaths: true
    })

    let updateStart = Date.now()

    function bundle() {
        bundler.bundle().on('error', gutil.log.bind(gutil, 'Browserify Error')).pipe(source(options.outputFilename)).pipe(plumber()).pipe(gulpif(!options.development, streamify(uglify()))).pipe(gulp.dest(options.dest))
        // .pipe(browserSync.reload({
        //     stream: true
        // }))
            .pipe(notify(function() {
            console.log(options.outputFilename + ' bundle built in ' + (
            Date.now() - updateStart) + 'ms')
        }));
    }

    if (options.watch) {
        bundler = watchify(bundler)
        bundler.on('update', bundle)
    }

    bundle()
}

// 监听js
function jsTask() {
    jsFileArr.forEach(function(item, index) {
        let _arr = [];
        _arr.push(path.join(process.cwd(), 'bundles', item.fileName));
        _arr.push(path.join(process.cwd(), 'src', 'js', '**/*.js'));

        watch(_arr, function() {
            // 使用 jsFileTaskObj[item] 是为了处理监听事件会重复的BUG
            return browserifyTask({
                development: true,
                base: 'bundles/',
                entries: item.fileName,
                dest: 'dist' + '/js',
                outputFilename: item.fileName,
                watch: false
            })
        })

    })
}

// function jsTask (callback) {
//     browserifyTask({
//         development: true,
//         base: 'bundles/',
//         entries: '*.js',
//         dest: 'dist' + '/js',
//         outputFilename: '*.js',
//         watch: true
//     })
//     callback()
// }

function proxyTo(host, req, res) {
    let toUrl = ('http://' + host + req.url).replace(/(\/image\/)/, '/')

    console.log("[proxy url] " + toUrl)
    console.log("------------------------------------")
    let location = url.parse(toUrl)

    let options = {
        host: location.host,
        hostname: location.hostname,
        port: location.port,
        method: req.method,
        path: location.path,
        headers: req.headers,
        auth: location.auth
    };
    options.headers.host = location.host;

    if (req.headers.referer) {
        options.headers.referer = req.headers.referer.replace(/^(http:\/\/)?([^\/])+\//, "$1" + host + "/")
    }

    console.log("[proxy request]")
    console.log(options)
    console.log("------------------------------------")
    let clientRequest = http.request(options, function(clientResponse) {
        res.writeHead(clientResponse.statusCode, clientResponse.headers)
        clientResponse.pipe(res, {end: false})
        clientResponse.on("end", function() {
            res.addTrailers(clientResponse.trailers)
            res.end()
        })
    })
    req.pipe(plumber({
        errorHandler: function(error) {
            console.log(error)
        }
    })).pipe(clientRequest)

}

// 搭建本地服务器
gulp.task('browserSync', function(callback) {
    browserSync({
        browser: ["google chrome"], port: 15080, // nginx 占用了 15080 端口
        server: {
            baseDir: './',
            middleware: [
                require('compression')(),
                function(req, res, next) {
                    let urlObj = url.parse(req.url)

                    if (/^(\/)?\/hltrip_core\//i.test(urlObj.path)) {
                        proxyTo('hotel.rsscc.cn', req, res)
                    } else {
                        next()
                    }

                }
            ]
        }
    })
    callback()
})

gulp.task('dev', function() {
    function cb(task) {
        //console.log(task + " end !")
    }

    // css 文件编译
    lessTask(cb)

    // js 文件编译
    jsTask(cb)

    gulp.watch([path.join(process.cwd(), 'src', 'less', '*.less')], gulp.series(lessTask), browserSync.reload)

    setTimeout(function() {
        //open('http://localhost/' + argv.w + '/index.html')
        let openpage = gulp.series('browserSync')
        openpage()
    }, 10000) // 这里设置的时间比较长，是因为 ES6 转ES5 需要比较长时间

})

/* ----------------------------------------压缩项目，添加时间戳------------------------------------------------- */
// 编译需要的文件
gulp.task('compileJs', function(callback) {
    let bundleQueue = jsFileArr.length;

    let browserifyThis = function(options) {
        let startDate = Date.now()

        let bundler = browserify({
            entries: [options.base + options.entries],
            transform: [
                babelify.configure({presets: ["es2015"]})
            ],
            debug: true,
            cache: {},
            packageCache: {},
            fullPaths: true
        })

        let bundle = function() {
            return bundler.bundle().pipe(plumber()).pipe(source(options.outputName)).pipe(gulp.dest(options.dest)).on('end', reportFinished)
        };

        let reportFinished = function() {
            console.log(options.outputName + ' bundle built in ' + (
            Date.now() - startDate) + 'ms')
            if (bundleQueue) {
                bundleQueue--;
                if (bundleQueue === 0) {
                    callback()
                }
            }
            cg.next()
        };

        return bundle()
    };

    function* compileGenerator() {
        for (let i = 0; i < jsFileArr.length; i++) {
            let item = jsFileArr[i].fileName;

            yield browserifyThis({
                base: 'bundles/',
                entries: item,
                dest: 'dist' + '/js',
                outputName: item
            })
        }
    }

    let cg = compileGenerator()

    cg.next()
})

gulp.task('clean', function(cb) {
    return del([
        'dist/css/*', 'dist/js/*'
    ], cb)
})

// 压缩项目css文件
gulp.task('minifycss', function(callback) {
    return gulp.src('dist/css/*.css')
    // .pipe(autoprefixer({
    //     browsers: ['last 2 versions'],
    //     remove:true 是否去掉不必要的前缀 默认：true
    // }))
    .pipe(minifycss())
    //.pipe(rev())
    .pipe(gulp.dest(path.join(__dirname, 'build', 'css')))
    .on('finish', callback)
})

// 压缩项目js文件
gulp.task('uglifyJs', function(callback) {
    return gulp.src('dist/js/*.js')
    .pipe(rev())
    .pipe(uglify())
    .pipe(gulp.dest(path.join(__dirname, 'build', 'js')))
    .pipe(rev.manifest()). //- 生成一个rev-manifest.json
    pipe(gulp.dest('./rev')).on('finish', callback)
})

// 这部分处理专题
// 这里是gulp 执行的起点
gulp.task('build', gulp.series('clean', lessTask, 'compileJs', 'minifycss', 'uglifyJs'));
