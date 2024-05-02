import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importamos HttpClient (si recuerdan para que lo usamos ¿verdad?)
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //lo ponemos aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
