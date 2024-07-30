import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireauth : AngularFireAuth,
    private router: Router,
    private toastr: ToastrService
  ) {}

  // login method
  login(email: string,password: string,data:any){
    this.fireauth.signInWithEmailAndPassword(email,password).then(() => {
      localStorage.setItem('isLoggedIn','true')
      window.isLoggedIn = true
      console.log(window.bookRoute)
      if(window.bookRoute === true){
        this.router.navigate(['/booking'], { state: { package: data } });
        window.bookRoute = false;
      }
      else
        this.router.navigate(['/'])

      this.toastr.success("Login Successful","Session Log")
    },err => {
      // alert(err.message)
      console.log(err.code)
      let t = err.code
      if(t === "auth/email-already-in-use") this.toastr.error("Email Already Exists","Error Log")
      if(t === "auth/invalid-credential") this.toastr.error("Invalid Credentials","Error Log")
      if(t === "auth/invalid-password") this.toastr.error("Minimum Password Length: 6","Error Log")
      // this.router.navigate(['/login'])
    })
  }

  // register method

  register(email:string, password: string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(() => {
      // alert('Successful Login')
      this.toastr.success("User Registered","Session Log")
      // this.router.navigate(['/login'])
    },err => {
      // alert(err.message)
      console.log(err.code)
      let t = err.code
      if(t === "auth/email-already-in-use") this.toastr.error("Email Already Exists","Error Log")
        if(t === "auth/invalid-credential") this.toastr.error("Invalid Credentials","Error Log")
        if(t === "auth/invalid-password") this.toastr.error("Minimum Password Length: 6","Error Log")
      // this.router.navigate(['/login'])
    })
  }

  // check if user is signedIn or not
  check(){
    var tag = false
    this.fireauth.onAuthStateChanged(function(user){
      if(user){
        tag = true
      }else{
        tag = false
      }
    })
    return tag
  }

  // signout method
  logout(){
    this.fireauth.signOut().then(() => {
      localStorage.setItem('isLoggedIn','false')
      window.isLoggedIn = false
      this.router.navigate(['/'])
      this.toastr.warning("User Logged Out!","Session Log")
    },err => {
      this.toastr.error(err.message,"Error Log")
    })
  }
}
