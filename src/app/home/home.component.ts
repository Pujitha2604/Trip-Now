import { Component, OnInit } from '@angular/core';
declare const Swiper: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const videoBtns = document.querySelectorAll('.vid-btn');
    videoBtns.forEach((btn: any) => {
      btn.addEventListener('click', () => {
        const activeControl = document.querySelector('.controls .active');
        activeControl?.classList.remove('active');
        btn.classList.add('active');
        const src = btn.getAttribute('data-src');
        const videoSlider = document.querySelector('#video-slider') as HTMLVideoElement;
        if (videoSlider) {
          videoSlider.src = src || '';
        }
      });
    });

    const reviewSwiper = new Swiper(".review-slider", {
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    const brandSwiper = new Swiper(".brand-slider", {
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    });
  }

  // populating data dynamically
  boxes = [
    {
      id: 1,
      
    }
  ]

}
