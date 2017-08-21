import {TestBed, async, ComponentFixture} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {DebugElement} from "@angular/core";

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let de: DebugElement;
    let el: any;
    let secretMessage: string = "Haha! You clicked on the button! And it does nothing!";

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.nativeElement;
        fixture.detectChanges();
    });

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it("span shouldn't be displayed initially", () => {
        expect(component.messageShown).toBeFalsy();
        let span = el.querySelector("span");
        expect(span).toBeFalsy();
    });

    it("span should be displayed when button is clicked", async () => {
        let btn = el.querySelector("button");
        btn.click();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(component.messageShown).toBeTruthy();
            let span = el.querySelector("span");
            expect(span).toBeTruthy();
            expect(span.textContent).toEqual(secretMessage);
        });
    })

});
