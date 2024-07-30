import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit{
  constructor(
    private router:Router
  ){
  }
  
  ngOnInit(): void {
    localStorage.setItem("notFound","true")
  }

  resolve(){
    localStorage.removeItem("notFound")
  }
}
