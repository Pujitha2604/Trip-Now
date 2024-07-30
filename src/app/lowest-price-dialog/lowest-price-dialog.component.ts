import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lowest-price-dialog',
  templateUrl: './lowest-price-dialog.component.html',
  styleUrl: './lowest-price-dialog.component.scss'
})
export class LowestPriceDialogComponent {
  @ViewChild('containsBox', { static: true }) containsBox!: ElementRef;
 
  closeBox() {
    this.containsBox.nativeElement.style.display = 'none';
  }
}
