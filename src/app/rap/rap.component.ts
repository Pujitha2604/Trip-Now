import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rap',
  templateUrl: './rap.component.html',
  styleUrl: './rap.component.scss'
})
export class RapComponent {
  showBox: boolean = true;
  @ViewChild('containsBox', { static: true }) containsBox!: ElementRef;
 
  closeBox() {
    this.containsBox.nativeElement.style.display = 'none';
  }
}
