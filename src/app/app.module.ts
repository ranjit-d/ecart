import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EcartModule } from './ecart/ecart/ecart.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './PF/shared/shared.component';
import { HomeModule } from './PF/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import{HttpClientModule} from '@angular/common/http';
import { LoginModule } from './login/login/login.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSliderModule,
    EcartModule,
    LoginModule,
    HomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent,]
  
})
export class AppModule { }
