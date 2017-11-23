import { NgModule, FormsModule, CommonModule, mobiscroll } from '../frameworks/angular';
import { MbscForm, MbscInput, MbscDropdown, MbscTextarea, MbscButton, MbscCheckbox, MbscSwitch, MbscStepper, MbscProgress, MbscSlider, MbscRadio, MbscRadioGroup, MbscSegmentedGroup, MbscSegmented } from '../forms.angular';
import { MbscPage } from '../page.angular';
import { MbscScroller } from '../scroller.angular';
var directives = [
    MbscForm, MbscPage, MbscInput, MbscDropdown, MbscTextarea, MbscButton, MbscCheckbox, MbscSwitch, MbscStepper, MbscProgress, MbscSlider, MbscRadio, MbscRadioGroup, MbscSegmentedGroup, MbscSegmented,
    MbscScroller
];
var MbscModule = (function () {
    function MbscModule() {
    }
    return MbscModule;
}());
MbscModule.decorators = [
    { type: NgModule, args: [{
                imports: [FormsModule, CommonModule],
                declarations: [directives],
                exports: [directives]
            },] },
];
MbscModule.ctorParameters = function () { return []; };
;
export { mobiscroll, MbscModule };
