import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit{

  constructor(
    private store: AuthService,
    private router: Router,
  ){}
  
  ngOnInit(): void {
    localStorage.setItem("paid","false")
    localStorage.setItem('isLoggedIn','false') 
    window.isLoggedIn = false;
    window.bookRoute = false;

  }
  removeHeader():Boolean{

    if(this.router.url === "/profile" || 
    this.router.url === "/confirm" ||
    this.router.url === "/booking" ||
    this.router.url === "/payment" ||
    this.router.url === "/invoice"
  ) return false

    return localStorage.getItem("notFound") === null
  }

}
