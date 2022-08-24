import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
signinform!:FormGroup


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.creatloginform()
  }
  creatloginform(){
    this.signinform=this.fb.group({
      "emaild":['',[Validators.required]],
      "password":['',[Validators.required]]
    })
  }
  signin(){

  }

}
