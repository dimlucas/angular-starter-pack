import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {DebugElement} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";

describe("AppComponent", () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    let de: DebugElement;
    let el: any;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                RouterTestingModule
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.nativeElement;
    });

    it("should contain a header", () => {
        let header = el.querySelector("header");
        expect(header).toBeTruthy();
    });

    it("the header should contain a navbar", () => {
        let navbar = el.querySelector("header .navbar");
        expect(navbar).toBeTruthy();
    });

    it("should contain a main element with a container", () => {
        let main = el.querySelector("main");
        expect(main).toBeTruthy();
        let container = el.querySelector("main div.container");
        let containerFluid = el.querySelector("main div.container-fluid");
        expect(container || containerFluid).toBeTruthy();
    });

    it("should contain a sticky footer", () => {
        let footer = el.querySelector("footer");
        expect(footer).toBeTruthy();
    });

    it("container should contain a router-outlet", () => {
        expect(el.querySelector("main div.container router-outlet") || el.querySelector("main div.container-fluid router-outlet")).toBeTruthy();
    })

});