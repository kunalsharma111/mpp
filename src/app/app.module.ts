import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AswFormBuilderModule } from '@asoftwareworld/form-builder/form-builder';
import { AswPreviewTemplateModule } from '@asoftwareworld/form-builder/preview-template';
import { AswQrCodeModule } from '@asoftwareworld/qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AswFormBuilderModule,
    AswPreviewTemplateModule,
    AswQrCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
