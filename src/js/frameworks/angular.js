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
import mobiscroll from '../core/dom';
import { $, extend } from '../core/core';
import { Directive, Component, Input, Output, EventEmitter, Optional, ElementRef, ViewChild, ViewChildren, NgZone, NgModule, Injectable, ContentChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgControl, FormsModule } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
var MbscInputService = (function () {
    function MbscInputService() {
        this._controlSet = false;
        this._componentRef = undefined;
    }
    Object.defineProperty(MbscInputService.prototype, "isControlSet", {
        get: function () {
            return this._controlSet;
        },
        set: function (v) {
            this._controlSet = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MbscInputService.prototype, "input", {
        get: function () {
            return this._componentRef;
        },
        set: function (v) {
            this._componentRef = v;
        },
        enumerable: true,
        configurable: true
    });
    return MbscInputService;
}());
export { MbscInputService };
MbscInputService.decorators = [
    { type: Injectable },
];
MbscInputService.ctorParameters = function () { return []; };
var MbscBase = (function () {
    function MbscBase(initialElem) {
        this.initialElem = initialElem;
        this.options = {};
        this._instance = null;
        this.element = null;
    }
    Object.defineProperty(MbscBase.prototype, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    MbscBase.prototype.setElement = function () {
        this.element = this.initialElem.nativeElement;
        var contentInput = $('input', this.initialElem.nativeElement);
        if (contentInput.length) {
            this.element = contentInput[0];
        }
    };
    MbscBase.prototype.ngAfterViewInit = function () {
        this.setElement();
    };
    MbscBase.prototype.ngOnDestroy = function () {
        if (this._instance) {
            this._instance.destroy();
        }
    };
    return MbscBase;
}());
MbscBase.propDecorators = {
    'options': [{ type: Input, args: ['mbsc-options',] },],
};
var MbscValueBase = (function (_super) {
    __extends(MbscValueBase, _super);
    function MbscValueBase(initialElem, zone) {
        var _this = _super.call(this, initialElem) || this;
        _this.zone = zone;
        _this.initialValue = undefined;
        return _this;
    }
    MbscValueBase.prototype.setNewValueProxy = function (v) {
        if (!this._instance) {
            this.initialValue = v;
        }
        this.setNewValue(v);
    };
    return MbscValueBase;
}(MbscBase));
var MbscControlBase = (function (_super) {
    __extends(MbscControlBase, _super);
    function MbscControlBase(initialElement, zone, control, _inputService) {
        var _this = _super.call(this, initialElement, zone) || this;
        _this.control = control;
        _this._inputService = _inputService;
        _this._needsTimeout = true;
        _this.onChange = function () { };
        _this.onTouch = function () { };
        _this.onChangeEmitter = new EventEmitter();
        _this.overwriteAccessor();
        if (_inputService) {
            _inputService.isControlSet = true;
        }
        return _this;
    }
    Object.defineProperty(MbscControlBase.prototype, "optionExtensions", {
        get: function () {
            var _this = this;
            var externalOnClose = this.options && this.options.onClose;
            var externalOnFill = this.options && this.options.onFill;
            return {
                onFill: function (event, inst) {
                    if (_this.oldAccessor) {
                        _this.oldAccessor.writeValue(event.valueText);
                    }
                    if (externalOnFill) {
                        externalOnFill(event, inst);
                    }
                },
                onClose: function (event, inst) {
                    _this.onTouch();
                    if (externalOnClose) {
                        externalOnClose(event, inst);
                    }
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    MbscControlBase.prototype.handleChange = function (element) {
        var that = this;
        $(element || this.element).on('change', function () {
            that.zone.run(function () {
                var value = that._instance.getVal();
                if (that.control) {
                    that.onChange(value);
                    that.control.control.patchValue(value);
                }
                else {
                    that.onChangeEmitter.emit(value);
                }
            });
        });
    };
    MbscControlBase.prototype.overwriteAccessor = function () {
        if (this.control) {
            if (this.control.valueAccessor !== this) {
                this.oldAccessor = this.control.valueAccessor;
            }
            this.control.valueAccessor = this;
        }
    };
    MbscControlBase.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.handleChange();
        this.overwriteAccessor();
        if (this.control && this.control._setUpControl) {
            this.control._setUpControl();
        }
    };
    MbscControlBase.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MbscControlBase.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    MbscControlBase.prototype.writeValue = function (v) {
        var _this = this;
        if (this._needsTimeout) {
            setTimeout(function () {
                _this.setNewValueProxy(v);
            });
        }
        else {
            this.setNewValueProxy(v);
        }
    };
    return MbscControlBase;
}(MbscValueBase));
var MbscDataControlBase = (function (_super) {
    __extends(MbscDataControlBase, _super);
    function MbscDataControlBase(initialElem, zone, control, inputService) {
        var _this = _super.call(this, initialElem, zone, control, inputService) || this;
        _this.options = {};
        _this.isMulti = undefined;
        _this.previousData = undefined;
        _this.noDataCheck = false;
        _this.data = undefined;
        return _this;
    }
    MbscDataControlBase.prototype.setNewValue = function (v) {
        if (this._instance) {
            var changed = void 0;
            if (this.isMulti) {
                changed = !deepEqualsArray(v, this._instance.getVal());
            }
            else {
                var innerValue = this._instance.getVal();
                changed = innerValue !== v;
            }
            if (changed) {
                this._instance.setVal(v, true, false);
                if (this._inputService && this._inputService.input) {
                    this._inputService.input.innerValue = this._instance._value;
                }
            }
        }
    };
    MbscDataControlBase.prototype.cloneData = function () {
        this.previousData = this.data ? [] : this.data;
        if (this.data) {
            for (var i = 0; i < this.data.length; i++) {
                this.previousData.push(this.data[i]);
            }
        }
    };
    MbscDataControlBase.prototype.ngOnInit = function () {
        this.isMulti = this.options && this.options.select && this.options.select !== 'single';
    };
    MbscDataControlBase.prototype.ngDoCheck = function () {
        if (this._instance && this.data !== undefined && !this.noDataCheck && !deepEqualsArray(this.data, this.previousData)) {
            this.cloneData();
            this.refreshData(this.data);
        }
    };
    return MbscDataControlBase;
}(MbscControlBase));
MbscDataControlBase.propDecorators = {
    'options': [{ type: Input, args: ['mbsc-options',] },],
    'noDataCheck': [{ type: Input, args: ['mbsc-no-data-check',] },],
    'data': [{ type: Input, args: ['mbsc-data',] },],
};
function deepEqualsArray(a1, a2) {
    if (a1 === a2) {
        return true;
    }
    else if (!a1 || !a2 || a1.length !== a2.length) {
        return false;
    }
    else {
        for (var i = 0; i < a1.length; i++) {
            if (a1[i] !== a2[i]) {
                return false;
            }
        }
        return true;
    }
}
export { $, extend, mobiscroll, MbscBase, MbscValueBase, MbscControlBase, MbscDataControlBase, deepEqualsArray, Directive, Component, Input, Output, EventEmitter, Optional, ElementRef, ViewChild, ViewChildren, ContentChildren, QueryList, NgZone, NgControl, FormsModule, NgModule, CommonModule, Injectable, Observable, Subject };
