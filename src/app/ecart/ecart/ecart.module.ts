import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from 'src/app/login/login/login.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginModule
  ],exports:[HeaderComponent,FooterComponent,]
})
export class EcartModule { }
