(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/bundles/mobiscroll.common.js":[function(require,module,exports){
'use strict';

require('../src/js/i18n/ar');

require('../src/js/i18n/bg');

require('../src/js/i18n/ca');

require('../src/js/i18n/cs');

require('../src/js/i18n/da');

require('../src/js/i18n/de');

require('../src/js/i18n/el');

require('../src/js/i18n/en-UK');

require('../src/js/i18n/es');

require('../src/js/i18n/fa');

require('../src/js/i18n/fi');

require('../src/js/i18n/fr');

require('../src/js/i18n/he');

require('../src/js/i18n/hi');

require('../src/js/i18n/hr');

require('../src/js/i18n/hu');

require('../src/js/i18n/it');

require('../src/js/i18n/ja');

require('../src/js/i18n/ko');

require('../src/js/i18n/lt');

require('../src/js/i18n/nl');

require('../src/js/i18n/no');

require('../src/js/i18n/pl');

require('../src/js/i18n/pt-BR');

require('../src/js/i18n/pt-PT');

require('../src/js/i18n/ro');

require('../src/js/i18n/ru-UA');

require('../src/js/i18n/ru');

require('../src/js/i18n/sk');

require('../src/js/i18n/sr');

require('../src/js/i18n/sv');

require('../src/js/i18n/tr');

require('../src/js/i18n/vi');

require('../src/js/i18n/zh');

require('../src/js/themes/android-holo');

require('../src/js/themes/ios');

require('../src/js/themes/material');

require('../src/js/themes/wp');

require('../src/js/themes/android-holo-light');

require('../src/js/themes/ios-dark');

require('../src/js/themes/material-dark');

require('../src/js/themes/mobiscroll-dark');

require('../src/js/themes/wp-light');

require('../src/js/themes/auto-theme');

},{"../src/js/i18n/ar":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/ar.js","../src/js/i18n/bg":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/bg.js","../src/js/i18n/ca":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/ca.js","../src/js/i18n/cs":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/cs.js","../src/js/i18n/da":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/da.js","../src/js/i18n/de":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/de.js","../src/js/i18n/el":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/el.js","../src/js/i18n/en-UK":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/en-UK.js","../src/js/i18n/es":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/es.js","../src/js/i18n/fa":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/fa.js","../src/js/i18n/fi":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/fi.js","../src/js/i18n/fr":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/fr.js","../src/js/i18n/he":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/he.js","../src/js/i18n/hi":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/hi.js","../src/js/i18n/hr":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/hr.js","../src/js/i18n/hu":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/hu.js","../src/js/i18n/it":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/it.js","../src/js/i18n/ja":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/ja.js","../src/js/i18n/ko":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/ko.js","../src/js/i18n/lt":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/lt.js","../src/js/i18n/nl":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/nl.js","../src/js/i18n/no":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/no.js","../src/js/i18n/pl":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/pl.js","../src/js/i18n/pt-BR":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/pt-BR.js","../src/js/i18n/pt-PT":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/pt-PT.js","../src/js/i18n/ro":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/ro.js","../src/js/i18n/ru":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/ru.js","../src/js/i18n/ru-UA":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/ru-UA.js","../src/js/i18n/sk":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/sk.js","../src/js/i18n/sr":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/sr.js","../src/js/i18n/sv":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/sv.js","../src/js/i18n/tr":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/tr.js","../src/js/i18n/vi":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/vi.js","../src/js/i18n/zh":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/zh.js","../src/js/themes/android-holo":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/android-holo.js","../src/js/themes/android-holo-light":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/android-holo-light.js","../src/js/themes/auto-theme":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/auto-theme.js","../src/js/themes/ios":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/ios.js","../src/js/themes/ios-dark":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/ios-dark.js","../src/js/themes/material":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/material.js","../src/js/themes/material-dark":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/material-dark.js","../src/js/themes/mobiscroll-dark":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/mobiscroll-dark.js","../src/js/themes/wp":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/wp.js","../src/js/themes/wp-light":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/wp-light.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/bundles/mobiscroll.javascript.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _javascript = require('../src/js/frameworks/javascript');

var _javascript2 = _interopRequireDefault(_javascript);

require('../src/js/forms.javascript');

require('../src/js/page.javascript');

require('../src/js/scroller.javascript');

require('./mobiscroll.common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components
window.mobiscroll = _javascript2.default;

exports.default = _javascript2.default;

},{"../src/js/forms.javascript":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/forms.javascript.js","../src/js/frameworks/javascript":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/frameworks/javascript.js","../src/js/page.javascript":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/page.javascript.js","../src/js/scroller.javascript":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/scroller.javascript.js","./mobiscroll.common":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/bundles/mobiscroll.common.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/create.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/object/create.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/define-property.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/object/define-property.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/object/get-own-property-descriptor.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/get-prototype-of.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/object/get-prototype-of.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/keys.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/object/keys.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/set-prototype-of.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/object/set-prototype-of.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/promise.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/promise.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/symbol.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/symbol/index.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/symbol/iterator.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/symbol/iterator.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/classCallCheck.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/createClass.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/define-property.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/get.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _getPrototypeOf = require("../core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = require("../core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};
},{"../core-js/object/get-own-property-descriptor":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js","../core-js/object/get-prototype-of":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/get-prototype-of.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/inherits.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/create.js","../core-js/object/set-prototype-of":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/set-prototype-of.js","../helpers/typeof":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/typeof.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/possibleConstructorReturn.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/typeof.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/typeof.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/symbol.js","../core-js/symbol/iterator":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/symbol/iterator.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/object/create.js":[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

},{"../../modules/_core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.create":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.object.create.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/object/define-property.js":[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.define-property":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.object.define-property.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/object/get-own-property-descriptor.js":[function(require,module,exports){
require('../../modules/es6.object.get-own-property-descriptor');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};

},{"../../modules/_core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.get-own-property-descriptor":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/object/get-prototype-of.js":[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;

},{"../../modules/_core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.get-prototype-of":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.object.get-prototype-of.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/object/keys.js":[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;

},{"../../modules/_core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.keys":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.object.keys.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/object/set-prototype-of.js":[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;

},{"../../modules/_core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.set-prototype-of":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.object.set-prototype-of.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/promise.js":[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
require('../modules/es7.promise.finally');
require('../modules/es7.promise.try');
module.exports = require('../modules/_core').Promise;

},{"../modules/_core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_core.js","../modules/es6.object.to-string":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.object.to-string.js","../modules/es6.promise":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.promise.js","../modules/es6.string.iterator":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.string.iterator.js","../modules/es7.promise.finally":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es7.promise.finally.js","../modules/es7.promise.try":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es7.promise.try.js","../modules/web.dom.iterable":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/web.dom.iterable.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/symbol/index.js":[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;

},{"../../modules/_core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.to-string":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.object.to-string.js","../../modules/es6.symbol":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.symbol.js","../../modules/es7.symbol.async-iterator":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es7.symbol.async-iterator.js","../../modules/es7.symbol.observable":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es7.symbol.observable.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/fn/symbol/iterator.js":[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');

},{"../../modules/_wks-ext":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks-ext.js","../../modules/es6.string.iterator":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.string.iterator.js","../../modules/web.dom.iterable":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/web.dom.iterable.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_a-function.js":[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_add-to-unscopables.js":[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_an-instance.js":[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_an-object.js":[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_is-object.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_array-includes.js":[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-absolute-index.js","./_to-iobject":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-iobject.js","./_to-length":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-length.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_classof.js":[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_cof.js","./_wks":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_cof.js":[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_core.js":[function(require,module,exports){
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_ctx.js":[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_a-function.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_defined.js":[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_descriptors.js":[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_fails.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_dom-create.js":[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_global.js","./_is-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_is-object.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_enum-bug-keys.js":[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_enum-keys.js":[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-gops.js","./_object-keys":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-keys.js","./_object-pie":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-pie.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_export.js":[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_core.js","./_ctx":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_ctx.js","./_global":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_global.js","./_hide":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_hide.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_fails.js":[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_for-of.js":[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_an-object.js","./_ctx":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_ctx.js","./_is-array-iter":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_is-array-iter.js","./_iter-call":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iter-call.js","./_to-length":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-length.js","./core.get-iterator-method":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/core.get-iterator-method.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_global.js":[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_has.js":[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_hide.js":[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_descriptors.js","./_object-dp":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-dp.js","./_property-desc":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_property-desc.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_html.js":[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_global.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_ie8-dom-define.js":[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_descriptors.js","./_dom-create":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_dom-create.js","./_fails":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_fails.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_invoke.js":[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iobject.js":[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_cof.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_is-array-iter.js":[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iterators.js","./_wks":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_is-array.js":[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_cof.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_is-object.js":[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iter-call.js":[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_an-object.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iter-create.js":[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_hide.js","./_object-create":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-create.js","./_property-desc":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_property-desc.js","./_set-to-string-tag":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_set-to-string-tag.js","./_wks":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iter-define.js":[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var has = require('./_has');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_export.js","./_has":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_has.js","./_hide":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_hide.js","./_iter-create":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iter-create.js","./_iterators":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iterators.js","./_library":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_library.js","./_object-gpo":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-gpo.js","./_redefine":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_redefine.js","./_set-to-string-tag":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_set-to-string-tag.js","./_wks":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iter-detect.js":[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iter-step.js":[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iterators.js":[function(require,module,exports){
module.exports = {};

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_library.js":[function(require,module,exports){
module.exports = true;

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_meta.js":[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_fails.js","./_has":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_has.js","./_is-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_is-object.js","./_object-dp":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-dp.js","./_uid":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_uid.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_microtask.js":[function(require,module,exports){
var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_cof":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_cof.js","./_global":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_global.js","./_task":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_task.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_new-promise-capability.js":[function(require,module,exports){
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_a-function.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-create.js":[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_an-object.js","./_dom-create":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_dom-create.js","./_enum-bug-keys":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_enum-bug-keys.js","./_html":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_html.js","./_object-dps":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-dps.js","./_shared-key":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_shared-key.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-dp.js":[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_an-object.js","./_descriptors":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_descriptors.js","./_ie8-dom-define":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_ie8-dom-define.js","./_to-primitive":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-primitive.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-dps.js":[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_an-object.js","./_descriptors":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_descriptors.js","./_object-dp":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-dp.js","./_object-keys":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-keys.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-gopd.js":[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_descriptors.js","./_has":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_has.js","./_ie8-dom-define":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_ie8-dom-define.js","./_object-pie":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-pie.js","./_property-desc":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_property-desc.js","./_to-iobject":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-iobject.js","./_to-primitive":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-primitive.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-gopn-ext.js":[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-gopn.js","./_to-iobject":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-iobject.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-gopn.js":[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_enum-bug-keys.js","./_object-keys-internal":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-keys-internal.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-gops.js":[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-gpo.js":[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_has.js","./_shared-key":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_shared-key.js","./_to-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-object.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-keys-internal.js":[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_array-includes.js","./_has":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_has.js","./_shared-key":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_shared-key.js","./_to-iobject":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-iobject.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-keys.js":[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_enum-bug-keys.js","./_object-keys-internal":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-keys-internal.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-pie.js":[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-sap.js":[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_core.js","./_export":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_export.js","./_fails":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_fails.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_perform.js":[function(require,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_promise-resolve.js":[function(require,module,exports){
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_an-object.js","./_is-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_is-object.js","./_new-promise-capability":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_new-promise-capability.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_property-desc.js":[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_redefine-all.js":[function(require,module,exports){
var hide = require('./_hide');
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

},{"./_hide":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_hide.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_redefine.js":[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_hide.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_set-proto.js":[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_an-object.js","./_ctx":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_ctx.js","./_is-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_is-object.js","./_object-gopd":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-gopd.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_set-species.js":[function(require,module,exports){
'use strict';
var global = require('./_global');
var core = require('./_core');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_core.js","./_descriptors":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_descriptors.js","./_global":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_global.js","./_object-dp":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-dp.js","./_wks":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_set-to-string-tag.js":[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_has.js","./_object-dp":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-dp.js","./_wks":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_shared-key.js":[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_shared.js","./_uid":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_uid.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_shared.js":[function(require,module,exports){
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

},{"./_global":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_global.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_species-constructor.js":[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_a-function":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_a-function.js","./_an-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_an-object.js","./_wks":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_string-at.js":[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_defined.js","./_to-integer":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-integer.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_task.js":[function(require,module,exports){
var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_cof":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_cof.js","./_ctx":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_ctx.js","./_dom-create":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_dom-create.js","./_global":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_global.js","./_html":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_html.js","./_invoke":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_invoke.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-absolute-index.js":[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-integer.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-integer.js":[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-iobject.js":[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_defined.js","./_iobject":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iobject.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-length.js":[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-integer.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-object.js":[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_defined.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-primitive.js":[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_is-object.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_uid.js":[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks-define.js":[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_core.js","./_global":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_global.js","./_library":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_library.js","./_object-dp":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-dp.js","./_wks-ext":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks-ext.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks-ext.js":[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks.js":[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_global.js","./_shared":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_shared.js","./_uid":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_uid.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/core.get-iterator-method.js":[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_classof.js","./_core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_core.js","./_iterators":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iterators.js","./_wks":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.array.iterator.js":[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_add-to-unscopables.js","./_iter-define":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iter-define.js","./_iter-step":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iter-step.js","./_iterators":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iterators.js","./_to-iobject":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-iobject.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.object.create.js":[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_export.js","./_object-create":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-create.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.object.define-property.js":[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_descriptors.js","./_export":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_export.js","./_object-dp":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-dp.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_object-gopd":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-gopd.js","./_object-sap":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-sap.js","./_to-iobject":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-iobject.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.object.get-prototype-of.js":[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-gpo.js","./_object-sap":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-sap.js","./_to-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-object.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.object.keys.js":[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-keys.js","./_object-sap":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-sap.js","./_to-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-object.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.object.set-prototype-of.js":[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_export.js","./_set-proto":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_set-proto.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.object.to-string.js":[function(require,module,exports){

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.promise.js":[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_a-function":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_a-function.js","./_an-instance":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_an-instance.js","./_classof":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_classof.js","./_core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_core.js","./_ctx":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_ctx.js","./_export":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_export.js","./_for-of":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_for-of.js","./_global":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_global.js","./_is-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_is-object.js","./_iter-detect":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iter-detect.js","./_library":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_library.js","./_microtask":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_microtask.js","./_new-promise-capability":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_new-promise-capability.js","./_perform":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_perform.js","./_promise-resolve":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_promise-resolve.js","./_redefine-all":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_redefine-all.js","./_set-species":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_set-species.js","./_set-to-string-tag":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_set-to-string-tag.js","./_species-constructor":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_species-constructor.js","./_task":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_task.js","./_wks":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.string.iterator.js":[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iter-define.js","./_string-at":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_string-at.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.symbol.js":[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_an-object.js","./_descriptors":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_descriptors.js","./_enum-keys":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_enum-keys.js","./_export":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_export.js","./_fails":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_fails.js","./_global":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_global.js","./_has":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_has.js","./_hide":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_hide.js","./_is-array":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_is-array.js","./_library":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_library.js","./_meta":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_meta.js","./_object-create":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-create.js","./_object-dp":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-dp.js","./_object-gopd":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-gopd.js","./_object-gopn":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-gopn.js","./_object-gopn-ext":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-gopn-ext.js","./_object-gops":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-gops.js","./_object-keys":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-keys.js","./_object-pie":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_object-pie.js","./_property-desc":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_property-desc.js","./_redefine":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_redefine.js","./_set-to-string-tag":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_set-to-string-tag.js","./_shared":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_shared.js","./_to-iobject":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-iobject.js","./_to-primitive":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_to-primitive.js","./_uid":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_uid.js","./_wks":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks.js","./_wks-define":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks-define.js","./_wks-ext":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks-ext.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es7.promise.finally.js":[function(require,module,exports){
// https://github.com/tc39/proposal-promise-finally
'use strict';
var $export = require('./_export');
var core = require('./_core');
var global = require('./_global');
var speciesConstructor = require('./_species-constructor');
var promiseResolve = require('./_promise-resolve');

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

},{"./_core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_core.js","./_export":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_export.js","./_global":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_global.js","./_promise-resolve":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_promise-resolve.js","./_species-constructor":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_species-constructor.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es7.promise.try.js":[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-promise-try
var $export = require('./_export');
var newPromiseCapability = require('./_new-promise-capability');
var perform = require('./_perform');

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

},{"./_export":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_export.js","./_new-promise-capability":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_new-promise-capability.js","./_perform":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_perform.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks-define.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es7.symbol.observable.js":[function(require,module,exports){
require('./_wks-define')('observable');

},{"./_wks-define":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks-define.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/web.dom.iterable.js":[function(require,module,exports){
require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./_global":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_global.js","./_hide":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_hide.js","./_iterators":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_iterators.js","./_wks":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/_wks.js","./es6.array.iterator":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/core-js/library/modules/es6.array.iterator.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/button.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _formControl = require('./form-control');

var _formControl2 = _interopRequireDefault(_formControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_FormControl) {
    (0, _inherits3.default)(Button, _FormControl);

    function Button(elm, settings) {
        (0, _classCallCheck3.default)(this, Button);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call(this, elm, settings));

        var $elm = _this._$elm;
        var hasIcon = $elm.attr('data-icon');

        $elm.addClass('mbsc-btn').find('.mbsc-btn-ic').remove();

        if (hasIcon) {
            $elm.prepend('<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' + hasIcon + '"></span>');
            if ($elm.text() === "") {
                $elm.addClass('mbsc-btn-icon-only');
            }
        }

        _this._$rippleElm = $elm;
        return _this;
    }

    return Button;
}(_formControl2.default);

exports.default = Button;

},{"./form-control":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/form-control.js","babel-runtime/core-js/object/get-prototype-of":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/inherits":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/checkbox.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _formControl = require('./form-control');

var _formControl2 = _interopRequireDefault(_formControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckBox = function (_FormControl) {
    (0, _inherits3.default)(CheckBox, _FormControl);

    function CheckBox(elm, settings) {
        (0, _classCallCheck3.default)(this, CheckBox);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CheckBox.__proto__ || (0, _getPrototypeOf2.default)(CheckBox)).call(this, elm, settings));

        _this._$parent.prepend(_this._$elm).addClass('mbsc-checkbox mbsc-control-w').find('.mbsc-checkbox-box').remove();

        _this._$elm.after('<span class="mbsc-checkbox-box"></span>');
        return _this;
    }

    return CheckBox;
}(_formControl2.default);

exports.default = CheckBox;

},{"./form-control":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/form-control.js","babel-runtime/core-js/object/get-prototype-of":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/inherits":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/form-control.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getControlType = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

var _forms = require('../util/forms');

var _tap = require('../util/tap');

var _dom = require('../util/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var events = ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'mousedown', 'mousemove', 'mouseup', 'mouseleave'];
var defaults = {
    tap: true
};

var $active = void 0;

function getControlType($elm) {
    var elm = $elm[0];
    var role = $elm.attr('data-role');

    var type = $elm.attr('type') || elm.nodeName.toLowerCase();

    if (/(switch|range|segmented|stepper)/.test(role)) {
        type = role;
    }

    return type;
}

function getRipple(theme) {
    var ripple = _core2.default.themes.form[theme];
    return ripple && ripple.addRipple ? ripple : null;
}

var FormControl = function () {
    function FormControl(elm, settings) {
        var _this = this;

        (0, _classCallCheck3.default)(this, FormControl);


        var s = (0, _core.extend)({}, defaults, _core2.default.settings, settings);
        var $elm = (0, _core.$)(elm);
        var $p = $elm.parent();
        var $parent = $p.hasClass('mbsc-input-wrap') ? $p.parent() : $p;
        // Check for inline mobiscroll components
        var $frame = $elm.next().hasClass('mbsc-fr') ? $elm.next() : null;
        var type = getControlType($elm);

        if ($frame) {
            $frame.insertAfter($parent);
        }

        (0, _forms.wrapLabel)($parent, type);

        $elm.addClass('mbsc-control');

        // Attach events
        // Prevent 300ms click latency
        events.forEach(function (ev) {
            elm.addEventListener(ev, _this);
        });

        this.settings = s;

        this._type = type;
        this._elm = elm;
        this._$elm = $elm;
        this._$parent = $parent;
        this._$frame = $frame;
        this._ripple = getRipple(s.theme);
    }

    (0, _createClass3.default)(FormControl, [{
        key: 'destroy',
        value: function destroy() {
            var _this2 = this;

            this._$elm.removeClass('mbsc-control');
            events.forEach(function (ev) {
                _this2._elm.removeEventListener(ev, _this2);
            });
        }
    }, {
        key: 'option',
        value: function option(s) {
            (0, _core.extend)(this.settings, s);
            this._ripple = getRipple(this.settings.theme);
        }
    }, {
        key: 'handleEvent',
        value: function handleEvent(ev) {
            switch (ev.type) {
                case 'touchstart':
                case 'mousedown':
                    this._onStart(ev);
                    break;
                case 'touchmove':
                case 'mousemove':
                    this._onMove(ev);
                    break;
                case 'touchend':
                case 'touchcancel':
                case 'mouseup':
                case 'mouseleave':
                    this._onEnd(ev);
            }
        }
    }, {
        key: '_addRipple',
        value: function _addRipple(ev) {
            if (this._ripple && this._$rippleElm) {
                this._ripple.addRipple(this._$rippleElm, ev);
            }
        }
    }, {
        key: '_removeRipple',
        value: function _removeRipple() {
            if (this._ripple && this._$rippleElm) {
                this._ripple.removeRipple();
            }
        }
    }, {
        key: '_onStart',
        value: function _onStart(ev) {
            var elm = this._elm;

            if ((0, _dom.testTouch)(ev, elm)) {
                this._startX = (0, _tap.getCoord)(ev, 'X');
                this._startY = (0, _tap.getCoord)(ev, 'Y');

                if ($active) {
                    $active.removeClass('mbsc-active');
                }

                if (!elm.disabled) {
                    this._isActive = true;
                    $active = this._$elm;
                    $active.addClass('mbsc-active');
                    this._addRipple(ev);
                    // trigger('onControlActivate', {
                    //     target: this,
                    //     domEvent: ev
                    // });
                }
            }
        }
    }, {
        key: '_onMove',
        value: function _onMove(ev) {
            // If movement is more than 9px, don't fire the click event handler
            if (this._isActive && Math.abs((0, _tap.getCoord)(ev, 'X') - this._startX) > 9 || Math.abs((0, _tap.getCoord)(ev, 'Y') - this._startY) > 9) {
                this._$elm.removeClass('mbsc-active');
                // trigger('onControlDeactivate', {
                //     target: $control[0],
                //     domEvent: ev
                // });
                this._removeRipple();
                this._isActive = false;
            }
        }
    }, {
        key: '_onEnd',
        value: function _onEnd(ev) {
            var _this3 = this;

            var control = this._elm;
            var type = this._type;

            if (this._isActive && this.settings.tap && ev.type == 'touchend' && !control.readOnly) {
                control.focus();

                if (/(button|submit|checkbox|switch|radio)/.test(type)) {
                    ev.preventDefault();
                }

                if (!/select/.test(type)) {
                    var touch = (ev.originalEvent || ev).changedTouches[0],
                        evt = document.createEvent('MouseEvents');

                    evt.initMouseEvent('click', true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
                    evt.tap = true;

                    control.mbscChange = true;

                    control.dispatchEvent(evt);

                    // Prevent ghost click
                    (0, _tap.preventClick)();
                }
            }

            if (this._isActive) {
                setTimeout(function () {
                    _this3._$elm.removeClass('mbsc-active');
                    _this3._removeRipple();
                    // trigger('onControlDeactivate', {
                    //     target: $control[0],
                    //     domEvent: ev
                    // });
                }, 100);
            }

            this._isActive = false;

            $active = null;
        }
    }]);
    return FormControl;
}();

exports.default = FormControl;
exports.getControlType = getControlType;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","../util/dom":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/dom.js","../util/forms":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/forms.js","../util/tap":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/tap.js","babel-runtime/helpers/classCallCheck":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/forms.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

var _platform = require('../util/platform');

require('./page');

require('../util/notifications');

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

var _select = require('./select');

var _select2 = _interopRequireDefault(_select);

var _textarea = require('./textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _segmented = require('./segmented');

var _segmented2 = _interopRequireDefault(_segmented);

var _stepper = require('./stepper');

var _stepper2 = _interopRequireDefault(_stepper);

var _switch = require('./switch');

var _switch2 = _interopRequireDefault(_switch);

var _progress = require('./progress');

var _progress2 = _interopRequireDefault(_progress);

var _slider = require('./slider');

var _slider2 = _interopRequireDefault(_slider);

var _formControl = require('./form-control');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = 0;

var halfBorder = _platform.os == 'ios' && _platform.majorVersion > 7;
var instances = _core2.default.instances;

var Form = function Form(el, settings) {

    var s,
        cssClass = '',
        $ctx = (0, _core.$)(el),
        controls = {},
        that = this;

    function touched() {
        $ctx.removeClass('mbsc-no-touch');
    }

    // Call the parent constructor
    _core.Base.call(this, el, settings, true);

    /* TRIALFUNC */

    that.refresh = function (shallow) {
        (0, _core.$)('input,select,textarea,progress,button', $ctx).each(function () {
            var inst,
                control = this,
                $control = (0, _core.$)(control),

            //$parent = $control.parent(),
            type = (0, _formControl.getControlType)($control);

            /* TRIAL */

            // Skip elements with data-enhance="false"
            if ($control.attr('data-enhance') != 'false' /* TRIALCOND */) {

                    if ($control.hasClass('mbsc-control')) {
                        inst = instances[control.id] || controls[control.id];
                        if (inst && inst.option) {
                            inst.option({
                                theme: s.theme,
                                lang: s.lang,
                                rtl: s.rtl,
                                onText: s.onText,
                                offText: s.offText,
                                stopProp: s.stopProp
                            });
                        }
                    } else {

                        if (!control.id) {
                            control.id = 'mbsc-form-control-' + ++id;
                        }

                        switch (type) {
                            case 'button':
                            case 'submit':
                                controls[control.id] = new _button2.default(control, {
                                    theme: s.theme,
                                    tap: s.tap
                                });
                                break;
                            case 'switch':
                                controls[control.id] = new _switch2.default(control, {
                                    theme: s.theme,
                                    lang: s.lang,
                                    rtl: s.rtl,
                                    tap: s.tap,
                                    onText: s.onText,
                                    offText: s.offText,
                                    stopProp: s.stopProp
                                });
                                break;
                            case 'checkbox':
                                controls[control.id] = new _checkbox2.default(control, {
                                    tap: s.tap
                                });
                                break;
                            case 'range':
                                if (!(0, _core.$)(control).parent().hasClass('mbsc-slider')) {
                                    controls[control.id] = new _slider2.default(control, {
                                        theme: s.theme,
                                        lang: s.lang,
                                        rtl: s.rtl,
                                        stopProp: s.stopProp
                                    });
                                }
                                break;
                            case 'progress':
                                controls[control.id] = new _progress2.default(control, {
                                    theme: s.theme,
                                    lang: s.lang,
                                    rtl: s.rtl
                                });
                                break;
                            case 'radio':
                                controls[control.id] = new _radio2.default(control, {
                                    tap: s.tap
                                });
                                break;
                            case 'select':
                            case 'select-one':
                            case 'select-multiple':
                                controls[control.id] = new _select2.default(control, {
                                    tap: s.tap
                                });
                                break;
                            case 'textarea':
                                controls[control.id] = new _textarea2.default(control, {
                                    tap: s.tap
                                });
                                break;
                            case 'segmented':
                                controls[control.id] = new _segmented2.default(control, {
                                    theme: s.theme,
                                    tap: s.tap
                                });
                                break;
                            case 'stepper':
                                controls[control.id] = new _stepper2.default(control, {
                                    theme: s.theme
                                });
                                break;
                            case 'hidden':
                                return;
                            default:
                                controls[control.id] = new _input2.default(control, {
                                    tap: s.tap
                                });
                                break;
                        }
                    }
                }
        });

        // Set initial height for textareas
        if (!shallow) {
            (0, _textarea.sizeTextAreas)();
        }
    };

    /**
     * Form initialization.
     */
    that._init = function () {
        if (!_core2.default.themes.form[s.theme]) {
            s.theme = 'mobiscroll';
        }

        if (!$ctx.hasClass('mbsc-form')) {
            $ctx.on('touchstart', touched).show();
        }

        if (cssClass) {
            $ctx.removeClass(cssClass);
        }

        // --- TRIAL SERVER CODE START ---
        cssClass = 'mbsc-form mbsc-no-touch mbsc-' + s.theme + (halfBorder ? ' mbsc-form-hb' : '') + (s.baseTheme ? ' mbsc-' + s.baseTheme : '') + (s.rtl ? ' mbsc-rtl' : ' mbsc-ltr');
        // --- TRIAL SERVER CODE END ---

        $ctx.addClass(cssClass);

        that.refresh();
    };

    /**
     * Destroys the mobiscroll instance.
     */
    that._destroy = function () {
        $ctx.removeClass(cssClass).off('touchstart', touched);

        for (var id in controls) {
            controls[id].destroy();
        }
    };

    // Constructor

    s = that.settings;

    that.init(settings);
};

// Extend defaults
Form.prototype = {
    _hasDef: true,
    _hasTheme: true,
    _hasLang: true,
    _class: 'form',
    _defaults: {
        tap: true,
        stopProp: true,
        // Localization
        lang: 'en'
    }
};

_core2.default.themes.form.mobiscroll = {};

_core2.default.classes.Form = Form;

_core2.default.presetShort('form', 'Form');

// Init mbsc-enhance elements on page load
// ---

if (_core.isBrowser) {
    (0, _core.$)(function () {

        var selector = '[mbsc-enhance],[mbsc-form]';

        (0, _core.$)(selector).each(function () {
            new Form(this);
        });

        (0, _core.$)(document).on('mbsc-enhance', function (ev, settings) {
            if ((0, _core.$)(ev.target).is(selector)) {
                new Form(ev.target, settings);
            } else {
                (0, _core.$)(selector, ev.target).each(function () {
                    new Form(this, settings);
                });
            }
        });

        (0, _core.$)(document).on('mbsc-refresh', function (ev) {
            var inst;

            if ((0, _core.$)(ev.target).is(selector)) {
                inst = instances[ev.target.id];
                if (inst) {
                    inst.refresh();
                }
            } else {
                (0, _core.$)(selector, ev.target).each(function () {
                    inst = instances[this.id];
                    if (inst) {
                        inst.refresh();
                    }
                });
            }
        });
    });
}

// ---
// Init end

exports.default = Form;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","../util/notifications":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/notifications.js","../util/platform":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/platform.js","./button":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/button.js","./checkbox":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/checkbox.js","./form-control":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/form-control.js","./input":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/input.js","./page":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/page.js","./progress":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/progress.js","./radio":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/radio.js","./segmented":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/segmented.js","./select":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/select.js","./slider":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/slider.js","./stepper":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/stepper.js","./switch":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/switch.js","./textarea":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/textarea.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/frame.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

var _platform = require('../util/platform');

var _dom = require('../util/dom');

var _tap = require('../util/tap');

var _misc = require('../util/misc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $activeElm,
    preventShow,
    classes = _core2.default.classes,
    themes = _core2.default.themes,
    needsFixed = /(iphone|ipod)/i.test(_platform.userAgent) && _platform.majorVersion >= 7,
    isAndroid = _platform.os == 'android',
    isIOS = _platform.os == 'ios',
    isIOS8 = isIOS && _platform.majorVersion == 8,
    halfBorder = isIOS && _platform.majorVersion > 7,
    prevdef = function prevdef(ev) {
    ev.preventDefault();
};

var Frame = function Frame(el, settings, inherit) {
    var $ariaDiv,
        $ctx,
        $header,
        $lock,
        $markup,
        $overlay,
        $persp,
        $popup,
        $wnd,
        $wrapper,
        buttons,
        btn,
        ctx,
        doAnim,
        hasContext,
        isModal,
        isInserted,
        markup,
        modalWidth,
        modalHeight,
        needsDimensions,
        needsLock,
        overlay,
        popup,
        posEvents,
        preventPos,
        s,
        scrollLeft,
        scrollLock,
        scrollTop,
        touched,
        trigger,
        wndWidth,
        wndHeight,
        that = this,
        $elm = (0, _core.$)(el),
        elmList = [],
        posDebounce = {};

    function onBtnStart(ev) {
        // Can't call preventDefault here, it kills page scroll
        if (btn) {
            btn.removeClass('mbsc-fr-btn-a');
        }

        btn = (0, _core.$)(this);

        // Active button
        if (!btn.hasClass('mbsc-fr-btn-d') && !btn.hasClass('mbsc-fr-btn-nhl')) {
            btn.addClass('mbsc-fr-btn-a');
        }

        if (ev.type === 'mousedown') {
            (0, _core.$)(document).on('mouseup', onBtnEnd);
        } else if (ev.type === 'pointerdown') {
            (0, _core.$)(document).on('pointerup', onBtnEnd);
        }
    }

    function onBtnEnd(ev) {
        if (btn) {
            btn.removeClass('mbsc-fr-btn-a');
            btn = null;
        }

        if (ev.type === 'mouseup') {
            (0, _core.$)(document).off('mouseup', onBtnEnd);
        } else if (ev.type === 'pointerup') {
            (0, _core.$)(document).off('pointerup', onBtnEnd);
        }
    }

    function onWndKeyDown(ev) {
        if (ev.keyCode == 13) {
            that.select();
        } else if (ev.keyCode == 27) {
            that.cancel();
        }
    }

    function onShow(prevFocus) {
        if (!prevFocus && !isAndroid) {
            overlay.focus();
        }
        that.ariaMessage(s.ariaMessage);
    }

    function onHide(prevAnim) {
        var $activeEl = $activeElm,
            focus = s.focusOnClose;

        that._markupRemove();

        $markup.remove();

        if (isModal) {
            ctx.mbscModals--;

            if (s.scrollLock) {
                ctx.mbscLock--;
            }

            if (!ctx.mbscLock) {
                $lock.removeClass('mbsc-fr-lock');
            }

            // The follwing should be done only if no other
            // instance was opened during the hide animation
            if (!ctx.mbscModals) {
                $lock.removeClass('mbsc-fr-lock-ios mbsc-fr-lock-ctx');
                if (needsLock) {
                    $ctx.css({
                        top: '',
                        left: ''
                    });
                    $wnd.scrollLeft(scrollLeft);
                    $wnd.scrollTop(scrollTop);
                }
                // Put focus back to the last active element
                if (!prevAnim) {
                    if (!$activeEl) {
                        $activeEl = $elm;
                    }
                    setTimeout(function () {
                        if (focus === undefined || focus === true) {
                            preventShow = true;
                            $activeEl[0].focus();
                        } else if (focus) {
                            (0, _core.$)(focus)[0].focus();
                        }
                    }, 200);
                }
            }
        }

        that._isVisible = false;

        isInserted = false;

        trigger('onHide');
    }

    function onPosition(ev) {
        clearTimeout(posDebounce[ev.type]);
        posDebounce[ev.type] = setTimeout(function () {
            var h,
                isScroll = ev.type == 'scroll';

            if (isScroll && !scrollLock) {
                return;
            }

            that.position(!isScroll);

            if (ev.type == 'orientationchange') {
                // Trigger reflow
                popup.style.display = 'none';
                h = popup.offsetHeight;
                popup.style.display = '';
            }
        }, 200);
    }

    function onFocus(ev) {
        if (ev.target.nodeType && !overlay.contains(ev.target)) {
            overlay.focus();
        }
    }

    function show(beforeShow, $elm) {
        if (beforeShow) {
            beforeShow();
        }

        if (that.show() !== false) {
            $activeElm = $elm;
        }
    }

    function set() {
        that._fillValue();
        trigger('onSet', {
            valueText: that._value
        });
    }

    function cancel() {
        trigger('onCancel', {
            valueText: that._value
        });
    }

    function clear() {
        that.setVal(null, true);
    }

    // Call the parent constructor
    _core.Base.call(this, el, settings, true);

    /**
     * Positions the scroller on the screen.
     */
    that.position = function (check) {
        var anchor,
            anchorWidth,
            anchorHeight,
            anchorPos,
            anchorTop,
            anchorLeft,
            arrow,
            arrowWidth,
            arrowHeight,
            docHeight,
            docWidth,
            newHeight,
            newWidth,
            width,
            top,
            left,
            css = {},
            scrollLeft = 0,
            scrollTop = 0,
            minWidth = 0,
            totalWidth = 0;

        if (preventPos || !isInserted) {
            return;
        }

        that._position($markup);

        newHeight = markup.offsetHeight;
        newWidth = markup.offsetWidth;

        if (wndWidth === newWidth && wndHeight === newHeight && check) {
            return;
        }

        if (that._isFullScreen || /top|bottom/.test(s.display)) {
            // Set width, if document is larger than viewport, needs to be set before onPosition (for calendar)
            $popup.width(newWidth);
        } else {
            // Reset width
            $wrapper.width('');
        }

        if (trigger('onPosition', {
            target: markup,
            windowWidth: newWidth,
            windowHeight: newHeight
        }) === false || !isModal) {
            return;
        }

        // Set / unset liquid layout based on screen width, but only if not set explicitly by the user
        // if (that._isLiquid && s.layout !== 'liquid') {
        //     if (newWidth < 415) {
        //         $markup.addClass('mbsc-fr-liq');
        //     } else {
        //         $markup.removeClass('mbsc-fr-liq');
        //     }
        // }

        // Call position for nested mobiscroll components
        (0, _core.$)('.mbsc-comp', $markup).each(function () {
            var inst = _core2.default.instances[this.id];
            if (inst && inst !== that && inst.position) {
                inst.position();
            }
        });

        if (!that._isFullScreen && /center|bubble/.test(s.display)) {
            (0, _core.$)('.mbsc-w-p', $markup).each(function () {
                // Need fractional values here, so offsetWidth is not ok
                width = this.getBoundingClientRect().width;
                totalWidth += width;
                minWidth = width > minWidth ? width : minWidth;
            });

            $wrapper.css({
                'width': that._isLiquid ? Math.min(s.maxPopupWidth, newWidth - 16) : Math.ceil(totalWidth > newWidth ? minWidth : totalWidth),
                'white-space': totalWidth > newWidth ? '' : 'nowrap'
            });
        }

        modalWidth = popup.offsetWidth;
        modalHeight = popup.offsetHeight;

        scrollLock = modalHeight <= newHeight && modalWidth <= newWidth;

        if (needsDimensions) {
            scrollLeft = $wnd.scrollLeft();
            scrollTop = $wnd.scrollTop();
        }

        if (s.display == 'center') {
            left = Math.max(0, scrollLeft + (newWidth - modalWidth) / 2);
            top = Math.max(0, scrollTop + (newHeight - modalHeight) / 2);
        } else if (s.display == 'bubble') {
            anchor = s.anchor === undefined ? $elm : (0, _core.$)(s.anchor);

            arrow = (0, _core.$)('.mbsc-fr-arr-i', $markup)[0];
            anchorPos = anchor.offset();
            anchorTop = anchorPos.top + (hasContext ? scrollTop - $ctx.offset().top : 0);
            anchorLeft = anchorPos.left + (hasContext ? scrollLeft - $ctx.offset().left : 0);

            anchorWidth = anchor[0].offsetWidth;
            anchorHeight = anchor[0].offsetHeight;

            arrowWidth = arrow.offsetWidth;
            arrowHeight = arrow.offsetHeight;

            // Horizontal positioning
            left = (0, _misc.constrain)(anchorLeft - (modalWidth - anchorWidth) / 2, scrollLeft + 8, scrollLeft + newWidth - modalWidth - 8);

            // Vertical positioning
            // Above the input
            top = anchorTop - modalHeight - arrowHeight / 2;
            // If doesn't fit above or the input is out of the screen
            if (top < scrollTop || anchorTop > scrollTop + newHeight) {
                $popup.removeClass('mbsc-fr-bubble-top').addClass('mbsc-fr-bubble-bottom');
                // Below the input
                top = anchorTop + anchorHeight + arrowHeight / 2;
            } else {
                $popup.removeClass('mbsc-fr-bubble-bottom').addClass('mbsc-fr-bubble-top');
            }

            // Set arrow position
            (0, _core.$)('.mbsc-fr-arr', $markup).css({
                left: (0, _misc.constrain)(anchorLeft + anchorWidth / 2 - (left + (modalWidth - arrowWidth) / 2), 0, arrowWidth)
            });

            // Lock scroll only if popup is entirely in the viewport
            scrollLock = top > scrollTop && left > scrollLeft && top + modalHeight <= scrollTop + newHeight && left + modalWidth <= scrollLeft + newWidth;
        } else {
            left = scrollLeft;
            top = s.display == 'top' ? scrollTop : Math.max(0, scrollTop + newHeight - modalHeight);
        }

        if (needsDimensions) {
            // If top + modal height > doc height, increase doc height
            docHeight = Math.max(top + modalHeight, hasContext ? ctx.scrollHeight : (0, _core.$)(document).height());
            docWidth = Math.max(left + modalWidth, hasContext ? ctx.scrollWidth : (0, _core.$)(document).width());
            $persp.css({
                width: docWidth,
                height: docHeight
            });

            // Check if scroll needed
            if (s.scroll && s.display == 'bubble' && (top + modalHeight + 8 > scrollTop + newHeight || anchorTop > scrollTop + newHeight || anchorTop + anchorHeight < scrollTop)) {
                preventPos = true;
                setTimeout(function () {
                    preventPos = false;
                }, 300);
                $wnd.scrollTop(Math.min(anchorTop, top + modalHeight - newHeight + 8, docHeight - newHeight));
            }
        }

        css.top = Math.floor(top);
        css.left = Math.floor(left);

        $popup.css(css);

        wndWidth = newWidth;
        wndHeight = newHeight;
    };

    /**
     * Show mobiscroll on focus and click event of the parameter.
     * @param {HTMLElement} elm - Events will be attached to this element.
     * @param {Function} [beforeShow=undefined] - Optional function to execute before showing mobiscroll.
     */
    that.attachShow = function (elm, beforeShow) {
        var $label,
            $elm = (0, _core.$)(elm),
            readOnly = $elm.prop('readonly');

        if (s.display !== 'inline') {
            if ((s.showOnFocus || s.showOnTap) && $elm.is('input,select')) {
                $elm.prop('readonly', true).on('mousedown.mbsc', function (ev) {
                    // Prevent input to get focus on tap (virtual keyboard pops up on some devices)
                    ev.preventDefault();
                }).on('focus.mbsc', function () {
                    if (that._isVisible) {
                        // Don't allow input focus if mobiscroll is being opened
                        this.blur();
                    }
                });

                $label = (0, _core.$)('label[for="' + $elm.attr('id') + '"]');

                if (!$label.length) {
                    $label = $elm.closest('label');
                }
            }

            if ($elm.is('select')) {
                return;
            }

            if (s.showOnFocus) {
                $elm.on('focus.mbsc', function () {
                    if (!preventShow) {
                        show(beforeShow, $elm);
                    } else {
                        preventShow = false;
                    }
                });
            }

            if (s.showOnTap) {
                $elm.on('keydown.mbsc', function (ev) {
                    if (ev.keyCode == 32 || ev.keyCode == 13) {
                        // Space or Enter
                        ev.preventDefault();
                        ev.stopPropagation();
                        show(beforeShow, $elm);
                    }
                });

                that.tap($elm, function () {
                    show(beforeShow, $elm);
                });

                if ($label && $label.length) {
                    that.tap($label, function () {
                        show(beforeShow, $elm);
                    });
                }
            }

            elmList.push({
                readOnly: readOnly,
                el: $elm,
                lbl: $label
            });
        }
    };

    /**
     * Set button handler.
     */
    that.select = function () {
        if (isModal) {
            that.hide(false, 'set', false, set);
        } else {
            set();
        }
    };

    /**
     * Cancel and hide the scroller instance.
     */
    that.cancel = function () {
        if (isModal) {
            that.hide(false, 'cancel', false, cancel);
        } else {
            cancel();
        }
    };

    /**
     * Clear button handler.
     */
    that.clear = function () {
        that._clearValue();
        trigger('onClear');
        if (isModal && that._isVisible && !that.live) {
            that.hide(false, 'clear', false, clear);
        } else {
            clear();
        }
    };

    /**
     * Enables the scroller and the associated input.
     */
    that.enable = function () {
        s.disabled = false;
        if (that._isInput) {
            $elm.prop('disabled', false);
        }
    };

    /**
     * Disables the scroller and the associated input.
     */
    that.disable = function () {
        s.disabled = true;
        if (that._isInput) {
            $elm.prop('disabled', true);
        }
    };

    /**
     * Shows the scroller instance.
     * @param {Boolean} prevAnim - Prevent animation if true
     * @param {Boolean} prevFocus - Prevent focusing if true
     */
    that.show = function (prevAnim, prevFocus) {

        function onAnimEnd() {
            $markup.off(_dom.animEnd, onAnimEnd).removeClass('mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-' + doAnim).find('.mbsc-fr-popup').removeClass('mbsc-anim-' + doAnim);
            onShow(prevFocus);
        }

        var hasButtons, html;

        if (s.disabled || that._isVisible) {
            return;
        }

        // Parse value from input
        that._readValue();

        if (trigger('onBeforeShow') === false) {
            return false;
        }

        $activeElm = null;

        doAnim = s.animate;
        buttons = s.buttons || [];

        needsDimensions = hasContext || s.display == 'bubble';
        needsLock = needsFixed && !needsDimensions && s.scrollLock;

        hasButtons = buttons.length > 0;

        touched = false;

        if (doAnim !== false) {
            if (s.display == 'top') {
                doAnim = doAnim || 'slidedown';
            } else if (s.display == 'bottom') {
                doAnim = doAnim || 'slideup';
            } else if (s.display == 'center' || s.display == 'bubble') {
                doAnim = doAnim || 'pop';
            }
        }

        if (isModal) {
            scrollTop = Math.max(0, $wnd.scrollTop());
            scrollLeft = Math.max(0, $wnd.scrollLeft());
            wndWidth = 0;
            wndHeight = 0;

            if (needsLock && !$lock.hasClass('mbsc-fr-lock-ios')) {
                //$lock.scrollTop(0);
                $ctx.css({
                    top: -scrollTop + 'px',
                    left: -scrollLeft + 'px'
                });
            }

            $lock.addClass((s.scrollLock ? 'mbsc-fr-lock' : '') + (needsLock ? ' mbsc-fr-lock-ios' : '') + (hasContext ? ' mbsc-fr-lock-ctx' : ''));

            // Hide virtual keyboard
            if ((0, _core.$)(document.activeElement).is('input,textarea')) {
                document.activeElement.blur();
            }

            // Hide active instance
            if (_core2.default.activeInstance) {
                _core2.default.activeInstance.hide();
            }

            // Set active instance
            _core2.default.activeInstance = that;
            ctx.mbscModals = ctx.mbscModals || 0;
            ctx.mbscLock = ctx.mbscLock || 0;
            ctx.mbscModals++;
            if (s.scrollLock) {
                ctx.mbscLock++;
            }
        }

        // Create wheels containers
        html = '<div lang="' + s.lang + '" class="mbsc-fr mbsc-no-touch mbsc-' + s.theme + (s.baseTheme ? ' mbsc-' + s.baseTheme : '') + ' mbsc-fr-' + s.display + ' ' + (s.cssClass || '') + ' ' + (s.compClass || '') + (that._isLiquid ? ' mbsc-fr-liq' : '') + (halfBorder ? ' mbsc-fr-hb' : '') + (needsLock ? ' mbsc-platform-ios' : '') + (hasButtons ? buttons.length >= 3 ? ' mbsc-fr-btn-block ' : '' : ' mbsc-fr-nobtn') + '">' + (isModal ? '<div class="mbsc-fr-persp"><div class="mbsc-fr-overlay"></div><div role="dialog" tabindex="-1" class="mbsc-fr-scroll">' : '') + // Overlay
        '<div class="mbsc-fr-popup' + (s.rtl ? ' mbsc-rtl' : ' mbsc-ltr') + (s.headerText ? ' mbsc-fr-has-hdr' : '') + '">' + ( // Popup
        s.display === 'bubble' ? '<div class="mbsc-fr-arr-w"><div class="mbsc-fr-arr-i"><div class="mbsc-fr-arr"></div></div></div>' : '') + // Bubble arrow
        '<div class="mbsc-fr-w">' + // Popup content
        '<div aria-live="assertive" class="mbsc-fr-aria mbsc-fr-hdn"></div>' + (s.headerText ? '<div class="mbsc-fr-hdr">' + ((0, _misc.isString)(s.headerText) ? s.headerText : '') + '</div>' : '') + // Header
        '<div class="mbsc-fr-c">'; // Wheel group container

        html += that._generateContent();

        html += '</div>';

        if (hasButtons) {
            html += '<div class="mbsc-fr-btn-cont">';
            _core.$.each(buttons, function (i, b) {
                b = (0, _misc.isString)(b) ? that.buttons[b] : b;

                if (b.handler === 'set') {
                    b.parentClass = 'mbsc-fr-btn-s';
                }

                if (b.handler === 'cancel') {
                    b.parentClass = 'mbsc-fr-btn-c';
                }

                html += '<div' + (s.btnWidth ? ' style="width:' + 100 / buttons.length + '%"' : '') + ' class="mbsc-fr-btn-w ' + (b.parentClass || '') + '"><div tabindex="0" role="button" class="mbsc-fr-btn' + i + ' mbsc-fr-btn-e ' + (b.cssClass === undefined ? s.btnClass : b.cssClass) + (b.icon ? ' mbsc-ic mbsc-ic-' + b.icon : '') + '">' + (b.text || '') + '</div></div>';
            });
            html += '</div>';
        }
        html += '</div></div></div></div>' + (isModal ? '</div></div>' : '');

        $markup = (0, _core.$)(html);
        $persp = (0, _core.$)('.mbsc-fr-persp', $markup);
        $overlay = (0, _core.$)('.mbsc-fr-scroll', $markup);
        $wrapper = (0, _core.$)('.mbsc-fr-w', $markup);
        $header = (0, _core.$)('.mbsc-fr-hdr', $markup);
        $popup = (0, _core.$)('.mbsc-fr-popup', $markup);
        $ariaDiv = (0, _core.$)('.mbsc-fr-aria', $markup);

        markup = $markup[0];
        overlay = $overlay[0];
        popup = $popup[0];

        that._markup = $markup;
        that._header = $header;
        that._isVisible = true;

        posEvents = 'orientationchange resize';

        that._markupReady($markup);

        trigger('onMarkupReady', {
            target: markup
        });

        // Attach events
        if (isModal) {
            // Enter / ESC
            (0, _core.$)(window).on('keydown', onWndKeyDown);

            // Prevent scroll if not specified otherwise
            if (s.scrollLock) {
                $markup.on('touchmove mousewheel wheel', function (ev) {
                    if (scrollLock) {
                        ev.preventDefault();
                    }
                });
            }

            if (s.focusTrap) {
                $wnd.on('focusin', onFocus);
            }

            if (s.closeOnOverlayTap) {
                var moved, target, startX, startY;

                $overlay.on('touchstart mousedown', function (ev) {
                    if (!target && ev.target == $overlay[0]) {
                        target = true;
                        moved = false;
                        startX = (0, _tap.getCoord)(ev, 'X');
                        startY = (0, _tap.getCoord)(ev, 'Y');
                    }
                }).on('touchmove mousemove', function (ev) {
                    if (target && !moved && (Math.abs((0, _tap.getCoord)(ev, 'X') - startX) > 9 || Math.abs((0, _tap.getCoord)(ev, 'Y') - startY) > 9)) {
                        moved = true;
                    }
                }).on('touchcancel', function () {
                    target = false;
                }).on('touchend touchcancel mouseup', function (ev) {
                    if (target && !moved) {
                        that.cancel();
                        if (ev.type != 'mouseup') {
                            (0, _tap.preventClick)();
                        }
                    }
                    target = false;
                });
            }

            if (needsDimensions) {
                posEvents += ' scroll';
            }
        }

        // Wait for the toolbar and addressbar to appear on iOS
        setTimeout(function () {
            // Show
            if (isModal) {
                $markup.appendTo($ctx);
            } else if ($elm.is('div') && !that._hasContent) {
                // Insert inside the element on which was initialized
                $elm.empty().append($markup);
            } else {
                // Insert after the element
                if ($elm.hasClass('mbsc-control')) {
                    var $wrap = $elm.closest('.mbsc-control-w');
                    $markup.insertAfter($wrap);
                    if ($wrap.hasClass('mbsc-select')) {
                        $wrap.addClass('mbsc-select-inline');
                    }
                } else {
                    $markup.insertAfter($elm);
                }
            }

            isInserted = true;

            that._markupInserted($markup);

            trigger('onMarkupInserted', {
                target: markup
            });

            $markup.on('selectstart mousedown', prevdef) // Prevents blue highlight on Android and text selection in IE
            .on('click', '.mbsc-fr-btn-e', prevdef).on('keydown', '.mbsc-fr-btn-e', function (ev) {
                if (ev.keyCode == 32) {
                    // Space
                    ev.preventDefault();
                    ev.stopPropagation();
                    this.click();
                }
            }).on('keydown', function (ev) {
                // Trap focus inside modal
                if (ev.keyCode == 32) {
                    // Space
                    ev.preventDefault();
                } else if (ev.keyCode == 9 && isModal && s.focusTrap) {
                    // Tab
                    var $focusable = $markup.find('[tabindex="0"]').filter(function () {
                        return this.offsetWidth > 0 || this.offsetHeight > 0;
                    }),
                        index = $focusable.index((0, _core.$)(':focus', $markup)),
                        i = $focusable.length - 1,
                        target = 0;

                    if (ev.shiftKey) {
                        i = 0;
                        target = -1;
                    }

                    if (index === i) {
                        $focusable.eq(target)[0].focus();
                        ev.preventDefault();
                    }
                }
            }).on('touchstart mousedown pointerdown', '.mbsc-fr-btn-e', onBtnStart).on('touchend', '.mbsc-fr-btn-e', onBtnEnd);

            (0, _core.$)('input,select,textarea', $markup).on('selectstart mousedown', function (ev) {
                ev.stopPropagation();
            }).on('keydown', function (ev) {
                if (ev.keyCode == 32) {
                    // Space
                    ev.stopPropagation();
                }
            });

            // Need event capture for this
            markup.addEventListener('touchstart', function () {
                if (!touched) {
                    touched = true;
                    $ctx.find('.mbsc-no-touch').removeClass('mbsc-no-touch');
                }
            }, true);

            // Init buttons
            _core.$.each(buttons, function (i, b) {
                that.tap((0, _core.$)('.mbsc-fr-btn' + i, $markup), function (ev) {
                    b = (0, _misc.isString)(b) ? that.buttons[b] : b;
                    ((0, _misc.isString)(b.handler) ? that.handlers[b.handler] : b.handler).call(this, ev, that);
                }, true);
            });

            that._attachEvents($markup);

            // Set position
            that.position();

            $wnd.on(posEvents, onPosition);

            if (isModal) {
                if (doAnim && !prevAnim) {
                    $markup.addClass('mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-' + doAnim).on(_dom.animEnd, onAnimEnd).find('.mbsc-fr-popup').addClass('mbsc-anim-' + doAnim);
                } else {
                    onShow(prevFocus);
                }
            }

            trigger('onShow', {
                target: markup,
                valueText: that._tempValue
            });
        }, needsLock ? 100 : 0);
    };

    /**
     * Hides the scroller instance.
     */
    that.hide = function (prevAnim, btn, force, callback) {

        function onAnimEnd() {
            $markup.off(_dom.animEnd, onAnimEnd);
            onHide(prevAnim);
        }

        // If onClose handler returns false, prevent hide
        if (!that._isVisible || !force && !that._isValid && btn == 'set' || !force && trigger('onBeforeClose', {
            valueText: that._tempValue,
            button: btn
        }) === false) {
            return false;
        }

        if (isModal) {
            if ((0, _core.$)(document.activeElement).is('input,textarea') && popup.contains(document.activeElement)) {
                document.activeElement.blur();
            }
            (0, _core.$)(window).off('keydown', onWndKeyDown);
            delete _core2.default.activeInstance;
        }

        // Hide wheels and overlay
        if ($markup) {
            if (isModal && doAnim && !prevAnim) {
                $markup.addClass('mbsc-anim-out mbsc-anim-trans mbsc-anim-trans-' + doAnim).on(_dom.animEnd, onAnimEnd).find('.mbsc-fr-popup').addClass('mbsc-anim-' + doAnim);
            } else {
                onHide(prevAnim);
            }

            that._detachEvents($markup);

            // Stop positioning on window resize
            $wnd.off(posEvents, onPosition).off('focusin', onFocus);
        }

        if (callback) {
            callback();
        }

        // For validation
        $elm.trigger('blur');

        trigger('onClose', {
            valueText: that._value
        });
    };

    that.ariaMessage = function (txt) {
        $ariaDiv.html('');
        setTimeout(function () {
            $ariaDiv.html(txt);
        }, 100);
    };

    /**
     * Return true if the scroller is currently visible.
     */
    that.isVisible = function () {
        return that._isVisible;
    };

    // Protected functions to override

    that.setVal = _misc.noop;

    that.getVal = _misc.noop;

    that._generateContent = _misc.noop;

    that._attachEvents = _misc.noop;

    that._detachEvents = _misc.noop;

    that._readValue = _misc.noop;

    that._clearValue = _misc.noop;

    that._fillValue = _misc.noop;

    that._markupReady = _misc.noop;

    that._markupInserted = _misc.noop;

    that._markupRemove = _misc.noop;

    that._position = _misc.noop;

    that.__processSettings = _misc.noop;

    that.__init = _misc.noop;

    that.__destroy = _misc.noop;

    // Generic frame functions

    /**
     * Destroys the mobiscroll instance.
     */
    that._destroy = function () {
        // Force hide without animation
        that.hide(true, false, true);

        $elm.off('.mbsc');

        // Remove all events from elements
        _core.$.each(elmList, function (i, v) {
            v.el.off('.mbsc').prop('readonly', v.readOnly);
            if (v.lbl) {
                v.lbl.off('.mbsc');
            }
        });

        that.__destroy();
    };

    that._processSettings = function () {
        var b, i;

        that.__processSettings();

        // Add default buttons
        s.buttons = s.buttons || (s.display !== 'inline' ? ['set', 'cancel'] : []);

        // Hide header text in inline mode by default
        s.headerText = s.headerText === undefined ? s.display !== 'inline' ? '{value}' : false : s.headerText;

        buttons = s.buttons || [];
        isModal = s.display !== 'inline';
        hasContext = s.context != 'body';
        $ctx = (0, _core.$)(s.context);
        $lock = hasContext ? $ctx : (0, _core.$)('body,html');
        ctx = $ctx[0];

        that._window = $wnd = (0, _core.$)(hasContext ? s.context : window);
        that.live = true;

        // If no set button is found, live mode is activated
        for (i = 0; i < buttons.length; i++) {
            b = buttons[i];
            if (b == 'ok' || b == 'set' || b.handler == 'set') {
                that.live = false;
            }
        }

        that.buttons.set = {
            text: s.setText,
            icon: s.setIcon,
            handler: 'set'
        };

        that.buttons.cancel = {
            text: s.cancelText,
            icon: s.cancelIcon,
            handler: 'cancel'
        };

        that.buttons.close = {
            text: s.closeText,
            icon: s.closeIcon,
            handler: 'cancel'
        };

        that.buttons.clear = {
            text: s.clearText,
            icon: s.clearIcon,
            handler: 'clear'
        };

        that._isInput = $elm.is('input');
    };

    /**
     * Scroller initialization.
     */
    that._init = function () {

        if (that._isVisible) {
            that.hide(true, false, true);
        }

        // Unbind all events (if re-init)
        $elm.off('.mbsc');

        that.__init();

        that._isLiquid = s.layout == 'liquid';

        if (isModal) {
            that._readValue();
            if (!that._hasContent) {
                that.attachShow($elm);
            }
        } else {
            that.show();
        }

        $elm.on('change.mbsc', function () {
            if (!that._preventChange) {
                that.setVal($elm.val(), true, false);
            }
            that._preventChange = false;
        });
    };

    that.buttons = {};
    that.handlers = {
        set: that.select,
        cancel: that.cancel,
        clear: that.clear
    };

    that._value = null;

    that._isValid = true;
    that._isVisible = false;

    // Constructor

    s = that.settings;
    trigger = that.trigger;

    if (!inherit) {
        that.init(settings);
    }
};

Frame.prototype._defaults = {
    // Localization
    lang: 'en',
    setText: 'Set',
    selectedText: '{count} selected',
    closeText: 'Close',
    cancelText: 'Cancel',
    clearText: 'Clear',
    // Options
    context: 'body',
    maxPopupWidth: 600,
    disabled: false,
    closeOnOverlayTap: true,
    showOnFocus: isAndroid || isIOS, // Needed for ion-input
    showOnTap: true,
    display: 'center',
    scroll: true,
    scrollLock: true,
    tap: true,
    btnClass: 'mbsc-fr-btn',
    btnWidth: true,
    focusTrap: true,
    focusOnClose: !isIOS8 // Temporary for iOS8
};

classes.Frame = Frame;

themes.frame.mobiscroll = {
    headerText: false,
    btnWidth: false
};

themes.scroller.mobiscroll = (0, _core.extend)({}, themes.frame.mobiscroll, {
    rows: 5,
    showLabel: false,
    selectedLineBorder: 1,
    weekDays: 'min',
    checkIcon: 'ion-ios7-checkmark-empty',
    btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
    btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5',
    btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
    btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5'
});

if (_platform.isBrowser) {
    // Prevent re-show on window focus
    (0, _core.$)(window).on('focus', function () {
        if ($activeElm) {
            preventShow = true;
        }
    });
}

exports.default = Frame;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","../util/dom":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/dom.js","../util/misc":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/misc.js","../util/platform":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/platform.js","../util/tap":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/tap.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/input.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _formControl = require('./form-control');

var _formControl2 = _interopRequireDefault(_formControl);

var _forms = require('../util/forms');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function (_FormControl) {
    (0, _inherits3.default)(Input, _FormControl);

    function Input(elm, settings) {
        (0, _classCallCheck3.default)(this, Input);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this, elm, settings));

        (0, _forms.addIconToggle)(_this, _this._$parent, _this._$elm);
        _this._$parent.addClass('mbsc-input');
        return _this;
    }

    (0, _createClass3.default)(Input, [{
        key: 'destroy',
        value: function destroy() {
            (0, _get3.default)(Input.prototype.__proto__ || (0, _getPrototypeOf2.default)(Input.prototype), 'destroy', this).call(this);
            this._$parent.removeClass('mbsc-ic-left mbsc-ic-right').find('.mbsc-input-ic').remove();
        }
    }]);
    return Input;
}(_formControl2.default);

exports.default = Input;

},{"../util/forms":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/forms.js","./form-control":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/form-control.js","babel-runtime/core-js/object/get-prototype-of":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/get":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/get.js","babel-runtime/helpers/inherits":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/page.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classes = _core2.default.classes;

// Page
// ---

var Page = function Page(el, settings) {
    var cssClass = '',
        $elm = (0, _core.$)(el),
        that = this,
        s = that.settings;

    // Call the parent constructor
    _core.Base.call(this, el, settings, true);

    /**
     * Page initialization.
     */
    that._init = function () {
        var ctx = s.context,
            $ctx = (0, _core.$)(ctx),
            $topMenu = $ctx.find('.mbsc-ms-top .mbsc-ms'),
            $bottomMenu = $ctx.find('.mbsc-ms-bottom .mbsc-ms'),
            css = {};

        if (ctx == 'body') {
            (0, _core.$)('body,html').addClass('mbsc-page-ctx');
        } else {
            $ctx.addClass('mbsc-page-ctx');
        }

        if (cssClass) {
            $elm.removeClass(cssClass);
        }

        if ($topMenu.length) {
            css.paddingTop = $topMenu[0].offsetHeight;
        }

        if ($bottomMenu.length) {
            css.paddingBottom = $bottomMenu[0].offsetHeight;
        }

        cssClass = 'mbsc-page mbsc-' + s.theme + (s.baseTheme ? ' mbsc-' + s.baseTheme : '') + (s.rtl ? ' mbsc-rtl' : ' mbsc-ltr');

        $elm.addClass(cssClass).css(css);
    };

    /**
     * Destroys the mobiscroll instance.
     */
    that._destroy = function () {
        $elm.removeClass(cssClass);
    };

    // Constructor

    s = that.settings;

    that.init(settings);
};

// Extend defaults
Page.prototype = {
    _hasDef: true,
    _hasTheme: true,
    _hasLang: true,
    _class: 'page',
    _defaults: {
        context: 'body'
    }
};

classes.Page = Page;

_core2.default.themes.page.mobiscroll = {};

_core2.default.presetShort('page', 'Page');

// ---
// Page end

// Init mbsc-page elements on page load or when mbsc-enhance event is triggeres
// ---

if (_core.isBrowser) {
    (0, _core.$)(function () {

        var selector = '[mbsc-page]';

        (0, _core.$)(selector).each(function () {
            new classes.Page(this);
        });

        (0, _core.$)(document).on('mbsc-enhance', function (ev, settings) {
            if ((0, _core.$)(ev.target).is(selector)) {
                new classes.Page(ev.target, settings);
            } else {
                (0, _core.$)(selector, ev.target).each(function () {
                    new classes.Page(this, settings);
                });
            }
        });
    });
}

// ---
// Init end

exports.default = Page;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/progress-base.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _misc = require('../util/misc');

var ProgressBase = function ProgressBase(elm, settings, inherit) {
    var $elm,
        $parent,
        cssClass,
        s,
        that = this;

    // Call the parent constructor
    _core.Base.call(this, elm, settings, true);

    that.__init = _misc.noop;

    that.__destroy = _misc.noop;

    that._init = function (ss) {

        var wasInit;

        s = that.settings;

        $elm = (0, _core.$)(elm);

        // Check if the element was already initialized
        wasInit = !!$parent;

        $parent = $elm.parent();
        $parent = $parent.hasClass('mbsc-input-wrap') ? $parent.parent() : $parent;

        that._$parent = $parent;

        if (cssClass) {
            $parent.removeClass(cssClass);
        }

        cssClass = that._css + ' mbsc-progress-w mbsc-control-w mbsc-' + s.theme + (s.baseTheme ? ' mbsc-' + s.baseTheme : '') + (s.rtl ? ' mbsc-rtl' : ' mbsc-ltr');

        $parent.addClass(cssClass);

        $elm.addClass('mbsc-control');

        that.__init(ss);

        if (!wasInit) {
            that._attachChange();
        }

        // Show initial value
        that.refresh();
    };

    that._destroy = function () {

        that.__destroy();

        $parent.removeClass(cssClass);

        $elm.removeClass('mbsc-control');
    };

    if (!inherit) {
        that.init(settings);
    }
};

ProgressBase.prototype = {
    _class: 'progressbase'
};

exports.default = ProgressBase;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","../util/misc":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/misc.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/progress.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

var _progressBase = require('./progress-base');

var _progressBase2 = _interopRequireDefault(_progressBase);

var _forms = require('../util/forms');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progress = function Progress(elm, settings, inherit) {
    var $display,
        $elm,
        $parent,
        $progress,
        $target,
        $track,
        min,
        max,
        s,
        template,
        value,
        valueText,
        that = this;

    function onChange() {
        var v = getAttr('value', min);
        if (v !== value) {
            updateValue(v);
        }
    }

    function getAttr(attr, def) {
        var v = $elm.attr(attr);
        return v === undefined || v === '' ? def : +v;
    }

    function updateValue(v, refresh, fill, change) {
        v = /* TRIALCONDREV */Math.min(max, Math.max(v, min));

        $progress.css('width', (v - min) * 100 / (max - min) + '%');

        if (fill === undefined) {
            fill = true;
        }

        if (change === undefined) {
            change = fill;
        }

        if (v !== value || refresh) {
            // Display value
            that._display(v);
        }

        if (v !== value) {
            // Set new value
            value = v;

            // Put new value in the progress element
            if (fill) {
                $elm.attr('value', value);
            }

            // Trigger change on the element
            if (change) {
                $elm.trigger('change');
            }
        }
    }

    // Call the parent constructor
    _progressBase2.default.call(this, elm, settings, true);

    that._display = function (v) {
        valueText = template && s.returnAffix ? template.replace(/\{value\}/, v).replace(/\{max\}/, max) : v;

        if ($target) {
            $target.html(valueText);
        }

        if ($display) {
            $display.html(valueText);
        }
    };

    that._attachChange = function () {
        $elm.on('change', onChange);
    };

    that.__init = function (ss) {

        var displayValue, i, stepLabels, wasInit;

        s = that.settings;

        $elm = (0, _core.$)(elm);

        // Check if the element was already initialized
        wasInit = !!$parent;

        $parent = that._$parent;

        // Read settings from data attributes or settings object
        min = that._min = ss.min === undefined ? getAttr('min', s.min) : ss.min;
        max = that._max = ss.max === undefined ? getAttr('max', s.max) : ss.max;
        value = getAttr('value', min);
        displayValue = $elm.attr('data-val') || s.val;
        stepLabels = $elm.attr('data-step-labels');
        stepLabels = stepLabels ? JSON.parse(stepLabels) : s.stepLabels;
        template = $elm.attr('data-template') || (max == 100 && !s.template ? '{value}%' : s.template);

        if (!wasInit) {
            (0, _forms.wrapLabel)($parent);

            (0, _forms.addIcon)($elm);

            // Generate track and progress
            $parent.find('.mbsc-input-wrap').append('<span class="mbsc-progress-cont"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-progress-bar"></span></span></span>');

            $progress = that._$progress = $parent.find('.mbsc-progress-bar');
            $track = that._$track = $parent.find('.mbsc-progress-track');
        } else {
            if (displayValue) {
                $display.remove();
                $parent.removeClass('mbsc-progress-value-' + (displayValue == 'right' ? 'right' : 'left'));
            }

            if (stepLabels) {
                (0, _core.$)('.mbsc-progress-step-label', $track).remove();
            }
        }

        // Set attributes
        $elm.attr('min', min).attr('max', max);

        // Generate value container on left or right side
        if (displayValue) {
            $display = (0, _core.$)('<span class="mbsc-progress-value"></span>');
            $parent.addClass('mbsc-progress-value-' + (displayValue == 'right' ? 'right' : 'left')).find('.mbsc-input-wrap').append($display);
        }

        // Generate step labels
        if (stepLabels) {
            for (i = 0; i < stepLabels.length; ++i) {
                $track.append('<span class="mbsc-progress-step-label" style="' + (s.rtl ? 'right' : 'left') + ': ' + (stepLabels[i] - min) * 100 / (max - min) + '%" >' + stepLabels[i] + '</span>');
            }
        }

        $target = (0, _core.$)($elm.attr('data-target') || s.target);
    };

    that.__destroy = function () {

        $parent.removeClass('mbsc-ic-left mbsc-ic-right').find('.mbsc-progress-cont').remove();

        $parent.find('.mbsc-input-ic').remove();

        $elm.off('change', onChange);
    };

    that.refresh = function () {
        updateValue(getAttr('value', min), true, false);
    };

    that.getVal = function () {
        return value;
    };

    that.setVal = function (v, fill, change) {
        updateValue(v, true, fill, change);
    };

    if (!inherit) {
        that.init(settings);
    }
};

Progress.prototype = {
    _class: 'progress',
    _css: 'mbsc-progress',
    _hasTheme: true,
    _hasLang: true,
    _hasDef: true,
    _defaults: {
        min: 0,
        max: 100,
        returnAffix: true
    }
};

_core2.default.classes.Progress = Progress;

_core2.default.presetShort('progress', 'Progress');

exports.default = Progress;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","../util/forms":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/forms.js","./progress-base":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/progress-base.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/radio.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _formControl = require('./form-control');

var _formControl2 = _interopRequireDefault(_formControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function (_FormControl) {
    (0, _inherits3.default)(Radio, _FormControl);

    function Radio(elm, settings) {
        (0, _classCallCheck3.default)(this, Radio);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Radio.__proto__ || (0, _getPrototypeOf2.default)(Radio)).call(this, elm, settings));

        _this._$parent.addClass('mbsc-radio mbsc-control-w').find('.mbsc-radio-box').remove();

        _this._$elm.after('<span class="mbsc-radio-box"><span></span></span>');
        return _this;
    }

    return Radio;
}(_formControl2.default);

exports.default = Radio;

},{"./form-control":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/form-control.js","babel-runtime/core-js/object/get-prototype-of":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/inherits":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/scroller.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

var _platform = require('../util/platform');

var _tap = require('../util/tap');

var _dom = require('../util/dom');

var _misc = require('../util/misc');

var _frame = require('./frame');

var _frame2 = _interopRequireDefault(_frame);

var _scrollview = require('./scrollview');

var _scrollview2 = _interopRequireDefault(_scrollview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = _platform.isBrowser ? window.CSS : null,
    has3d = css && css.supports && css.supports("(transform-style: preserve-3d)"),
    force2D = !has3d || _platform.os == 'wp' || _platform.os == 'android';

_core2.default.presetShort('scroller', 'Scroller', false);

var Scroller = function Scroller(el, settings, inherit) {
    var $markup,
        $stepBtn,
        batchSize3d,
        batchSize = 40,
        animTime = 1000,
        scroll3dAngle,
        scroll3d,
        selectedClass,
        showScrollArrows,
        stepTimer,
        stepRunning,
        stepSkip,
        stepBtnX,
        stepBtnY,
        tempWheelArray,
        itemHeight,
        itemHeight3d,
        isValidating,
        s,
        trigger,
        lines,
        wheels,
        wheelsMap,
        that = this,
        $elm = (0, _core.$)(el);

    // Event handlers

    function onBtnStart(ev) {
        var i = +(0, _core.$)(this).attr('data-index');

        ev.stopPropagation();

        if (ev.type === 'mousedown') {
            // Prevent focus
            ev.preventDefault();
        }

        if ((0, _dom.testTouch)(ev, this) && !isReadOnly(i)) {

            $stepBtn = (0, _core.$)(this).addClass('mbsc-sc-btn-a');

            stepBtnX = (0, _tap.getCoord)(ev, 'X');
            stepBtnY = (0, _tap.getCoord)(ev, 'Y');

            stepRunning = true;
            stepSkip = false;
            setTimeout(function () {
                runStepper(i, $stepBtn.attr('data-dir') == 'inc' ? 1 : -1);
            }, 100);

            if (ev.type === 'mousedown') {
                (0, _core.$)(document).on('mousemove', onBtnMove).on('mouseup', onBtnEnd);
            }
        }
    }

    function onBtnMove(ev) {
        if (Math.abs(stepBtnX - (0, _tap.getCoord)(ev, 'X')) > 7 || Math.abs(stepBtnY - (0, _tap.getCoord)(ev, 'Y')) > 7) {
            stopStepper(true);
        }
    }

    function onBtnEnd(ev) {
        stopStepper();

        // Prevent scroll on double tap on iOS
        ev.preventDefault();

        if (ev.type === 'mouseup') {
            (0, _core.$)(document).off('mousemove', onBtnMove).off('mouseup', onBtnEnd);
        }
    }

    function onKeyDown(ev) {
        var i = (0, _core.$)(this).attr('data-index'),
            handle,
            direction;

        if (ev.keyCode == 38) {
            // Up
            handle = true;
            direction = -1;
        } else if (ev.keyCode == 40) {
            // Down
            handle = true;
            direction = 1;
        } else if (ev.keyCode == 32) {
            // Space
            handle = true;
            onItemTap(i, wheels[i]._$markup.find('.mbsc-sc-itm[data-val="' + tempWheelArray[i] + '"]'));
        }

        if (handle) {
            ev.stopPropagation();
            ev.preventDefault();

            if (direction && !stepRunning) {
                stepRunning = true;
                stepSkip = false;
                runStepper(i, direction);
            }
        }
    }

    function onKeyUp() {
        stopStepper();
    }

    function onItemTap(i, $item) {
        var wheel = wheels[i],
            idx = $item.attr('data-index'),
            val = getValue(wheel, idx),
            selected = that._tempSelected[i],
            maxSelect = (0, _misc.isNumeric)(wheel.multiple) ? wheel.multiple : Infinity;

        if (trigger('onItemTap', {
            target: $item[0],
            index: i,
            value: val,
            selected: $item.hasClass('mbsc-sc-itm-sel')
        }) !== false) {

            // Select item on tap
            if (wheel.multiple && !wheel._disabled[val]) {
                if (selected[val] !== undefined) {
                    $item.removeClass(selectedClass).removeAttr('aria-selected');
                    delete selected[val];
                } else {
                    if (maxSelect == 1) {
                        that._tempSelected[i] = selected = {};
                        wheel._$markup.find('.mbsc-sc-itm-sel').removeClass(selectedClass).removeAttr('aria-selected');
                    }
                    if ((0, _misc.objectToArray)(selected).length < maxSelect) {
                        $item.addClass(selectedClass).attr('aria-selected', 'true');
                        selected[val] = val;
                    }
                }
            }

            setWheelValue(wheel, i, idx, animTime, true, true, wheel.multiple);

            if (that.live && !wheel.multiple && (s.setOnTap === true || s.setOnTap[i])) {
                setTimeout(function () {
                    that.select();
                }, 200);
            }
        }
    }

    // Private functions

    function getIndex(wheel, val) {
        return (wheel._array ? wheel._map[val] : wheel.getIndex(val, that)) || 0;
    }

    function getItem(wheel, i) {
        var data = wheel.data;

        if (i >= wheel.min && i <= wheel.max) {
            return wheel._array ? wheel.circular ? (0, _core.$)(data).get(i % wheel._length) : data[i] : _core.$.isFunction(data) ? data(i, that) : '';
        }
    }

    function getItemValue(item) {
        return _core.$.isPlainObject(item) ? item.value !== undefined ? item.value : item.display : item;
    }

    function getItemText(item) {
        var text = _core.$.isPlainObject(item) ? item.display : item;
        return text === undefined ? '' : text;
    }

    function getValue(wheel, i) {
        return getItemValue(getItem(wheel, i));
    }

    function runStepper(index, direction) {
        if (!stepSkip) {
            step(index, direction);
        }

        if (stepRunning) {
            clearInterval(stepTimer);
            stepTimer = setInterval(function () {
                step(index, direction);
            }, s.delay);
        }
    }

    function stopStepper(skip) {
        clearInterval(stepTimer);
        stepSkip = skip;
        stepRunning = false;

        if ($stepBtn) {
            $stepBtn.removeClass('mbsc-sc-btn-a');
        }
    }

    function step(index, direction) {
        var wheel = wheels[index];
        setWheelValue(wheel, index, wheel._current + direction, animTime, direction == 1 ? 1 : 2);
    }

    function isReadOnly(i) {
        return _core.$.isArray(s.readonly) ? s.readonly[i] : s.readonly;
    }

    function initWheel(w, l, keep) {
        var index = w._index - w._batch;

        w.data = w.data || [];
        w.key = w.key !== undefined ? w.key : l;
        w.label = w.label !== undefined ? w.label : l;

        w._map = {};
        w._array = _core.$.isArray(w.data);

        // Map keys to index
        if (w._array) {
            w._length = w.data.length;
            _core.$.each(w.data, function (i, v) {
                w._map[getItemValue(v)] = i;
            });
        }

        w.circular = s.circular === undefined ? w.circular === undefined ? w._array && w._length > s.rows : w.circular : _core.$.isArray(s.circular) ? s.circular[l] : s.circular;
        w.min = w._array ? w.circular ? -Infinity : 0 : w.min === undefined ? -Infinity : w.min;
        w.max = w._array ? w.circular ? Infinity : w._length - 1 : w.max === undefined ? Infinity : w.max;

        w._nr = l;
        w._index = getIndex(w, tempWheelArray[l]);
        w._disabled = {};
        w._batch = 0;
        w._current = w._index;
        w._first = w._index - batchSize; //Math.max(w.min, w._current - batchSize);
        w._last = w._index + batchSize; //Math.min(w.max, w._first + 2 * batchSize);
        w._offset = w._first;

        if (keep) {
            w._offset -= w._margin / itemHeight + (w._index - index);
            w._margin += (w._index - index) * itemHeight;
        } else {
            w._margin = 0; //w._first * itemHeight;
        }

        w._refresh = function (noScroll) {
            var maxScroll = -(w.min - w._offset + (w.multiple && !scroll3d ? Math.floor(s.rows / 2) : 0)) * itemHeight,
                minScroll = Math.min(maxScroll, -(w.max - w._offset - (w.multiple && !scroll3d ? Math.floor(s.rows / 2) : 0)) * itemHeight);

            (0, _core.extend)(w._scroller.settings, {
                minScroll: minScroll,
                maxScroll: maxScroll
            });

            w._scroller.refresh(noScroll);
        };

        wheelsMap[w.key] = w;

        return w;
    }

    function generateItems(wheel, index, start, end, is3d) {
        var i,
            css,
            item,
            value,
            text,
            lbl,
            invalid,
            selected,
            html = '',
            checked = that._tempSelected[index],
            disabled = wheel._disabled || {};

        for (i = start; i <= end; i++) {
            item = getItem(wheel, i);
            text = getItemText(item);
            value = getItemValue(item);
            css = item && item.cssClass !== undefined ? item.cssClass : '';
            lbl = item && item.label !== undefined ? item.label : '';
            invalid = item && item.invalid;
            selected = value !== undefined && value == tempWheelArray[index] && !wheel.multiple;

            // TODO: don't generate items with no value (use margin or placeholder instead)
            html += '<div role="option" aria-selected="' + (checked[value] ? true : false) + '" class="mbsc-sc-itm ' + (is3d ? 'mbsc-sc-itm-3d ' : '') + css + ' ' + (selected ? 'mbsc-sc-itm-sel ' : '') + (checked[value] ? selectedClass : '') + (value === undefined ? ' mbsc-sc-itm-ph' : ' mbsc-btn-e') + (invalid ? ' mbsc-sc-itm-inv-h mbsc-btn-d' : '') + (disabled[value] ? ' mbsc-sc-itm-inv mbsc-btn-d' : '') + '" data-index="' + i + '" data-val="' + value + '"' + (lbl ? ' aria-label="' + lbl + '"' : '') + (selected ? ' aria-selected="true"' : '') + ' style="height:' + itemHeight + 'px;line-height:' + itemHeight + 'px;' + (is3d ? _dom.cssPrefix + 'transform:rotateX(' + (wheel._offset - i) * scroll3dAngle % 360 + 'deg) translateZ(' + itemHeight * s.rows / 2 + 'px);' : '') + '">' + (lines > 1 ? '<div class="mbsc-sc-itm-ml" style="line-height:' + Math.round(itemHeight / lines) + 'px;font-size:' + Math.round(itemHeight / lines * 0.8) + 'px;">' : '') + text + (lines > 1 ? '</div>' : '') + '</div>';
        }

        return html;
    }

    function formatHeader(v) {
        var t = s.headerText;
        return t ? typeof t === 'function' ? t.call(el, v) : t.replace(/\{value\}/i, v) : '';
    }

    function infinite(wheel, i, pos) {
        var index = Math.round(-pos / itemHeight) + wheel._offset,
            diff = index - wheel._current,
            first = wheel._first,
            last = wheel._last,
            first3d = first + batchSize - batchSize3d + 1,
            last3d = last - batchSize + batchSize3d;

        if (diff) {
            wheel._first += diff;
            wheel._last += diff;

            wheel._current = index;

            // Generate items
            //setTimeout(function () {
            if (diff > 0) {
                wheel._$scroller.append(generateItems(wheel, i, Math.max(last + 1, first + diff), last + diff));
                (0, _core.$)('.mbsc-sc-itm', wheel._$scroller).slice(0, Math.min(diff, last - first + 1)).remove();

                // 3D
                if (scroll3d) {
                    wheel._$3d.append(generateItems(wheel, i, Math.max(last3d + 1, first3d + diff), last3d + diff, true));
                    (0, _core.$)('.mbsc-sc-itm', wheel._$3d).slice(0, Math.min(diff, last3d - first3d + 1)).attr('class', 'mbsc-sc-itm-del');
                }
            } else if (diff < 0) {
                wheel._$scroller.prepend(generateItems(wheel, i, first + diff, Math.min(first - 1, last + diff)));
                (0, _core.$)('.mbsc-sc-itm', wheel._$scroller).slice(Math.max(diff, first - last - 1)).remove();

                // 3D
                if (scroll3d) {
                    wheel._$3d.prepend(generateItems(wheel, i, first3d + diff, Math.min(first3d - 1, last3d + diff), true));
                    (0, _core.$)('.mbsc-sc-itm', wheel._$3d).slice(Math.max(diff, first3d - last3d - 1)).attr('class', 'mbsc-sc-itm-del');
                }
            }

            wheel._margin += diff * itemHeight;
            wheel._$scroller.css('margin-top', wheel._margin + 'px');
            //}, 10);
        }
    }

    function getValid(index, val, dir, dis) {
        var counter,
            wheel = wheels[index],
            disabled = dis || wheel._disabled,
            idx = getIndex(wheel, val),
            v1 = val,
            v2 = val,
            dist1 = 0,
            dist2 = 0;

        if (val === undefined) {
            val = getValue(wheel, idx);
        }

        // TODO: what if all items are invalid
        if (disabled[val] === true) {
            counter = 0;
            while (idx - dist1 >= wheel.min && disabled[v1] && counter < 100) {
                counter++;
                dist1++;
                v1 = getValue(wheel, idx - dist1);
            }

            counter = 0;
            while (idx + dist2 < wheel.max && disabled[v2] && counter < 100) {
                counter++;
                dist2++;
                v2 = getValue(wheel, idx + dist2);
            }

            // If we have direction (+/- or mouse wheel), the distance does not count
            if ((dist2 < dist1 && dist2 && dir !== 2 || !dist1 || idx - dist1 < 0 || dir == 1) && !disabled[v2]) {
                val = v2;
            } else {
                val = v1;
            }
        }

        return val;
    }

    function scrollToPos(time, index, dir, manual, tap, noscroll) {
        var diff,
            idx,
            offset,
            ret,
            isVisible = that._isVisible;

        isValidating = true;
        ret = s.validate.call(el, {
            values: tempWheelArray.slice(0),
            index: index,
            direction: dir
        }, that) || {};
        isValidating = false;

        if (ret.valid) {
            that._tempWheelArray = tempWheelArray = ret.valid.slice(0);
        }

        if (!noscroll) {
            _core.$.each(wheels, function (i, wheel) {
                if (isVisible) {
                    // Enable all items
                    wheel._$markup.find('.mbsc-sc-itm-inv').removeClass('mbsc-sc-itm-inv mbsc-btn-d');
                }
                wheel._disabled = {};

                // Disable invalid items
                if (ret.disabled && ret.disabled[i]) {
                    _core.$.each(ret.disabled[i], function (j, v) {
                        wheel._disabled[v] = true;
                        if (isVisible) {
                            wheel._$markup.find('.mbsc-sc-itm[data-val="' + v + '"]').addClass('mbsc-sc-itm-inv mbsc-btn-d');
                        }
                    });
                }

                // Get closest valid value
                tempWheelArray[i] = wheel.multiple ? tempWheelArray[i] : getValid(i, tempWheelArray[i], dir);

                if (isVisible) {
                    if (!wheel.multiple || index === undefined) {
                        wheel._$markup.find('.mbsc-sc-itm-sel').removeClass(selectedClass).removeAttr('aria-selected');
                    }

                    if (wheel.multiple) {
                        // Add selected styling to selected elements in case of multiselect
                        if (index === undefined) {
                            for (var v in that._tempSelected[i]) {
                                wheel._$markup.find('.mbsc-sc-itm[data-val="' + v + '"]').addClass(selectedClass).attr('aria-selected', 'true');
                            }
                        }
                    } else {
                        // Mark element as aria selected
                        wheel._$markup.find('.mbsc-sc-itm[data-val="' + tempWheelArray[i] + '"]').addClass('mbsc-sc-itm-sel').attr('aria-selected', 'true');
                    }

                    // Get index of valid value
                    idx = getIndex(wheel, tempWheelArray[i]);

                    diff = idx - wheel._index + wheel._batch;

                    if (Math.abs(diff) > 2 * batchSize + 1) {
                        offset = diff + (2 * batchSize + 1) * (diff > 0 ? -1 : 1);
                        wheel._offset += offset;
                        wheel._margin -= offset * itemHeight;
                        wheel._refresh();
                    }

                    wheel._index = idx + wheel._batch;

                    // Scroll to valid value
                    wheel._scroller.scroll(-(idx - wheel._offset + wheel._batch) * itemHeight, index === i || index === undefined ? time : animTime, tap);
                }
            });
        }

        trigger('onValidated');

        // Get formatted value
        that._tempValue = s.formatValue(tempWheelArray, that);

        if (isVisible) {
            // Update header text
            that._header.html(formatHeader(that._tempValue));
        }

        // If in live mode, set and fill value on every move
        if (that.live) {
            that._hasValue = manual || that._hasValue;
            setValue(manual, manual, 0, true);
            if (manual) {
                trigger('onSet', {
                    valueText: that._value
                });
            }
        }

        if (manual) {
            trigger('onChange', {
                valueText: that._tempValue
            });
        }
    }

    function setWheelValue(wheel, i, idx, time, dir, tap, noscroll) {
        // Get the value at the given index
        var value = getValue(wheel, idx);

        if (value !== undefined) {
            tempWheelArray[i] = value;

            // In case of circular wheels calculate the offset of the current batch
            wheel._batch = wheel._array ? Math.floor(idx / wheel._length) * wheel._length : 0;

            setTimeout(function () {
                scrollToPos(time, i, dir, true, tap, noscroll);
            }, 10);
        }
    }

    function setValue(fill, change, time, noscroll, temp) {
        if (!noscroll) {
            scrollToPos(time);
        } else {
            that._tempValue = s.formatValue(that._tempWheelArray, that);
        }

        if (!temp) {
            that._wheelArray = [];
            for (var i = 0; i < tempWheelArray.length; i++) {
                // In case of multiple select wheel take the first selected value,
                that._wheelArray[i] = wheels[i] && wheels[i].multiple ? (0, _keys2.default)(that._tempSelected[i])[0] : tempWheelArray[i];
            }
            that._value = that._hasValue ? that._tempValue : null;
            that._selected = (0, _core.extend)(true, {}, that._tempSelected);
        }

        if (fill) {
            if (that._isInput) {
                $elm.val(that._hasValue ? that._tempValue : '');
            }

            trigger('onFill', {
                valueText: that._hasValue ? that._tempValue : '',
                change: change
            });

            if (change) {
                that._preventChange = true;
                $elm.trigger('change');
            }
        }
    }

    // Call the parent constructor
    _frame2.default.call(this, el, settings, true);

    // Public functions

    /**
     * Sets the value of the scroller.
     * @param {Array} val - New value.
     * @param {Boolean} [fill=false] - Set the value of the associated input element.
     * @param {Boolean} [change=false] - Trigger change on the input element.
     * @param {Boolean} [temp=false] - If true, then only set the temporary value (only scroll there but not set the value).
     * @param {Number} [time=0] - Animation time in milliseconds.
     */
    that.setVal = that._setVal = function (val, fill, change, temp, time) {
        that._hasValue = val !== null && val !== undefined;
        that._tempWheelArray = tempWheelArray = _core.$.isArray(val) ? val.slice(0) : s.parseValue.call(el, val, that) || [];
        setValue(fill, change === undefined ? fill : change, time, false, temp);
    };

    /**
     * Returns the selected value.
     */
    that.getVal = that._getVal = function (temp) {
        var val = that._hasValue || temp ? that[temp ? '_tempValue' : '_value'] : null;
        return (0, _misc.isNumeric)(val) ? +val : val;
    };

    /*
     * Sets the wheel values (passed as an array).
     */
    that.setArrayVal = that.setVal;

    /*
     * Returns the selected wheel values as an array.
     */
    that.getArrayVal = function (temp) {
        return temp ? that._tempWheelArray : that._wheelArray;
    };

    that.changeWheel = function (whls, time, manual) {
        var i, w;

        _core.$.each(whls, function (key, wheel) {
            w = wheelsMap[key];
            // Check if wheel exists
            if (w) {
                i = w._nr;

                (0, _core.extend)(w, wheel);

                initWheel(w, i, true);

                if (that._isVisible) {
                    if (scroll3d) {
                        w._$3d.html(generateItems(w, i, w._first + batchSize - batchSize3d + 1, w._last - batchSize + batchSize3d, true));
                    }

                    w._$scroller.html(generateItems(w, i, w._first, w._last)).css('margin-top', w._margin + 'px');

                    w._refresh(isValidating);
                }
            }
        });

        if (that._isVisible && !that._isLiquid && !isValidating) {
            that.position();
        }

        if (!isValidating) {
            scrollToPos(time, undefined, undefined, manual);
        }
    };

    /**
     * Returns the closest valid value.
     */
    that.getValidValue = getValid;

    // Protected overrides

    that._generateContent = function () {
        var lbl,
            maxPopupWidth = 0,
            html = '',
            style = scroll3d ? _dom.cssPrefix + 'transform: translateZ(' + (itemHeight * s.rows / 2 + 3) + 'px);' : '',
            highlight = '<div class="mbsc-sc-whl-l" style="' + style + 'height:' + itemHeight + 'px;margin-top:-' + (itemHeight / 2 + (s.selectedLineBorder || 0)) + 'px;"></div>',
            l = 0;

        _core.$.each(s.wheels, function (i, wg) {
            html += '<div class="mbsc-w-p mbsc-sc-whl-gr-c' + (scroll3d ? ' mbsc-sc-whl-gr-3d-c' : '') + (s.showLabel ? ' mbsc-sc-lbl-v' : '') + '">' + highlight + '<div class="mbsc-sc-whl-gr' + (scroll3d ? ' mbsc-sc-whl-gr-3d' : '') + (showScrollArrows ? ' mbsc-sc-cp' : '') + (s.width || s.maxWidth ? '"' : '" style="max-width:' + s.maxPopupWidth + 'px;"') + '>';

            _core.$.each(wg, function (j, w) {
                // Wheels

                that._tempSelected[l] = (0, _core.extend)({}, that._selected[l]);

                // TODO: this should be done on initialization, not on show
                wheels[l] = initWheel(w, l);

                maxPopupWidth += s.maxWidth ? s.maxWidth[l] || s.maxWidth : s.width ? s.width[l] || s.width : 0;

                lbl = w.label !== undefined ? w.label : j;

                html += '<div class="mbsc-sc-whl-w ' + (w.cssClass || '') + (w.multiple ? ' mbsc-sc-whl-multi' : '') + '" style="' + (s.width ? 'width:' + (s.width[l] || s.width) + 'px;' : (s.minWidth ? 'min-width:' + (s.minWidth[l] || s.minWidth) + 'px;' : '') + (s.maxWidth ? 'max-width:' + (s.maxWidth[l] || s.maxWidth) + 'px;' : '')) + '">' + '<div class="mbsc-sc-whl-o" style="' + style + '"></div>' + highlight + '<div tabindex="0" aria-live="off" aria-label="' + lbl + '"' + (w.multiple ? ' aria-multiselectable="true"' : '') + ' role="listbox" data-index="' + l + '" class="mbsc-sc-whl"' + ' style="' + 'height:' + s.rows * itemHeight * (scroll3d ? 1.1 : 1) + 'px;">' + (showScrollArrows ? '<div data-index="' + l + '" data-dir="inc" class="mbsc-sc-btn mbsc-sc-btn-plus ' + (s.btnPlusClass || '') + '" style="height:' + itemHeight + 'px;line-height:' + itemHeight + 'px;"></div>' + // + button
                '<div data-index="' + l + '" data-dir="dec" class="mbsc-sc-btn mbsc-sc-btn-minus ' + (s.btnMinusClass || '') + '" style="height:' + itemHeight + 'px;line-height:' + itemHeight + 'px;"></div>' : '') + // - button
                '<div class="mbsc-sc-lbl">' + lbl + '</div>' + // Wheel label
                '<div class="mbsc-sc-whl-c"' + ' style="height:' + itemHeight3d + 'px;margin-top:-' + (itemHeight3d / 2 + 1) + 'px;' + style + '">' + '<div class="mbsc-sc-whl-sc" style="top:' + (itemHeight3d - itemHeight) / 2 + 'px;">';

                // Create wheel values
                html += generateItems(w, l, w._first, w._last) + '</div></div>';

                if (scroll3d) {
                    html += '<div class="mbsc-sc-whl-3d" style="height:' + itemHeight + 'px;margin-top:-' + itemHeight / 2 + 'px;">';
                    html += generateItems(w, l, w._first + batchSize - batchSize3d + 1, w._last - batchSize + batchSize3d, true);
                    html += '</div>';
                }

                html += '</div></div>';

                l++;
            });

            html += '</div></div>';
        });

        if (maxPopupWidth) {
            s.maxPopupWidth = maxPopupWidth;
        }

        return html;
    };

    that._attachEvents = function ($markup) {
        (0, _core.$)('.mbsc-sc-btn', $markup).on('touchstart mousedown', onBtnStart).on('touchmove', onBtnMove).on('touchend touchcancel', onBtnEnd);

        (0, _core.$)('.mbsc-sc-whl', $markup).on('keydown', onKeyDown).on('keyup', onKeyUp);
    };

    that._detachEvents = function () {
        for (var i = 0; i < wheels.length; i++) {
            wheels[i]._scroller.destroy();
        }
    };

    that._markupReady = function ($m) {
        $markup = $m;

        (0, _core.$)('.mbsc-sc-whl-w', $markup).each(function (i) {
            var idx,
                $wh = (0, _core.$)(this),
                wheel = wheels[i],
                maxScroll = -(wheel.min - wheel._offset + (wheel.multiple && !scroll3d ? Math.floor(s.rows / 2) : 0)) * itemHeight,
                minScroll = Math.min(maxScroll, -(wheel.max - wheel._offset - (wheel.multiple && !scroll3d ? Math.floor(s.rows / 2) : 0)) * itemHeight);

            wheel._$markup = $wh;
            wheel._$scroller = (0, _core.$)('.mbsc-sc-whl-sc', this);
            wheel._$3d = (0, _core.$)('.mbsc-sc-whl-3d', this);

            wheel._scroller = new _scrollview2.default(this, {
                mousewheel: s.mousewheel,
                moveElement: wheel._$scroller,
                initialPos: (wheel._first - wheel._index) * itemHeight,
                contSize: 0,
                snap: itemHeight,
                minScroll: minScroll,
                maxScroll: maxScroll,
                maxSnapScroll: batchSize,
                prevDef: true,
                stopProp: true,
                timeUnit: 3,
                easing: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
                sync: function sync(pos, time, easing) {
                    if (scroll3d) {
                        wheel._$3d[0].style[_dom.jsPrefix + 'Transition'] = time ? _dom.cssPrefix + 'transform ' + Math.round(time) + 'ms ' + easing : '';
                        wheel._$3d[0].style[_dom.jsPrefix + 'Transform'] = 'rotateX(' + -pos / itemHeight * scroll3dAngle + 'deg)';
                    }
                },
                onStart: function onStart(ev, inst) {
                    inst.settings.readonly = isReadOnly(i);
                },
                onGestureStart: function onGestureStart() {
                    $wh.addClass('mbsc-sc-whl-a mbsc-sc-whl-anim');

                    trigger('onWheelGestureStart', {
                        index: i
                    });
                },
                onGestureEnd: function onGestureEnd(ev) {
                    var dir = ev.direction == 90 ? 1 : 2,
                        time = ev.duration,
                        pos = ev.destinationY;

                    idx = Math.round(-pos / itemHeight) + wheel._offset;

                    setWheelValue(wheel, i, idx, time, dir);
                },
                onAnimationStart: function onAnimationStart() {
                    $wh.addClass('mbsc-sc-whl-anim');
                },
                onAnimationEnd: function onAnimationEnd() {
                    $wh.removeClass('mbsc-sc-whl-a mbsc-sc-whl-anim');

                    trigger('onWheelAnimationEnd', {
                        index: i
                    });

                    wheel._$3d.find('.mbsc-sc-itm-del').remove();
                },
                onMove: function onMove(ev) {
                    infinite(wheel, i, ev.posY);
                },
                onBtnTap: function onBtnTap(ev) {
                    onItemTap(i, (0, _core.$)(ev.target));
                }
            });
        });

        scrollToPos();
    };

    that._fillValue = function () {
        that._hasValue = true;
        setValue(true, true, 0, true);
    };

    that._clearValue = function () {
        (0, _core.$)('.mbsc-sc-whl-multi .mbsc-sc-itm-sel', $markup).removeClass(selectedClass).removeAttr('aria-selected');
    };

    that._readValue = function () {
        var v = $elm.val() || '',
            l = 0;

        if (v !== '') {
            that._hasValue = true;
        }

        that._tempWheelArray = tempWheelArray = that._hasValue && that._wheelArray ? that._wheelArray.slice(0) : s.parseValue.call(el, v, that) || [];

        that._tempSelected = (0, _core.extend)(true, {}, that._selected);

        _core.$.each(s.wheels, function (i, wg) {
            _core.$.each(wg, function (j, w) {
                // Wheels
                wheels[l] = initWheel(w, l);
                l++;
            });
        });

        setValue(false, false, 0, true);

        trigger('onRead');
    };

    that.__processSettings = function () {
        s = that.settings;
        trigger = that.trigger;
        lines = s.multiline;
        selectedClass = 'mbsc-sc-itm-sel mbsc-ic mbsc-ic-' + s.checkIcon;
        wheels = [];
        wheelsMap = {};
    };

    that.__init = function () {
        showScrollArrows = s.showScrollArrows;
        scroll3d = s.scroll3d && !force2D && !showScrollArrows;
        itemHeight = s.height;
        itemHeight3d = scroll3d ? Math.round((itemHeight - (itemHeight * s.rows / 2 + 3) * 0.03) / 2) * 2 : itemHeight;
        batchSize3d = Math.round(s.rows * 1.8);
        scroll3dAngle = 360 / (batchSize3d * 2);

        // Ensure a minimum number of 3 items if clickpick buttons present
        if (showScrollArrows) {
            s.rows = Math.max(3, s.rows);
        }

        s.cssClass = (s.cssClass || '') + ' mbsc-sc';
    };

    that._getItemValue = getItemValue;

    // Properties
    that._tempSelected = {};
    that._selected = {};

    // Constructor
    if (!inherit) {
        that.init(settings);
    }
};

// Extend defaults
Scroller.prototype = {
    _hasDef: true,
    _hasTheme: true,
    _hasLang: true,
    _hasPreset: true,
    _class: 'scroller',
    _defaults: (0, _core.extend)({}, _frame2.default.prototype._defaults, {
        // Options
        minWidth: 80,
        height: 40,
        rows: 3,
        multiline: 1,
        delay: 300,
        readonly: false,
        showLabel: true,
        setOnTap: false,
        wheels: [],
        preset: '',
        speedUnit: 0.0012,
        timeUnit: 0.08,
        checkIcon: 'checkmark',
        validate: function validate() {},
        formatValue: function formatValue(d) {
            return d.join(' ');
        },
        parseValue: function parseValue(value, inst) {
            var val = [],
                ret = [],
                i = 0,
                found,
                data;

            if (value !== null && value !== undefined) {
                val = (value + '').split(' ');
            }

            _core.$.each(inst.settings.wheels, function (j, wg) {
                _core.$.each(wg, function (k, w) {
                    data = w.data;
                    // Default to first wheel value if not found
                    found = inst._getItemValue(data[0]);
                    _core.$.each(data, function (l, item) {
                        // Don't do strict comparison
                        if (val[i] == inst._getItemValue(item)) {
                            found = inst._getItemValue(item);
                            return false;
                        }
                    });
                    ret.push(found);
                    i++;
                });
            });
            return ret;
        }
    })
};

_core2.default.classes.Scroller = Scroller;

exports.default = Scroller;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","../util/dom":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/dom.js","../util/misc":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/misc.js","../util/platform":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/platform.js","../util/tap":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/tap.js","./frame":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/frame.js","./scrollview":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/scrollview.js","babel-runtime/core-js/object/keys":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/keys.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/scrollview.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

var _platform = require('../util/platform');

var _tap = require('../util/tap');

var _dom = require('../util/dom');

var _misc = require('../util/misc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classes = _core2.default.classes,
    isIOS = _platform.os == 'ios';

var ScrollView = function ScrollView(el, settings, inherit) {
    var $btn,
        btnTimer,
        contSize,
        diffX,
        diffY,
        diff,
        dir,
        easing,
        elastic,
        endX,
        endY,
        eventObj,
        isBtn,
        maxScroll,
        maxSnapScroll,
        minScroll,
        move,
        moving,
        nativeScroll,
        rafID,

    //rafMoveID,
    rafRunning,
        scrolled,
        scrollDebounce,
        scrollTimer,
        snap,
        snapPoints,
        startPos,
        startTime,
        startX,
        startY,
        style,
        target,
        transTimer,
        threshold,
        trigger,
        vertical,
        that = this,
        currPos,
        currSnap = 0,
        currSnapDir = 1,
        s = settings,
        $elm = (0, _core.$)(el);

    function onStart(ev) {

        trigger('onStart', {
            domEvent: ev
        });

        // Better performance if there are tap events on document
        if (s.stopProp) {
            ev.stopPropagation();
        }

        if (s.prevDef || ev.type == 'mousedown') {
            // Prevent touch highlight and focus
            ev.preventDefault();
        }

        if (s.readonly || s.lock && moving) {
            return;
        }

        if ((0, _dom.testTouch)(ev, this) && !move) {

            if ($btn) {
                $btn.removeClass('mbsc-btn-a');
            }

            // Highlight button
            isBtn = false;

            if (!moving) {
                $btn = (0, _core.$)(ev.target).closest('.mbsc-btn-e', this);

                if ($btn.length && !$btn.hasClass('mbsc-btn-d')) {
                    isBtn = true;
                    btnTimer = setTimeout(function () {
                        $btn.addClass('mbsc-btn-a');
                    }, 100);
                }
            }

            move = true;
            scrolled = false;
            nativeScroll = false;

            that.scrolled = moving;

            startX = (0, _tap.getCoord)(ev, 'X');
            startY = (0, _tap.getCoord)(ev, 'Y');
            endX = startX;
            diffX = 0;
            diffY = 0;
            diff = 0;

            startTime = new Date();

            startPos = +(0, _dom.getPosition)(target, vertical) || 0;

            // Stop scrolling animation, 1ms is needed for Android 4.0
            if (moving) {
                scroll(startPos, isIOS ? 0 : 1);
            }

            if (ev.type === 'mousedown') {
                (0, _core.$)(document).on('mousemove', onMove).on('mouseup', onEnd);
            }
        }
    }

    function onMove(ev) {
        if (move) {
            if (s.stopProp) {
                ev.stopPropagation();
            }

            endX = (0, _tap.getCoord)(ev, 'X');
            endY = (0, _tap.getCoord)(ev, 'Y');
            diffX = endX - startX;
            diffY = endY - startY;
            diff = vertical ? diffY : diffX;

            if (isBtn && (Math.abs(diffY) > s.thresholdY || Math.abs(diffX) > s.thresholdX)) {
                clearTimeout(btnTimer);
                $btn.removeClass('mbsc-btn-a');
                isBtn = false;
            }

            if (that.scrolled || !nativeScroll && Math.abs(diff) > threshold) {

                if (!scrolled) {
                    trigger('onGestureStart', eventObj);
                }

                that.scrolled = scrolled = true;

                if (!rafRunning) {
                    rafRunning = true;
                    rafID = (0, _platform.raf)(onMoving);
                }
            }

            if (vertical || s.scrollLock) {
                // Always prevent native scroll, if vertical
                ev.preventDefault();
            } else {
                if (that.scrolled) {
                    // Prevent native scroll
                    ev.preventDefault();
                } else if (Math.abs(diffY) > 7) {
                    nativeScroll = true;
                    that.scrolled = true;
                    $elm.trigger('touchend');
                }
            }
        }
    }

    function onMoving() {
        //var time = new Date();

        if (maxSnapScroll) {
            diff = (0, _misc.constrain)(diff, -snap * maxSnapScroll, snap * maxSnapScroll);
        }

        scroll((0, _misc.constrain)(startPos + diff, minScroll - elastic, maxScroll + elastic));

        //if (s.momentum) {
        //    startTime = time;
        //    lastX = endX;
        //}

        rafRunning = false;
    }

    function onEnd(ev) {
        if (move) {
            var speed,
                time = new Date() - startTime;

            // Better performance if there are tap events on document
            if (s.stopProp) {
                ev.stopPropagation();
            }

            (0, _platform.rafc)(rafID);
            rafRunning = false;

            if (!nativeScroll && that.scrolled) {
                // Calculate momentum distance
                if (s.momentum && time < 300) {
                    speed = diff / time;
                    //speed = Math.abs(lastX - endX) / time;
                    diff = Math.max(Math.abs(diff), speed * speed / s.speedUnit) * (diff < 0 ? -1 : 1);
                }

                finalize(diff);
            }

            if (isBtn) {
                clearTimeout(btnTimer);
                $btn.addClass('mbsc-btn-a');
                setTimeout(function () {
                    $btn.removeClass('mbsc-btn-a');
                }, 100);

                if (!nativeScroll && !that.scrolled) {

                    // Prevent phantom clicks
                    //if (ev.type === 'touchend') {
                    //    util.preventClick();
                    //}

                    trigger('onBtnTap', {
                        target: $btn[0]
                    });
                }
            }

            // Detach document events
            if (ev.type == 'mouseup') {
                (0, _core.$)(document).off('mousemove', onMove).off('mouseup', onEnd);
            }

            move = false;
        }
    }

    function onScroll(ev) {
        ev = ev.originalEvent || ev;

        diff = vertical ? ev.deltaY || ev.wheelDelta || ev.detail : ev.deltaX;

        trigger('onStart', {
            domEvent: ev
        });

        if (s.stopProp) {
            ev.stopPropagation();
        }

        if (diff) {

            ev.preventDefault();

            //diff = diff < 0 ? 20 : -20;

            if (ev.deltaMode && ev.deltaMode == 1) {
                diff *= 5;
            }

            diff = (0, _misc.constrain)(-diff, -20, 20);

            startPos = currPos;

            if (s.readonly || startPos + diff < minScroll || startPos + diff > maxScroll) {
                return;
            }

            if (!scrolled) {
                eventObj = {
                    posX: vertical ? 0 : currPos,
                    posY: vertical ? currPos : 0,
                    originX: vertical ? 0 : startPos,
                    originY: vertical ? startPos : 0,
                    direction: diff > 0 ? vertical ? 270 : 360 : vertical ? 90 : 180
                };
                trigger('onGestureStart', eventObj);
            }

            if (!rafRunning) {
                rafRunning = true;
                rafID = (0, _platform.raf)(onMoving);
            }

            scrolled = true;

            clearTimeout(scrollDebounce);
            scrollDebounce = setTimeout(function () {
                (0, _platform.rafc)(rafID);
                rafRunning = false;
                scrolled = false;

                finalize(diff);
            }, 200);
        }
    }

    function finalize(diff) {
        var i, time, newPos;

        // Limit scroll to snap size
        if (maxSnapScroll) {
            diff = (0, _misc.constrain)(diff, -snap * maxSnapScroll, snap * maxSnapScroll);
        }

        // Calculate snap and limit between min and max
        newPos = (0, _misc.constrain)(Math.round((startPos + diff) / snap) * snap, minScroll, maxScroll);
        currSnap = Math.round(newPos / snap);

        // Snap to nearest element
        if (snapPoints) {
            if (diff < 0) {
                for (i = snapPoints.length - 1; i >= 0; i--) {
                    if (Math.abs(newPos) + contSize >= snapPoints[i].breakpoint) {
                        currSnap = i;
                        currSnapDir = 2;
                        newPos = snapPoints[i].snap2;
                        break;
                    }
                }
            } else if (diff >= 0) {
                for (i = 0; i < snapPoints.length; i++) {
                    if (Math.abs(newPos) <= snapPoints[i].breakpoint) {
                        currSnap = i;
                        currSnapDir = 1;
                        newPos = snapPoints[i].snap1;
                        break;
                    }
                }
            }
            newPos = (0, _misc.constrain)(newPos, minScroll, maxScroll);
        }

        time = s.time || (currPos < minScroll || currPos > maxScroll ? 1000 : Math.max(1000, Math.abs(newPos - currPos) * s.timeUnit));

        eventObj.destinationX = vertical ? 0 : newPos;
        eventObj.destinationY = vertical ? newPos : 0;
        eventObj.duration = time;
        eventObj.transitionTiming = easing;

        trigger('onGestureEnd', eventObj);

        // Scroll to the calculated position
        scroll(newPos, time);
    }

    function scroll(pos, time, tap, callback) {
        var changed = pos != currPos,
            anim = time > 1,
            done = function done() {
            clearInterval(scrollTimer);
            clearTimeout(transTimer);
            //rafc(rafMoveID);

            moving = false;
            currPos = pos;
            eventObj.posX = vertical ? 0 : pos;
            eventObj.posY = vertical ? pos : 0;

            if (changed) {
                trigger('onMove', eventObj);
            }

            if (anim) {
                //that.scrolled = false;
                trigger('onAnimationEnd', eventObj);
            }

            if (callback) {
                callback();
            }
        };

        eventObj = {
            posX: vertical ? 0 : currPos,
            posY: vertical ? currPos : 0,
            originX: vertical ? 0 : startPos,
            originY: vertical ? startPos : 0,
            direction: pos - currPos > 0 ? vertical ? 270 : 360 : vertical ? 90 : 180
        };

        currPos = pos;

        if (anim) {
            eventObj.destinationX = vertical ? 0 : pos;
            eventObj.destinationY = vertical ? pos : 0;
            eventObj.duration = time;
            eventObj.transitionTiming = easing;

            trigger('onAnimationStart', eventObj);
        }

        style[_dom.jsPrefix + 'Transition'] = time ? _dom.cssPrefix + 'transform ' + Math.round(time) + 'ms ' + easing : '';
        style[_dom.jsPrefix + 'Transform'] = 'translate3d(' + (vertical ? '0,' + pos + 'px,' : pos + 'px,' + '0,') + '0)';

        if (!changed && !moving || !time || time <= 1) {
            done();
        } else if (time) {
            moving = !tap;

            clearInterval(scrollTimer);
            scrollTimer = setInterval(function () {
                //rafMoveID = raf(function () {
                var p = +(0, _dom.getPosition)(target, vertical) || 0;
                eventObj.posX = vertical ? 0 : p;
                eventObj.posY = vertical ? p : 0;
                trigger('onMove', eventObj);
                // Trigger done if close to the end
                if (Math.abs(p - pos) < 2) {
                    done();
                }
                //});
            }, 100);

            clearTimeout(transTimer);
            transTimer = setTimeout(function () {
                done();
                //style[pr + 'Transition'] = '';
            }, time);

            // target.off(transEnd).on(transEnd, function (e) {
            //     if (e.target === target[0]) {
            //         target.off(transEnd);
            //         style[pr + 'Transition'] = '';
            //         done();
            //     }
            // });
        }

        if (s.sync) {
            s.sync(pos, time, easing);
        }
    }

    // Call the parent constructor
    _core.Base.call(this, el, settings, true);

    that.scrolled = false;

    /**
     * Scroll to the given position or element
     */
    that.scroll = function (pos, time, tap, callback) {
        // If position is not numeric, scroll to element
        if (!(0, _misc.isNumeric)(pos)) {
            pos = Math.ceil(((0, _core.$)(pos, el).length ? Math.round(target.offset()[dir] - (0, _core.$)(pos, el).offset()[dir]) : currPos) / snap) * snap;
        } else {
            pos = Math.round(pos / snap) * snap;
        }

        pos = (0, _misc.constrain)(pos, minScroll, maxScroll);

        currSnap = Math.round(pos / snap);

        startPos = currPos;

        scroll(pos, time, tap, callback);
    };

    that.refresh = function (noScroll) {
        var tempScroll;

        contSize = s.contSize === undefined ? vertical ? $elm.height() : $elm.width() : s.contSize;
        minScroll = s.minScroll === undefined ? Math.min(0, vertical ? contSize - target.height() : contSize - target.width()) : s.minScroll;
        maxScroll = s.maxScroll === undefined ? 0 : s.maxScroll;
        snapPoints = null;

        if (!vertical && s.rtl) {
            tempScroll = maxScroll;
            maxScroll = -minScroll;
            minScroll = -tempScroll;
        }

        if ((0, _misc.isString)(s.snap)) {
            snapPoints = [];
            target.find(s.snap).each(function () {
                var offset = vertical ? this.offsetTop : this.offsetLeft,
                    size = vertical ? this.offsetHeight : this.offsetWidth;

                snapPoints.push({
                    breakpoint: offset + size / 2,
                    snap1: -offset,
                    snap2: contSize - offset - size
                });
            });
        }

        snap = (0, _misc.isNumeric)(s.snap) ? s.snap : 1;
        maxSnapScroll = s.snap ? s.maxSnapScroll : 0;
        easing = s.easing;
        elastic = s.elastic ? (0, _misc.isNumeric)(s.snap) ? snap : (0, _misc.isNumeric)(s.elastic) ? s.elastic : 0 : 0; // && s.snap ? snap : 0;

        if (currPos === undefined) {
            currPos = s.initialPos;
            currSnap = Math.round(currPos / snap);
        }

        if (!noScroll) {
            that.scroll(s.snap ? snapPoints ? snapPoints[currSnap]['snap' + currSnapDir] : currSnap * snap : currPos);
        }
    };

    that._processSettings = function () {
        vertical = s.axis == 'Y';
        dir = vertical ? 'top' : 'left';
        target = s.moveElement || $elm.children().eq(0);
        style = target[0].style;
        threshold = vertical ? s.thresholdY : s.thresholdX;
    };

    that._init = function () {
        that.refresh();

        $elm.on('touchstart mousedown', onStart).on('touchmove', onMove).on('touchend touchcancel', onEnd);

        if (s.mousewheel) {
            $elm.on('wheel mousewheel', onScroll);
        }

        if (el.addEventListener) {
            el.addEventListener('click', function (ev) {
                if (that.scrolled) {
                    that.scrolled = false;
                    ev.stopPropagation();
                    ev.preventDefault();
                }
            }, true);
        }

        //el.addEventListener('touchend', function (ev) {
        //    if (scrolled) {
        //        ev.stopPropagation();
        //    }
        //}, true);
    };

    /**
     * Destroy
     */
    that._destroy = function () {
        clearInterval(scrollTimer);

        $elm.off('touchstart mousedown', onStart).off('touchmove', onMove).off('touchend touchcancel', onEnd).off('wheel mousewheel', onScroll);
    };

    // Constructor

    s = that.settings;
    trigger = that.trigger;

    if (!inherit) {
        that.init(settings);
    }
};

ScrollView.prototype = {
    _class: 'scrollview',
    _defaults: {
        speedUnit: 0.0022,
        //timeUnit: 0.8,
        timeUnit: 3,
        initialPos: 0,
        axis: 'Y',
        thresholdX: 10,
        thresholdY: 5,
        //easing: 'ease-out',
        easing: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
        stopProp: true,
        momentum: true,
        mousewheel: true,
        elastic: true
    }
};

classes.ScrollView = ScrollView;

_core2.default.presetShort('scrollview', 'ScrollView', false);

exports.default = ScrollView;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","../util/dom":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/dom.js","../util/misc":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/misc.js","../util/platform":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/platform.js","../util/tap":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/tap.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/segmented.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _core = require('../core/core');

var _formControl = require('./form-control');

var _formControl2 = _interopRequireDefault(_formControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SegmentedItem = function (_FormControl) {
    (0, _inherits3.default)(SegmentedItem, _FormControl);

    function SegmentedItem(elm, settings) {
        (0, _classCallCheck3.default)(this, SegmentedItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SegmentedItem.__proto__ || (0, _getPrototypeOf2.default)(SegmentedItem)).call(this, elm, settings));

        var $segmentCont = void 0;
        var $segment = void 0;

        var $elm = _this._$elm;
        var $parent = _this._$parent;

        if (!$parent.hasClass('mbsc-segmented-item-ready')) {
            $segmentCont = (0, _core.$)('<div class="mbsc-segmented"></div>');

            $parent.after($segmentCont);
            $parent.parent().find('input[name="' + $elm.attr('name') + '"]').each(function () {
                var $input = (0, _core.$)(this);

                $segment = $input.parent().addClass('mbsc-segmented-item mbsc-segmented-item-ready');

                (0, _core.$)('<span class="mbsc-segmented-content">' + ($input.attr('data-icon') ? '<span class="mbsc-ic mbsc-ic-' + $input.attr('data-icon') + '"></span>' : '') + '</span>').append($segment.contents()).appendTo($segment);

                $segment.prepend($input);

                $segmentCont.append($segment);
            });
        }

        _this._$rippleElm = $elm.next();
        return _this;
    }

    return SegmentedItem;
}(_formControl2.default);

exports.default = SegmentedItem;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","./form-control":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/form-control.js","babel-runtime/core-js/object/get-prototype-of":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/inherits":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/select.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _core = require('../core/core');

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function (_Input) {
    (0, _inherits3.default)(Select, _Input);

    function Select(elm, settings) {
        (0, _classCallCheck3.default)(this, Select);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this, elm, settings));

        var $elm = _this._$elm;
        var $parent = _this._$parent;
        var $existing = $parent.find('input.mbsc-control');
        var $input = $existing.length ? $existing : (0, _core.$)('<input tabindex="-1" class="mbsc-control" readonly>');

        _this._$input = $input;

        $parent.addClass('mbsc-select' + (_this._$frame ? ' mbsc-select-inline' : ''));

        $elm.after($input);

        $input.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>');

        // Check if select and mobiscroll select was not initialized
        if (!$elm.hasClass('mbsc-comp')) {
            elm.addEventListener('change', _this);
            _this._setText();
        }
        return _this;
    }

    (0, _createClass3.default)(Select, [{
        key: 'destroy',
        value: function destroy() {
            (0, _get3.default)(Select.prototype.__proto__ || (0, _getPrototypeOf2.default)(Select.prototype), 'destroy', this).call(this);
            this._$elm.after(this._$input);
            this._elm.removeEventListener('change', this);
        }
    }, {
        key: 'handleEvent',
        value: function handleEvent(ev) {
            (0, _get3.default)(Select.prototype.__proto__ || (0, _getPrototypeOf2.default)(Select.prototype), 'handleEvent', this).call(this, ev);

            if (ev.type == 'change') {
                this._setText();
            }
        }
    }, {
        key: '_setText',
        value: function _setText() {
            var elm = this._elm;
            if (!this._$elm.hasClass('mbsc-comp')) {
                this._$input.val(elm.selectedIndex != -1 ? elm.options[elm.selectedIndex].text : '');
            }
        }
    }]);
    return Select;
}(_input2.default);

exports.default = Select;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","./input":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/input.js","babel-runtime/core-js/object/get-prototype-of":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/get":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/get.js","babel-runtime/helpers/inherits":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/slider-base.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _tap = require('../util/tap');

var _dom = require('../util/dom');

var _misc = require('../util/misc');

var _progressBase = require('./progress-base');

var _progressBase2 = _interopRequireDefault(_progressBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderBase = function SliderBase(elm, settings, inherit) {
    var $elm,
        $handle,
        $handleCont,
        $handles,
        $listener,
        $parent,
        $track,
        action,
        changed,
        diffX,
        diffY,
        diff,
        endX,
        endY,
        handleIndex,
        isRtl,
        live,
        max,
        min,
        moved,
        multiple,
        oldValue,
        step,
        s,
        scale,
        startX,
        startY,
        stepDecimal,
        timer,
        totalWidth,
        value,
        that = this,
        lastUpdate = new Date();

    function onStart(ev) {
        if ((0, _dom.testTouch)(ev, this) && !action && !elm.disabled /* TRIALCOND */) {
                if (s.stopProp) {
                    ev.stopPropagation();
                }

                action = true;
                moved = false;
                changed = false;
                startX = (0, _tap.getCoord)(ev, 'X');
                startY = (0, _tap.getCoord)(ev, 'Y');
                endX = startX;

                $track.removeClass('mbsc-progress-anim');
                $handle = multiple ? (0, _core.$)('.mbsc-slider-handle', this) : $handles;
                if ($handleCont) {
                    $handleCont.removeClass('mbsc-handle-curr');
                }
                $handleCont = $handle.parent().addClass('mbsc-active mbsc-handle-curr');

                handleIndex = +$handle.attr('data-index');
                totalWidth = $track[0].offsetWidth;
                diff = $track[0].getBoundingClientRect().left;

                if (ev.type === 'mousedown') {
                    ev.preventDefault();
                    (0, _core.$)(document).on('mousemove', onMove).on('mouseup', onEnd);
                }
            }
    }

    function onMove(ev) {
        if (action) {
            endX = (0, _tap.getCoord)(ev, 'X');
            endY = (0, _tap.getCoord)(ev, 'Y');
            diffX = endX - startX;
            diffY = endY - startY;

            if (Math.abs(diffX) > 5 || moved) {

                moved = true;

                if (Math.abs(lastUpdate - new Date()) > 50) {
                    lastUpdate = new Date();
                    updateSlider(endX, s.round, live);
                }
            }

            if (moved) {
                ev.preventDefault();
            } else if (Math.abs(diffY) > 7) {
                cleanUp(ev);
            }
        }
    }

    function onEnd(ev) {
        if (action) {
            ev.preventDefault();

            if (!multiple) {
                $track.addClass('mbsc-progress-anim');
            }

            updateSlider(endX, true, true);

            if (!moved && !changed) {

                if (ev.type == 'touchend') {
                    // Prevent ghost click
                    (0, _tap.preventClick)();
                }

                that._onTap(value[handleIndex]);
            }

            cleanUp();
        }
    }

    function onCancel() {
        if (action) {
            cleanUp();
        }
    }

    function onChange() {
        var v = that._readValue((0, _core.$)(this)),
            i = +(0, _core.$)(this).attr('data-index');

        if (v !== value[i]) {
            value[i] = v;
            oldValue[i] = v;
            updateValue(v, i);
        }
    }

    function onClick(ev) {
        // Prevent propagating click to label
        ev.stopPropagation();
    }

    function onLabelClick(ev) {
        // Prevent change on label click for swithes
        ev.preventDefault();
    }

    function onKeyDown(ev) {
        var dir;

        if (!elm.disabled) {

            switch (ev.keyCode) {
                case 38:
                case 39:
                    dir = 1;
                    break;
                case 40:
                case 37:
                    dir = -1;
                    break;
            }

            if (dir) {
                ev.preventDefault();

                if (!timer) {

                    handleIndex = +(0, _core.$)(this).attr('data-index');

                    updateValue(value[handleIndex] + step * dir, handleIndex, true);

                    timer = setInterval(function () {
                        updateValue(value[handleIndex] + step * dir, handleIndex, true);
                    }, 200);
                }
            }
        }
    }

    function onKeyUp(ev) {
        ev.preventDefault();
        clearInterval(timer);
        timer = null;
    }

    function cleanUp() {
        action = false;

        $handleCont.removeClass('mbsc-active');

        // Detach document events
        (0, _core.$)(document).off('mousemove', onMove).off('mouseup', onEnd);
    }

    function updateSlider(pos, round, fill) {
        var percent = round ? Math.min(Math.round(Math.max((pos - diff) * 100 / totalWidth, 0) / scale / step) * step * 100 / (max - min), 100) : Math.max(0, Math.min((pos - diff) * 100 / totalWidth, 100));

        if (isRtl) {
            percent = 100 - percent;
        }

        updateValue(Math.round((min + percent / scale) * stepDecimal) / stepDecimal, handleIndex, fill, percent);
    }

    function getPercent(v) {
        return (v - min) * 100 / (max - min);
    }

    function updateValue(v, index, fill, percent, refresh, change) {
        var $handle = $handles.eq(index),
            $handleCont = $handle.parent();

        v = Math.min(max, Math.max(v, min));

        if (change === undefined) {
            change = fill;
        }

        if (that._update) {
            v = that._update(v, value, index, percent, multiple, refresh, $handleCont);
        } else {
            $handleCont.css({
                left: isRtl ? 'auto' : (percent || getPercent(v)) + '%',
                right: isRtl ? (percent || getPercent(v)) + '%' : 'auto'
            });
        }

        if (v > min) {
            $handleCont.removeClass('mbsc-slider-start');
        } else if (value[index] > min || refresh) {
            $handleCont.addClass('mbsc-slider-start');
        }

        // Check if value changed
        if (fill && oldValue[index] != v) {
            changed = true;

            oldValue[index] = v;

            // Store new value
            value[index] = v;

            // Set new value to the input
            that._fillValue(v, index, change);
        }

        $handle.attr('aria-valuenow', v);
    }

    // Call the parent constructor
    _progressBase2.default.call(this, elm, settings, true);

    that._onTap = _misc.noop;

    that.___init = _misc.noop;

    that.___destroy = _misc.noop;

    that._attachChange = function () {
        $elm.on(s.changeEvent, onChange);
    };

    that.__init = function (ss) {
        var wasInit;

        if ($handles) {
            wasInit = true;
            $handles.parent().remove();
        }

        that.___init(ss);

        $parent = that._$parent;
        $track = that._$track;
        $elm = $parent.find('input');

        s = that.settings;
        min = that._min;
        max = that._max;
        step = that._step;
        live = that._live;
        stepDecimal = step % 1 !== 0 ? 100 / (+(step % 1).toFixed(2) * 100) : 1;
        scale = 100 / (max - min) || 100;
        multiple = $elm.length > 1;
        isRtl = s.rtl;
        value = [];
        oldValue = [];

        // Read values
        $elm.each(function (i) {
            value[i] = that._readValue((0, _core.$)(this));
            (0, _core.$)(this).attr('data-index', i);
        });

        $handles = $parent.find('.mbsc-slider-handle');
        $listener = $parent.find(multiple ? '.mbsc-slider-handle-cont' : '.mbsc-progress-cont');

        // Attach events
        $handles.on('keydown', onKeyDown).on('keyup', onKeyUp).on('blur', onKeyUp);

        $listener.on('touchstart mousedown', onStart).on('touchmove', onMove).on('touchend touchcancel', onEnd).on('pointercancel', onCancel);

        if (!wasInit) {
            $elm.on('click', onClick);

            $parent.on('click', onLabelClick);
        }
    };

    that.__destroy = function () {
        $parent.off('click', onLabelClick);

        $elm.off(s.changeEvent, onChange).off('click', onClick);

        $handles.off('keydown', onKeyDown).off('keyup', onKeyUp).off('blur', onKeyUp);

        $listener.off('touchstart mousedown', onStart).off('touchmove', onMove).off('touchend touchcancel', onEnd).off('pointercancel', onCancel);

        that.___destroy();
    };

    that.refresh = function () {
        $elm.each(function (i) {
            updateValue(that._readValue((0, _core.$)(this)), i, true, false, true, false);
        });
    };

    that.getVal = function () {
        return multiple ? value.slice(0) : value[0];
    };

    that.setVal = that._setVal = function (val, fill, change) {
        if (!_core.$.isArray(val)) {
            val = [val];
        }

        _core.$.each(val, function (i, v) {
            value[i] = v;
        });

        _core.$.each(val, function (i, v) {
            updateValue(v, i, true, false, true, change);
        });
    };

    if (!inherit) {
        that.init(settings);
    }
};

SliderBase.prototype = {
    _class: 'sliderbase'
};

exports.default = SliderBase;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","../util/dom":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/dom.js","../util/misc":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/misc.js","../util/tap":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/tap.js","./progress-base":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/progress-base.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/slider.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

var _progress = require('./progress');

var _progress2 = _interopRequireDefault(_progress);

var _sliderBase = require('./slider-base');

var _sliderBase2 = _interopRequireDefault(_sliderBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slider = function Slider(elm, settings, inherit) {
    var $elm,
        $parent,
        $progress,
        $tooltips,
        $track,
        hasProgress,
        hasTooltip,
        isRange,
        isRtl,
        max,
        min,
        step,
        s,
        that = this;

    function getPercent(v) {
        return (v - min) * 100 / (max - min);
    }

    function getBoolAttr(attr, def) {
        var v = $elm.attr(attr);
        return v === undefined || v === '' ? def : v === 'true';
    }

    // Call the parent constructor
    _progress2.default.call(this, elm, settings, true);

    var progressInit = that.__init,
        progressDestroy = that.__destroy;

    _sliderBase2.default.call(this, elm, settings, true);

    var sliderInit = that.__init,
        sliderDestroy = that.__destroy;

    // ---

    that.__init = function (ss) {
        progressInit(ss);
        sliderInit(ss);
    };

    that.__destroy = function () {
        progressDestroy();
        sliderDestroy();
    };

    that._update = function (v, value, index, percent, multiple, refresh, $handleCont) {
        if (isRange) {
            if (index === 0) {
                v = Math.min(v, value[1]);
                $progress.css({
                    width: getPercent(value[1]) - getPercent(v) + '%',
                    left: isRtl ? 'auto' : getPercent(v) + '%',
                    right: isRtl ? getPercent(v) + '%' : 'auto'
                });
            } else {
                v = Math.max(v, value[0]);
                $progress.css({
                    width: getPercent(v) - getPercent(value[0]) + '%'
                });
            }
        } else if (multiple || !hasProgress) {
            $handleCont.css({
                left: isRtl ? 'auto' : (percent || getPercent(v)) + '%',
                right: isRtl ? (percent || getPercent(v)) + '%' : 'auto'
            });
        } else {
            $progress.css('width', (percent || getPercent(v)) + '%');
        }

        if (hasTooltip) {
            $tooltips.eq(index).html(v);
        }

        // Display value in the specified container(s)
        if (!multiple && (value[index] != v || refresh)) {
            that._display(v);
        }

        // Return validated value
        return v;
    };

    that._readValue = function ($elm) {
        return +$elm.val();
    };

    that._fillValue = function (v, index, change) {
        $elm.eq(index).val(v);

        if (change) {
            $elm.eq(index).trigger('change');
        }
    };

    that.___init = function (ss) {
        var i, stepNr;

        if ($parent) {
            $parent.removeClass('mbsc-slider-has-tooltip');
            if (step != 1) {
                (0, _core.$)('.mbsc-slider-step', $track).remove();
            }
        }

        $parent = that._$parent;
        $track = that._$track;
        $progress = that._$progress;
        $elm = $parent.find('input');

        s = that.settings;
        min = that._min;
        max = that._max;
        that._step = step = ss.step === undefined ? +$elm.attr('step') || s.step : ss.step;
        that._live = getBoolAttr('data-live', s.live);
        hasTooltip = getBoolAttr('data-tooltip', s.tooltip);
        hasProgress = getBoolAttr('data-highlight', s.highlight) && $elm.length < 3;
        isRange = hasProgress && $elm.length == 2;
        isRtl = s.rtl;

        if (hasTooltip) {
            $parent.addClass('mbsc-slider-has-tooltip');
        }

        // Generate step marks
        if (step != 1) {
            stepNr = (max - min) / step;
            for (i = 0; i <= stepNr; ++i) {
                $track.append('<span class="mbsc-slider-step" style="' + (isRtl ? 'right' : 'left') + ':' + 100 / stepNr * i + '%"></span>');
            }
        }

        // Generate slider handles
        $elm.each(function (i) {
            if (this.type == 'range') {
                // Set min / max / step properties for all inputs
                (0, _core.$)(this).attr('min', min).attr('max', max).attr('step', step);
            }

            (hasProgress ? $progress : $track).append('<span class="mbsc-slider-handle-cont' + (isRange && !i ? ' mbsc-slider-handle-left' : '') + '">' + '<span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + min + '" aria-valuemax="' + max + '" data-index="' + i + '"></span>' + (hasTooltip ? '<span class="mbsc-slider-tooltip"></span>' : '') + '</span>');
        });

        $tooltips = $parent.find('.mbsc-slider-tooltip');
    };

    if (!inherit) {
        that.init(settings);
    }
};

Slider.prototype = {
    _class: 'progress',
    _css: 'mbsc-progress mbsc-slider',
    _hasTheme: true,
    _hasLang: true,
    _hasDef: true,
    _defaults: {
        changeEvent: 'change',
        stopProp: true,
        min: 0,
        max: 100,
        step: 1,
        live: true,
        highlight: true,
        round: true,
        returnAffix: true
    }
};

_core2.default.classes.Slider = Slider;

_core2.default.presetShort('slider', 'Slider');

exports.default = Slider;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","./progress":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/progress.js","./slider-base":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/slider-base.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/stepper.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

var _tap = require('../util/tap');

var _dom = require('../util/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stepper = function Stepper(control, settings) {
    var $btn,
        $btnPlus,
        $btnMinus,
        $controls,
        action,
        changed,
        diffX,
        diffY,
        displayValue,
        eX,
        eY,
        interval,
        max,
        min,
        ripple,
        step,
        s,
        sX,
        sY,
        theme,
        val,
        that = this,
        $control = (0, _core.$)(control),
        ready,
        $parent,
        old = val;

    function onKeyDown(ev) {
        if (ev.keyCode == 32) {
            ev.preventDefault();
            if (!action && !control.disabled) {
                $btn = (0, _core.$)(this).addClass('mbsc-active');
                updateStepper(ev);
            }
        }
    }

    function onKeyUp(ev) {
        if (action) {
            ev.preventDefault();
            stopStepper(true);
        }
    }

    function onStart(ev) {
        if ((0, _dom.testTouch)(ev, this) && !control.disabled /* TRIALCOND */) {

                $btn = (0, _core.$)(this).addClass('mbsc-active').trigger('focus');

                if (ripple && !$btn.hasClass('mbsc-step-disabled')) {
                    ripple.addRipple($btn.find('.mbsc-segmented-content'), ev);
                    // form.trigger('onControlActivate', {
                    //     target: $btn[0],
                    //     domEvent: ev
                    // });
                }

                updateStepper(ev);

                if (ev.type === 'mousedown') {
                    (0, _core.$)(document).on('mousemove', onMove).on('mouseup', onEnd);
                }
            }
    }

    function onEnd(ev) {
        if (action) {

            ev.preventDefault();

            stopStepper(true, ev);

            if (ev.type === 'mouseup') {
                (0, _core.$)(document).off('mousemove', onMove).off('mouseup', onEnd);
            }
        }
    }

    function onMove(ev) {
        if (action) {
            eX = (0, _tap.getCoord)(ev, 'X');
            eY = (0, _tap.getCoord)(ev, 'Y');
            diffX = eX - sX;
            diffY = eY - sY;

            if (Math.abs(diffX) > 7 || Math.abs(diffY) > 7) {
                stopStepper();
            }
        }
    }

    function onChange() {
        var v;

        if (!control.disabled) {
            v = parseFloat((0, _core.$)(this).val());
            moveStepper(isNaN(v) ? val : v);
        }
    }

    function moveStepper(v, fill, change) {

        old = val;

        if (fill === undefined) {
            fill = true;
        }

        if (change === undefined) {
            change = fill;
        }

        if (v !== undefined) {
            val = Math.min(max, Math.max(Math.round(v / step) * step, min));
        } else {
            val = Math.min(max, Math.max(val + ($btn.hasClass('mbsc-stepper-minus') ? -step : step), min));
        }

        changed = true;

        $controls.removeClass('mbsc-step-disabled');

        if (fill) {
            $control.val(val);
        }

        if (val == min) {
            $btnMinus.addClass('mbsc-step-disabled');
        } else if (val == max) {
            $btnPlus.addClass('mbsc-step-disabled');
        }

        if (val !== old && change) {
            $control.trigger('change');
        }
    }

    function updateStepper(ev) {
        if (!action) {

            action = true;
            changed = false;

            sX = (0, _tap.getCoord)(ev, 'X');
            sY = (0, _tap.getCoord)(ev, 'Y');

            clearInterval(interval);
            clearTimeout(interval);

            interval = setTimeout(function () {
                moveStepper();
                interval = setInterval(function () {
                    moveStepper();
                }, 150);
            }, 300);
        }
    }

    function stopStepper(change) {
        clearInterval(interval);
        clearTimeout(interval);

        if (!changed && change) {
            moveStepper();
        }

        action = false;
        changed = false;

        $btn.removeClass('mbsc-active');

        if (ripple) {
            setTimeout(function () {
                ripple.removeRipple();
                // form.trigger('onControlDeactivate', {
                //     target: $btn[0],
                //     domEvent: ev
                // });
            }, 100);
        }
    }

    function getAttr(attr, def) {
        var v = $control.attr(attr);
        return v === undefined || v === '' ? def : +v;
    }

    // Call the parent constructor
    _core.Base.call(this, control, settings, true);

    /* TRIALFUNC */

    that.getVal = function () {
        var v = parseFloat($control.val());
        v = isNaN(v) ? val : v;
        return Math.min(max, Math.max(Math.round(v / step) * step, min));
    };

    that.setVal = function (v, fill, change) {
        v = parseFloat(v);
        moveStepper(isNaN(v) ? val : v, fill, change);
    };

    that._init = function (ss) {
        ready = $control.parent().hasClass('mbsc-stepper');
        $parent = ready ? $control.closest('.mbsc-stepper-cont') : $control.parent();

        s = that.settings;

        min = ss.min === undefined ? getAttr('min', s.min) : ss.min;
        max = ss.max === undefined ? getAttr('max', s.max) : ss.max;
        step = ss.step === undefined ? getAttr('step', s.step) : ss.step;
        displayValue = $control.attr('data-val') || s.val;
        val = Math.min(max, Math.max(Math.round(+control.value / step) * step || 0, min));

        theme = _core2.default.themes.form[s.theme];
        ripple = theme && theme.addRipple ? theme : null;

        if (!ready) {
            $parent.addClass('mbsc-stepper-cont mbsc-control-w').append('<span class="mbsc-segmented mbsc-stepper"></span>').find('.mbsc-stepper').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-minus ' + (val == min ? 'mbsc-step-disabled' : '') + '"  tabindex="0"><span class="mbsc-segmented-content"><span class="mbsc-ic mbsc-ic-minus"></span></span></span>').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-plus ' + (val == max ? 'mbsc-step-disabled' : '') + '"  tabindex="0"><span class="mbsc-segmented-content"> <span class="mbsc-ic mbsc-ic-plus"></span> </span></span>').prepend($control);
        }

        $btnMinus = (0, _core.$)('.mbsc-stepper-minus', $parent);
        $btnPlus = (0, _core.$)('.mbsc-stepper-plus', $parent);

        if (!ready) {
            if (displayValue == 'left') {
                $parent.addClass('mbsc-stepper-val-left');
                $control.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>');
            } else if (displayValue == 'right') {
                $parent.addClass('mbsc-stepper-val-right');
                $btnPlus.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>');
            } else {
                $btnMinus.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content mbsc-stepper-val"></span></span>');
            }
        }

        $control.val(val).attr('data-role', 'stepper').attr('min', min).attr('max', max).attr('step', step).on('change', onChange);

        $controls = (0, _core.$)('.mbsc-stepper-control', $parent).on('keydown', onKeyDown).on('keyup', onKeyUp).on('mousedown touchstart', onStart).on('touchmove', onMove).on('touchend touchcancel', onEnd);

        $control.addClass('mbsc-stepper-ready mbsc-control');

        /* TRIAL */
    };

    that._destroy = function () {
        $control.removeClass('mbsc-control').off('change', onChange);

        $controls.off('keydown', onKeyDown).off('keyup', onKeyUp).off('mousedown touchstart', onStart).off('touchmove', onMove).off('touchend touchcancel', onEnd);
    };

    that.init(settings);
};

Stepper.prototype = {
    _class: 'stepper',
    _hasDef: true,
    _defaults: {
        min: 0,
        max: 100,
        step: 1
    }
};

_core2.default.classes.Stepper = Stepper;

_core2.default.presetShort('stepper', 'Stepper');

exports.default = Stepper;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","../util/dom":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/dom.js","../util/tap":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/tap.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/switch.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

var _formControl = require('./form-control');

var _formControl2 = _interopRequireDefault(_formControl);

var _sliderBase = require('./slider-base');

var _sliderBase2 = _interopRequireDefault(_sliderBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switch = function Switch(elm, settings) {
    var $elm,
        $parent,
        s,
        formControl,
        that = this;

    settings = settings || {};

    (0, _core.extend)(settings, {
        changeEvent: 'click',
        round: false
    });

    // Call the parent constructor
    _sliderBase2.default.call(this, elm, settings, true);

    that._readValue = function () {
        return elm.checked ? 1 : 0;
    };

    that._fillValue = function (v, index, change) {
        $elm.prop('checked', !!v);

        if (change) {
            $elm.trigger('change');
        }
    };

    that._onTap = function (v) {
        that._setVal(v ? 0 : 1);
    };

    that.___init = function () {
        s = that.settings;
        $elm = (0, _core.$)(elm);
        $parent = $elm.parent();

        $parent.find('.mbsc-switch-track').remove();
        $parent.prepend($elm);

        $elm.attr('data-role', 'switch').after('<span class="mbsc-progress-cont mbsc-switch-track">' + '<span class="mbsc-progress-track mbsc-progress-anim">' + '<span class="mbsc-slider-handle-cont">' + '<span class="mbsc-slider-handle mbsc-switch-handle" data-index="0">' + '<span class="mbsc-switch-txt-off">' + s.offText + '</span>' + '<span class="mbsc-switch-txt-on">' + s.onText + '</span>' + '</span></span></span></span>');

        if (formControl) {
            formControl.destroy();
        }

        formControl = new _formControl2.default(elm, s);

        that._$track = $parent.find('.mbsc-progress-track');
        that._min = 0;
        that._max = 1;
        that._step = 1;
    };

    that.___destroy = function () {
        formControl.destroy();
    };

    that.getVal = function () {
        return elm.checked;
    };

    that.setVal = function (val, fill, change) {
        that._setVal(val ? 1 : 0, fill, change);
    };

    that.init(settings);
};

Switch.prototype = {
    _class: 'switch',
    _css: 'mbsc-switch',
    _hasTheme: true,
    _hasLang: true,
    _hasDef: true,
    _defaults: {
        stopProp: true,
        offText: 'Off',
        onText: 'On'
    }
};

_core2.default.classes.Switch = Switch;

_core2.default.presetShort('switch', 'Switch');

exports.default = Switch;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","./form-control":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/form-control.js","./slider-base":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/slider-base.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/textarea.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sizeTextAreas = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _core = require('../core/core');

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var events = ['keydown', 'input', 'scroll'];

var sizeDebounce = void 0;

function sizeTextAreas() {
    clearTimeout(sizeDebounce);
    sizeDebounce = setTimeout(function () {
        (0, _core.$)('textarea.mbsc-control').each(function () {
            sizeTextArea(this);
        });
    }, 100);
}

function sizeTextArea(control) {
    var height = void 0,
        lineNr = void 0,
        line = void 0,
        rowNr = (0, _core.$)(control).attr('rows') || 6;

    if (control.offsetHeight) {
        control.style.height = '';

        line = control.scrollHeight - control.offsetHeight;
        height = control.offsetHeight + (line > 0 ? line : 0);
        lineNr = Math.round(height / 24);

        if (lineNr > rowNr) {
            control.scrollTop = height;
            height = 24 * rowNr + (height - lineNr * 24);
            (0, _core.$)(control).addClass('mbsc-textarea-scroll');
        } else {
            (0, _core.$)(control).removeClass('mbsc-textarea-scroll');
        }

        if (height) {
            control.style.height = height + 'px';
        }
    }
}

function scrollTextArea(elm) {
    var $elm = (0, _core.$)(elm);

    if (!$elm.hasClass('mbsc-textarea-scroll')) {
        var line = elm.scrollHeight - elm.offsetHeight,
            height = elm.offsetHeight + line;

        elm.scrollTop = 0;
        elm.style.height = height + 'px';
    }
}

if (_core.isBrowser) {
    // Set height of textareas on viewport size changes
    (0, _core.$)(window).on('resize orientationchange', sizeTextAreas);
}

var TextArea = function (_Input) {
    (0, _inherits3.default)(TextArea, _Input);

    function TextArea(elm, settings) {
        (0, _classCallCheck3.default)(this, TextArea);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TextArea.__proto__ || (0, _getPrototypeOf2.default)(TextArea)).call(this, elm, settings));

        _this._$parent.addClass('mbsc-textarea');

        events.forEach(function (ev) {
            _this._elm.addEventListener(ev, _this);
        });

        sizeTextArea(elm);
        return _this;
    }

    (0, _createClass3.default)(TextArea, [{
        key: 'destroy',
        value: function destroy() {
            var _this2 = this;

            (0, _get3.default)(TextArea.prototype.__proto__ || (0, _getPrototypeOf2.default)(TextArea.prototype), 'destroy', this).call(this);
            events.forEach(function (ev) {
                _this2._elm.removeEventListener(ev, _this2);
            });
        }
    }, {
        key: 'handleEvent',
        value: function handleEvent(ev) {
            (0, _get3.default)(TextArea.prototype.__proto__ || (0, _getPrototypeOf2.default)(TextArea.prototype), 'handleEvent', this).call(this, ev);

            switch (ev.type) {
                case 'keydown':
                case 'input':
                    this._onInput(ev);
                    break;
                case 'scroll':
                    scrollTextArea(this._elm);
            }
        }
    }, {
        key: '_onInput',
        value: function _onInput() {
            var _this3 = this;

            clearTimeout(this._debounce);
            this._debounce = setTimeout(function () {
                sizeTextArea(_this3._elm);
            }, 100);
        }
    }]);
    return TextArea;
}(_input2.default);

exports.sizeTextAreas = sizeTextAreas;
exports.default = TextArea;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","./input":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/input.js","babel-runtime/core-js/object/get-prototype-of":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/classCallCheck":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/get":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/get.js","babel-runtime/helpers/inherits":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/inherits.js","babel-runtime/helpers/possibleConstructorReturn":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/widget.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

var _frame = require('./frame');

var _frame2 = _interopRequireDefault(_frame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Widget = function Widget(el, settings, inherit) {

    function addContent($m) {
        /* TRIAL */

        if (!(0, _core.$)('.mbsc-fr-c', $m).hasClass('mbsc-wdg-c') /* TRIALCOND */) {
                (0, _core.$)('.mbsc-fr-c', $m).addClass('mbsc-wdg-c').append($elm.show());

                if (!(0, _core.$)('.mbsc-w-p', $m).length) {
                    (0, _core.$)('.mbsc-fr-c', $m).addClass('mbsc-w-p');
                }
            }
    }

    var s,
        $parent,
        $prev,
        $elm = (0, _core.$)(el),
        that = this;

    // Call the parent constructor
    _frame2.default.call(this, el, settings, true);

    /* TRIALFUNC */

    that._generateContent = function () {
        return '';
    };

    that._markupReady = function ($m) {
        if (s.display != 'inline') {
            addContent($m);
        }
    };

    that._markupInserted = function ($m) {

        if (s.display == 'inline') {
            addContent($m);
        }

        $m.trigger('mbsc-enhance', [{
            theme: s.theme,
            lang: s.lang
        }]);
    };

    that._markupRemove = function () {
        $elm.hide();

        if ($parent) {
            $parent.prepend($elm);
        } else {
            $prev.after($elm);
        }
    };

    that.__processSettings = function () {
        s = that.settings;

        that.buttons.ok = {
            text: s.okText,
            icon: s.okIcon,
            handler: 'set'
        };

        s.buttons = s.buttons || (s.display == 'inline' ? [] : ['ok']);

        if (!$parent && !$prev) {
            $prev = $elm.prev();

            if (!$prev.length) {
                $parent = $elm.parent();
            }
        }

        $elm.hide();
    };

    that.__init = function () {
        s.cssClass = (s.cssClass || '') + ' mbsc-wdg';
    };

    // Constructor
    if (!inherit) {
        that.init(settings);
    }
};

Widget.prototype = {
    _hasDef: true,
    _hasTheme: true,
    _hasContent: true,
    _hasLang: true,
    _class: 'widget',
    _defaults: (0, _core.extend)({}, _frame2.default.prototype._defaults, {
        okText: 'OK',
        headerText: false
    })
};

_core2.default.classes.Widget = Widget;

_core2.default.themes.widget = _core2.default.themes.frame;

_core2.default.presetShort('widget', 'Widget', false);

exports.default = Widget;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","./frame":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/frame.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Base = exports.isBrowser = exports.extend = exports.$ = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _mobiscroll = require('./mobiscroll');

var _mobiscroll2 = _interopRequireDefault(_mobiscroll);

var _platform = require('../util/platform');

var _misc = require('../util/misc');

var _tap = require('../util/tap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * Mobiscroll v3.2.6
 * http://mobiscroll.com
 *
 * Copyright 2010-2016, Acid Media
 * Licensed under the MIT license.
 *
 */

exports.default = _mobiscroll2.default;


var ms,
    $ = _mobiscroll2.default.$,
    id = +new Date(),
    instances = {},
    extend = $.extend;

ms = extend(_mobiscroll2.default, {
    $: $,
    version: '3.2.6',
    util: {
        getCoord: _tap.getCoord,
        preventClick: _tap.preventClick,
        vibrate: _misc.vibrate
    },
    autoTheme: 'mobiscroll',
    presets: {
        scroller: {},
        numpad: {},
        listview: {},
        menustrip: {}
    },
    themes: {
        form: {},
        page: {},
        frame: {},
        scroller: {},
        listview: {},
        menustrip: {},
        progress: {}
    },
    platform: {
        name: _platform.os,
        majorVersion: _platform.majorVersion,
        minorVersion: _platform.minorVersion
    },
    i18n: {},
    instances: instances,
    classes: {},
    components: {},
    settings: {},
    setDefaults: function setDefaults(o) {
        extend(this.settings, o);
    },
    customTheme: function customTheme(name, baseTheme) {
        var i,
            themes = _mobiscroll2.default.themes,
            comps = ['frame', 'scroller', 'listview', 'menustrip', 'form', 'progress'];

        for (i = 0; i < comps.length; i++) {
            themes[comps[i]][name] = extend({}, themes[comps[i]][baseTheme], {
                baseTheme: baseTheme
            });
        }
    }
});

ms.presetShort = ms.presetShort || function () {};

var Base = function Base(el, settings) {
    var lang,
        preset,
        s,
        theme,
        themeName,
        trigger,
        defaults,
        that = this;

    that.settings = {};

    that._init = _misc.noop;

    that._destroy = _misc.noop;

    that._processSettings = _misc.noop;

    that.init = function (ss) {
        var key;

        // Reset settings object
        for (key in that.settings) {
            delete that.settings[key];
        }

        s = that.settings;

        // Update original user settings
        extend(settings, ss);

        // Load user defaults
        if (that._hasDef) {
            defaults = ms.settings;
        }

        // Create settings object
        extend(s, that._defaults, defaults, settings);

        // Get theme defaults
        if (that._hasTheme) {

            themeName = s.theme;

            if (themeName == 'auto' || !themeName) {
                themeName = ms.autoTheme;
            }

            if (themeName == 'default') {
                themeName = 'mobiscroll';
            }

            settings.theme = themeName;

            theme = ms.themes[that._class] ? ms.themes[that._class][themeName] : {};
        }

        // Get language defaults
        if (that._hasLang) {
            lang = ms.i18n[s.lang];
        }

        if (that._hasTheme) {
            trigger('onThemeLoad', {
                lang: lang,
                settings: settings
            });
        }

        // Update settings object
        extend(s, theme, lang, defaults, settings);

        that._processSettings();

        // Load preset settings
        if (that._hasPreset) {

            preset = ms.presets[that._class][s.preset];

            if (preset) {
                preset = preset.call(el, that);
                extend(s, preset, settings);
            }
        }

        that._init(ss);

        trigger('onInit');
    };

    that.destroy = function () {
        if (that) {
            that._destroy();
            trigger('onDestroy');

            // Delete scroller instance
            delete instances[el.id];

            that = null;
        }
    };

    /**
     * Attach tap event to the given element.
     */
    that.tap = function (el, handler, prevent, tolerance, time) {
        (0, _tap.tap)(that, el, handler, prevent, tolerance, time);
    };

    /**
     * Triggers an event
     */
    that.trigger = function (name, ev) {
        var ret,
            i,
            v,
            s = [defaults, theme, preset, settings];

        for (i = 0; i < 4; i++) {
            v = s[i];
            if (v && v[name]) {
                ret = v[name].call(el, ev || {}, that);
            }
        }

        return ret;
    };

    /**
     * Sets one ore more options.
     */
    that.option = function (opt, value) {
        var obj = {};
        if ((typeof opt === 'undefined' ? 'undefined' : (0, _typeof3.default)(opt)) === 'object') {
            obj = opt;
        } else {
            obj[opt] = value;
        }
        that.init(obj);
    };

    /**
     * Returns the mobiscroll instance.
     */
    that.getInst = function () {
        return that;
    };

    settings = settings || {};
    trigger = that.trigger;

    function construct() {
        $(el).addClass('mbsc-comp');

        // Autogenerate id
        if (!el.id) {
            el.id = 'mobiscroll' + ++id;
        } else if (instances[el.id]) {
            instances[el.id].destroy();
        }

        // Save instance
        instances[el.id] = that;
        that.__ready = true;
    }

    if (!that.__ready) {
        construct();
    }
};

exports.$ = $;
exports.extend = extend;
exports.isBrowser = _platform.isBrowser;
exports.Base = Base;

},{"../util/misc":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/misc.js","../util/platform":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/platform.js","../util/tap":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/tap.js","./mobiscroll":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/mobiscroll.js","babel-runtime/helpers/typeof":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/typeof.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/dom.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.$ = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _mobiscroll = require('./mobiscroll');

var _mobiscroll2 = _interopRequireDefault(_mobiscroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _mobiscroll2.default;


var cssNumber = {
    'column-count': 1,
    'columns': 1,
    'font-weight': 1,
    'line-height': 1,
    'opacity': 1,
    'z-index': 1,
    'zoom': 1
},
    propMap = {
    'readonly': 'readOnly'
},
    emptyArray = [],
    _slice = Array.prototype.slice;

function isFunction(value) {
    return typeof value === "function";
}

function isObject(obj) {
    return (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === "object";
}

function likeArray(obj) {
    return typeof obj.length == 'number';
}

function camelize(str) {
    return str.replace(/-+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : '';
    });
}

function extend(target, source, deep) {
    for (var key in source) {
        if (deep && ($.isPlainObject(source[key]) || $.isArray(source[key]))) {
            if ($.isPlainObject(source[key]) && !$.isPlainObject(target[key]) || $.isArray(source[key]) && !$.isArray(target[key])) {
                target[key] = {};
            }
            extend(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

function dasherize(str) {
    return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
}

function maybeAddPx(name, value) {
    return typeof value == "number" && !cssNumber[dasherize(name)] ? value + "px" : value;
}

var Dom = function () {
    var Dom = function Dom(arr) {
        var _this = this,
            i = 0;
        // Create array-like object
        for (i = 0; i < arr.length; i++) {
            _this[i] = arr[i];
        }
        _this.length = arr.length;
        // Return collection with methods
        return $(this);
    };

    var $ = function $(selector, context) {
        var arr = [],
            i = 0;
        if (selector && !context) {
            if (selector instanceof Dom) {
                return selector;
            }
        }

        if (isFunction(selector)) {
            return $(document).ready(selector);
        }

        if (selector) {
            // String
            if (typeof selector === 'string') {
                var els, tempParent, html;
                selector = html = selector.trim();
                if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                    var toCreate = 'div';
                    if (html.indexOf('<li') === 0) {
                        toCreate = 'ul';
                    }
                    if (html.indexOf('<tr') === 0) {
                        toCreate = 'tbody';
                    }
                    if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) {
                        toCreate = 'tr';
                    }
                    if (html.indexOf('<tbody') === 0) {
                        toCreate = 'table';
                    }
                    if (html.indexOf('<option') === 0) {
                        toCreate = 'select';
                    }
                    tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (i = 0; i < tempParent.childNodes.length; i++) {
                        arr.push(tempParent.childNodes[i]);
                    }
                } else {
                    if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                        // Pure ID selector
                        els = [document.getElementById(selector.split('#')[1])];
                    } else {
                        if (context instanceof Dom) {
                            context = context[0];
                        }
                        // Other selectors
                        els = (context || document).querySelectorAll(selector);
                    }
                    for (i = 0; i < els.length; i++) {
                        if (els[i]) {
                            arr.push(els[i]);
                        }
                    }
                }
            }
            // Node/element
            else if (selector.nodeType || selector === window || selector === document) {
                    arr.push(selector);
                }
                //Array of elements or instance of Dom
                else if (selector.length > 0 && selector[0].nodeType) {
                        for (i = 0; i < selector.length; i++) {
                            arr.push(selector[i]);
                        }
                    } else if ($.isArray(selector)) {
                        arr = selector;
                    }
        }
        return new Dom(arr);
    };

    Dom.prototype = {
        ready: function ready(callback) {
            if (document.attachEvent ? document.readyState == 'complete' : document.readyState != 'loading') {
                callback($);
            } else {
                document.addEventListener('DOMContentLoaded', function () {
                    callback($);
                }, false);
            }
            return this;
        },
        concat: emptyArray.concat,
        empty: function empty() {
            return this.each(function () {
                this.innerHTML = '';
            });
        },
        map: function map(fn) {
            return $($.map(this, function (el, i) {
                return fn.call(el, i, el);
            }));
        },
        slice: function slice() {
            return $(_slice.apply(this, arguments));
        },
        // Classes and attriutes
        // NOTE: element.classList attribure is not supported on android 2.3!!!
        addClass: function addClass(className) {
            if (typeof className === 'undefined') {
                return this;
            }

            var classes = className.split(' ');

            for (var i = 0; i < classes.length; i++) {
                for (var j = 0; j < this.length; j++) {
                    if (typeof this[j].classList !== 'undefined' && classes[i] !== '') {
                        this[j].classList.add(classes[i]);
                    }
                }
            }
            return this;
        },
        removeClass: function removeClass(className) {
            if (typeof className === 'undefined') {
                return this;
            }

            var classes = className.split(' ');
            for (var i = 0; i < classes.length; i++) {
                for (var j = 0; j < this.length; j++) {
                    if (typeof this[j].classList !== 'undefined' && classes[i] !== '') {
                        this[j].classList.remove(classes[i]);
                    }
                }
            }
            return this;
        },
        hasClass: function hasClass(className) {
            return this[0] ? this[0].classList.contains(className) : false;
        },
        toggleClass: function toggleClass(className) {
            var classes = className.split(' ');
            for (var i = 0; i < classes.length; i++) {
                for (var j = 0; j < this.length; j++) {
                    if (typeof this[j].classList !== 'undefined') {
                        this[j].classList.toggle(classes[i]);
                    }
                }
            }
            return this;
        },
        closest: function closest(selector, context) {
            var node = this[0],
                collection = false;

            if (isObject(selector)) {
                collection = $(selector);
            }
            while (node && !(collection ? collection.indexOf(node) >= 0 : $.matches(node, selector))) {
                node = node !== context && node.nodeType !== node.DOCUMENT_NODE && node.parentNode;
            }

            return $(node);
        },
        attr: function attr(attrs, value) {
            var attr;

            if (arguments.length === 1 && typeof attrs === 'string') {
                // Get attr
                if (this.length) {
                    attr = this[0].getAttribute(attrs);
                    return attr || attr === '' ? attr : undefined;
                }
            } else {
                // Set attrs
                for (var i = 0; i < this.length; i++) {
                    if (arguments.length === 2) {
                        // String
                        this[i].setAttribute(attrs, value);
                    } else {
                        // Object
                        for (var attrName in attrs) {
                            this[i][attrName] = attrs[attrName];
                            this[i].setAttribute(attrName, attrs[attrName]);
                        }
                    }
                }
                return this;
            }
        },
        removeAttr: function removeAttr(attr) {
            for (var i = 0; i < this.length; i++) {
                this[i].removeAttribute(attr);
            }
            return this;
        },
        prop: function prop(props, value) {
            props = propMap[props] || props;
            if (arguments.length === 1 && typeof props === 'string') {
                // Get prop
                return this[0] ? this[0][props] : undefined;
            } else {
                // Set props
                for (var i = 0; i < this.length; i++) {
                    this[i][props] = value;
                }
                return this;
            }
        },
        val: function val(value) {
            if (typeof value === 'undefined') {
                if (this.length && this[0].multiple) {
                    return $.map(this.find('option:checked'), function (v) {
                        return v.value;
                    });
                }
                return this[0] ? this[0].value : undefined;
            }

            if (this.length && this[0].multiple) {
                $.each(this[0].options, function () {
                    this.selected = value.indexOf(this.value) != -1;
                });
            } else {
                for (var i = 0; i < this.length; i++) {
                    this[i].value = value;
                }
            }

            return this;
        },
        //Events
        on: function on(eventName, targetSelector, listener, capture) {
            var events = eventName.split(' '),
                i,
                j;

            function handleLiveEvent(e) {
                var k,
                    parents,
                    target = e.target;

                if ($(target).is(targetSelector)) {
                    listener.call(target, e);
                } else {
                    parents = $(target).parents();
                    for (k = 0; k < parents.length; k++) {
                        if ($(parents[k]).is(targetSelector)) {
                            listener.call(parents[k], e);
                        }
                    }
                }
            }

            function handleNamespaces(elm, name, listener, capture) {
                var namespace = name.split('.');

                if (!elm.DomNameSpaces) {
                    elm.DomNameSpaces = [];
                }

                elm.DomNameSpaces.push({
                    namespace: namespace[1],
                    event: namespace[0],
                    listener: listener,
                    capture: capture
                });

                elm.addEventListener(namespace[0], listener, capture);
            }

            for (i = 0; i < this.length; i++) {
                if (isFunction(targetSelector) || targetSelector === false) {
                    // Usual events
                    if (isFunction(targetSelector)) {
                        capture = listener || false;
                        listener = targetSelector;
                    }
                    for (j = 0; j < events.length; j++) {
                        // check for namespaces
                        if (events[j].indexOf('.') != -1) {
                            handleNamespaces(this[i], events[j], listener, capture);
                        } else {
                            this[i].addEventListener(events[j], listener, capture);
                        }
                    }
                } else {
                    // Live events
                    for (j = 0; j < events.length; j++) {
                        if (!this[i].DomLiveListeners) {
                            this[i].DomLiveListeners = [];
                        }

                        this[i].DomLiveListeners.push({
                            listener: listener,
                            liveListener: handleLiveEvent
                        });

                        if (events[j].indexOf('.') != -1) {
                            handleNamespaces(this[i], events[j], handleLiveEvent, capture);
                        } else {
                            this[i].addEventListener(events[j], handleLiveEvent, capture);
                        }
                    }
                }
            }
            return this;
        },
        off: function off(eventName, targetSelector, listener, capture) {
            var events,
                i,
                j,
                k,
                that = this;

            function removeEvents(event) {
                var i,
                    j,
                    item,
                    parts = event.split('.'),
                    name = parts[0],
                    ns = parts[1];

                for (i = 0; i < that.length; ++i) {
                    if (that[i].DomNameSpaces) {
                        for (j = 0; j < that[i].DomNameSpaces.length; ++j) {
                            item = that[i].DomNameSpaces[j];

                            if (item.namespace == ns && (item.event == name || !name)) {
                                that[i].removeEventListener(item.event, item.listener, item.capture);
                                item.removed = true;
                            }
                        }
                        // remove the events from the DomNameSpaces array
                        for (j = that[i].DomNameSpaces.length - 1; j >= 0; --j) {
                            if (that[i].DomNameSpaces[j].removed) {
                                that[i].DomNameSpaces.splice(j, 1);
                            }
                        }
                    }
                }
            }

            events = eventName.split(' ');

            for (i = 0; i < events.length; i++) {
                for (j = 0; j < this.length; j++) {
                    if (isFunction(targetSelector) || targetSelector === false) {
                        // Usual events
                        if (isFunction(targetSelector)) {
                            capture = listener || false;
                            listener = targetSelector;
                        }

                        if (events[i].indexOf('.') === 0) {
                            // remove namespace events
                            removeEvents(events[i].substr(1), listener, capture);
                        } else {
                            this[j].removeEventListener(events[i], listener, capture);
                        }
                    } else {
                        // Live event
                        if (this[j].DomLiveListeners) {
                            for (k = 0; k < this[j].DomLiveListeners.length; k++) {
                                if (this[j].DomLiveListeners[k].listener === listener) {
                                    this[j].removeEventListener(events[i], this[j].DomLiveListeners[k].liveListener, capture);
                                }
                            }
                        }
                        if (this[j].DomNameSpaces && this[j].DomNameSpaces.length && events[i]) {
                            removeEvents(events[i]);
                        }
                    }
                }
            }

            return this;
        },
        trigger: function trigger(eventName, eventData) {
            var events = eventName.split(' ');
            for (var i = 0; i < events.length; i++) {
                for (var j = 0; j < this.length; j++) {
                    var evt;
                    try {
                        evt = new CustomEvent(events[i], {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                    } catch (e) {
                        evt = document.createEvent('Event');
                        evt.initEvent(events[i], true, true);
                        evt.detail = eventData;
                    }
                    this[j].dispatchEvent(evt);
                }
            }
            return this;
        },
        // Sizing/Styles
        width: function width(dim) {
            if (dim !== undefined) {
                return this.css('width', dim);
            }

            if (this[0] === window) {
                return window.innerWidth;
            } else if (this[0] === document) {
                return document.documentElement.scrollWidth;
            } else {
                return this.length > 0 ? parseFloat(this.css('width')) : null;
            }
        },
        height: function height(dim) {
            if (dim !== undefined) {
                return this.css('height', dim);
            }

            if (this[0] === window) {
                return window.innerHeight;
            } else if (this[0] === document) {
                var body = document.body,
                    html = document.documentElement;

                return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            } else {
                return this.length > 0 ? parseFloat(this.css('height')) : null;
            }
        },
        innerWidth: function innerWidth() {
            var elm = this;
            if (this.length > 0) {
                if (this[0].innerWidth) {
                    return this[0].innerWidth;
                } else {
                    var size = this[0].offsetWidth,
                        sides = ['left', 'right'];

                    sides.forEach(function (side) {
                        size -= parseInt(elm.css(camelize('border-' + side + '-width')) || 0, 10);
                    });
                    return size;
                }
            }
        },
        innerHeight: function innerHeight() {
            var elm = this;
            if (this.length > 0) {
                if (this[0].innerHeight) {
                    return this[0].innerHeight;
                } else {
                    var size = this[0].offsetHeight,
                        sides = ['top', 'bottom'];

                    sides.forEach(function (side) {
                        size -= parseInt(elm.css(camelize('border-' + side + '-width')) || 0, 10);
                    });

                    return size;
                }
            }
        },
        offset: function offset() {
            if (this.length > 0) {
                var el = this[0],
                    box = el.getBoundingClientRect(),
                    doc = document.documentElement;

                return {
                    top: box.top + window.pageYOffset - doc.clientTop,
                    left: box.left + window.pageXOffset - doc.clientLeft
                };
            }
        },
        hide: function hide() {
            for (var i = 0; i < this.length; i++) {
                this[i].style.display = 'none';
            }
            return this;
        },
        show: function show() {
            for (var i = 0; i < this.length; i++) {
                if (this[i].style.display == "none") {
                    this[i].style.display = '';
                }

                if (getComputedStyle(this[i], '').getPropertyValue("display") == "none") {
                    this[i].style.display = 'block';
                }
            }

            return this;
        },
        clone: function clone() {
            return this.map(function () {
                return this.cloneNode(true);
            });
        },
        styles: function styles() {
            return this[0] ? window.getComputedStyle(this[0], null) : undefined;
        },
        css: function css(property, value) {
            var i,
                key,
                element = this[0],
                css = '';

            if (arguments.length < 2) {
                if (!element) {
                    return;
                }
                if (typeof property === 'string') {
                    return element.style[property] || getComputedStyle(element, '').getPropertyValue(property);
                }
            }

            if (typeof property === 'string') {
                if (!value && value !== 0) {
                    this.each(function () {
                        this.style.removeProperty(dasherize(property));
                    });
                } else {
                    css = dasherize(property) + ":" + maybeAddPx(property, value);
                }
            } else {
                for (key in property) {
                    if (!property[key] && property[key] !== 0) {
                        for (i = 0; i < this.length; i++) {
                            this[i].style.removeProperty(dasherize(key));
                        }
                    } else {
                        css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';';
                    }
                }
            }

            return this.each(function () {
                this.style.cssText += ';' + css;
            });
        },
        each: function each(callback) {
            for (var i = 0; i < this.length; i++) {
                if (callback.apply(this[i], [i, this[i]]) === false) {
                    break;
                }
            }
            return this;
        },
        filter: function filter(callback) {
            var matchedItems = [];

            for (var i = 0; i < this.length; i++) {
                if (isFunction(callback)) {
                    if (callback.call(this[i], i, this[i])) {
                        matchedItems.push(this[i]);
                    }
                } else if ($.matches(this[i], callback)) {
                    matchedItems.push(this[i]);
                }
            }

            return new Dom(matchedItems);
        },
        html: function html(_html) {
            if (typeof _html === 'undefined') {
                return this[0] ? this[0].innerHTML : undefined;
            } else {
                this.empty();
                for (var i = 0; i < this.length; i++) {
                    this[i].innerHTML = _html;
                }
                return this;
            }
        },
        text: function text(_text) {
            if (typeof _text === 'undefined') {
                return this[0] ? this[0].textContent.trim() : null;
            } else {
                for (var i = 0; i < this.length; i++) {
                    this[i].textContent = _text;
                }
                return this;
            }
        },
        is: function is(selector) {
            return this.length > 0 && $.matches(this[0], selector);
        },
        not: function not(selector) {
            var nodes = [];
            if (isFunction(selector) && selector.call !== undefined) {
                this.each(function (idx) {
                    if (!selector.call(this, idx)) {
                        nodes.push(this);
                    }
                });
            } else {
                var excludes = typeof selector == 'string' ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? _slice.call(selector) : $(selector);

                if (isObject(excludes)) {
                    excludes = $.map(excludes, function (el) {
                        return el;
                    });
                }

                this.each(function (i, el) {
                    if (excludes.indexOf(el) < 0) {
                        nodes.push(el);
                    }
                });
            }

            return $(nodes);
        },
        indexOf: function indexOf(el) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] === el) {
                    return i;
                }
            }
        },
        index: function index(element) {
            return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0]);
        },
        get: function get(idx) {
            return idx === undefined ? _slice.call(this) : this[idx >= 0 ? idx : idx + this.length];
        },
        eq: function eq(index) {
            if (typeof index === 'undefined') {
                return this;
            }
            var length = this.length,
                returnIndex;

            if (index > length - 1) {
                return new Dom([]);
            }
            if (index < 0) {
                returnIndex = length + index;
                return returnIndex < 0 ? new Dom([]) : new Dom([this[returnIndex]]);
            }
            return new Dom([this[index]]);
        },
        append: function append(newChild) {
            var i, j;
            for (i = 0; i < this.length; i++) {
                if (typeof newChild === 'string') {
                    var tempDiv = document.createElement('div');
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) {
                        this[i].appendChild(tempDiv.firstChild);
                    }
                } else if (newChild instanceof Dom) {
                    for (j = 0; j < newChild.length; j++) {
                        this[i].appendChild(newChild[j]);
                    }
                } else {
                    this[i].appendChild(newChild);
                }
            }
            return this;
        },
        appendTo: function appendTo(parent) {
            $(parent).append(this);
            return this;
        },
        prepend: function prepend(newChild) {
            var i, j;
            for (i = 0; i < this.length; i++) {
                if (typeof newChild === 'string') {
                    var tempDiv = document.createElement('div');
                    tempDiv.innerHTML = newChild;
                    for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {
                        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                    }
                    // this[i].insertAdjacentHTML('afterbegin', newChild);
                } else if (newChild instanceof Dom) {
                    for (j = 0; j < newChild.length; j++) {
                        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                    }
                } else {
                    this[i].insertBefore(newChild, this[i].childNodes[0]);
                }
            }
            return this;
        },
        prependTo: function prependTo(parent) {
            $(parent).prepend(this);
            return this;
        },
        insertBefore: function insertBefore(selector) {
            var before = $(selector);

            for (var i = 0; i < this.length; i++) {
                if (before.length === 1) {
                    before[0].parentNode.insertBefore(this[i], before[0]);
                } else if (before.length > 1) {
                    for (var j = 0; j < before.length; j++) {
                        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
                    }
                }
            }
            return this;
        },
        insertAfter: function insertAfter(selector) {
            var after = $(selector);
            for (var i = 0; i < this.length; i++) {
                if (after.length === 1) {
                    after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
                } else if (after.length > 1) {
                    for (var j = 0; j < after.length; j++) {
                        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
                    }
                }
            }

            return this;
        },
        next: function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
                        return new Dom([this[0].nextElementSibling]);
                    } else {
                        return new Dom([]);
                    }
                } else {
                    if (this[0].nextElementSibling) {
                        return new Dom([this[0].nextElementSibling]);
                    } else {
                        return new Dom([]);
                    }
                }
            } else {
                return new Dom([]);
            }
        },
        nextAll: function nextAll(selector) {
            var nextEls = [],
                el = this[0];

            if (!el) {
                return new Dom([]);
            }
            while (el.nextElementSibling) {
                var next = el.nextElementSibling;
                if (selector) {
                    if ($(next).is(selector)) {
                        nextEls.push(next);
                    }
                } else {
                    nextEls.push(next);
                }
                el = next;
            }
            return new Dom(nextEls);
        },
        prev: function prev(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].previousElementSibling && $(this[0].previousElementSibling).is(selector)) {
                        return new Dom([this[0].previousElementSibling]);
                    } else {
                        return new Dom([]);
                    }
                } else {
                    if (this[0].previousElementSibling) {
                        return new Dom([this[0].previousElementSibling]);
                    } else {
                        return new Dom([]);
                    }
                }
            } else {
                return new Dom([]);
            }
        },
        prevAll: function prevAll(selector) {
            var prevEls = [];
            var el = this[0];
            if (!el) {
                return new Dom([]);
            }
            while (el.previousElementSibling) {
                var prev = el.previousElementSibling;
                if (selector) {
                    if ($(prev).is(selector)) {
                        prevEls.push(prev);
                    }
                } else {
                    prevEls.push(prev);
                }
                el = prev;
            }
            return new Dom(prevEls);
        },
        parent: function parent(selector) {
            var parents = [];
            for (var i = 0; i < this.length; i++) {
                if (this[i].parentNode !== null) {
                    if (selector) {
                        if ($(this[i].parentNode).is(selector)) {
                            parents.push(this[i].parentNode);
                        }
                    } else {
                        parents.push(this[i].parentNode);
                    }
                }
            }
            return $($.unique(parents));
        },
        parents: function parents(selector) {
            var parents = [];
            for (var i = 0; i < this.length; i++) {
                var parent = this[i].parentNode;
                while (parent) {
                    if (selector) {
                        if ($(parent).is(selector)) {
                            parents.push(parent);
                        }
                    } else {
                        parents.push(parent);
                    }
                    parent = parent.parentNode;
                }
            }
            return $($.unique(parents));
        },
        find: function find(selector) {
            var foundElements = [];
            for (var i = 0; i < this.length; i++) {
                var found = this[i].querySelectorAll(selector);
                for (var j = 0; j < found.length; j++) {
                    foundElements.push(found[j]);
                }
            }
            return new Dom(foundElements);
        },
        children: function children(selector) {
            var children = [];
            for (var i = 0; i < this.length; i++) {
                var childNodes = this[i].childNodes;

                for (var j = 0; j < childNodes.length; j++) {
                    if (!selector) {
                        if (childNodes[j].nodeType === 1) {
                            children.push(childNodes[j]);
                        }
                    } else {
                        if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
                            children.push(childNodes[j]);
                        }
                    }
                }
            }

            return new Dom($.unique(children));
        },
        remove: function remove() {
            for (var i = 0; i < this.length; i++) {
                if (this[i].parentNode) {
                    this[i].parentNode.removeChild(this[i]);
                }
            }
            return this;
        },
        add: function add() {
            var dom = this;
            var i, j;
            for (i = 0; i < arguments.length; i++) {
                var toAdd = $(arguments[i]);
                for (j = 0; j < toAdd.length; j++) {
                    dom[dom.length] = toAdd[j];
                    dom.length++;
                }
            }
            return dom;
        },
        before: function before(elm) {
            $(elm).insertBefore(this);
            return this;
        },
        after: function after(elm) {
            $(elm).insertAfter(this);
            return this;
        },
        scrollTop: function scrollTop(value) {
            if (!this.length) {
                return;
            }
            var hasScrollTop = 'scrollTop' in this[0];

            if (value === undefined) {
                return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
            }
            return this.each(hasScrollTop ? function () {
                this.scrollTop = value;
            } : function () {
                this.scrollTo(this.scrollX, value);
            });
        },
        scrollLeft: function scrollLeft(value) {
            if (!this.length) {
                return;
            }
            var hasScrollLeft = 'scrollLeft' in this[0];

            if (value === undefined) {
                return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
            }
            return this.each(hasScrollLeft ? function () {
                this.scrollLeft = value;
            } : function () {
                this.scrollTo(value, this.scrollY);
            });
        },
        contents: function contents() {
            return this.map(function (i, v) {
                return _slice.call(v.childNodes);
            });
        },
        nextUntil: function nextUntil(selector) {
            var n = this,
                array = [];

            while (n.length && !n.filter(selector).length) {
                array.push(n[0]);
                n = n.next();
            }

            return $(array);
        },
        prevUntil: function prevUntil(selector) {
            var n = this,
                array = [];

            while (n.length && !$(n).filter(selector).length) {
                array.push(n[0]);
                n = n.prev();
            }

            return $(array);
        },
        detach: function detach() {
            return this.remove();
        }
    };

    // Link to prototype
    $.fn = Dom.prototype;

    return $;
}();

// Export to local scope
var $ = Dom;

// Export to mobiscroll
_mobiscroll2.default.$ = Dom;

// DOM Library Utilites
$.inArray = function (elem, array, i) {
    return emptyArray.indexOf.call(array, elem, i);
};

$.extend = function (target) {
    var deep,
        args = _slice.call(arguments, 1);

    if (typeof target == 'boolean') {
        deep = target;
        target = args.shift();
    }

    target = target || {};

    args.forEach(function (arg) {
        extend(target, arg, deep);
    });

    return target;
};

$.isFunction = isFunction;

$.isArray = function (arr) {
    return Object.prototype.toString.apply(arr) === '[object Array]';
};

$.isPlainObject = function (obj) {
    return isObject(obj) && obj !== null && obj !== obj.window && (0, _getPrototypeOf2.default)(obj) == Object.prototype;
};

$.each = function (obj, callback) {
    var i, prop;

    if (!isObject(obj) || !callback) {
        return;
    }

    if ($.isArray(obj) || obj instanceof Dom) {
        // Array
        for (i = 0; i < obj.length; i++) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                break;
            }
        }
    } else {
        // Object
        for (prop in obj) {
            if (obj.hasOwnProperty(prop) && prop !== 'length') {
                if (callback.call(obj[prop], prop, obj[prop]) === false) {
                    break;
                }
            }
        }
    }

    return this;
};

$.unique = function (arr) {
    var unique = [];
    for (var i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
};

$.map = function (elements, callback) {
    var value,
        values = [],
        i,
        key;
    if (likeArray(elements)) {
        for (i = 0; i < elements.length; i++) {
            value = callback(elements[i], i);
            if (value !== null) {
                values.push(value);
            }
        }
    } else {
        for (key in elements) {
            value = callback(elements[key], key);
            if (value !== null) {
                values.push(value);
            }
        }
    }

    return values.length > 0 ? $.fn.concat.apply([], values) : values;
};

$.matches = function (element, selector) {
    if (!selector || !element || element.nodeType !== 1) {
        return false;
    }

    var matchesSelector = element.matchesSelector || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector;

    return matchesSelector.call(element, selector);
};

exports.$ = $;

},{"./mobiscroll":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/mobiscroll.js","babel-runtime/core-js/object/get-prototype-of":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/get-prototype-of.js","babel-runtime/helpers/typeof":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/helpers/typeof.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/mobiscroll.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mobiscroll = mobiscroll || {};

exports.default = mobiscroll;

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/forms.javascript.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _javascript = require('./frameworks/javascript');

var _javascript2 = _interopRequireDefault(_javascript);

require('./page.javascript');

require('./classes/forms');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _javascript2.default;

},{"./classes/forms":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/forms.js","./frameworks/javascript":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/frameworks/javascript.js","./page.javascript":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/page.javascript.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/frameworks/javascript.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _dom = require('../core/dom');

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dom2.default.presetShort = function (name, className, preset) {
    _dom2.default[name] = function (selector, s) {
        var inst,
            instIds,
            ret = {},
            options = s || {};

        _dom.$.extend(options, {
            preset: preset === false ? undefined : name
        });

        (0, _dom.$)(selector).each(function () {
            inst = new _dom2.default.classes[className || 'Scroller'](this, options);
            ret[this.id] = inst;
        });

        instIds = (0, _keys2.default)(ret);

        return instIds.length == 1 ? ret[instIds[0]] : ret;
    };
};

exports.default = _dom2.default;

},{"../core/dom":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/dom.js","babel-runtime/core-js/object/keys":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/object/keys.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/ar.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Arabic

_core2.default.i18n.ar = {
    // Core
    rtl: true, // Right to left mode
    setText: 'تعيين',
    cancelText: 'إلغاء',
    clearText: 'مسح',
    selectedText: '{count} المحدد',
    // Datetime component
    dateFormat: 'dd/mm/yy',
    dayNames: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    dayNamesShort: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
    dayNamesMin: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
    dayText: 'يوم',
    hourText: 'ساعات',
    minuteText: 'الدقائق',
    monthNames: ['كانون الثاني', 'شهر فبراير', 'مارس', 'أبريل', 'قد', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'شهر اكتوبر', 'شهر نوفمبر', 'ديسمبر'],
    monthNamesShort: ['كانون الثاني', 'شهر فبراير', 'مارس', 'أبريل', 'قد', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'شهر اكتوبر', 'شهر نوفمبر', 'ديسمبر'],
    monthText: 'شهر',
    secText: 'ثواني',
    amText: 'ص',
    pmText: 'م',
    timeFormat: 'hh:ii A',
    yearText: 'عام',
    nowText: 'الآن',
    // Calendar component
    firstDay: 0,
    dateText: 'تاريخ',
    timeText: 'وقت',
    calendarText: 'التقويم',
    closeText: 'إغلاق',
    todayText: 'اليوم',
    prevMonthText: 'الشهر السابق',
    nextMonthText: 'الشهر القادم',
    prevYearText: 'السنه السابقة',
    nextYearText: 'العام القادم',
    // Event calendar
    eventText: 'الحدث',
    eventsText: 'أحداث',
    // Daterange component
    fromText: 'يبدا',
    toText: 'ينتهي',
    // Measurement components
    wholeText: 'كامل',
    fractionText: 'جزء',
    unitText: 'وحدة',
    // Numpad date
    delimiter: '/',
    // Numpad decimal
    decimalSeparator: '.',
    thousandsSeparator: ',',
    // Timer / Timespan component
    labels: ['سنوات', 'أشهر', 'أيام', 'ساعة', 'دقائق', 'ثواني', ''],
    labelsShort: ['سنوات', 'أشهر', 'أيام', 'ساعة', 'دقائق', 'ثواني', ''],
    // Timer component
    startText: 'بدء',
    stopText: 'إيقاف',
    resetText: 'إعادة ضبط',
    lapText: 'الدورة',
    hideText: 'إخفاء',
    // Forms
    offText: 'إيقاف',
    onText: 'تشغيل',
    // Listview
    backText: 'رجوع',
    undoText: 'تراجع'
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/bg.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Bulgarian

_core2.default.i18n.bg = {
   // Core
   setText: 'Задаване',
   cancelText: 'Отмяна',
   clearText: 'Изчистване',
   selectedText: '{count} подбран',
   // Datetime component
   dateFormat: 'dd.mm.yy',
   dayNames: ['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота'],
   dayNamesShort: ['Нед', 'Пон', 'Вто', 'Сря', 'Чет', 'Пет', 'Съб'],
   dayNamesMin: ['Не', 'По', 'Вт', 'Ср', 'Че', 'Пе', 'Съ'],
   dayText: 'ден',
   delimiter: '.',
   hourText: 'час',
   minuteText: 'минута',
   monthNames: ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'],
   monthNamesShort: ['Яну', 'Фев', 'Мар', 'Апр', 'Май', 'Юни', 'Юли', 'Авг', 'Сеп', 'Окт', 'Нов', 'Дек'],
   monthText: 'месец',
   secText: 'секунди',
   timeFormat: 'H:ii',
   yearText: 'година',
   nowText: 'Сега',
   pmText: 'pm',
   amText: 'am',
   // Calendar component
   firstDay: 1,
   dateText: 'Дата',
   timeText: 'път',
   calendarText: 'календар',
   todayText: 'днес',
   prevMonthText: 'Предишния месец',
   nextMonthText: 'Следващият месец',
   prevYearText: 'Предходната година',
   nextYearText: 'Следващата година',
   closeText: 'затвори',
   eventText: 'Събитие',
   eventsText: 'Събития',
   // Daterange component
   fromText: 'ОТ',
   toText: 'ДО',
   // Measurement components
   wholeText: 'цяло',
   fractionText: 'фракция',
   unitText: 'единица',
   // Time / Timespan component
   labels: ['Години', 'месеца', 'дни', 'часа', 'минути', 'секунди', ''],
   labelsShort: ['Години', 'месеца', 'дни', 'часа', 'минути', 'секунди', ''],
   // Timer component
   startText: 'Старт',
   stopText: 'Стоп',
   resetText: 'Нулиране',
   lapText: 'Обиколка',
   hideText: 'крия',
   // Listview
   backText: 'връщане',
   undoText: 'ОТМЯНА',
   // Form
   offText: 'ИЗКЛ',
   onText: 'ВКЛ',
   // Numpad
   decimalSeparator: ',',
   thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/ca.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Català

_core2.default.i18n.ca = {
    // Core
    setText: 'Acceptar',
    cancelText: 'Cancel·lar',
    clearText: 'Esborrar',
    selectedText: '{count} seleccionat',
    selectedPluralText: '{count} seleccionats',
    // Datetime component
    dateFormat: 'dd/mm/yy',
    dayNames: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],
    dayNamesShort: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
    dayNamesMin: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
    dayText: 'Dia',
    hourText: 'Hores',
    minuteText: 'Minuts',
    monthNames: ['Gener', 'Febrer', 'Mar&ccedil;', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
    monthNamesShort: ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Des'],
    monthText: 'Mes',
    secText: 'Segons',
    timeFormat: 'HH:ii',
    yearText: 'Any',
    nowText: 'Ara',
    pmText: 'pm',
    amText: 'am',
    todayText: 'Avui',
    // Calendar component
    firstDay: 1,
    dateText: 'Data',
    timeText: 'Temps',
    calendarText: 'Calendari',
    closeText: 'Tancar',
    // Daterange component
    fromText: 'Iniciar',
    toText: 'Final',
    // Measurement components
    wholeText: 'Sencer',
    fractionText: 'Fracció',
    unitText: 'Unitat',
    // Time / Timespan component
    labels: ['Anys', 'Mesos', 'Dies', 'Hores', 'Minuts', 'Segons', ''],
    labelsShort: ['Anys', 'Mesos', 'Dies', 'Hrs', 'Mins', 'Secs', ''],
    // Timer component
    startText: 'Iniciar',
    stopText: 'Aturar',
    resetText: 'Reiniciar',
    lapText: 'Volta',
    hideText: 'Amagar',
    // Listview
    backText: 'Enrere',
    undoText: 'Desfés',
    // Form
    offText: 'No',
    onText: 'Si'
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/cs.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Cestina

_core2.default.i18n.cs = {
    // Core
    setText: 'Zadej',
    cancelText: 'Storno',
    clearText: 'Vymazat',
    selectedText: 'Označený: {count}',
    // Datetime component
    dateFormat: 'dd.mm.yy',
    dayNames: ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'],
    dayNamesShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
    dayNamesMin: ['N', 'P', 'Ú', 'S', 'Č', 'P', 'S'],
    dayText: 'Den',
    hourText: 'Hodiny',
    minuteText: 'Minuty',
    monthNames: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
    monthNamesShort: ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čer', 'Čvc', 'Spr', 'Zář', 'Říj', 'Lis', 'Pro'],
    monthText: 'Měsíc',
    secText: 'Sekundy',
    timeFormat: 'HH:ii',
    yearText: 'Rok',
    nowText: 'Teď',
    amText: 'am',
    pmText: 'pm',
    todayText: 'Dnes',
    // Calendar component
    firstDay: 1,
    dateText: 'Datum',
    timeText: 'Čas',
    calendarText: 'Kalendář',
    closeText: 'Zavřít',
    // Daterange component
    fromText: 'Začátek',
    toText: 'Konec',
    // Measurement components
    wholeText: 'Celý',
    fractionText: 'Část',
    unitText: 'Jednotka',
    // Time / Timespan component
    labels: ['Roky', 'Měsíce', 'Dny', 'Hodiny', 'Minuty', 'Sekundy', ''],
    labelsShort: ['Rok', 'Měs', 'Dny', 'Hod', 'Min', 'Sec', ''],
    // Timer component
    startText: 'Start',
    stopText: 'Stop',
    resetText: 'Resetovat',
    lapText: 'Etapa',
    hideText: 'Schovat',
    // Listview
    backText: 'Zpět',
    undoText: 'Zpět',
    // Form
    offText: 'O',
    onText: 'I',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/da.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Dansk
/*
 * Translation by: Mikkel Bonde, Apacta A/S <mikbonde@gmail.com>
 */

_core2.default.i18n.da = {
    // Core
    setText: 'Sæt',
    cancelText: 'Annuller',
    clearText: 'Ryd',
    selectedText: '{count} valgt',
    selectedPluralText: '{count} valgt',
    // Datetime component
    dateFormat: 'dd/mm/yy',
    dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
    dayNamesShort: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
    dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
    dayText: 'Dag',
    hourText: 'Timer',
    minuteText: 'Minutter',
    monthNames: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    monthText: 'Måned',
    secText: 'Sekunder',
    amText: 'am',
    pmText: 'pm',
    timeFormat: 'HH.ii',
    yearText: 'År',
    nowText: 'Nu',
    todayText: 'I dag',
    // Calendar component
    firstDay: 1,
    dateText: 'Dato',
    timeText: 'Tid',
    calendarText: 'Kalender',
    closeText: 'Luk',
    // Daterange component
    fromText: 'Start',
    toText: 'Slut',
    // Measurement components
    wholeText: 'Hele',
    fractionText: 'Dele',
    unitText: 'Enhed',
    // Time / Timespan component
    labels: ['År', 'Måneder', 'Dage', 'Timer', 'Minutter', 'Sekunder', ''],
    labelsShort: ['År', 'Mdr', 'Dg', 'Timer', 'Min', 'Sek', ''],
    // Timer component
    startText: 'Start',
    stopText: 'Stop',
    resetText: 'Nulstil',
    lapText: 'Omgang',
    hideText: 'Skjul',
    // Forms
    offText: 'Fra',
    onText: 'Til',
    // Listview
    backText: 'Tilbage',
    undoText: 'Fortryd'
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/de.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Deutsch

_core2.default.i18n.de = {
    // Core
    setText: 'OK',
    cancelText: 'Abbrechen',
    clearText: 'Löschen',
    selectedText: '{count} ausgewählt',
    // Datetime component
    dateFormat: 'dd.mm.yy',
    dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    dayNamesMin: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
    dayText: 'Tag',
    delimiter: '.',
    hourText: 'Stunde',
    minuteText: 'Minuten',
    monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    monthText: 'Monat',
    secText: 'Sekunden',
    timeFormat: 'HH:ii',
    yearText: 'Jahr',
    nowText: 'Jetzt',
    pmText: 'pm',
    amText: 'am',
    todayText: 'Heute',
    // Calendar component
    firstDay: 1,
    dateText: 'Datum',
    timeText: 'Zeit',
    calendarText: 'Kalender',
    closeText: 'Schließen',
    // Daterange component
    fromText: 'Von',
    toText: 'Um',
    // Measurement components
    wholeText: 'Ganze Zahl',
    fractionText: 'Bruchzahl',
    unitText: 'Maßeinheit',
    // Time / Timespan component
    labels: ['Jahre', 'Monate', 'Tage', 'Stunden', 'Minuten', 'Sekunden', ''],
    labelsShort: ['Jahr.', 'Mon.', 'Tag.', 'Std.', 'Min.', 'Sek.', ''],
    // Timer component
    startText: 'Starten',
    stopText: 'Stoppen',
    resetText: 'Zurücksetzen',
    lapText: 'Lap',
    hideText: 'Ausblenden',
    // Listview
    backText: 'Zurück',
    undoText: 'Rückgängig machen',
    // Form
    offText: 'Aus',
    onText: 'Ein',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/el.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Greek

_core2.default.i18n.el = {
   // Core
   setText: 'Ορισμος',
   cancelText: 'Ακυρωση',
   clearText: 'Διαγραφη',
   selectedText: '{count} επιλεγμένα',
   // Datetime component
   dateFormat: 'dd/mm/yy',
   dayNames: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
   dayNamesShort: ['Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ'],
   dayNamesMin: ['Κυ', 'Δε', 'Τρ', 'Τε', 'Πε', 'Πα', 'Σα'],
   dayText: 'ημέρα',
   delimiter: '/',
   hourText: 'ώρα',
   minuteText: 'λεπτό',
   monthNames: ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
   monthNamesShort: ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαι', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'],
   monthText: 'Μήνας',
   secText: 'δευτερόλεπτα',
   timeFormat: 'H:ii',
   yearText: 'έτος',
   nowText: 'τώρα',
   pmText: 'μμ',
   amText: 'πμ',
   // Calendar component
   firstDay: 1,
   dateText: 'Ημερομηνία',
   timeText: 'φορά',
   calendarText: 'Ημερολόγιο',
   todayText: 'Σήμερα',
   prevMonthText: 'Προηγούμενο μήνα',
   nextMonthText: 'Επόμενο μήνα',
   prevYearText: 'Προηγούμενο έτος',
   nextYearText: 'Επόμενο έτος',
   closeText: 'Κλείσιμο',
   eventText: 'Γεγονότα',
   eventsText: 'Γεγονότα',
   // Daterange component
   fromText: 'Αρχή',
   toText: 'Τέλος',
   // Measurement components
   wholeText: 'Ολόκληρος',
   fractionText: 'κλάσμα',
   unitText: 'Μονάδα',
   // Time / Timespan component
   labels: ['Χρόνια', 'Μήνες', 'Ημέρες', 'Ωρες', 'Λεπτά', 'δευτερόλεπτα', ''],
   labelsShort: ['Χρόνια', 'Μήνες', 'Ημέρες', 'Ωρες', 'Λεπτά', 'δευτ', ''],
   // Timer component
   startText: '΄Εναρξη',
   stopText: 'Διακοπή',
   resetText: 'Επαναφορά',
   lapText: 'Γύρος',
   hideText: 'κρύβω',
   // Listview
   backText: 'Πίσω',
   undoText: 'Αναιρεση',
   // Form
   offText: 'Ανενεργό',
   onText: 'Ενεργό',
   // Numpad
   decimalSeparator: ',',
   thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/en-UK.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // English (UK)

_core2.default.i18n['en-GB'] = _core2.default.i18n['en-UK'] = {
    dateFormat: 'dd/mm/yy',
    timeFormat: 'HH:ii'
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/es.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Español

_core2.default.i18n.es = {
    // Core
    setText: 'Aceptar',
    cancelText: 'Cancelar',
    clearText: 'Borrar',
    selectedText: '{count} seleccionado',
    selectedPluralText: '{count} seleccionados',
    // Datetime component
    dateFormat: 'dd/mm/yy',
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&#xE9;rcoles', 'Jueves', 'Viernes', 'S&#xE1;bado'],
    dayNamesShort: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S&#xE1;'],
    dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    dayText: 'D&#237;a',
    hourText: 'Horas',
    minuteText: 'Minutos',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    monthText: 'Mes',
    secText: 'Segundos',
    timeFormat: 'HH:ii',
    yearText: 'A&ntilde;o',
    nowText: 'Ahora',
    pmText: 'pm',
    amText: 'am',
    todayText: 'Hoy',
    // Calendar component
    firstDay: 1,
    dateText: 'Fecha',
    timeText: 'Tiempo',
    calendarText: 'Calendario',
    closeText: 'Cerrar',
    // Daterange component
    fromText: 'Iniciar',
    toText: 'Final',
    // Measurement components
    wholeText: 'Entero',
    fractionText: 'Fracción',
    unitText: 'Unidad',
    // Time / Timespan component
    labels: ['Años', 'Meses', 'Días', 'Horas', 'Minutos', 'Segundos', ''],
    labelsShort: ['Año', 'Mes', 'Día', 'Hora', 'Min', 'Seg', ''],
    // Timer component
    startText: 'Iniciar',
    stopText: 'Deténgase',
    resetText: 'Reinicializar',
    lapText: 'Lap',
    hideText: 'Esconder',
    // Listview
    backText: 'Atrás',
    undoText: 'Deshacer',
    // Form
    offText: 'No',
    onText: 'Sí',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/fa.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // فارسی

var JalaliDate = {
    gDaysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    jDaysInMonth: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]
};

JalaliDate.jalaliToGregorian = function (jY, jM, jD) {
    jY = parseInt(jY);
    jM = parseInt(jM);
    jD = parseInt(jD);

    var i;
    var jy = jY - 979;
    var jm = jM - 1;
    var jd = jD - 1;
    var jDayNo = 365 * jy + parseInt(jy / 33) * 8 + parseInt((jy % 33 + 3) / 4);

    for (i = 0; i < jm; ++i) {
        jDayNo += JalaliDate.jDaysInMonth[i];
    }

    jDayNo += jd;

    var gDayNo = jDayNo + 79;

    var gy = 1600 + 400 * parseInt(gDayNo / 146097);
    gDayNo = gDayNo % 146097;

    var leap = true;
    if (gDayNo >= 36525) {
        gDayNo--;
        gy += 100 * parseInt(gDayNo / 36524);
        gDayNo = gDayNo % 36524;

        if (gDayNo >= 365) {
            gDayNo++;
        } else {
            leap = false;
        }
    }

    gy += 4 * parseInt(gDayNo / 1461);
    gDayNo %= 1461;

    if (gDayNo >= 366) {
        leap = false;

        gDayNo--;
        gy += parseInt(gDayNo / 365);
        gDayNo = gDayNo % 365;
    }

    for (i = 0; gDayNo >= JalaliDate.gDaysInMonth[i] + (i == 1 && leap); i++) {
        gDayNo -= JalaliDate.gDaysInMonth[i] + (i == 1 && leap);
    }

    var gm = i + 1;
    var gd = gDayNo + 1;

    return [gy, gm, gd];
};

JalaliDate.checkDate = function (jY, jM, jD) {
    return !(jY < 0 || jY > 32767 || jM < 1 || jM > 12 || jD < 1 || jD > JalaliDate.jDaysInMonth[jM - 1] + (jM == 12 && (jY - 979) % 33 % 4 === 0));
};

JalaliDate.gregorianToJalali = function (gY, gM, gD) {
    gY = parseInt(gY);
    gM = parseInt(gM);
    gD = parseInt(gD);

    var i;
    var gy = gY - 1600;
    var gm = gM - 1;
    var gd = gD - 1;

    var gDayNo = 365 * gy + parseInt((gy + 3) / 4) - parseInt((gy + 99) / 100) + parseInt((gy + 399) / 400);

    for (i = 0; i < gm; ++i) {
        gDayNo += JalaliDate.gDaysInMonth[i];
    }

    if (gm > 1 && (gy % 4 === 0 && gy % 100 !== 0 || gy % 400 === 0)) {
        ++gDayNo;
    }

    gDayNo += gd;

    var jDayNo = gDayNo - 79;

    var jNp = parseInt(jDayNo / 12053);
    jDayNo %= 12053;

    var jy = 979 + 33 * jNp + 4 * parseInt(jDayNo / 1461);

    jDayNo %= 1461;

    if (jDayNo >= 366) {
        jy += parseInt((jDayNo - 1) / 365);
        jDayNo = (jDayNo - 1) % 365;
    }

    for (i = 0; i < 11 && jDayNo >= JalaliDate.jDaysInMonth[i]; ++i) {
        jDayNo -= JalaliDate.jDaysInMonth[i];
    }

    var jm = i + 1;
    var jd = jDayNo + 1;

    return [jy, jm, jd];
};

_core2.default.i18n.fa = {
    // Core
    setText: 'تاييد',
    cancelText: 'انصراف',
    clearText: 'واضح ',
    selectedText: '{count} منتخب',
    // Datetime component
    dateFormat: 'yy/mm/dd',
    dayNames: ['يکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'],
    dayNamesShort: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
    dayNamesMin: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
    dayText: 'روز',
    hourText: 'ساعت',
    minuteText: 'دقيقه',
    monthNames: ['فروردين', 'ارديبهشت', 'خرداد', 'تير', 'مرداد', 'شهريور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    monthNamesShort: ['فروردين', 'ارديبهشت', 'خرداد', 'تير', 'مرداد', 'شهريور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    monthText: 'ماه',
    secText: 'ثانيه',
    timeFormat: 'HH:ii',
    timeWheels: 'iiHH', // Need this for correct RTL display
    yearText: 'سال',
    nowText: 'اکنون',
    amText: 'ب',
    pmText: 'ص',
    todayText: 'امروز',
    getYear: function getYear(date) {
        return JalaliDate.gregorianToJalali(date.getFullYear(), date.getMonth() + 1, date.getDate())[0];
    },
    getMonth: function getMonth(date) {
        return --JalaliDate.gregorianToJalali(date.getFullYear(), date.getMonth() + 1, date.getDate())[1];
    },
    getDay: function getDay(date) {
        return JalaliDate.gregorianToJalali(date.getFullYear(), date.getMonth() + 1, date.getDate())[2];
    },
    getDate: function getDate(y, m, d, h, i, s, u) {
        if (m < 0) {
            y += Math.floor(m / 12);
            m = 12 + m % 12;
        }
        if (m > 11) {
            y += Math.floor(m / 12);
            m = m % 12;
        }
        var gregorianDate = JalaliDate.jalaliToGregorian(y, +m + 1, d);

        return new Date(gregorianDate[0], gregorianDate[1] - 1, gregorianDate[2], h || 0, i || 0, s || 0, u || 0);
    },
    getMaxDayOfMonth: function getMaxDayOfMonth(y, m) {
        var maxdays = 31;
        while (JalaliDate.checkDate(y, m + 1, maxdays) === false) {
            maxdays--;
        }
        return maxdays;
    },
    //getNumber: function (n) {
    //    var i,
    //        nums = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
    //        res = '';

    //    n = n + '';
    //    for (i = 0; i < n.length; i++) {
    //        res += nums[+n[i]];
    //    }
    //    return res;
    //},
    // Calendar component
    firstDay: 6,
    rtl: true,
    dateText: 'تاریخ ',
    timeText: 'زمان ',
    calendarText: 'تقویم',
    closeText: 'نزدیک',
    // Daterange component
    fromText: 'شروع ',
    toText: 'پایان',
    // Measurement components
    wholeText: 'تمام',
    fractionText: 'کسر',
    unitText: 'واحد',
    // Time / Timespan component
    labels: ['سال', 'ماه', 'روز', 'ساعت', 'دقیقه', 'ثانیه', ''],
    labelsShort: ['سال', 'ماه', 'روز', 'ساعت', 'دقیقه', 'ثانیه', ''],
    // Timer component
    startText: 'شروع',
    stopText: 'پايان',
    resetText: 'تنظیم مجدد',
    lapText: 'Lap',
    hideText: 'پنهان کردن',
    // Listview
    backText: 'پشت',
    undoText: 'واچیدن'
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/fi.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Suomi

_core2.default.i18n.fi = {
    // Core
    setText: 'Aseta',
    cancelText: 'Peruuta',
    clearText: 'Tyhjennä',
    selectedText: '{count} valita',
    // Datetime component
    dateFormat: 'd. MM yy',
    dayNames: ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviiko', 'Torstai', 'Perjantai', 'Lauantai'],
    dayNamesShort: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'],
    dayNamesMin: ['S', 'M', 'T', 'K', 'T', 'P', 'L'],
    dayText: 'Päivä',
    delimiter: '.',
    hourText: 'Tuntia',
    minuteText: 'Minuutti',
    monthNames: ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'],
    monthNamesShort: ['Tam', 'Hel', 'Maa', 'Huh', 'Tou', 'Kes', 'Hei', 'Elo', 'Syy', 'Lok', 'Mar', 'Jou'],
    monthText: 'Kuukausi',
    secText: 'Sekunda',
    timeFormat: 'H:ii',
    yearText: 'Vuosi',
    nowText: 'Nyt',
    pmText: 'pm',
    amText: 'am',
    // Calendar component
    firstDay: 1,
    dateText: 'Päiväys',
    timeText: 'Aika',
    calendarText: 'Kalenteri',
    todayText: 'Tänään',
    prevMonthText: 'Edellinen kuukausi',
    nextMonthText: 'Ensi kuussa',
    prevYearText: 'Edellinen vuosi',
    nextYearText: 'Ensi vuosi',
    closeText: 'Sulje',
    eventText: 'Tapahtumia',
    eventsText: 'Tapahtumia',
    // Daterange component
    fromText: 'Alkaa',
    toText: 'Päättyy',
    // Measurement components
    wholeText: 'Kokonainen',
    fractionText: 'Murtoluku',
    unitText: 'Yksikkö',
    // Time / Timespan component
    labels: ['Vuosi', 'Kuukausi', 'Päivä', 'Tunnin', 'Minuutti', 'sekuntia', ''],
    labelsShort: ['Vuo', 'Kuu', 'Päi', 'Tun', 'Min', 'Sek', ''],
    // Timer component
    startText: 'Käynnistys',
    stopText: 'Seis',
    resetText: 'Aseta uudelleen',
    lapText: 'Kierros',
    hideText: 'Vuota',
    // Listview
    backText: 'Edellinen',
    undoText: 'Kumoa',
    // Form
    offText: 'Pois',
    onText: 'Päällä',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/fr.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Français

_core2.default.i18n.fr = {
    // Core
    setText: 'Terminer',
    cancelText: 'Annuler',
    clearText: 'Effacer',
    selectedText: '{count} sélectionné',
    selectedPluralText: '{count} sélectionnés',
    // Datetime component
    dateFormat: 'dd/mm/yy',
    dayNames: ['&#68;imanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['&#68;im.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    dayNamesMin: ['&#68;', 'L', 'M', 'M', 'J', 'V', 'S'],
    dayText: 'Jour',
    monthText: 'Mois',
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    hourText: 'Heures',
    minuteText: 'Minutes',
    secText: 'Secondes',
    timeFormat: 'HH:ii',
    yearText: 'Année',
    nowText: 'Maintenant',
    pmText: 'pm',
    amText: 'am',
    todayText: "Aujourd'hui",
    // Calendar component
    firstDay: 1,
    dateText: 'Date',
    timeText: 'Heure',
    calendarText: 'Calendrier',
    closeText: 'Fermer',
    // Daterange component
    fromText: 'Démarrer',
    toText: 'Fin',
    // Measurement components
    wholeText: 'Entier',
    fractionText: 'Fraction',
    unitText: 'Unité',
    // Time / Timespan component
    labels: ['Ans', 'Mois', 'Jours', 'Heures', 'Minutes', 'Secondes', ''],
    labelsShort: ['Ans', 'Mois', 'Jours', 'Hrs', 'Min', 'Sec', ''],
    // Timer component
    startText: 'Démarrer',
    stopText: 'Arrêter',
    resetText: 'Réinitialiser',
    lapText: 'Lap',
    hideText: 'Cachez',
    // Listview
    backText: 'Retour',
    undoText: 'Annuler',
    // Form
    offText: 'Non',
    onText: 'Oui',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/he.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Hebrew

_core2.default.i18n.he = {
    // Core
    rtl: true, // Right to left mode
    setText: 'שמירה',
    cancelText: 'ביטול',
    clearText: 'נקה',
    selectedText: '{count} נבחר',
    selectedPluralText: '{count} נבחרו',
    // Datetime component
    dateFormat: 'dd/mm/yy',
    dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
    dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
    dayNamesMin: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
    dayText: 'יום',
    hourText: 'שעות',
    minuteText: 'דקות',
    monthNames: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
    monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
    monthText: 'חודש',
    secText: 'שניות',
    amText: 'am',
    pmText: 'pm',
    timeFormat: 'HH:ii',
    timeWheels: 'iiHH', // Need this for correct RTL display
    yearText: 'שנה',
    nowText: 'עכשיו',
    // Calendar component
    firstDay: 0,
    dateText: 'תאריך',
    timeText: 'זמן',
    calendarText: 'תאריכון',
    closeText: 'סגירה',
    todayText: 'היום',
    // Event calendar
    eventText: 'מִקרֶה',
    eventsText: 'מִקרֶה',
    // Daterange component
    fromText: 'התחלה',
    toText: 'סיום',
    // Measurement components
    wholeText: 'כֹּל',
    fractionText: 'שבריר',
    unitText: 'יחידה',
    // Time / Timespan component
    labels: ['שנים', 'חודשים', 'ימים', 'שעות', 'דקות', 'שניים', ''],
    labelsShort: ['שנים', 'חודשים', 'ימים', 'שעות', 'דקות', 'שניים', ''],
    // Timer component
    startText: 'התחל',
    stopText: 'עצור',
    resetText: 'אתחול',
    lapText: 'הקפה',
    hideText: 'הסתר',
    // Forms
    offText: 'כיבוי',
    onText: 'הפעלה',
    // Listview
    backText: 'חזור',
    undoText: 'ביטול פעולה'
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/hi.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Hindi

_core2.default.i18n.hi = {
   // Core
   setText: 'सैट करें',
   cancelText: 'रद्द करें',
   clearText: 'साफ़ को',
   selectedText: '{count} चयनित',
   // Datetime component
   dateFormat: 'dd/mm/yy',
   dayNames: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
   dayNamesShort: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
   dayNamesMin: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
   dayText: 'दिन',
   delimiter: '.',
   hourText: 'घंटा',
   minuteText: 'मिनट',
   monthNames: ['जनवरी ', 'फरवरी', 'मार्च', 'अप्रेल', 'मई', 'जून', 'जूलाई', 'अगस्त ', 'सितम्बर', 'अक्टूबर', 'नवम्बर', 'दिसम्बर'],
   monthNamesShort: ['जन', 'फर', 'मार्च', 'अप्रेल', 'मई', 'जून', 'जूलाई', 'अग', 'सित', 'अक्ट', 'नव', 'दि'],
   monthText: 'महीना',
   secText: 'सेकंड',
   timeFormat: 'H:ii',
   yearText: 'साल',
   nowText: 'अब',
   pmText: 'अपराह्न',
   amText: 'पूर्वाह्न',
   // Calendar component
   firstDay: 1,
   dateText: 'तिथि',
   timeText: 'समय',
   calendarText: 'कैलेंडर',
   todayText: 'आज',
   prevMonthText: 'पिछ्ला महिना',
   nextMonthText: 'अगले महीने',
   prevYearText: 'पिछला साल',
   nextYearText: 'अगले वर्ष',
   closeText: 'बंद',
   eventText: 'इवेट३',
   eventsText: 'इवेट३',
   // Daterange component
   fromText: 'से',
   toText: 'तक',
   // Measurement components
   wholeText: 'समूचा',
   fractionText: 'अंश',
   unitText: 'इकाई',
   // Time / Timespan component
   labels: ['साल', 'महीने', 'दिन', 'घंटे', 'मिनट', 'सेकंड', ''],
   labelsShort: ['साल', 'महीने', 'दिन', 'घंटे', 'मिनट', 'सेकंड', ''],
   // Timer component
   startText: 'प्रारंभ',
   stopText: 'रोकें',
   resetText: 'रीसेट करें',
   lapText: 'लैप',
   hideText: 'छिपाना',
   // Listview
   backText: 'वापस', // check
   undoText: 'वापस लाएं',
   // Form
   offText: 'बंद',
   onText: 'चालू',
   // Numpad
   decimalSeparator: ',',
   thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/hr.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Croatian

_core2.default.i18n.hr = {
   // Core
   setText: 'Postavi',
   cancelText: 'Izlaz',
   clearText: 'Izbriši',
   selectedText: '{count} odabran',
   // Datetime component
   dateFormat: 'dd.mm.yy',
   dayNames: ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'],
   dayNamesShort: ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'],
   dayNamesMin: ['Ne', 'Po', 'Ut', 'Sr', 'Če', 'Pe', 'Su'],
   dayText: 'Dan',
   delimiter: '.',
   hourText: 'Sat',
   minuteText: 'Minuta',
   monthNames: ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'],
   monthNamesShort: ['Sij', 'Velj', 'Ožu', 'Tra', 'Svi', 'Lip', 'Srp', 'Kol', 'Ruj', 'Lis', 'Stu', 'Pro'],
   monthText: 'Mjesec',
   secText: 'Sekunda',
   timeFormat: 'H:ii',
   yearText: 'Godina',
   nowText: 'Sada',
   pmText: 'pm',
   amText: 'am',
   // Calendar component
   firstDay: 1,
   dateText: 'Datum',
   timeText: 'Vrijeme',
   calendarText: 'Kalendar',
   todayText: 'Danas',
   prevMonthText: 'Prethodni mjesec',
   nextMonthText: 'Sljedeći mjesec',
   prevYearText: 'Prethodni godina',
   nextYearText: 'Slijedeće godine',
   closeText: 'Zatvori',
   eventText: 'Događaj',
   eventsText: 'događaja',
   // Daterange component
   fromText: 'Počinje',
   toText: 'Završava',
   // Measurement components
   wholeText: 'Cjelina',
   fractionText: 'Frakcija',
   unitText: 'Jedinica',
   // Time / Timespan component
   labels: ['godina', 'mjesec', 'dan', 'sat', 'minuta', 'sekunda', ''],
   labelsShort: ['god', 'mje', 'dan', 'sat', 'min', 'sec', ''],
   // Timer component
   startText: 'Početak',
   stopText: 'Prekid',
   resetText: 'Resetiraj',
   lapText: 'Ciklus',
   hideText: 'Sakriti',
   // Listview
   backText: 'Natrag',
   undoText: 'Poništavanje',
   // Form
   offText: 'Uklj.',
   onText: 'Isklj.',
   // Numpad
   decimalSeparator: ',',
   thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/hu.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Magyar

_core2.default.i18n.hu = {
    // Core
    setText: 'OK',
    cancelText: 'Mégse',
    clearText: 'Törlés',
    selectedText: '{count} kiválasztva',
    // Datetime component
    dateFormat: 'yy.mm.dd.',
    dayNames: ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
    dayNamesShort: ['Va', 'Hé', 'Ke', 'Sze', 'Csü', 'Pé', 'Szo'],
    dayNamesMin: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
    dayText: 'Nap',
    delimiter: '.',
    hourText: 'Óra',
    minuteText: 'Perc',
    monthNames: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
    monthText: 'Hónap',
    secText: 'Másodperc',
    timeFormat: 'H:ii',
    yearText: 'Év',
    nowText: 'Most',
    pmText: 'pm',
    amText: 'am',
    // Calendar component
    firstDay: 1,
    dateText: 'Dátum',
    timeText: 'Idő',
    calendarText: 'Naptár',
    todayText: 'Ma',
    prevMonthText: 'Előző hónap',
    nextMonthText: 'Következő hónap',
    prevYearText: 'Előző év',
    nextYearText: 'Következő év',
    closeText: 'Bezár',
    eventText: 'esemény',
    eventsText: 'esemény',
    // Daterange component
    fromText: 'Eleje',
    toText: 'Vége',
    // Measurement components
    wholeText: 'Egész',
    fractionText: 'Tört',
    unitText: 'Egység',
    // Time / Timespan component
    labels: ['Év', 'Hónap', 'Nap', 'Óra', 'Perc', 'Másodperc', ''],
    labelsShort: ['Év', 'Hó.', 'Nap', 'Óra', 'Perc', 'Mp.', ''],
    // Timer component
    startText: 'Indít',
    stopText: 'Megállít',
    resetText: 'Visszaállít',
    lapText: 'Lap',
    hideText: 'Elrejt',
    // Listview
    backText: 'Vissza',
    undoText: 'Visszavon',
    // Form
    offText: 'Ki',
    onText: 'Be',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/it.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Italiano 

_core2.default.i18n.it = {
    // Core
    setText: 'OK',
    cancelText: 'Annulla',
    clearText: 'Chiarire',
    selectedText: '{count} selezionato',
    selectedPluralText: '{count} selezionati',
    // Datetime component
    dateFormat: 'dd/mm/yy',
    dayNames: ['Domenica', 'Lunedì', 'Mertedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    dayNamesShort: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
    dayNamesMin: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
    dayText: 'Giorno',
    hourText: 'Ore',
    minuteText: 'Minuti',
    monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    monthText: 'Mese',
    secText: 'Secondi',
    timeFormat: 'HH:ii',
    yearText: 'Anno',
    nowText: 'Ora',
    pmText: 'pm',
    amText: 'am',
    todayText: 'Oggi',
    // Calendar component
    firstDay: 1,
    dateText: 'Data',
    timeText: 'Volta',
    calendarText: 'Calendario',
    closeText: 'Chiudere',
    // Daterange component
    fromText: 'Inizio',
    toText: 'Fine',
    // Measurement components
    wholeText: 'Intero',
    fractionText: 'Frazione',
    unitText: 'Unità',
    // Time / Timespan component
    labels: ['Anni', 'Mesi', 'Giorni', 'Ore', 'Minuti', 'Secondi', ''],
    labelsShort: ['Anni', 'Mesi', 'Gio', 'Ore', 'Min', 'Sec', ''],
    // Timer component
    startText: 'Inizio',
    stopText: 'Arresto',
    resetText: 'Ripristina',
    lapText: 'Lap',
    hideText: 'Nascondi',
    // Listview
    backText: 'Indietro',
    undoText: 'Annulla',
    // Form
    offText: 'Via',
    onText: 'Su',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/ja.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Japanese

_core2.default.i18n.ja = {
    // Core
    setText: 'セット',
    cancelText: 'キャンセル',
    clearText: 'クリア',
    selectedText: '{count} 選択',
    // Datetime component
    dateFormat: 'yy年mm月dd日',
    dayNames: ['日', '月', '火', '水', '木', '金', '土'],
    dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
    dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
    dayText: '日',
    hourText: '時',
    minuteText: '分',
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthText: '月',
    secText: '秒',
    timeFormat: 'HH:ii',
    yearText: '年',
    nowText: '今',
    pmText: '午後',
    amText: '午前',
    yearSuffix: '年',
    monthSuffix: '月',
    daySuffix: '日',
    todayText: '今日',
    // Calendar component
    dateText: '日付',
    timeText: '時間',
    calendarText: 'カレンダー',
    closeText: 'クローズ',
    // Daterange component
    fromText: '開始',
    toText: '終わり',
    // Measurement components
    wholeText: '全数',
    fractionText: '分数',
    unitText: '単位',
    // Time / Timespan component
    labels: ['年間', '月間', '日間', '時間', '分', '秒', ''],
    labelsShort: ['年間', '月間', '日間', '時間', '分', '秒', ''],
    // Timer component
    startText: '開始',
    stopText: '停止',
    resetText: 'リセット',
    lapText: 'ラップ',
    hideText: '隠す',
    // Listview
    backText: 'バック',
    undoText: 'アンドゥ'
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/ko.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Korean

_core2.default.i18n.ko = {
   // Core
   setText: '설정',
   cancelText: '취소',
   clearText: '삭제',
   selectedText: '{count} 선택된',
   // Datetime component
   dateFormat: 'yy-mm-dd',
   dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
   dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
   dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
   dayText: '일',
   delimiter: '-',
   hourText: '시간',
   minuteText: '분',
   monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
   monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
   monthText: '달',
   secText: '초',
   timeFormat: 'H:ii',
   yearText: '년',
   nowText: '지금',
   pmText: '오후',
   amText: '오전',
   // Calendar component
   firstDay: 0,
   dateText: '날짜',
   timeText: '시간',
   calendarText: '일정',
   todayText: '오늘',
   prevMonthText: '이전 달',
   nextMonthText: '다음 달',
   prevYearText: '이전 년',
   nextYearText: '다음 년',
   closeText: '닫기',
   eventText: '이벤트',
   eventsText: '이벤트',
   // Daterange component
   fromText: '시작',
   toText: '종료',
   // Measurement components
   wholeText: '정수',
   fractionText: '분수',
   unitText: '단위',
   // Time / Timespan component
   labels: ['년', '달', '일', '시간', '분', '초', ''],
   labelsShort: ['년', '달', '일', '시간', '분', '초', ''],
   // Timer component
   startText: '시작',
   stopText: '중지 ',
   resetText: '초기화',
   lapText: '기록',
   hideText: '숨는 장소',
   // Listview
   backText: '뒤로',
   undoText: '실행취소',
   // Form
   offText: '끔',
   onText: '켬',
   // Numpad
   decimalSeparator: ',',
   thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/lt.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Lietuvių

_core2.default.i18n.lt = {
    // Core
    setText: 'OK',
    cancelText: 'Atšaukti',
    clearText: 'Išvalyti',
    selectedText: 'Pasirinktas {count}',
    selectedPluralText: 'Pasirinkti {count}',
    // Datetime component
    dateFormat: 'yy-mm-dd',
    dayNames: ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis'],
    dayNamesShort: ['S', 'Pr', 'A', 'T', 'K', 'Pn', 'Š'],
    dayNamesMin: ['S', 'Pr', 'A', 'T', 'K', 'Pn', 'Š'],
    dayText: 'Diena',
    hourText: 'Valanda',
    minuteText: 'Minutes',
    monthNames: ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'],
    monthNamesShort: ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rugp', 'Rugs', 'Spa', 'Lap', 'Gruo'],
    monthText: 'Mėnuo',
    secText: 'Sekundes',
    amText: 'am',
    pmText: 'pm',
    timeFormat: 'HH:ii',
    yearText: 'Metai',
    nowText: 'Dabar',
    todayText: 'Šiandien',
    // Calendar component
    firstDay: 1,
    dateText: 'Data',
    timeText: 'Laikas',
    calendarText: 'Kalendorius',
    closeText: 'Uždaryti',
    // Daterange component
    fromText: 'Nuo',
    toText: 'Iki',
    // Measurement components
    wholeText: 'Visas',
    fractionText: 'Frakcija',
    unitText: 'Vienetas',
    // Time / Timespan component
    labels: ['Metai', 'Mėnesiai', 'Dienos', 'Valandos', 'Minutes', 'Sekundes', ''],
    labelsShort: ['m', 'mėn.', 'd', 'h', 'min', 's', ''],
    // Timer component
    startText: 'Pradėti',
    stopText: 'Sustabdyti',
    resetText: 'Išnaujo',
    lapText: 'Ratas',
    hideText: 'Slėpti',
    // Listview
    backText: 'Atgal',
    undoText: 'Anuliuoti',
    // Form
    offText: 'Išj.',
    onText: 'Įj.',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/nl.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Nederlands

_core2.default.i18n.nl = {
    // Core
    setText: 'Instellen',
    cancelText: 'Annuleren',
    clearText: 'Duidelijk',
    selectedText: '{count} gekozen',
    // Datetime component
    dateFormat: 'dd-mm-yy',
    dayNames: ['zondag', 'maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
    dayNamesShort: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
    dayNamesMin: ['z', 'm', 'd', 'w', 'd', 'v', 'z'],
    dayText: 'Dag',
    hourText: 'Uur',
    minuteText: 'Minuten',
    monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
    monthNamesShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
    monthText: 'Maand',
    secText: 'Seconden',
    timeFormat: 'HH:ii',
    yearText: 'Jaar',
    nowText: 'Nu',
    pmText: 'pm',
    amText: 'am',
    todayText: 'Vandaag',
    // Calendar component
    firstDay: 1,
    dateText: 'Datum',
    timeText: 'Tijd',
    calendarText: 'Kalender',
    closeText: 'Sluiten',
    // Daterange component
    fromText: 'Start',
    toText: 'Einde',
    // Measurement components
    wholeText: 'geheel',
    fractionText: 'fractie',
    unitText: 'eenheid',
    // Time / Timespan component
    labels: ['Jaren', 'Maanden', 'Dagen', 'Uren', 'Minuten', 'Seconden', ''],
    labelsShort: ['j', 'm', 'd', 'u', 'min', 'sec', ''],
    // Timer component
    startText: 'Start',
    stopText: 'Stop',
    resetText: 'Reset',
    lapText: 'Ronde',
    hideText: 'Verbergen',
    // Listview
    backText: 'Terug',
    undoText: 'Onged. maken',
    // Form
    offText: 'Uit',
    onText: 'Aan',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/no.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Norsk

_core2.default.i18n.no = {
    // Core
    setText: 'OK',
    cancelText: 'Avbryt',
    clearText: 'Tømme',
    selectedText: '{count} valgt',
    // Datetime component
    dateFormat: 'dd.mm.yy',
    dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
    dayNamesShort: ['Sø', 'Ma', 'Ti', 'On', 'To', 'Fr', 'Lø'],
    dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
    dayText: 'Dag',
    delimiter: '.',
    hourText: 'Time',
    minuteText: 'Minutt',
    monthNames: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
    monthText: 'Måned',
    secText: 'Sekund',
    timeFormat: 'HH:ii',
    yearText: 'År',
    nowText: 'Nå',
    pmText: 'pm',
    amText: 'am',
    todayText: 'I dag',
    // Calendar component
    firstDay: 1,
    dateText: 'Dato',
    timeText: 'Tid',
    calendarText: 'Kalender',
    closeText: 'Lukk',
    // Daterange component
    fromText: 'Start',
    toText: 'End',
    // Measurement components
    wholeText: 'Hele',
    fractionText: 'Fraksjon',
    unitText: 'Enhet',
    // Time / Timespan component
    labels: ['År', 'Måneder', 'Dager', 'Timer', 'Minutter', 'Sekunder', ''],
    labelsShort: ['År', 'Mån', 'Dag', 'Time', 'Min', 'Sek', ''],
    // Timer component
    startText: 'Start',
    stopText: 'Stopp',
    resetText: 'Tilbakestille',
    lapText: 'Runde',
    hideText: 'Skjul',
    // Listview
    backText: 'Tilbake',
    undoText: 'Angre',
    // Form
    offText: 'Av',
    onText: 'På',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/pl.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Polski

_core2.default.i18n.pl = {
    // Core
    setText: 'Zestaw',
    cancelText: 'Anuluj',
    clearText: 'Oczyścić',
    selectedText: 'Wybór: {count}',
    // Datetime component
    dateFormat: 'yy-mm-dd',
    dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
    dayNamesShort: ['Niedz.', 'Pon.', 'Wt.', 'Śr.', 'Czw.', 'Pt.', 'Sob.'],
    dayNamesMin: ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'],
    dayText: 'Dzień',
    hourText: 'Godziny',
    minuteText: 'Minuty',
    monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
    monthNamesShort: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
    monthText: 'Miesiąc',
    secText: 'Sekundy',
    timeFormat: 'HH:ii',
    yearText: 'Rok',
    nowText: 'Teraz',
    amText: 'am',
    pmText: 'pm',
    todayText: 'Dzisiaj',
    // Calendar component
    firstDay: 1,
    dateText: 'Data',
    timeText: 'Czas',
    calendarText: 'Kalendarz',
    closeText: 'Zakończenie',
    // Daterange component
    fromText: 'Rozpoczęcie',
    toText: 'Koniec',
    // Measurement components
    wholeText: 'Cały',
    fractionText: 'Ułamek',
    unitText: 'Jednostka',
    // Time / Timespan component
    labels: ['Lata', 'Miesiąc', 'Dni', 'Godziny', 'Minuty', 'Sekundy', ''],
    labelsShort: ['R', 'M', 'Dz', 'Godz', 'Min', 'Sek', ''],
    // Timer component
    startText: 'Rozpoczęcie',
    stopText: 'Zatrzymać',
    resetText: 'Zresetować',
    lapText: 'Zakładka',
    hideText: 'Ukryć',
    // Listview
    backText: 'Wróć',
    undoText: 'Cofnij',
    // Form
    offText: 'Wył',
    onText: 'Wł',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/pt-BR.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Português Brasileiro
/*
 * Translation by: Ivan Gomes <contato@ivangomes.com.br>
 */

_core2.default.i18n['pt-BR'] = {
    // Core
    setText: 'Selecionar',
    cancelText: 'Cancelar',
    clearText: 'Claro',
    selectedText: '{count} selecionado',
    selectedPluralText: '{count} selecionados',
    // Datetime component
    dateFormat: 'dd/mm/yy',
    dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    dayText: 'Dia',
    hourText: 'Hora',
    minuteText: 'Minutos',
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    monthText: 'Mês',
    secText: 'Segundo',
    timeFormat: 'HH:ii',
    yearText: 'Ano',
    nowText: 'Agora',
    pmText: 'pm',
    amText: 'am',
    todayText: 'Hoje',
    // Calendar component
    dateText: 'Data',
    timeText: 'Tempo',
    calendarText: 'Calendário',
    closeText: 'Fechar',
    // Daterange component
    fromText: 'In&iacute;cio',
    toText: 'Fim',
    // Measurement components
    wholeText: 'Inteiro',
    fractionText: 'Fração',
    unitText: 'Unidade',
    // Time / Timespan component
    labels: ['Anos', 'Meses', 'Dias', 'Horas', 'Minutos', 'Segundos', ''],
    labelsShort: ['Ano', 'M&ecirc;s', 'Dia', 'Hora', 'Min', 'Seg', ''],
    // Timer component
    startText: 'Começar',
    stopText: 'Pare',
    resetText: 'Reinicializar',
    lapText: 'Lap',
    hideText: 'Esconder',
    // Listview
    backText: 'Anterior',
    undoText: 'Desfazer',
    // Form
    offText: 'Desl',
    onText: 'Lig',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/pt-PT.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Português Europeu
/*
 * Translation by: Jorge Simoes <http://jorge.simoes.com>
 */

_core2.default.i18n['pt-PT'] = {
    // Core
    setText: 'Seleccionar',
    cancelText: 'Cancelar',
    clearText: 'Claro',
    selectedText: '{count} selecionado',
    selectedPluralText: '{count} selecionados',
    // Datetime component
    dateFormat: 'dd-mm-yy',
    dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'S&aacute;bado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S&aacute;b'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    dayText: 'Dia',
    hourText: 'Horas',
    minuteText: 'Minutos',
    monthNames: ['Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    monthText: 'M&ecirc;s',
    secText: 'Segundo',
    timeFormat: 'HH:ii',
    yearText: 'Ano',
    nowText: 'Actualizar',
    pmText: 'pm',
    amText: 'am',
    todayText: 'Hoy',
    // Calendar component
    firstDay: 1,
    dateText: 'Data',
    timeText: 'Tempo',
    calendarText: 'Calend&aacute;rio',
    closeText: 'Fechar',
    // Daterange component
    fromText: 'In&iacute;cio',
    toText: 'Fim',
    // Measurement components
    wholeText: 'Inteiro',
    fractionText: 'Frac&ccedil;&atilde;o',
    unitText: 'Unidade',
    // Time / Timespan component
    labels: ['Anos', 'Meses', 'Dias', 'Horas', 'Minutos', 'Segundos', ''],
    labelsShort: ['Ano', 'M&ecirc;s', 'Dia', 'Hora', 'Min', 'Seg', ''],
    // Timer component
    startText: 'Come&ccedil;ar',
    stopText: 'Parar',
    resetText: 'Reinicializar',
    lapText: 'Lap',
    hideText: 'Esconder',
    // Listview
    backText: 'Anterior',
    undoText: 'Anular',
    // Form
    offText: 'Desl',
    onText: 'Lig',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/ro.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Română

_core2.default.i18n.ro = {
    // Core
    setText: 'Setare',
    cancelText: 'Anulare',
    clearText: 'Ştergere',
    selectedText: '{count} selectat',
    selectedPluralText: '{count} selectate',
    // Datetime component
    dateFormat: 'dd.mm.yy',
    dayNames: ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
    dayNamesShort: ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'],
    dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    dayText: ' Ziua',
    delimiter: '.',
    hourText: ' Ore ',
    minuteText: 'Minute',
    monthNames: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
    monthNamesShort: ['Ian.', 'Feb.', 'Mar.', 'Apr.', 'Mai', 'Iun.', 'Iul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
    monthText: 'Luna',
    secText: 'Secunde',
    timeFormat: 'HH:ii',
    yearText: 'Anul',
    nowText: 'Acum',
    amText: 'am',
    pmText: 'pm',
    todayText: 'Astăzi',
    // Calendar component
    firstDay: 1,
    dateText: 'Data',
    timeText: 'Ora',
    calendarText: 'Calendar',
    closeText: 'Închidere',
    // Daterange component
    fromText: 'Start',
    toText: 'Final',
    // Measurement components
    wholeText: 'Complet',
    fractionText: 'Parţial',
    unitText: 'Unitate',
    // Time / Timespan component
    labels: ['Ani', 'Luni', 'Zile', 'Ore', 'Minute', 'Secunde', ''],
    labelsShort: ['Ani', 'Luni', 'Zile', 'Ore', 'Min.', 'Sec.', ''],
    // Timer component
    startText: 'Start',
    stopText: 'Stop',
    resetText: 'Resetare',
    lapText: 'Tură',
    hideText: 'Ascundere',
    // Listview
    backText: 'Înapoi',
    undoText: 'Anulează',
    // Form
    offText: 'Nu',
    onText: 'Da',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/ru-UA.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Русский (UA)

_core2.default.i18n['ru-UA'] = {
    // Core
    setText: 'Установить',
    cancelText: 'Отменить',
    clearText: 'Очиститьr',
    selectedText: '{count} Вібрать',
    // Datetime component
    dateFormat: 'dd.mm.yy',
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    dayNamesMin: ['в', 'п', 'в', 'с', 'ч', 'п', 'с'],
    dayText: 'День',
    delimiter: '.',
    hourText: 'Часы',
    minuteText: 'Минуты',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв.', 'Февр.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'],
    monthText: 'Месяцы',
    secText: 'Сикунды',
    timeFormat: 'HH:ii',
    yearText: 'Год',
    nowText: 'Сейчас',
    amText: 'am',
    pmText: 'pm',
    todayText: 'Cегодня',
    // Calendar component
    firstDay: 1,
    dateText: 'Дата',
    timeText: 'Время',
    calendarText: 'Календарь',
    closeText: 'Закрыть',
    // Daterange component
    fromText: 'Начало',
    toText: 'Конец',
    // Measurement components
    wholeText: 'Весь',
    fractionText: 'Часть',
    unitText: 'Единица',
    // Time / Timespan component
    labels: ['Годы', ' Месяцы ', ' Дни ', ' Часы ', ' Минуты ', ' Секунды', ''],
    labelsShort: ['Год', 'Мес.', 'Дн.', 'Ч.', 'Мин.', 'Сек.', ''],
    // Timer component
    startText: 'Старт',
    stopText: 'Стоп',
    resetText: ' Сброс ',
    lapText: ' Этап ',
    hideText: ' Скрыть ',
    // Listview
    backText: 'назад',
    undoText: 'ОтменитЬ',
    // Form
    offText: 'O',
    onText: 'I',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/ru.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Русский

_core2.default.i18n['ru-RU'] = _core2.default.i18n.ru = {
    // Core
    setText: 'Установить',
    cancelText: 'Отмена',
    clearText: 'Очистить',
    selectedText: '{count} Выбрать',
    // Datetime component
    dateFormat: 'dd.mm.yy',
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    dayNamesMin: ['в', 'п', 'в', 'с', 'ч', 'п', 'с'],
    dayText: 'День',
    delimiter: '.',
    hourText: 'Час',
    minuteText: 'Минут',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    monthText: 'Месяц',
    secText: 'Секунд',
    timeFormat: 'HH:ii',
    yearText: 'Год',
    nowText: 'Сейчас',
    amText: 'am',
    pmText: 'pm',
    todayText: 'Cегодня',
    // Calendar component
    firstDay: 1,
    dateText: 'Дата',
    timeText: 'Время',
    calendarText: 'Календарь',
    closeText: 'Закрыть',
    // Daterange component
    fromText: 'Начало',
    toText: 'Конец',
    // Measurement components
    wholeText: 'Целое',
    fractionText: 'Дробное',
    unitText: 'Единица',
    // Time / Timespan component
    labels: ['Лет', 'Месяцев', 'Дней', 'Часов', 'Минут', 'Секунд', ''],
    labelsShort: ['Лет', 'Мес', 'Дн', 'Час', 'Мин', 'Сек', ''],
    // Timer component
    startText: 'Старт',
    stopText: 'Стоп',
    resetText: 'Сбросить',
    lapText: 'Круг',
    hideText: 'Скрыть',
    // Listview
    backText: 'назад',
    undoText: 'ОтменитЬ',
    // Form
    offText: 'O',
    onText: 'I',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/sk.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Slovencina

_core2.default.i18n.sk = {
    // Core
    setText: 'Zadaj',
    cancelText: 'Zrušiť',
    clearText: 'Vymazať',
    selectedText: 'Označený: {count}',
    // Datetime component
    dateFormat: 'd.m.yy',
    dayNames: ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'],
    dayNamesShort: ['Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So'],
    dayNamesMin: ['N', 'P', 'U', 'S', 'Š', 'P', 'S'],
    dayText: 'Ďeň',
    hourText: 'Hodiny',
    minuteText: 'Minúty',
    monthNames: ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Máj', 'Jún', 'Júl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    monthText: 'Mesiac',
    secText: 'Sekundy',
    timeFormat: 'H:ii',
    yearText: 'Rok',
    nowText: 'Teraz',
    amText: 'am',
    pmText: 'pm',
    todayText: 'Dnes',
    // Calendar component
    firstDay: 1,
    dateText: 'Datum',
    timeText: 'Čas',
    calendarText: 'Kalendár',
    closeText: 'Zavrieť',
    // Daterange component
    fromText: 'Začiatok',
    toText: 'Koniec',
    // Measurement components
    wholeText: 'Celý',
    fractionText: 'Časť',
    unitText: 'Jednotka',
    // Time / Timespan component
    labels: ['Roky', 'Mesiace', 'Dni', 'Hodiny', 'Minúty', 'Sekundy', ''],
    labelsShort: ['Rok', 'Mes', 'Dni', 'Hod', 'Min', 'Sec', ''],
    // Timer component
    startText: 'Start',
    stopText: 'Stop',
    resetText: 'Resetovať',
    lapText: 'Etapa',
    hideText: 'Schovať',
    // Listview
    backText: 'Späť',
    undoText: 'Späť',
    // Form
    offText: 'O',
    onText: 'I',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/sr.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Serbian

_core2.default.i18n.sr = {
   // Core
   setText: 'Постави',
   cancelText: 'Откажи',
   clearText: 'Обриши',
   selectedText: '{count} изабрана',
   // Datetime component
   dateFormat: 'dd.mm.yy',
   dayNames: ['Недеља', 'Понедељак', 'Уторак', 'Среда', 'Четвртак', 'Петак', 'Субота'],
   dayNamesShort: ['Нед', 'Пон', 'Уто', 'Сре', 'Чет', 'Пет', 'Суб'],
   dayNamesMin: ['Не', 'По', 'Ут', 'Ср', 'Че', 'Пе', 'Су'],
   dayText: 'Дан',
   delimiter: '.',
   hourText: 'Час',
   minuteText: 'Минут',
   monthNames: ['Јануар', 'Фебруар', 'Март', 'Април', 'Мај', 'Јун', 'Јул', 'Август', 'Септембар', 'Октобар', 'Новембар', 'Децембар'],
   monthNamesShort: ['Јан', 'Феб', 'Мар', 'Апр', 'Мај', 'Јун', 'Јул', 'Авг', 'Сеп', 'Окт', 'Нов', 'Дец'],
   monthText: 'месец',
   secText: 'Секунд',
   timeFormat: 'H:ii',
   yearText: 'година',
   nowText: 'сада',
   pmText: 'pm',
   amText: 'am',
   // Calendar component
   firstDay: 1,
   dateText: 'Датум',
   timeText: 'време',
   calendarText: 'Календар',
   todayText: 'Данас',
   prevMonthText: 'Претходни мјесец',
   nextMonthText: 'Следећег месеца',
   prevYearText: 'Претходна године',
   nextYearText: 'Следеће године',
   closeText: 'Затвори',
   eventText: 'Догађај',
   eventsText: 'Догађаји',
   // Daterange component
   fromText: 'Од',
   toText: 'До',
   // Measurement components
   wholeText: 'цео',
   fractionText: 'Фракција',
   unitText: 'единица',
   // Time / Timespan component
   labels: ['Године', 'Месеци', 'Дана', 'Сати', 'Минута', 'Секунди', ''],
   labelsShort: ['Год', 'Мес', 'Дана', 'Сати', 'Мину', 'Секу', ''],
   // Timer component
   startText: 'Започни',
   stopText: 'Стоп',
   resetText: 'Ресетуј',
   lapText: 'Круг',
   hideText: 'Сакрити',
   // Listview
   backText: 'Повратак',
   undoText: 'Опозови',
   // Form
   offText: 'нe',
   onText: 'да',
   // Numpad
   decimalSeparator: ',',
   thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/sv.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Svenska

_core2.default.i18n.sv = {
    // Core
    setText: 'OK',
    cancelText: 'Avbryt',
    clearText: 'Klara',
    selectedText: '{count} vald',
    // Datetime component
    dateFormat: 'yy-mm-dd',
    dayNames: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
    dayNamesShort: ['Sö', 'Må', 'Ti', 'On', 'To', 'Fr', 'Lö'],
    dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
    dayText: 'Dag',
    hourText: 'Timme',
    minuteText: 'Minut',
    monthNames: ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    monthText: 'Månad',
    secText: 'Sekund',
    timeFormat: 'HH:ii',
    yearText: 'År',
    nowText: 'Nu',
    pmText: 'pm',
    amText: 'am',
    todayText: 'I dag',
    // Calendar component
    firstDay: 1,
    dateText: 'Datum',
    timeText: 'Tid',
    calendarText: 'Kalender',
    closeText: 'Stäng',
    // Daterange component
    fromText: 'Start',
    toText: 'Slut',
    // Measurement components
    wholeText: 'Hela',
    fractionText: 'Bråk',
    unitText: 'Enhet',
    // Time / Timespan component
    labels: ['År', 'Månader', 'Dagar', 'Timmar', 'Minuter', 'Sekunder', ''],
    labelsShort: ['År', 'Mån', 'Dag', 'Tim', 'Min', 'Sek', ''],
    // Timer component
    startText: 'Start',
    stopText: 'Stopp',
    resetText: 'Återställ',
    lapText: 'Varv',
    hideText: 'Dölj',
    // Listview
    backText: 'Tillbaka',
    undoText: 'Ångra',
    // Form
    offText: 'Av',
    onText: 'På'
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/tr.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Türkçe

_core2.default.i18n.tr = {
    // Core
    setText: 'Seç',
    cancelText: 'İptal',
    clearText: 'Temizleyin',
    selectedText: '{count} seçilmiş',
    // Datetime component
    dateFormat: 'dd.mm.yy',
    dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    dayNamesShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
    dayNamesMin: ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'],
    dayText: 'Gün',
    delimiter: '.',
    hourText: 'Saat',
    minuteText: 'Dakika',
    monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    monthText: 'Ay',
    secText: 'Saniye',
    timeFormat: 'HH:ii',
    yearText: 'Yıl',
    nowText: 'Şimdi',
    pmText: 'pm',
    amText: 'am',
    todayText: 'Bugün',
    // Calendar component
    firstDay: 1,
    dateText: 'Tarih',
    timeText: 'Zaman',
    calendarText: 'Takvim',
    closeText: 'Kapatmak',
    // Daterange component
    fromText: 'Başla',
    toText: 'Son',
    // Measurement components
    wholeText: 'Tam',
    fractionText: 'Kesir',
    unitText: 'Birim',
    // Time / Timespan component
    labels: ['Yıl', 'Ay', 'Gün', 'Saat', 'Dakika', 'Saniye', ''],
    labelsShort: ['Yıl', 'Ay', 'Gün', 'Sa', 'Dak', 'Sn', ''],
    // Timer component
    startText: 'Başla',
    stopText: 'Durdur',
    resetText: 'Sıfırla',
    lapText: 'Tur',
    hideText: 'Gizle',
    // Listview
    backText: 'Geri',
    undoText: 'Geri Al',
    // Form
    offText: 'O',
    onText: 'I',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: '.'
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/vi.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Vietnamese 

_core2.default.i18n.vi = {
   // Core
   setText: 'Đặt',
   cancelText: 'Hủy bò',
   clearText: 'Xóa',
   selectedText: '{count} chọn',
   // Datetime component
   dateFormat: 'dd/mm/yy',
   dayNames: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
   dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
   dayNamesMin: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
   dayText: '',
   delimiter: '/',
   hourText: 'Giờ',
   minuteText: 'Phút',
   monthNames: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'],
   monthNamesShort: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
   monthText: 'Tháng',
   secText: 'Giây',
   timeFormat: 'H:ii',
   yearText: 'Năm',
   nowText: 'Bây giờ',
   pmText: 'pm',
   amText: 'am',
   // Calendar component
   firstDay: 0,
   dateText: 'Ngày',
   timeText: 'Hồi',
   calendarText: 'Lịch',
   todayText: 'Hôm nay',

   prevMonthText: 'Tháng trước',
   nextMonthText: 'Tháng tới',
   prevYearText: 'Măm trước',
   nextYearText: 'Năm tới',
   closeText: 'Đóng',
   eventText: 'Sự kiện',
   eventsText: 'Sự kiện',
   // Daterange component
   fromText: 'Từ',
   toText: 'Tới',
   // Measurement components
   wholeText: 'Toàn thể',
   fractionText: 'Phân số',
   unitText: 'đơn vị',
   // Time / Timespan component
   labels: ['Năm', 'Tháng', 'Ngày', 'Giờ', 'Phút', 'Giây', ''],
   labelsShort: ['Năm', 'Tháng', 'Ngày', 'Giờ', 'Phút', 'Giây', ''],
   // Timer component
   startText: 'Bắt đầu',
   stopText: 'Dừng',
   resetText: 'Đặt lại',
   lapText: 'Vòng',
   hideText: 'Giấu',
   // Listview
   backText: 'Quay lại',
   undoText: 'Hoàn tác',
   // Form
   offText: 'Tất',
   onText: 'Bật',
   // Numpad
   decimalSeparator: ',',
   thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/i18n/zh.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default; // Chinese

_core2.default.i18n.zh = {
    // Core
    setText: '确定',
    cancelText: '取消',
    clearText: '明确',
    selectedText: '{count} 选',
    // Datetime component
    dateFormat: 'yy/mm/dd',
    dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
    dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
    dayText: '日',
    hourText: '时',
    minuteText: '分',
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
    monthText: '月',
    secText: '秒',
    timeFormat: 'HH:ii',
    yearText: '年',
    nowText: '当前',
    pmText: '下午',
    amText: '上午',
    todayText: '今天',
    // Calendar component
    dateText: '日',
    timeText: '时间',
    calendarText: '日历',
    closeText: '关闭',
    // Daterange component
    fromText: '开始时间',
    toText: '结束时间',
    // Measurement components
    wholeText: '合计',
    fractionText: '分数',
    unitText: '单位',
    // Time / Timespan component
    labels: ['年', '月', '日', '小时', '分钟', '秒', ''],
    labelsShort: ['年', '月', '日', '点', '分', '秒', ''],
    // Timer component
    startText: '开始',
    stopText: '停止',
    resetText: '重置',
    lapText: '圈',
    hideText: '隐藏',
    // Listview
    backText: '返回',
    undoText: '复原',
    // Form
    offText: '关闭',
    onText: '开启',
    // Numpad
    decimalSeparator: ',',
    thousandsSeparator: ' '
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/page.javascript.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _javascript = require('./frameworks/javascript');

var _javascript2 = _interopRequireDefault(_javascript);

require('./classes/page');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _javascript2.default;

},{"./classes/page":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/page.js","./frameworks/javascript":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/frameworks/javascript.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/scroller.javascript.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _javascript = require('./frameworks/javascript');

var _javascript2 = _interopRequireDefault(_javascript);

require('./classes/scroller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _javascript2.default;

},{"./classes/scroller":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/scroller.js","./frameworks/javascript":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/frameworks/javascript.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/android-holo-light.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

require('./android-holo.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default;


_core2.default.customTheme('android-holo-light', 'android-holo');

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","./android-holo.js":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/android-holo.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/android-holo.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default;


var themes = _core2.default.themes;

themes.frame['android-holo'] = {};

themes.scroller['android-holo'] = (0, _core.extend)({}, themes.frame['android-holo'], {
    dateDisplay: 'Mddyy', // datetime
    rows: 5, // scroller
    minWidth: 76, // scroller
    height: 36, // scroller
    showLabel: false, // scroller
    selectedLineHeight: true, // scroller
    selectedLineBorder: 2, // scroller
    useShortLabels: true, // scroller
    icon: { // rating
        filled: 'star3',
        empty: 'star'
    },
    btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down6', // scroller
    btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up6' // scroller
});

//themes.listview['android-holo'] = {};

//themes.menustrip['android-holo'] = {};

themes.form['android-holo'] = {};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/auto-theme.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

var _platform = require('../util/platform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default;


var themes = _core2.default.themes;

var theme = void 0;

if (_platform.os == 'android') {
    theme = _platform.majorVersion >= 5 ? 'material' : 'android-holo';
} else if (_platform.os == 'ios') {
    theme = 'ios';
} else if (_platform.os == 'wp') {
    theme = 'wp';
}

_core2.default.setAutoTheme = function () {
    _core.$.each(themes.frame, function (key, settings) {
        // Stop at the first custom theme with the OS base theme
        if (theme && settings.baseTheme == theme && key != 'android-holo-light' && key != 'material-dark' && key != 'wp-light' && key != 'ios-dark') {
            _core2.default.autoTheme = key;
            return false;
        } else if (key == theme) {
            _core2.default.autoTheme = key;
        }
    });
};

_core2.default.setAutoTheme();

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","../util/platform":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/platform.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/ios-dark.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

require('./ios.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default;


_core2.default.customTheme('ios-dark', 'ios');

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","./ios.js":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/ios.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/ios.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default;


var themes = _core2.default.themes;

themes.frame.ios = {
    display: 'bottom', // frame
    headerText: false, // frame
    btnWidth: false, // frame
    deleteIcon: 'ios-backspace', // numpad
    scroll3d: true
};

themes.scroller.ios = (0, _core.extend)({}, themes.frame.ios, {
    rows: 5, // scroller
    height: 34, // scroller
    minWidth: 55, // scroller
    selectedLineHeight: true, // scroller
    selectedLineBorder: 1, // scroller
    showLabel: false, // scroller
    useShortLabels: true, // timespan/timer
    btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5', // scroller
    btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5', // scroller
    checkIcon: 'ion-ios7-checkmark-empty', // select
    filterClearIcon: 'ion-close-circled', // select
    dateDisplay: 'MMdyy', // date
    btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5', // calendar
    btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5' // calendar
});

themes.listview.ios = {
    leftArrowClass: 'mbsc-ic-ion-ios7-arrow-back',
    rightArrowClass: 'mbsc-ic-ion-ios7-arrow-forward'
};

//themes.menustrip.ios = {};

themes.form.ios = {};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/material-dark.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

require('./material.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default;


_core2.default.customTheme('material-dark', 'material');

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","./material.js":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/material.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/material.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

var _tap = require('../util/tap');

var _dom = require('../util/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default;


function _addRipple($control, ev) {
    var x = (0, _tap.getCoord)(ev, 'X', true),
        y = (0, _tap.getCoord)(ev, 'Y', true),
        rect = $control.offset(),
        left = x - rect.left,
        top = y - rect.top,
        width = Math.max(left, $control[0].offsetWidth - left),
        height = Math.max(top, $control[0].offsetHeight - top),
        size = 2 * Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

    _removeRipple($ripple);

    $ripple = (0, _core.$)('<span class="mbsc-ripple"></span>').css({
        width: size,
        height: size,
        top: y - rect.top - size / 2,
        left: x - rect.left - size / 2
    }).appendTo($control);

    setTimeout(function () {
        $ripple.addClass('mbsc-ripple-scaled mbsc-ripple-visible');
    }, 10);
}

function _removeRipple($r) {
    setTimeout(function () {
        if ($r) {
            $r.removeClass('mbsc-ripple-visible');
            setTimeout(function () {
                $r.remove();
            }, 2000);
        }
    }, 100);
}

function initRipple($markup, selector, disabled, nohl) {
    var startX, startY;

    $markup.off('.mbsc-ripple').on('touchstart.mbsc-ripple mousedown.mbsc-ripple', selector, function (ev) {
        if ((0, _dom.testTouch)(ev, this)) {
            startX = (0, _tap.getCoord)(ev, 'X');
            startY = (0, _tap.getCoord)(ev, 'Y');

            $active = (0, _core.$)(this);

            if (!$active.hasClass(disabled) && !$active.hasClass(nohl)) {
                _addRipple($active, ev);
            } else {
                $active = null;
            }
        }
    }).on('touchmove.mbsc-ripple mousemove.mbsc-ripple', selector, function (ev) {
        if ($active && Math.abs((0, _tap.getCoord)(ev, 'X') - startX) > 9 || Math.abs((0, _tap.getCoord)(ev, 'Y') - startY) > 9) {
            _removeRipple($ripple);
            $active = null;
        }
    }).on('touchend.mbsc-ripple touchcancel.mbsc-ripple mouseleave.mbsc-ripple mouseup.mbsc-ripple', selector, function () {
        if ($active) {
            setTimeout(function () {
                _removeRipple($ripple);
            }, 100);
            $active = null;
        }
    });
}

var $active,
    $ripple,
    themes = _core2.default.themes;

themes.frame.material = {
    headerText: false,
    btnWidth: false,
    deleteIcon: 'material-backspace',
    onMarkupReady: function onMarkupReady(ev) {
        initRipple((0, _core.$)(ev.target), '.mbsc-fr-btn-e', 'mbsc-fr-btn-d', 'mbsc-fr-btn-nhl');
    }
};

themes.scroller.material = (0, _core.extend)({}, themes.frame.material, {
    showLabel: false,
    selectedLineBorder: 2,
    weekDays: 'min',
    icon: {
        filled: 'material-star',
        empty: 'material-star-outline'
    },
    checkIcon: 'material-check',
    btnPlusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-down',
    btnMinusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-up',
    btnCalPrevClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-left',
    btnCalNextClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-right',
    onEventBubbleShow: function onEventBubbleShow(ev) {
        var $events = (0, _core.$)(ev.eventList),
            bottom = (0, _core.$)(ev.target).closest('.mbsc-cal-row').index() < 2,
            color = (0, _core.$)('.mbsc-cal-event-color', $events).eq(bottom ? 0 : -1).css('background-color');

        (0, _core.$)('.mbsc-cal-events-arr', $events).css('border-color', bottom ? 'transparent transparent ' + color + ' transparent' : color + 'transparent transparent transparent');
    }
});

themes.listview.material = {
    leftArrowClass: 'mbsc-ic-material-keyboard-arrow-left',
    rightArrowClass: 'mbsc-ic-material-keyboard-arrow-right',
    onItemActivate: function onItemActivate(ev) {
        _addRipple((0, _core.$)(ev.target), ev.domEvent);
    },
    onItemDeactivate: function onItemDeactivate() {
        _removeRipple($ripple);
    },
    onSlideStart: function onSlideStart(ev) {
        (0, _core.$)('.mbsc-ripple', ev.target).remove();
    },
    onSortStart: function onSortStart(ev) {
        (0, _core.$)('.mbsc-ripple', ev.target).remove();
    }
};

themes.menustrip.material = {
    onInit: function onInit() {
        initRipple((0, _core.$)(this), '.mbsc-ms-item.mbsc-btn-e', 'mbsc-btn-d', 'mbsc-btn-nhl');
    },
    onMarkupInit: function onMarkupInit() {
        (0, _core.$)('.mbsc-ripple', this).remove();
    },
    onDestroy: function onDestroy() {
        (0, _core.$)(this).off('.mbsc-ripple');
    }
};

themes.form.material = {
    addRipple: function addRipple(elm, ev) {
        _addRipple(elm, ev);
    },
    removeRipple: function removeRipple() {
        _removeRipple($ripple);
    }
};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","../util/dom":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/dom.js","../util/tap":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/tap.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/mobiscroll-dark.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default;


_core2.default.customTheme('mobiscroll-dark', 'mobiscroll');

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/wp-light.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

require('./wp.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default;


_core2.default.customTheme('wp-light', 'wp');

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","./wp.js":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/wp.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/themes/wp.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _core2.default;


var themes = _core2.default.themes;

themes.frame.wp = {
    headerText: false,
    deleteIcon: 'backspace4',
    setIcon: 'checkmark',
    cancelIcon: 'close',
    closeIcon: 'close',
    clearIcon: 'close',
    okIcon: 'checkmark',
    nowIcon: 'loop2',
    startIcon: 'play3',
    stopIcon: 'pause2',
    resetIcon: 'stop2',
    lapIcon: 'loop2',
    btnWidth: false
};

themes.scroller.wp = (0, _core.extend)({}, themes.frame.wp, {
    minWidth: 76,
    height: 76,
    dateDisplay: 'mmMMddDDyy',
    showLabel: false,
    icon: {
        filled: 'star3',
        empty: 'star'
    },
    btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left2',
    btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right2',
    btnPlusClass: 'mbsc-ic mbsc-ic-plus',
    btnMinusClass: 'mbsc-ic mbsc-ic-minus',
    onMarkupInserted: function onMarkupInserted(ev, inst) {
        var click,
            touch,
            active,
            elm = (0, _core.$)(ev.target),
            s = inst.settings;

        function isReadOnly(i) {
            return _core.$.isArray(s.readonly) ? s.readonly[i] : s.readonly;
        }

        (0, _core.$)('.mbsc-sc-whl', elm).on('touchstart mousedown wheel mousewheel', function (e) {
            if (e.type === 'mousedown' && touch || isReadOnly((0, _core.$)(this).attr('data-index'))) {
                return;
            }
            touch = e.type === 'touchstart';
            click = true;
            active = (0, _core.$)(this).hasClass('mbsc-sc-whl-wpa');
            (0, _core.$)('.mbsc-sc-whl', elm).removeClass('mbsc-sc-whl-wpa');
            (0, _core.$)(this).addClass('mbsc-sc-whl-wpa');
        }).on('touchmove mousemove', function () {
            click = false;
        }).on('touchend mouseup', function (e) {
            if (click && active && (0, _core.$)(e.target).closest('.mbsc-sc-itm').hasClass('mbsc-sc-itm-sel')) {
                (0, _core.$)(this).removeClass('mbsc-sc-whl-wpa');
            }
            if (e.type === 'mouseup') {
                touch = false;
            }
            click = false;
        });
    }
});

//themes.listview.wp = {};

//themes.menustrip.wp = {};

themes.form.wp = {};

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/dom.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.testTouch = exports.getPosition = exports.jsPrefix = exports.cssPrefix = exports.animEnd = undefined;

var _core = require('../core/core');

function testProps(props) {
    var i;
    for (i in props) {
        if (mod[props[i]] !== undefined) {
            return true;
        }
    }
    return false;
}

function testPrefix() {
    var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
        p;

    for (p in prefixes) {
        if (testProps([prefixes[p] + 'Transform'])) {
            return '-' + prefixes[p].toLowerCase() + '-';
        }
    }
    return '';
}

function testTouch(e, elm) {
    if (e.type == 'touchstart') {
        (0, _core.$)(elm).attr('data-touch', '1');
    } else if ((0, _core.$)(elm).attr('data-touch')) {
        (0, _core.$)(elm).removeAttr('data-touch');
        return false;
    }
    return true;
}

function getPosition(t, vertical) {
    var style = getComputedStyle(t[0]),
        matrix,
        px;

    _core.$.each(['t', 'webkitT', 'MozT', 'OT', 'msT'], function (i, v) {
        if (style[v + 'ransform'] !== undefined) {
            matrix = style[v + 'ransform'];
            return false;
        }
    });
    matrix = matrix.split(')')[0].split(', ');
    px = vertical ? matrix[13] || matrix[5] : matrix[12] || matrix[4];

    return px;
}

var animEnd, mod, cssPrefix, jsPrefix;

if (_core.isBrowser) {
    mod = document.createElement('modernizr').style;
    exports.cssPrefix = cssPrefix = testPrefix();
    exports.jsPrefix = jsPrefix = cssPrefix.replace(/^\-/, '').replace(/\-$/, '').replace('moz', 'Moz');
    exports.animEnd = animEnd = mod.animation !== undefined ? 'animationend' : 'webkitAnimationEnd';
}

exports.animEnd = animEnd;
exports.cssPrefix = cssPrefix;
exports.jsPrefix = jsPrefix;
exports.getPosition = getPosition;
exports.testTouch = testTouch;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/forms.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wrapLabel = exports.addIconToggle = exports.addIcon = undefined;

var _core = require('../core/core');

var _tap = require('../util/tap');

var wrapClass = 'mbsc-input-wrap';

function addIcon($control, ic) {
    var icons = {},
        $parent = $control.parent(),
        errorMsg = $parent.find('.mbsc-err-msg'),
        align = $control.attr('data-icon-align') || 'left',
        icon = $control.attr('data-icon');

    if ($parent.hasClass(wrapClass)) {
        $parent = $parent.parent();
    } else {
        // Wrap input
        (0, _core.$)('<span class="' + wrapClass + '"></span>').insertAfter($control).append($control);
    }

    if (errorMsg) {
        $parent.find('.' + wrapClass).append(errorMsg);
    }

    if (icon) {
        if (icon.indexOf('{') !== -1) {
            icons = JSON.parse(icon);
        } else {
            icons[align] = icon;
        }
    }

    if (icon || ic) {
        (0, _core.extend)(icons, ic);

        $parent.addClass((icons.right ? 'mbsc-ic-right ' : '') + (icons.left ? ' mbsc-ic-left' : '')).find('.' + wrapClass).append(icons.left ? '<span class="mbsc-input-ic mbsc-left-ic mbsc-ic mbsc-ic-' + icons.left + '"></span>' : '').append(icons.right ? '<span class="mbsc-input-ic mbsc-right-ic mbsc-ic mbsc-ic-' + icons.right + '"></span>' : '');
    }
}

function addIconToggle(that, $parent, $control) {
    var icons = {},
        control = $control[0],
        toggle = $control.attr('data-password-toggle'),
        iconShow = $control.attr('data-icon-show') || 'eye',
        iconHide = $control.attr('data-icon-hide') || 'eye-blocked';

    if (toggle) {
        icons.right = control.type == 'password' ? iconShow : iconHide;
    }

    addIcon($control, icons);

    if (toggle) {
        (0, _tap.tap)(that, $parent.find('.mbsc-right-ic').addClass('mbsc-input-toggle'), function () {
            if (control.type == "text") {
                control.type = "password";
                (0, _core.$)(this).addClass('mbsc-ic-' + iconShow).removeClass('mbsc-ic-' + iconHide);
            } else {
                control.type = "text";
                (0, _core.$)(this).removeClass('mbsc-ic-' + iconShow).addClass('mbsc-ic-' + iconHide);
            }
        });
    }
}

function wrapLabel($parent, type) {
    // Wrap non-empty text nodes in span with mbsc-label class
    if (type != 'button' && type != 'submit' && type != 'segmented') {
        $parent.addClass('mbsc-control-w').find('label').addClass('mbsc-label');
        $parent.contents().filter(function () {
            return this.nodeType == 3 && this.nodeValue && /\S/.test(this.nodeValue);
        }).each(function () {
            (0, _core.$)('<span class="mbsc-label"></span>').insertAfter(this).append(this);
        });
    }
}

exports.addIcon = addIcon;
exports.addIconToggle = addIconToggle;
exports.wrapLabel = wrapLabel;

},{"../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","../util/tap":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/tap.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/misc.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function noop() {}

function objectToArray(obj) {
    var arr = [],
        i;

    for (i in obj) {
        arr.push(obj[i]);
    }

    return arr;
}

function arrayToObject(arr) {
    var obj = {},
        i;

    if (arr) {
        for (i = 0; i < arr.length; i++) {
            obj[arr[i]] = arr[i];
        }
    }

    return obj;
}

function isNumeric(a) {
    return a - parseFloat(a) >= 0;
}

function isString(s) {
    return typeof s === 'string';
}

function constrain(val, min, max) {
    return Math.max(min, Math.min(val, max));
}

function throttle(fn, threshhold) {
    var last, timer;

    threshhold = threshhold || 100;

    return function () {
        var context = this,
            now = +new Date(),
            args = arguments;

        if (last && now < last + threshhold) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, threshhold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
}

function vibrate(time) {
    if ('vibrate' in navigator) {
        navigator.vibrate(time || 50);
    }
}

exports.arrayToObject = arrayToObject;
exports.constrain = constrain;
exports.isNumeric = isNumeric;
exports.isString = isString;
exports.noop = noop;
exports.objectToArray = objectToArray;
exports.throttle = throttle;
exports.vibrate = vibrate;

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/notifications.js":[function(require,module,exports){
'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _core = require('../core/core');

var _core2 = _interopRequireDefault(_core);

var _widget = require('../classes/widget');

var _widget2 = _interopRequireDefault(_widget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasPromise = _core.isBrowser && !!window.Promise;
var popupQueue = [];
var notificationQueue = [];

function showPopup(popup) {
    if (!popupQueue.length) {
        popup.show();
    }
    popupQueue.push(popup);
}

function showNotification(notification) {
    var isAny = notificationQueue.length;
    notificationQueue.push(notification);
    // Only show notification if no popup is visible
    // otherwise postpone it until popup is closed
    if (!popupQueue.length) {
        // If there's a visible notification, hide it.
        // The notification will be shown after hide animation is complete
        if (isAny) {
            notificationQueue[0].hide();
        } else {
            // Prevent focus on show for notifications
            notification.show(false, true);
        }
    }
}

function getSettings(queue, settings, resolve, more) {
    //const active = mobiscroll.activeInstance;
    return (0, _core.extend)({
        display: settings.display || 'center',
        cssClass: 'mbsc-alert',
        okText: settings.okText,
        cancelText: settings.cancelText,
        context: settings.context,
        theme: settings.theme,
        closeOnOverlayTap: false,
        onBeforeClose: function onBeforeClose() {
            queue.shift();
        },
        onBeforeShow: function onBeforeShow() {
            // If there's an active mobiscroll picker on screen,
            // prevent from being hidden when 
            // popup is shown
            _core2.default.activeInstance = null;
        },
        onHide: function onHide(ev, inst) {
            //mobiscroll.activeInstance = active;
            if (resolve) {
                resolve(inst._resolve);
            }
            if (settings.callback) {
                settings.callback(inst._resolve);
            }
            if (inst) {
                inst.destroy();
            }
            // Show next
            if (popupQueue.length) {
                popupQueue[0].show();
            } else if (notificationQueue.length) {
                // Prevent focus on show for notifications
                notificationQueue[0].show(false, true);
            }
        }
    }, more);
}

function getMessage(settings) {
    return (settings.title ? '<h2>' + settings.title + '</h2>' : '') + '<p>' + (settings.message || '') + '</p>';
}

function showAlert(widget, settings, resolve) {
    var inst = new _widget2.default(widget, getSettings(popupQueue, settings, resolve));
    showPopup(inst);
}

function showConfirm(widget, settings, resolve) {
    var inst = new _widget2.default(widget, getSettings(popupQueue, settings, resolve, {
        buttons: ['ok', 'cancel'],
        onSet: function onSet() {
            inst._resolve = true;
        }
    }));
    inst._resolve = false;
    showPopup(inst);
}

function showPrompt(widget, settings, resolve) {
    var input = void 0;
    var inst = new _widget2.default(widget, getSettings(popupQueue, settings, resolve, {
        buttons: ['ok', 'cancel'],
        onShow: function onShow() {
            input = inst._markup.find('input')[0];
            setTimeout(function () {
                input.focus();
            }, 300);
        },
        onSet: function onSet() {
            inst._resolve = input.value;
        }
    }));
    inst._resolve = null;
    showPopup(inst);
}

function showSnackbar(widget, settings, resolve, cssClass, animation) {
    var notificationTimer = void 0;
    var inst = new _widget2.default(widget, getSettings(notificationQueue, settings, resolve, {
        display: 'bottom',
        animate: animation,
        cssClass: cssClass || 'mbsc-snackbar',
        scrollLock: false,
        focusTrap: false,
        buttons: [],
        onShow: function onShow(ev, inst) {
            if (settings.duration !== false) {
                notificationTimer = setTimeout(function () {
                    if (inst) {
                        inst.hide();
                    }
                }, settings.duration || 3000);
            }
            if (settings.button) {
                inst.tap((0, _core.$)('.mbsc-snackbar-btn', ev.target), function () {
                    inst.hide();
                    if (settings.button.action) {
                        settings.button.action.call(this);
                    }
                });
            }
        },
        onClose: function onClose() {
            clearTimeout(notificationTimer);
        }
    }));
    showNotification(inst);
}

function showToast(widget, settings, resolve) {
    showSnackbar(widget, settings, resolve, 'mbsc-toast', 'fade');
}

function show(func, widget, settings) {
    var p = void 0;
    if (hasPromise) {
        p = new _promise2.default(function (resolve) {
            func(widget, settings, resolve);
        });
    } else {
        func(widget, settings);
    }
    return p;
}

_core2.default.alert = function (settings) {
    var widget = document.createElement('div');
    widget.innerHTML = getMessage(settings);
    return show(showAlert, widget, settings);
};

_core2.default.confirm = function (settings) {
    var widget = document.createElement('div');
    widget.innerHTML = getMessage(settings);
    return show(showConfirm, widget, settings);
};

_core2.default.prompt = function (settings) {
    var widget = document.createElement('div');
    widget.innerHTML = getMessage(settings) + '<label class="mbsc-input">' + (settings.label ? '<span class="mbsc-label">' + settings.label + '</span>' : '') + '<input tabindex="0" type="' + (settings.inputType || 'text') + '" placeholder="' + (settings.placeholder || '') + '" value="' + (settings.value || '') + '">' + '</label>';
    return show(showPrompt, widget, settings);
};

_core2.default.snackbar = function (settings) {
    var widget = document.createElement('div');
    widget.innerHTML = '<div class="mbsc-snackbar-cont"><div class="mbsc-snackbar-msg">' + (settings.message || '') + '</div>' + (settings.button ? '<button class="mbsc-snackbar-btn mbsc-btn mbsc-btn-flat">' + (settings.button.text || '') + '</button>' : '') + '</div>';
    return show(showSnackbar, widget, settings);
};

_core2.default.toast = function (settings) {
    var widget = document.createElement('div');
    widget.innerHTML = '<div class="mbsc-toast-msg">' + (settings.message || '') + '</div>';
    return show(showToast, widget, settings);
};

},{"../classes/widget":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/classes/widget.js","../core/core":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/core.js","babel-runtime/core-js/promise":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/node_modules/babel-runtime/core-js/promise.js"}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/platform.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var os,
    vers,
    majorVersion,
    minorVersion,
    version = [],
    isBrowser = typeof window !== 'undefined',
    userAgent = isBrowser ? navigator.userAgent : '',
    device = userAgent.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i),
    raf = isBrowser && window.requestAnimationFrame || function (func) {
    func();
},
    rafc = isBrowser && window.cancelAnimationFrame || function () {};

if (/Android/i.test(device)) {
    exports.os = os = 'android';
    vers = userAgent.match(/Android\s+([\d\.]+)/i);
    if (vers) {
        version = vers[0].replace('Android ', '').split('.');
    }
} else if (/iPhone|iPad|iPod/i.test(device)) {
    exports.os = os = 'ios';
    vers = userAgent.match(/OS\s+([\d\_]+)/i);
    if (vers) {
        version = vers[0].replace(/_/g, '.').replace('OS ', '').split('.');
    }
} else if (/Windows Phone/i.test(device)) {
    exports.os = os = 'wp';
} else if (/Windows|MSIE/i.test(device)) {
    exports.os = os = 'windows';
}

exports.majorVersion = majorVersion = version[0];
exports.minorVersion = minorVersion = version[1];

exports.os = os;
exports.majorVersion = majorVersion;
exports.minorVersion = minorVersion;
exports.isBrowser = isBrowser;
exports.userAgent = userAgent;
exports.raf = raf;
exports.rafc = rafc;

},{}],"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/tap.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tap = exports.preventClick = exports.getCoord = undefined;

var _mobiscroll = require('../core/mobiscroll');

var _mobiscroll2 = _interopRequireDefault(_mobiscroll);

var _platform = require('./platform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tapped = 0;

function preventClick() {
    // Prevent ghost click
    tapped++;
    setTimeout(function () {
        tapped--;
    }, 500);
}

function getCoord(e, c, page) {
    var ev = e.originalEvent || e,
        prop = (page ? 'page' : 'client') + c;

    // Multi touch support
    if (ev.targetTouches && ev.targetTouches[0]) {
        return ev.targetTouches[0][prop];
    }

    if (ev.changedTouches && ev.changedTouches[0]) {
        return ev.changedTouches[0][prop];
    }

    return e[prop];
}

function tap(that, el, handler, prevent, tolerance, time) {
    var startX,
        startY,
        target,
        moved,
        startTime,
        $ = _mobiscroll2.default.$,
        $elm = $(el);

    tolerance = tolerance || 9;

    function onStart(ev) {
        if (!target) {
            // Can't always call preventDefault here, it kills page scroll
            if (prevent) {
                ev.preventDefault();
            }
            target = this;
            startX = getCoord(ev, 'X');
            startY = getCoord(ev, 'Y');
            moved = false;
            startTime = new Date();
        }
    }

    function onMove(ev) {
        // If movement is more than 20px, don't fire the click event handler
        if (target && !moved && (Math.abs(getCoord(ev, 'X') - startX) > tolerance || Math.abs(getCoord(ev, 'Y') - startY) > tolerance)) {
            moved = true;
        }
    }

    function onEnd(ev) {
        if (target) {
            if (time && new Date() - startTime < 100 || !moved) {
                ev.preventDefault();
                handler.call(target, ev, that);
            }

            target = false;

            preventClick();
        }
    }

    function onCancel() {
        target = false;
    }

    if (that.settings.tap) {
        $elm.on('touchstart.mbsc', onStart).on('touchcancel.mbsc', onCancel).on('touchmove.mbsc', onMove).on('touchend.mbsc', onEnd);
    }

    $elm.on('click.mbsc', function (ev) {
        ev.preventDefault();
        // If handler was not called on touchend, call it on click;
        handler.call(this, ev, that);
    });
}

// Prevent standard behaviour on body click
function bustClick(ev) {
    // Textarea needs the mousedown event
    if (tapped && !ev.tap && !(ev.target.nodeName == 'TEXTAREA' && ev.type == 'mousedown')) {
        ev.stopPropagation();
        ev.preventDefault();
        return false;
    }
}

if (_platform.isBrowser) {
    ['mouseover', 'mousedown', 'mouseup', 'click'].forEach(function (ev) {
        document.addEventListener(ev, bustClick, true);
    });

    if (_platform.os == 'android' && _platform.majorVersion < 5) {
        document.addEventListener('change', function (ev) {
            if (tapped && ev.target.type == 'checkbox' && !ev.target.mbscChange) {
                ev.stopPropagation();
                ev.preventDefault();
            }
            delete ev.target.mbscChange;
        }, true);
    }
}

exports.getCoord = getCoord;
exports.preventClick = preventClick;
exports.tap = tap;

},{"../core/mobiscroll":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/core/mobiscroll.js","./platform":"/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/src/js/util/platform.js"}]},{},["/Users/liujiachi/development/githubDevelopment/mobiscroll-gulp/bundles/mobiscroll.javascript.js"]);
