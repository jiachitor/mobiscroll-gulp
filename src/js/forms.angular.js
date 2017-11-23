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
import { extend, Component, MbscBase, MbscControlBase, deepEqualsArray, NgZone, NgControl, Optional, ElementRef, Input, Output, EventEmitter, ViewChild, ViewChildren, Injectable, Subject, MbscInputService } from './frameworks/angular';
import Form from './classes/forms';
import FormInput from './classes/input';
import TextArea from './classes/textarea';
import Select from './classes/select';
import Button from './classes/button';
import CheckBox from './classes/checkbox';
import Switch from './classes/switch';
import Stepper from './classes/stepper';
import Progress from './classes/progress';
import Radio from './classes/radio';
import SegmentedItem from './classes/segmented';
import Slider from './classes/slider';
var MbscFormService = (function () {
    function MbscFormService() {
    }
    Object.defineProperty(MbscFormService.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (o) {
            this._options = o;
        },
        enumerable: true,
        configurable: true
    });
    return MbscFormService;
}());
export { MbscFormService };
MbscFormService.decorators = [
    { type: Injectable },
];
MbscFormService.ctorParameters = function () { return []; };
var MbscForm = (function (_super) {
    __extends(MbscForm, _super);
    function MbscForm(initialElem, _formService) {
        var _this = _super.call(this, initialElem) || this;
        _this._formService = _formService;
        return _this;
    }
    MbscForm.prototype.ngOnInit = function () {
        this._formService.options = this.options;
    };
    MbscForm.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        var options = extend({}, this.options);
        this._instance = new Form(this.rootElem.nativeElement, options);
    };
    return MbscForm;
}(MbscBase));
export { MbscForm };
MbscForm.decorators = [
    { type: Component, args: [{
                selector: 'mbsc-form',
                template: "<div #rootElement><ng-content></ng-content></div>",
                providers: [MbscFormService],
                exportAs: 'mobiscroll'
            },] },
];
MbscForm.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: MbscFormService, },
]; };
MbscForm.propDecorators = {
    'options': [{ type: Input, args: ['options',] },],
    'rootElem': [{ type: ViewChild, args: ['rootElement',] },],
};
var MbscFormBase = (function (_super) {
    __extends(MbscFormBase, _super);
    function MbscFormBase(hostElem, _formService) {
        var _this = _super.call(this, hostElem) || this;
        _this._formService = _formService;
        _this.disabled = false;
        return _this;
    }
    MbscFormBase.prototype.ngOnInit = function () {
        this._inheritedOptions = this._formService.options;
    };
    return MbscFormBase;
}(MbscBase));
export { MbscFormBase };
MbscFormBase.propDecorators = {
    'options': [{ type: Input },],
    'disabled': [{ type: Input },],
    'name': [{ type: Input },],
    '_initElem': [{ type: ViewChild, args: ['initElement',] },],
};
var MbscFormValueBase = (function (_super) {
    __extends(MbscFormValueBase, _super);
    function MbscFormValueBase(hostElem, _formService, _control, _noOverride) {
        var _this = _super.call(this, hostElem, _formService) || this;
        _this._control = _control;
        _this._noOverride = _noOverride;
        _this.onChange = function () { };
        _this.onTouch = function () { };
        _this.errorMessage = '';
        _this.valueChangeEmitter = new EventEmitter();
        if (_control && !_noOverride) {
            _control.valueAccessor = _this;
        }
        return _this;
    }
    Object.defineProperty(MbscFormValueBase.prototype, "innerValue", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = v;
            this.onChange(v);
            this.valueChangeEmitter.emit(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MbscFormValueBase.prototype, "value", {
        set: function (v) {
            this._value = v;
        },
        enumerable: true,
        configurable: true
    });
    MbscFormValueBase.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MbscFormValueBase.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    MbscFormValueBase.prototype.writeValue = function (v) {
        this._value = v;
    };
    return MbscFormValueBase;
}(MbscFormBase));
export { MbscFormValueBase };
MbscFormValueBase.propDecorators = {
    'value': [{ type: Input },],
    'error': [{ type: Input },],
    'errorMessage': [{ type: Input },],
    'valueChangeEmitter': [{ type: Output, args: ['valueChange',] },],
};
var MbscInputBase = (function (_super) {
    __extends(MbscInputBase, _super);
    function MbscInputBase(initialElem, _formService, _control, noOverride) {
        var _this = _super.call(this, initialElem, _formService, _control, noOverride) || this;
        _this.type = 'text';
        _this.placeholder = '';
        return _this;
    }
    return MbscInputBase;
}(MbscFormValueBase));
export { MbscInputBase };
MbscInputBase.propDecorators = {
    'icon': [{ type: Input },],
    'iconAlign': [{ type: Input, args: ['icon-align',] },],
    'type': [{ type: Input },],
    'passwordToggle': [{ type: Input, args: ['password-toggle',] },],
    'iconShow': [{ type: Input, args: ['icon-show',] },],
    'iconHide': [{ type: Input, args: ['icon-hide',] },],
    'placeholder': [{ type: Input },],
};
var MbscInput = (function (_super) {
    __extends(MbscInput, _super);
    function MbscInput(initialElem, _formService, _inputService, _control) {
        var _this = _super.call(this, initialElem, _formService, _control, _inputService.isControlSet) || this;
        _this._inputService = _inputService;
        _inputService.input = _this;
        return _this;
    }
    MbscInput.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        var options = extend({}, this._inheritedOptions, this.options);
        this._instance = new FormInput(this._initElem.nativeElement, options);
    };
    return MbscInput;
}(MbscInputBase));
export { MbscInput };
MbscInput.decorators = [
    { type: Component, args: [{
                selector: 'mbsc-input',
                host: { 'class': 'mbsc-control-ng' },
                template: "\n        <label [class.mbsc-err]=\"error\">\n            <ng-content></ng-content>\n            <span class=\"mbsc-input-wrap\">\n                <input #initElement [type]=\"type\" [placeholder]=\"placeholder\" [(ngModel)]=\"innerValue\" (blur)=\"onTouch($event)\"\n                    [attr.name]=\"name\"\n                    [attr.data-icon]=\"icon ? icon : null\"\n                    [attr.data-icon-align]=\"iconAlign ? iconAlign : null\"\n                    [attr.data-password-toggle]=\"passwordToggle ? 'true': null\"\n                    [attr.data-icon-show]=\"iconShow ? iconShow : null\"\n                    [attr.data-icon-hide]=\"iconHide ? iconHide : null\"\n                    [disabled]=\"disabled\" />\n                <span *ngIf=\"error && errorMessage\" class=\"mbsc-err-msg\">{{errorMessage}}</span>\n            </span>\n        </label>\n    ",
                providers: [MbscInputService]
            },] },
];
MbscInput.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: MbscFormService, },
    { type: MbscInputService, },
    { type: NgControl, decorators: [{ type: Optional },] },
]; };
var MbscTextarea = (function (_super) {
    __extends(MbscTextarea, _super);
    function MbscTextarea(initialElem, _formService, _inputService, _control) {
        var _this = _super.call(this, initialElem, _formService, _control, _inputService.isControlSet) || this;
        _this._inputService = _inputService;
        _inputService.input = _this;
        return _this;
    }
    MbscTextarea.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        var options = extend({}, this._inheritedOptions, this.options);
        this._instance = new TextArea(this._initElem.nativeElement, options);
    };
    return MbscTextarea;
}(MbscInputBase));
export { MbscTextarea };
MbscTextarea.decorators = [
    { type: Component, args: [{
                selector: 'mbsc-textarea',
                host: { 'class': 'mbsc-control-ng' },
                template: "\n        <label [class.mbsc-err]=\"error\">\n            <ng-content></ng-content>\n            <span class=\"mbsc-input-wrap\">\n                <textarea #initElement [placeholder]=\"placeholder\" [(ngModel)]=\"innerValue\" (blur)=\"onTouch($event)\"\n                    [attr.name]=\"name\"\n                    [attr.data-icon]=\"icon ? icon : null\"\n                    [attr.data-icon-align]=\"iconAlign ? iconAlign : null\"\n                    [disabled]=\"disabled\"></textarea>\n                <span *ngIf=\"error && errorMessage\" class=\"mbsc-err-msg\">{{errorMessage}}</span>\n            </span>\n        </label>\n    ",
                providers: [MbscInputService]
            },] },
];
MbscTextarea.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: MbscFormService, },
    { type: MbscInputService, },
    { type: NgControl, decorators: [{ type: Optional },] },
]; };
var MbscDropdown = (function (_super) {
    __extends(MbscDropdown, _super);
    function MbscDropdown(hostElem, formService, _inputService, control) {
        var _this = _super.call(this, hostElem, formService, control, _inputService.isControlSet) || this;
        _this._inputService = _inputService;
        _inputService.input = _this;
        return _this;
    }
    MbscDropdown.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    MbscDropdown.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        var options = extend({}, this._inheritedOptions, this.options);
        this._instance = new Select(this._initElem.nativeElement, options);
        var that = this;
        setTimeout(function () {
            that._instance._setText();
        });
    };
    MbscDropdown.prototype.writeValue = function (v) {
        this._value = v;
        if (this._instance) {
            var that_1 = this;
            setTimeout(function () {
                that_1._instance._setText();
            });
        }
    };
    return MbscDropdown;
}(MbscFormValueBase));
export { MbscDropdown };
MbscDropdown.decorators = [
    { type: Component, args: [{
                selector: 'mbsc-dropdown',
                host: { 'class': 'mbsc-control-ng' },
                template: "\n        <label [class.mbsc-err]=\"error\">\n            {{label}}\n            <span class=\"mbsc-input-wrap\">\n                <select #initElement\n                    [(ngModel)]=\"innerValue\" \n                    [attr.name]=\"name\"\n                    [attr.data-icon]=\"icon ? icon : null\"\n                    [attr.data-icon-align]=\"iconAlign ? iconAlign : null\"\n                    [disabled]=\"disabled\"\n                    (blur)=\"onTouch($event)\">\n                    <ng-content></ng-content>\n                </select>\n                <span *ngIf=\"error && errorMessage\" class=\"mbsc-err-msg\">{{errorMessage}}</span>\n            </span>\n        </label>\n    ",
                providers: [MbscInputService]
            },] },
];
MbscDropdown.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: MbscFormService, },
    { type: MbscInputService, },
    { type: NgControl, decorators: [{ type: Optional },] },
]; };
MbscDropdown.propDecorators = {
    'label': [{ type: Input },],
    'icon': [{ type: Input },],
    'iconAlign': [{ type: Input, args: ['icon-align',] },],
};
var MbscButton = (function (_super) {
    __extends(MbscButton, _super);
    function MbscButton(hostElem, formService) {
        var _this = _super.call(this, hostElem, formService) || this;
        _this._flat = false;
        _this._block = false;
        _this.type = 'button';
        return _this;
    }
    Object.defineProperty(MbscButton.prototype, "flat", {
        set: function (val) {
            this._flat = (typeof val === 'string' && (val === 'true' || val === '')) || !!val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MbscButton.prototype, "block", {
        set: function (val) {
            this._block = (typeof val === 'string' && (val === 'true' || val === '')) || !!val;
        },
        enumerable: true,
        configurable: true
    });
    MbscButton.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        var options = extend({}, this._inheritedOptions, this.options);
        this._instance = new Button(this._initElem.nativeElement, options);
    };
    return MbscButton;
}(MbscFormBase));
export { MbscButton };
MbscButton.decorators = [
    { type: Component, args: [{
                selector: 'mbsc-button',
                template: "\n        <button #initElement \n            [type]=\"type\"\n            [ngClass]=\"{ 'mbsc-btn-flat': _flat, 'mbsc-btn-block': _block }\"\n            [attr.name]=\"name\"\n            [attr.data-icon]=\"icon ? icon : null\"\n            [disabled]=\"disabled\">\n            <ng-content></ng-content>\n        </button>\n    "
            },] },
];
MbscButton.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: MbscFormService, },
]; };
MbscButton.propDecorators = {
    'type': [{ type: Input },],
    'icon': [{ type: Input },],
    'flat': [{ type: Input },],
    'block': [{ type: Input },],
};
var MbscCheckbox = (function (_super) {
    __extends(MbscCheckbox, _super);
    function MbscCheckbox(hostElem, formService, control) {
        return _super.call(this, hostElem, formService, control, false) || this;
    }
    MbscCheckbox.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        var options = extend({}, this._inheritedOptions, this.options);
        this._instance = new CheckBox(this._initElem.nativeElement, options);
    };
    return MbscCheckbox;
}(MbscFormValueBase));
export { MbscCheckbox };
MbscCheckbox.decorators = [
    { type: Component, args: [{
                selector: 'mbsc-checkbox',
                host: { 'class': 'mbsc-control-ng' },
                template: "\n        <label>\n            <input #initElement \n                type=\"checkbox\"\n                [attr.name]=\"name\"\n                [disabled]=\"disabled\"\n                [(ngModel)]=\"innerValue\"\n                (blur)=\"onTouch($event)\" />\n            <ng-content></ng-content>\n        </label>\n    "
            },] },
];
MbscCheckbox.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: MbscFormService, },
    { type: NgControl, decorators: [{ type: Optional },] },
]; };
var MbscSwitch = (function (_super) {
    __extends(MbscSwitch, _super);
    function MbscSwitch(hostElem, zone, _formService, control) {
        var _this = _super.call(this, hostElem, zone, control, null) || this;
        _this._formService = _formService;
        _this.disabled = false;
        _this.onChangeEmitter = new EventEmitter();
        return _this;
    }
    Object.defineProperty(MbscSwitch.prototype, "value", {
        set: function (v) {
            this.setNewValueProxy(v);
        },
        enumerable: true,
        configurable: true
    });
    MbscSwitch.prototype.setNewValue = function (v) {
        if (this._instance) {
            if (this._instance.getVal() !== v) {
                this._instance.setVal(v, true, false);
            }
        }
    };
    MbscSwitch.prototype.ngOnInit = function () {
        this._inheritedOptions = this._formService.options;
    };
    MbscSwitch.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        var options = extend({}, this._inheritedOptions, this.options);
        this._instance = new Switch(this._initElem.nativeElement, options);
        if (this.initialValue !== undefined) {
            this._instance.setVal(this.initialValue, true, false);
        }
    };
    return MbscSwitch;
}(MbscControlBase));
export { MbscSwitch };
MbscSwitch.decorators = [
    { type: Component, args: [{
                selector: 'mbsc-switch',
                host: { 'class': 'mbsc-control-ng' },
                template: "\n        <label>\n            <ng-content></ng-content>\n            <input #initElement \n                type=\"checkbox\"\n                data-role=\"switch\"\n                [attr.name]=\"name\"\n                [disabled]=\"disabled\"\n                (blur)=\"onTouch($event)\" />\n        </label>\n    ",
                exportAs: 'mobiscroll'
            },] },
];
MbscSwitch.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: NgZone, },
    { type: MbscFormService, },
    { type: NgControl, decorators: [{ type: Optional },] },
]; };
MbscSwitch.propDecorators = {
    'options': [{ type: Input, args: ['options',] },],
    'disabled': [{ type: Input },],
    'name': [{ type: Input },],
    'value': [{ type: Input, args: ['value',] },],
    'onChangeEmitter': [{ type: Output, args: ['valueChange',] },],
    '_initElem': [{ type: ViewChild, args: ['initElement',] },],
};
var MbscStepper = (function (_super) {
    __extends(MbscStepper, _super);
    function MbscStepper(hostElement, zone, _formService, control) {
        var _this = _super.call(this, hostElement, zone, control, null) || this;
        _this._formService = _formService;
        _this.min = undefined;
        _this.max = undefined;
        _this.step = undefined;
        _this.val = undefined;
        _this.disabled = false;
        _this.onChangeEmitter = new EventEmitter();
        return _this;
    }
    Object.defineProperty(MbscStepper.prototype, "value", {
        set: function (v) {
            this.setNewValueProxy(v);
        },
        enumerable: true,
        configurable: true
    });
    MbscStepper.prototype.setNewValue = function (v) {
        if (this._instance && this._instance.getVal() !== v) {
            this._instance.setVal(v, true, false);
        }
    };
    MbscStepper.prototype.ngOnInit = function () {
        this._inheritedOptions = this._formService.options;
    };
    MbscStepper.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        var options = extend({}, this._inheritedOptions, this.options);
        this._instance = new Stepper(this._initElem.nativeElement, options);
        if (this.initialValue !== undefined) {
            this._instance.setVal(this.initialValue, true, false);
        }
    };
    return MbscStepper;
}(MbscControlBase));
export { MbscStepper };
MbscStepper.decorators = [
    { type: Component, args: [{
                selector: 'mbsc-stepper',
                host: { 'class': 'mbsc-control-ng' },
                template: "\n        <div>\n            <ng-content></ng-content>\n            <input #initElement\n                data-role=\"stepper\"\n                [attr.name]=\"name\"\n                [attr.min]=\"min !== undefined ? min : null\"\n                [attr.max]=\"max !== undefined ? max : null\"\n                [attr.step]=\"step !== undefined ? step : null\"\n                [attr.data-val]=\"val ? val : null\"\n                [disabled]=\"disabled\" />\n        </div>\n    ",
                exportAs: 'mobiscroll'
            },] },
];
MbscStepper.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: NgZone, },
    { type: MbscFormService, },
    { type: NgControl, decorators: [{ type: Optional },] },
]; };
MbscStepper.propDecorators = {
    'options': [{ type: Input, args: ['options',] },],
    'value': [{ type: Input },],
    'name': [{ type: Input },],
    'min': [{ type: Input },],
    'max': [{ type: Input },],
    'step': [{ type: Input },],
    'val': [{ type: Input },],
    'disabled': [{ type: Input },],
    'onChangeEmitter': [{ type: Output, args: ['valueChange',] },],
    '_initElem': [{ type: ViewChild, args: ['initElement',] },],
};
var MbscProgress = (function (_super) {
    __extends(MbscProgress, _super);
    function MbscProgress(hostElement, zone, _formService, control) {
        var _this = _super.call(this, hostElement, zone, control, null) || this;
        _this._formService = _formService;
        _this.max = undefined;
        _this.icon = undefined;
        _this.iconAlign = undefined;
        _this.val = undefined;
        _this.disabled = false;
        return _this;
    }
    Object.defineProperty(MbscProgress.prototype, "value", {
        set: function (v) {
            this.setNewValueProxy(v);
        },
        enumerable: true,
        configurable: true
    });
    MbscProgress.prototype.setNewValue = function (v) {
        if (this._instance && this._instance.getVal() !== v) {
            this._instance.setVal(v, true, false);
        }
    };
    MbscProgress.prototype.ngOnInit = function () {
        this._inheritedOptions = this._formService.options;
    };
    MbscProgress.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        var options = extend({}, this._inheritedOptions, this.options);
        this._instance = new Progress(this._initElem.nativeElement, options);
        if (this.initialValue !== undefined) {
            this._instance.setVal(this.initialValue, true, false);
        }
    };
    return MbscProgress;
}(MbscControlBase));
export { MbscProgress };
MbscProgress.decorators = [
    { type: Component, args: [{
                selector: 'mbsc-progress',
                host: { 'class': 'mbsc-control-ng' },
                template: "\n        <label>\n            <ng-content></ng-content>\n            <progress #initElement\n                [attr.data-step-labels]=\"stepLabels\"\n                [attr.data-icon]=\"icon ? icon : null\"\n                [attr.data-icon-align]=\"iconAlign ? iconAlign : null\"\n                [attr.max]=\"max !== undefined ? max : null\"\n                [attr.data-val]=\"val !== undefined ? val : null\"\n            >\n            </progress>\n        </label>\n    ",
                exportAs: 'mobiscroll'
            },] },
];
MbscProgress.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: NgZone, },
    { type: MbscFormService, },
    { type: NgControl, decorators: [{ type: Optional },] },
]; };
MbscProgress.propDecorators = {
    'options': [{ type: Input, args: ['options',] },],
    'value': [{ type: Input },],
    'max': [{ type: Input },],
    'icon': [{ type: Input },],
    'iconAlign': [{ type: Input, args: ['icon-align',] },],
    'val': [{ type: Input },],
    'disabled': [{ type: Input },],
    'stepLabels': [{ type: Input, args: ['step-labels',] },],
    '_initElem': [{ type: ViewChild, args: ['initElement',] },],
};
var groupName = 1;
var MbscRadioService = (function () {
    function MbscRadioService() {
        this._valueSubject = new Subject();
    }
    Object.defineProperty(MbscRadioService.prototype, "name", {
        get: function () {
            if (!this._name) {
                this._name = 'mbsc-radio-group-' + (groupName++);
            }
            return this._name;
        },
        set: function (n) {
            this._name = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MbscRadioService.prototype, "multiSelect", {
        get: function () {
            return this._multiSelect;
        },
        set: function (v) {
            this._multiSelect = v;
        },
        enumerable: true,
        configurable: true
    });
    MbscRadioService.prototype.onValueChanged = function () {
        return this._valueSubject.asObservable();
    };
    MbscRadioService.prototype.changeValue = function (v) {
        this._valueSubject.next(v);
    };
    return MbscRadioService;
}());
export { MbscRadioService };
MbscRadioService.decorators = [
    { type: Injectable },
];
MbscRadioService.ctorParameters = function () { return []; };
var MbscRadioGroupBase = (function (_super) {
    __extends(MbscRadioGroupBase, _super);
    function MbscRadioGroupBase(hostElement, formService, _radioService, control) {
        var _this = _super.call(this, hostElement, formService, control, null) || this;
        _this._radioService = _radioService;
        _this._radioService.onValueChanged().subscribe(function (v) {
            _this.innerValue = v;
            _this.onTouch();
        });
        return _this;
    }
    MbscRadioGroupBase.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.name) {
            this._radioService.name = this.name;
        }
    };
    MbscRadioGroupBase.prototype.writeValue = function (v) {
        this._value = v;
        this._radioService.changeValue(v);
    };
    return MbscRadioGroupBase;
}(MbscFormValueBase));
export { MbscRadioGroupBase };
MbscRadioGroupBase.propDecorators = {
    'name': [{ type: Input },],
};
var MbscRadioGroup = (function (_super) {
    __extends(MbscRadioGroup, _super);
    function MbscRadioGroup(hostElement, formService, radioService, control) {
        return _super.call(this, hostElement, formService, radioService, control) || this;
    }
    return MbscRadioGroup;
}(MbscRadioGroupBase));
export { MbscRadioGroup };
MbscRadioGroup.decorators = [
    { type: Component, args: [{
                selector: 'mbsc-radio-group',
                template: "\n        <div>\n            <ng-content></ng-content>\n        </div>\n    ",
                providers: [MbscRadioService]
            },] },
];
MbscRadioGroup.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: MbscFormService, },
    { type: MbscRadioService, },
    { type: NgControl, decorators: [{ type: Optional },] },
]; };
var MbscRadio = (function (_super) {
    __extends(MbscRadio, _super);
    function MbscRadio(hostElement, formService, _radioService) {
        var _this = _super.call(this, hostElement, formService) || this;
        _this._radioService = _radioService;
        _this._radioService.onValueChanged().subscribe(function (v) {
            _this.modelValue = v;
        });
        return _this;
    }
    Object.defineProperty(MbscRadio.prototype, "checked", {
        get: function () {
            return this.value == this.modelValue;
        },
        enumerable: true,
        configurable: true
    });
    MbscRadio.prototype.clicked = function (e) {
        this._radioService.changeValue(this.value);
    };
    MbscRadio.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        var options = extend({}, this._inheritedOptions, this.options);
        this._instance = new Radio(this._initElem.nativeElement, options);
    };
    MbscRadio.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.name = this._radioService.name;
    };
    return MbscRadio;
}(MbscFormBase));
export { MbscRadio };
MbscRadio.decorators = [
    { type: Component, args: [{
                selector: 'mbsc-radio',
                host: { 'class': 'mbsc-control-ng' },
                template: "\n        <label>\n            <input #initElement \n                type=\"radio\" \n                [attr.name]=\"name\" \n                [attr.value]=\"value\"\n                [value]=\"value\" \n                [checked]=\"checked\"\n                [disabled]=\"disabled\"\n                (click)=\"clicked($event)\" />\n            <ng-content></ng-content>\n        </label>\n    "
            },] },
];
MbscRadio.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: MbscFormService, },
    { type: MbscRadioService, },
]; };
MbscRadio.propDecorators = {
    'value': [{ type: Input },],
};
var MbscSegmentedGroup = (function (_super) {
    __extends(MbscSegmentedGroup, _super);
    function MbscSegmentedGroup(hostElement, formService, radioService, control) {
        var _this = _super.call(this, hostElement, formService, radioService, control) || this;
        _this.select = 'single';
        return _this;
    }
    Object.defineProperty(MbscSegmentedGroup.prototype, "multiSelect", {
        get: function () {
            return this.select == 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    MbscSegmentedGroup.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this._radioService.multiSelect = this.multiSelect;
    };
    return MbscSegmentedGroup;
}(MbscRadioGroupBase));
export { MbscSegmentedGroup };
MbscSegmentedGroup.decorators = [
    { type: Component, args: [{
                selector: 'mbsc-segmented-group',
                template: "<div class=\"mbsc-segmented\"><ng-content></ng-content></div>",
                providers: [MbscRadioService]
            },] },
];
MbscSegmentedGroup.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: MbscFormService, },
    { type: MbscRadioService, },
    { type: NgControl, decorators: [{ type: Optional },] },
]; };
MbscSegmentedGroup.propDecorators = {
    'select': [{ type: Input },],
};
var MbscSegmented = (function (_super) {
    __extends(MbscSegmented, _super);
    function MbscSegmented(hostElement, formService, _radioService) {
        var _this = _super.call(this, hostElement, formService) || this;
        _this._radioService = _radioService;
        _this.valueChange = new EventEmitter();
        _this._radioService.onValueChanged().subscribe(function (v) {
            _this.modelValue = v;
        });
        return _this;
    }
    Object.defineProperty(MbscSegmented.prototype, "checked", {
        get: function () {
            if (this.multiSelect) {
                return this.value;
            }
            else {
                return this.value == this.modelValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    MbscSegmented.prototype.clicked = function (e) {
        if (this.multiSelect) {
            this.valueChange.emit(!(!!this.value));
        }
        else {
            this._radioService.changeValue(this.value);
        }
    };
    MbscSegmented.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        var options = extend({}, this._inheritedOptions, this.options);
        this._instance = new SegmentedItem(this._initElem.nativeElement, options);
    };
    MbscSegmented.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.name = this._radioService.name;
        this.multiSelect = this._radioService.multiSelect;
    };
    return MbscSegmented;
}(MbscFormBase));
export { MbscSegmented };
MbscSegmented.decorators = [
    { type: Component, args: [{
                selector: 'mbsc-segmented',
                host: { class: 'mbsc-segmented-item' },
                template: "\n        <label class=\"mbsc-segmented-item-ready\">\n            <input #initElement \n                data-role=\"segmented\"\n                [type]=\"multiSelect ? 'checkbox' : 'radio'\" \n                [value]=\"value\" \n                [checked]=\"checked\"\n                [disabled]=\"disabled\"\n                [attr.name]=\"name\" \n                [attr.value]=\"value\"\n                [attr.data-icon]=\"icon ? icon : null\"\n                (click)=\"clicked($event)\" />\n            <span class=\"mbsc-segmented-content\">\n                <span *ngIf=\"icon\" class=\"{{'mbsc-ic mbsc-ic-' + icon }}\"></span>\n                <ng-content></ng-content>\n            </span>\n        </label>\n    "
            },] },
];
MbscSegmented.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: MbscFormService, },
    { type: MbscRadioService, },
]; };
MbscSegmented.propDecorators = {
    'icon': [{ type: Input },],
    'value': [{ type: Input },],
    'valueChange': [{ type: Output },],
};
var MbscSlider = (function (_super) {
    __extends(MbscSlider, _super);
    function MbscSlider(hostElement, _formService, zone, control) {
        var _this = _super.call(this, hostElement, zone, control, null) || this;
        _this._formService = _formService;
        _this._dummy = undefined;
        _this._needsTimeout = false;
        _this.disabled = false;
        _this.onChangeEmitter = new EventEmitter();
        return _this;
    }
    Object.defineProperty(MbscSlider.prototype, "isMulti", {
        get: function () {
            return this._lastValue instanceof Array;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MbscSlider.prototype, "dummyArray", {
        get: function () {
            if (!this._dummy || (this.isMulti && this._lastValue && this._lastValue.length && this._dummy.length !== this._lastValue.length)) {
                this._dummy = Array(this.isMulti ? this._lastValue.length : 1).fill(0).map(function (x, i) { return i; });
            }
            return this._dummy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MbscSlider.prototype, "value", {
        set: function (v) {
            this.setNewValueProxy(v);
        },
        enumerable: true,
        configurable: true
    });
    MbscSlider.prototype.reInitialize = function () {
        this._instance.destroy();
        this.setElement();
        this.handleChange();
        var options = extend({}, this._inheritedOptions, this.options);
        this._instance = new Slider(this.inputElements.first.nativeElement, options);
    };
    MbscSlider.prototype.setNewValue = function (v) {
        var _this = this;
        this._lastValue = v;
        if (this._instance) {
            var innerValue = this._instance.getVal();
            if (this.isMulti && (!innerValue || innerValue.length != v.length)) {
                setTimeout(function () {
                    _this.reInitialize();
                    _this._instance.setVal(_this._lastValue, true, false);
                });
            }
            else {
                var changed = (this.isMulti && !deepEqualsArray(innerValue, v)) || (!this.isMulti && innerValue !== v);
                if (changed) {
                    this._instance.setVal(v, true, false);
                }
            }
        }
    };
    MbscSlider.prototype.ngOnInit = function () {
        this._inheritedOptions = this._formService.options;
    };
    MbscSlider.prototype.ngAfterViewInit = function () {
        var _this = this;
        _super.prototype.ngAfterViewInit.call(this);
        this.inputElements.forEach(function (input, index) {
            if (index) {
                _this.handleChange(input.nativeElement);
            }
        });
        var options = extend({}, this._inheritedOptions, this.options);
        this._instance = new Slider(this.inputElements.first.nativeElement, options);
        if (this.initialValue !== undefined) {
            this._instance.setVal(this.initialValue, true, false);
        }
    };
    return MbscSlider;
}(MbscControlBase));
export { MbscSlider };
MbscSlider.decorators = [
    { type: Component, args: [{
                selector: 'mbsc-slider',
                host: { 'class': 'mbsc-control-ng' },
                template: "\n        <label>\n            <ng-content></ng-content>\n            <input #inputElements *ngFor=\"let v of dummyArray\" \n                type=\"range\"\n                [disabled]=\"disabled\"\n                [attr.value]=\"dummyArray.length > 1 ? initialValue[v]: initialValue\"\n                [attr.data-step-labels]=\"stepLabels\"\n                [attr.data-template]=\"valueTemplate\"\n                [attr.data-tooltip]=\"tooltip ? 'true' : null\"\n                [attr.data-highlight]=\"highlight\"\n                [attr.data-live]=\"live\"\n                [attr.data-icon]=\"icon ? icon : null\"\n                [attr.data-val]=\"val ? val : null\"\n                [attr.name]=\"name\"\n                [attr.max]=\"max !== undefined ? max : null\"\n                [attr.min]=\"min !== undefined ? min : null\"\n                [attr.step]=\"step !== undefined ? step : null\"\n                (blur)=\"onTouch($event)\" />\n        </label>\n    ",
                exportAs: 'mobiscroll'
            },] },
];
MbscSlider.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: MbscFormService, },
    { type: NgZone, },
    { type: NgControl, decorators: [{ type: Optional },] },
]; };
MbscSlider.propDecorators = {
    'options': [{ type: Input, args: ['options',] },],
    'tooltip': [{ type: Input },],
    'highlight': [{ type: Input },],
    'live': [{ type: Input },],
    'valueTemplate': [{ type: Input, args: ['value-template',] },],
    'icon': [{ type: Input },],
    'val': [{ type: Input },],
    'max': [{ type: Input },],
    'min': [{ type: Input },],
    'step': [{ type: Input },],
    'disabled': [{ type: Input },],
    'stepLabels': [{ type: Input, args: ['step-labels',] },],
    'value': [{ type: Input, args: ['value',] },],
    'onChangeEmitter': [{ type: Output, args: ['valueChange',] },],
    'inputElements': [{ type: ViewChildren, args: ['inputElements',] },],
};
