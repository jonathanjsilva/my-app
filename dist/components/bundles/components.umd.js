(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('components', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.components = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var ComponentsService = /** @class */ (function () {
        function ComponentsService() {
        }
        return ComponentsService;
    }());
    ComponentsService.ɵfac = function ComponentsService_Factory(t) { return new (t || ComponentsService)(); };
    ComponentsService.ɵprov = i0.ɵɵdefineInjectable({ token: ComponentsService, factory: ComponentsService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ComponentsService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var ComponentsComponent = /** @class */ (function () {
        function ComponentsComponent() {
        }
        ComponentsComponent.prototype.ngOnInit = function () {
        };
        return ComponentsComponent;
    }());
    ComponentsComponent.ɵfac = function ComponentsComponent_Factory(t) { return new (t || ComponentsComponent)(); };
    ComponentsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ComponentsComponent, selectors: [["cpt-components"]], decls: 2, vars: 0, template: function ComponentsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " components works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ComponentsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'cpt-components',
                        template: "\n    <p>\n      components works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        ButtonComponent.prototype.ngOnInit = function () {
        };
        return ButtonComponent;
    }());
    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
    ButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["cpt-button"]], decls: 2, vars: 0, template: function ButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "button works!");
                i0.ɵɵelementEnd();
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'cpt-button',
                        templateUrl: './button.component.html',
                        styleUrls: ['./button.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var NavbarComponent = /** @class */ (function () {
        function NavbarComponent() {
        }
        NavbarComponent.prototype.ngOnInit = function () {
        };
        return NavbarComponent;
    }());
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
    NavbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["cpt-navbar"]], decls: 2, vars: 0, template: function NavbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "navbar works!");
                i0.ɵɵelementEnd();
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NavbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'cpt-navbar',
                        templateUrl: './navbar.component.html',
                        styleUrls: ['./navbar.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var ComponentsModule = /** @class */ (function () {
        function ComponentsModule() {
        }
        return ComponentsModule;
    }());
    ComponentsModule.ɵmod = i0.ɵɵdefineNgModule({ type: ComponentsModule });
    ComponentsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ComponentsModule, { declarations: [ComponentsComponent, ButtonComponent, NavbarComponent], exports: [ComponentsComponent, ButtonComponent, NavbarComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ComponentsModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [ComponentsComponent, ButtonComponent, NavbarComponent],
                        imports: [],
                        exports: [ComponentsComponent, ButtonComponent, NavbarComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of components
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ButtonComponent = ButtonComponent;
    exports.ComponentsComponent = ComponentsComponent;
    exports.ComponentsModule = ComponentsModule;
    exports.ComponentsService = ComponentsService;
    exports.NavbarComponent = NavbarComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components.umd.js.map
