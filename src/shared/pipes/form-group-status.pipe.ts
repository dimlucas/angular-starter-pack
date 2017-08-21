import {Pipe, PipeTransform} from '@angular/core';
import {FormControl} from "@angular/forms";

@Pipe({
    name: 'formGroupStatus',
    pure: false
})
export class FormGroupStatusPipe implements PipeTransform {
    transform(control: FormControl) {
        return {
            'has-success': (control.touched && control.valid),
            'has-danger': (control.touched && control.invalid)
        };
    }
}