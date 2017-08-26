import {NgModule} from '@angular/core';
import {FormGroupStatusPipe} from "./pipes/form-group-status.pipe";
import {FormControlStatusPipe} from "./pipes/form-control-status.pipe";
import {BooleanToStringPipe} from "./pipes/boolean-to-string.pipe";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        FormGroupStatusPipe,
        FormControlStatusPipe,
        BooleanToStringPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule
    ]
})
export class SharedModule {}