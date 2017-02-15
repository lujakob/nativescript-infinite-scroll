import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {platformNativeScriptDynamic} from "nativescript-angular/platform";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {ClientsComponent} from './pages/clients.component';
import {SourcesComponent} from './pages/sources.component';
import {AppComponent} from "./app.component";


export const routes = [
    {path: '', redirectTo: '/clients', pathMatch: 'full'},
    {path: 'clients', component: ClientsComponent},
    {path: 'sources', component: SourcesComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        ClientsComponent,
        SourcesComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptHttpModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}

platformNativeScriptDynamic().bootstrapModule(AppModule);
