import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {NgAlertBoxComponent, NgAlertBoxService} from "ng-alert-box-popup";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  data: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: NonNullableFormBuilder,
    private fb1: NonNullableFormBuilder,
    private auth :AuthService,
    private alerts: NgAlertBoxService
  ){
    window.scrollTo(0,0);
  }
  

  logForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    pwd: ['', [Validators.required,Validators.minLength(6)]],
  });

  regForm = this.fb1.group({
    email: ['',[Validators.email,Validators.required]],
    pwd: ['',[Validators.required,Validators.minLength(6)]],
    cpwd: ['',[Validators.required,Validators.minLength(6)]],
  })

  get fCon(){
    return this.logForm['controls'];
  }

  get rCon(){
    return this.regForm['controls'];
  }

  get email() {
    return this.logForm.get('email');
  }

  get password() {
    return this.logForm.get('pwd');
  }
  
  

  login(){
    
    const { email, pwd } = this.logForm.value;

    if (!this.logForm.valid || !email || !pwd) {
      return;
    }
    this.data = history.state.package
    this.auth.login(email,pwd,this.data)
  }

  register(){
    
    const { email, pwd,cpwd } = this.regForm.value;

    if (!email || !pwd || !cpwd || pwd != cpwd) {
      alert("Confirm Password should same as Password")
      return;
    }

    this.auth.register(email,pwd)
  }

  logout(){
    this.auth.logout();
  }

  
}
