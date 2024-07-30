import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {

  images!: GalleryItem[];

  constructor(public dialogRef: MatDialogRef<PhotoGalleryComponent>) { }

  ngOnInit() {
    this.images = [
      new ImageItem({ src: '../../assets/images/a-4.jpg', thumb: '../../assets/images/a-4.jpg' }),
      new ImageItem({ src: '../../assets/images/a-5.jpg', thumb: '../../assets/images/a-5.jpg' }),
      new ImageItem({ src: '../../assets/images/a-6.jpg', thumb: '../../assets/images/a-7.jpg' }),
      new ImageItem({ src: '../../assets/images/a-1.jpg', thumb: '../../assets/images/a-8.jpg' }),
      new ImageItem({ src: '../../assets/images/a-2.jpg', thumb: '../../assets/images/a-9.jpg' }),
      new ImageItem({ src: '../../assets/images/a-5.jpg', thumb: '../../assets/images/a-10.jpg' }),
      new ImageItem({ src: '../../assets/images/a-6.jpg', thumb: '../../assets/images/a-11.jpg' }),
      new ImageItem({ src: '../../assets/images/a-7.jpg', thumb: '../../assets/images/a-12.jpg' }),
      new ImageItem({ src: '../../assets/images/a-8.jpg', thumb: '../../assets/images/a-13.jpg' }),
      new ImageItem({ src: '../../assets/images/a-9.jpg', thumb: '../../assets/images/a-14.jpg' }),
      new ImageItem({ src: '../../assets/images/a-10.jpg', thumb: '../../assets/images/a-15.jpg' }),
      new ImageItem({ src: '../../assets/images/a-12.jpg', thumb: '../../assets/images/a-16.jpg' }),
      new ImageItem({ src: '../../assets/images/a-11.jpg', thumb: '../../assets/images/a-1.jpg' }),
      new ImageItem({ src: '../../assets/images/a-12.jpg', thumb: '../../assets/images/a-2.jpg' })
      // Add more images
    ];
  }

  closeGallery(): void {
    this.dialogRef.close();
  }

  image = [
    {
      imageUrl: '../../assets/images/a-1.jpg',
      title: 'All photos',
      num: '(299)'
    },
    {
      imageUrl: '../../assets/images/a-1.jpg',
      title: 'Mysuru Palace Operator',
      num: '(26)'
    },
    {
      imageUrl: '../../assets/images/a-17.jpg',
      title: 'Traveller',
      num: '(263)'
    }
  ];

}
