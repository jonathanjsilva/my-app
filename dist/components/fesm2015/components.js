import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class ComponentsService {
    constructor() { }
}
ComponentsService.ɵfac = function ComponentsService_Factory(t) { return new (t || ComponentsService)(); };
ComponentsService.ɵprov = ɵɵdefineInjectable({ token: ComponentsService, factory: ComponentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ComponentsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class ComponentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ComponentsComponent.ɵfac = function ComponentsComponent_Factory(t) { return new (t || ComponentsComponent)(); };
ComponentsComponent.ɵcmp = ɵɵdefineComponent({ type: ComponentsComponent, selectors: [["cpt-components"]], decls: 2, vars: 0, template: function ComponentsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " components works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ComponentsComponent, [{
        type: Component,
        args: [{
                selector: 'cpt-components',
                template: `
    <p>
      components works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class ButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = ɵɵdefineComponent({ type: ButtonComponent, selectors: [["cpt-button"]], decls: 2, vars: 0, template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "button works!");
        ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'cpt-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.css']
            }]
    }], function () { return []; }, null); })();

class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = ɵɵdefineComponent({ type: NavbarComponent, selectors: [["cpt-navbar"]], decls: 2, vars: 0, template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "navbar works!");
        ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{
                selector: 'cpt-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();

class ComponentsModule {
}
ComponentsModule.ɵmod = ɵɵdefineNgModule({ type: ComponentsModule });
ComponentsModule.ɵinj = ɵɵdefineInjector({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ComponentsModule, { declarations: [ComponentsComponent, ButtonComponent, NavbarComponent], exports: [ComponentsComponent, ButtonComponent, NavbarComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [ComponentsComponent, ButtonComponent, NavbarComponent],
                imports: [],
                exports: [ComponentsComponent, ButtonComponent, NavbarComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ComponentsComponent, ComponentsModule, ComponentsService, NavbarComponent };
//# sourceMappingURL=components.js.map
