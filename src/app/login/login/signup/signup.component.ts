import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform!: FormGroup<any>
  @Input()
  actionName:string='signin'
  constructor(private fb: FormBuilder,private login:LoginService) { }

  ngOnInit(): void {
    this.formstructure();
  }

  formstructure() {
    this.signupform = this.fb.group({
      "firstname": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("^[a-zA-Z]+$")]],
      "lastname": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("^[a-zA-Z]+$")]],
      "mobileno": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      "DOB": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      "emailid": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      "password": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      "confirmpassword": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      "isformaccepts":[false,[Validators.required]],
"address":this.fb.group({
  "line1":['',[Validators.required]],
  "line2":['',[]],
  "city":['',[]],
  "stage":['',[]],
  "zipcode":['',[Validators.required]],
})
})
    
  }

  showlist = {
    "firstname": "",
    "lastname": "",
    "mobileno": null,
    "DOB": null,
    "emailid": "",
    "password": "",
    "confirmpassword": "",
    "address": {
      "line1": "",
      "line2": "",
      "city": "",
      "state": "",
      "zipcode":null,


    }
  };
  get Firstname(){
return this.signupform.get('firstname')
  }

  onsubmit(){
    if(this.signupform.valid){
      this.login.registeruser(this.signupform)
    }
    console.log("formvalue",this.signupform.value)
  }
  // callsubmit(){
  //   this.signupform.value
  // }

}
