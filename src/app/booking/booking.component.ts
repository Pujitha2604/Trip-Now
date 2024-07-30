import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit{
  data:any;

  constructor(private router:Router,private auth:AuthService){
    console.log(this.auth.check())
  }

  detForm = new FormGroup({
    fname : new FormControl('',[Validators.pattern('[A-Za-z]{1,20}'),Validators.required]),
    lname : new FormControl('',[Validators.pattern('[A-Za-z]{1,20}'),Validators.required]),
    email : new FormControl('',[Validators.email,Validators.required]),
    phno : new FormControl('',[Validators.pattern('[6-9]{1}[0-9]{9}'),Validators.required,Validators.maxLength(10)]),
    doj: new FormControl('',Validators.required),
    code : new FormControl(''),
  })
  
  ngOnInit(): void {
    this.data = history.state.package
  }

  get fCon(){
    return this.detForm['controls'];
  }


  onSubmit(){
    console.log(this.data)
    let fname = this.detForm.value.fname
    let lname = this.detForm.value.lname

    this.data['firstName'] = (fname) ? fname[0].toUpperCase() + fname.slice(1) :fname;
    this.data['lastName'] = (lname) ? lname[0].toUpperCase()+lname.slice(1) :lname;
    this.data['email'] = this.detForm.value.email
    this.data['phno'] = this.detForm.value.phno
    this.router.navigate(['/payment'], { state: { package: this.data } });
  }
}
