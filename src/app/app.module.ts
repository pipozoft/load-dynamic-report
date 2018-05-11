import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DynamicHtmlLoaderComponent } from './dynamic-html-loader/dynamic-html-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicHtmlLoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
