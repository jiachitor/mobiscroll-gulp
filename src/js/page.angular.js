var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { extend, Component, MbscBase, ElementRef, ViewChild, Input } from './frameworks/angular';
import Page from './classes/page';
var MbscPage = (function (_super) {
    __extends(MbscPage, _super);
    function MbscPage(hostElement) {
        return _super.call(this, hostElement) || this;
    }
    MbscPage.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        var options = extend({}, this.options);
        this._instance = new Page(this.initElem.nativeElement, options);
    };
    return MbscPage;
}(MbscBase));
export { MbscPage };
MbscPage.decorators = [
    { type: Component, args: [{
                selector: 'mbsc-page',
                template: '<div #initElement><ng-content></ng-content></div>'
            },] },
];
MbscPage.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
MbscPage.propDecorators = {
    'options': [{ type: Input },],
    'initElem': [{ type: ViewChild, args: ['initElement',] },],
};
