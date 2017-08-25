import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'booleanToString'
})
export class BooleanToStringPipe implements PipeTransform {
    transform(value: boolean, truthyText: string, falsyText: string): any {
        return value ? truthyText : falsyText;
    }
}