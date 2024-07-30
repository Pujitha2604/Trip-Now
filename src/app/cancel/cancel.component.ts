import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrl: './cancel.component.scss'
})
export class CancelComponent {
  @ViewChild('containsBox', { static: true }) containsBox!: ElementRef;
 
  closeBox() {
    this.containsBox.nativeElement.style.display = 'none';
  }
}
