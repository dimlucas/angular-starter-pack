import {FormGroupStatusPipe} from "./form-group-status.pipe";
import {FormControl} from "@angular/forms";

describe("formGroupStatus pipe isolated", () => {
    let pipe: FormGroupStatusPipe;

    beforeEach(() => {
        pipe = new FormGroupStatusPipe();
    });

    it("should set no class if the control is untouched", () => {
        let control = {
            touched: false,
            pristine: true,
            valid: false,
            invalid: true
        };
        let result = pipe.transform(control as FormControl);
        expect(result['has-danger']).toBeFalsy();
        expect(result['has-success']).toBeFalsy();
    });

    it("should set no class if the control is untouched even if valid", () => {
        let control = {
            touched: false,
            pristine: true,
            valid: true,
            invalid: false
        };
        let result = pipe.transform(control as FormControl);
        expect(result['has-danger']).toBeFalsy();
        expect(result['has-success']).toBeFalsy();
    });

    it("should set 'has-danger' if touched but invalid", () => {
        let control = {
            touched: true,
            pristine: false,
            valid: false,
            invalid: true
        };
        debugger;
        let result = pipe.transform(control as FormControl);
        expect(result['has-danger']).toBeTruthy();
        expect(result['has-success']).toBeFalsy();
    });

    it("should set 'has-success' if touched and valid", () => {
        let control = {
            touched: true,
            pristine: false,
            valid: true,
            invalid: false
        };
        let result = pipe.transform(control as FormControl);
        expect(result['has-danger']).toBeFalsy();
        expect(result['has-success']).toBeTruthy();
    });
});