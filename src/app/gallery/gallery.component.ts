import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  boxes = [
    {
      id: 1,
      imageUrl: '../../assets/images/bike1.jpeg',
      // imageUrl: 'C:/Users/Relanto/Documents/TripNow/src/assets/images/bike1.jpeg',
      title: 'Srinagar - Tsomoriri - Manali',
      description: 'Discover the unparalleled beauty of Jammu, Kashmir, and Ladakh, a vast expanse in the Northern Himalayas, offering a unique terrain and moonscape.',
      likes: '25',
     
    },
    {
      id: 2,
      imageUrl: '../../assets/images/bike2.jpg',
      title: "Leh Ladakh Bike Trip 7N/8D",
      description: 'Embark on an awe-inspiring 8-day journey through Ladakh, starting with acclimatization in Leh. Explore local gems like Leh Market and Shanti Stupa.',
      likes: '240',
     
    },
 
    {
      id: 3,
      imageUrl: '../../assets/images/bike3.jpg',
      title: 'Spiti Bike Trip : 7 Nights/ 8 Days',
      description: 'Spiti Valley is a high altitude desert whose beauty unveils after a tough and tricky ride through the most challenging roads of Himalayas.',
      likes: '30',
     
    }
  ];
  filteredBoxes: any[] = [];
  filterText: string = '';

  constructor(private router: Router) {}


  ngOnInit() {
    this.filteredBoxes = this.boxes;
  }

  filterBoxes() {
    this.filteredBoxes = this.boxes.filter(box =>
      box.title.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  navigateToDetails(id: number) {
    if (id === 1) {
      this.router.navigate(['']);
    } else if (id === 2) {
      this.router.navigate(['/bike-trips-details']);
    }
  }
}
