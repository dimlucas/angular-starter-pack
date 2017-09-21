import {Component} from '@angular/core';

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
    messageShown: boolean = false;

    onBtnClick(): void {
        this.messageShown = true;
    }
}