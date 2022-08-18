import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EcartModule } from './ecart/ecart/ecart.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EcartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
