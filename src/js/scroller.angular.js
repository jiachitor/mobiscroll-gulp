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
import { extend, MbscControlBase, Directive, Input, Output, EventEmitter, ElementRef, NgZone, Optional, NgControl, MbscInputService } from './frameworks/angular';
import Scroller from './classes/scroller';
var MbscScroller = (function (_super) {
    __extends(MbscScroller, _super);
    function MbscScroller(initialElement, zone, control, inputService) {
        var _this = _super.call(this, initialElement, zone, control, inputService) || this;
        _this.options = {};
        _this.onChangeEmitter = new EventEmitter();
        return _this;
    }
    Object.defineProperty(MbscScroller.prototype, "value", {
        set: function (v) {
            this.setNewValueProxy(v);
        },
        enumerable: true,
        configurable: true
    });
    MbscScroller.prototype.setNewValue = function (v) {
        if (this._instance) {
            var innerValue = this._instance.getVal();
            if (innerValue !== v) {
                this._instance.setVal(v, true, false);
                if (this._inputService && this._inputService.input) {
                    this._inputService.input.innerValue = this._instance._value;
                }
            }
        }
    };
    MbscScroller.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        var options = extend({}, this.options, this.optionExtensions);
        this._instance = new Scroller(this.element, options);
        if (this.initialValue !== undefined) {
            this._instance.setVal(this.initialValue, true, false);
        }
    };
    return MbscScroller;
}(MbscControlBase));
export { MbscScroller };
MbscScroller.decorators = [
    { type: Directive, args: [{
                selector: '[mbsc-scroller]',
                exportAs: 'mobiscroll'
            },] },
];
MbscScroller.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: NgZone, },
    { type: NgControl, decorators: [{ type: Optional },] },
    { type: MbscInputService, decorators: [{ type: Optional },] },
]; };
MbscScroller.propDecorators = {
    'options': [{ type: Input, args: ['mbsc-options',] },],
    'value': [{ type: Input, args: ['mbsc-scroller',] },],
    'onChangeEmitter': [{ type: Output, args: ['mbsc-scrollerChange',] },],
};
