import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    messageShown: boolean = false;

    onBtnClick(): void {
        this.messageShown = true;
    }
}
