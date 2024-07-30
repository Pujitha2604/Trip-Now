import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, NonNullableFormBuilder, } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements OnInit{
  heroForm: FormGroup

  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl(''),
  });

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      alterEgo: new FormControl(''),
      power: new FormControl('', Validators.required),
    });
  }
  
  get firstName() {
    return this.profileForm.get('firstName');
  }
  
  get power() {
    return this.heroForm.get('power');
  }

  get fCon(): any {
    return this.profileForm['controls'];
 }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
