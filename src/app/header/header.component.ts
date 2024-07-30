import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router,private auth: AuthService) { }

    ngOnInit(): void {
        // Add JavaScript functionalities here
        // For example, you can add event listeners or initialization code
        const searchBtn = document.querySelector('#search-btn');
        const searchBar = document.querySelector('.search-bar-container');
        const formBtn = document.querySelector('#login-btn');
        const loginForm = document.querySelector('.login-form-container');
        const formClose = document.querySelector('#form-close');
        const menu = document.querySelector('#menu-bar');
        const navbar = document.querySelector('.navbar');
        const videoBtn = document.querySelectorAll('.vid-btn');

        window.onscroll = () => {
            searchBtn?.classList.remove('fa-times');
            searchBar?.classList.remove('active');
            menu?.classList.remove('fa-times');
            navbar?.classList.remove('active');
            loginForm?.classList.remove('active');
        }

        menu?.addEventListener('click', () => {
            menu?.classList.toggle('fa-times');
            navbar?.classList.toggle('active');
        });

        searchBtn?.addEventListener('click', () => {
            searchBtn?.classList.toggle('fa-times');
            searchBar?.classList.toggle('active');
        });

        formBtn?.addEventListener('click', () => {
            loginForm?.classList.add('active');
        });

        formClose?.addEventListener('click', () => {
            loginForm?.classList.remove('active');
        });

        videoBtn?.forEach(btn => {
            btn.addEventListener('click', () => {
                const activeControl = document.querySelector('.controls .active');
                activeControl?.classList.remove('active');
                btn.classList.add('active');
                const src = btn.getAttribute('data-src');
                const videoSlider = document.querySelector('#video-slider') as HTMLVideoElement;
                videoSlider?.setAttribute('src', src ?? '');
            });
        });
        // You can add more JavaScript functionalities as needed
    }

    logout(){
        this.auth.logout()
    }

}


