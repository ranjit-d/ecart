import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[SignupComponent,SigninComponent]
})
export class LoginModule { }
