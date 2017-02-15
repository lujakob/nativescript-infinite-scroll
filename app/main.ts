import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,NativeScriptHttpModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}

platformNativeScriptDynamic().bootstrapModule(AppModule);
