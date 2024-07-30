import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {
  

  userForm = new FormGroup({
    name: new FormControl('',[Validators.pattern('[A-Za-z]{1,12}[ ]?[A-Za-z]{0,8}'),Validators.required]),
    email: new FormControl('',[Validators.email,Validators.required]),
    phno: new FormControl('',[Validators.pattern('[6-9]{1}[0-9]{9}'),Validators.required]),
    query: new FormControl(''),
  })

  constructor(
    private fb: NonNullableFormBuilder,
    private fm: NonNullableFormBuilder,
    private modalService: NgbModal
  ) {}


  openForm() {
    let v = document.getElementById("myForm")
    if (v) {
      v.style.display = "block"
    }
  }

  closeForm() {
    let v = document.getElementById("myForm")
    if (v) {
      v.style.display = "none";
    }
  }

  get fCon(){
    return this.userForm['controls'];
  }

  onSubmit(modal: any): void{
    console.log(this.userForm);
    this.modalService.open(modal);
  }
}
