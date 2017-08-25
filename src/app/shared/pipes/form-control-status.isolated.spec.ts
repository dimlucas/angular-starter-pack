import {FormControlStatusPipe} from "./form-control-status.pipe";
import {FormControl} from "@angular/forms";

describe("formControlStatus pipe isolated", () => {
    let formControlStatusPipe: FormControlStatusPipe;

    beforeEach(() => {
        formControlStatusPipe = new FormControlStatusPipe();
    });

    it("should set no class when control untouched", () => {
        let control = {
            touched: false,
            pristine: true,
            valid: false,
            invalid: true
        };
        let result = formControlStatusPipe.transform(control as FormControl);
        expect(result['form-control-danger']).toBeFalsy();
        expect(result['form-control-success']).toBeFalsy();
    });

    it("should set no class when control untouched even if valid", () => {
        let control = {
            touched: false,
            pristine: true,
            valid: true,
            invalid: false
        };
        let result = formControlStatusPipe.transform(control as FormControl);
        expect(result['form-control-danger']).toBeFalsy();
        expect(result['form-control-success']).toBeFalsy();
    });

    it("should set form-control-danger when control touched but invalid", () => {
        let control = {
            touched: true,
            pristine: false,
            valid: false,
            invalid: true
        };
        let result = formControlStatusPipe.transform(control as FormControl);
        expect(result['form-control-danger']).toBeTruthy();
        expect(result['form-control-success']).toBeFalsy();
    });

    it("should set form-control-success when control touched and valid", () => {
        let control = {
            touched: true,
            pristine: false,
            valid: true,
            invalid: false
        };
        let result = formControlStatusPipe.transform(control as FormControl);
        expect(result['form-control-danger']).toBeFalsy();
        expect(result['form-control-success']).toBeTruthy();
    });
});