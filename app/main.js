"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var clients_component_1 = require("./pages/clients.component");
var sources_component_1 = require("./pages/sources.component");
var app_component_1 = require("./app.component");
exports.routes = [
    { path: '', redirectTo: '/clients', pathMatch: 'full' },
    { path: 'clients', component: clients_component_1.ClientsComponent },
    { path: 'sources', component: sources_component_1.SourcesComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            clients_component_1.ClientsComponent,
            sources_component_1.SourcesComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        imports: [
            http_1.NativeScriptHttpModule,
            nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(exports.routes)
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
platform_1.platformNativeScriptDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RDtBQUN6RCwwREFBMEU7QUFDMUUsa0RBQWlFO0FBQ2pFLHNEQUFxRTtBQUNyRSxnRkFBNEU7QUFDNUUsK0RBQTJEO0FBQzNELCtEQUEyRDtBQUMzRCxpREFBNkM7QUFHaEMsUUFBQSxNQUFNLEdBQUc7SUFDbEIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztJQUNyRCxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFDO0lBQzlDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUM7Q0FDakQsQ0FBQztBQWlCRixJQUFhLFNBQVM7SUFBdEI7SUFDQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURZLFNBQVM7SUFmckIsZUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWixvQ0FBZ0I7WUFDaEIsb0NBQWdCO1NBQ25CO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUN6QixPQUFPLEVBQUU7WUFDTCw2QkFBc0I7WUFDdEIsd0NBQWtCO1lBQ2xCLGlDQUF3QjtZQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsY0FBTSxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7S0FDOUIsQ0FBQztHQUNXLFNBQVMsQ0FDckI7QUFEWSw4QkFBUztBQUd0QixzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge3BsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pY30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEh0dHBNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQge0NsaWVudHNDb21wb25lbnR9IGZyb20gJy4vcGFnZXMvY2xpZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHtTb3VyY2VzQ29tcG9uZW50fSBmcm9tICcuL3BhZ2VzL3NvdXJjZXMuY29tcG9uZW50JztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcbiAgICB7cGF0aDogJycsIHJlZGlyZWN0VG86ICcvY2xpZW50cycsIHBhdGhNYXRjaDogJ2Z1bGwnfSxcbiAgICB7cGF0aDogJ2NsaWVudHMnLCBjb21wb25lbnQ6IENsaWVudHNDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnc291cmNlcycsIGNvbXBvbmVudDogU291cmNlc0NvbXBvbmVudH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgQ2xpZW50c0NvbXBvbmVudCxcbiAgICAgICAgU291cmNlc0NvbXBvbmVudFxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cblxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXX0=