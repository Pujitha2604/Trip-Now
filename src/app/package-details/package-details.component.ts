import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';
import { LowestPriceDialogComponent } from '../lowest-price-dialog/lowest-price-dialog.component';
import { RapComponent } from '../rap/rap.component';
import { CancelComponent } from '../cancel/cancel.component';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TripService, TripData } from '../services/trip.service';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrl: './package-details.component.scss'
})
export class PackageDetailsComponent implements OnInit {
  location?: string;
  boxId?: string;
  // boxIndex?: number;
  inpDate: Date;
  packageId?: number;
  ppl: number;
  data:any;
  minDate: string;
  maxDate: string;
  generatedDates: string[] = [];
  tripDataArray: TripData[];

  pushData(){
    console.log(this.data)
    this.data['date'] =  this.inpDate;
    this.data['count'] = this.ppl;
    this.data['payment'] = 'false';
    window.bookRoute = true;

    this.router.navigate(['/login'], { state: { package: this.data } });
  }

  // to get today's date in YYYY-MM-DD format
  getDate(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    let todaysDate = `${year}-${month}-${day}`;
    return todaysDate 
  }

  // check date's validation
  dateValid(){
    let curDate = this.inpDate.toISOString().split('T') [0]
    console.log(curDate)
    if(curDate > this.minDate && curDate < this.maxDate) return true
    return false
  }

  openLowestPriceDialog() {
    this.dialog.open(LowestPriceDialogComponent);
  }

  openrap() {
    this.dialog.open(RapComponent);
  }

  opencancel() {
    this.dialog.open(CancelComponent);
  }

  constructor(private route: ActivatedRoute, public dialog: MatDialog,private router:Router,private tripService: TripService) { 
    this.tripDataArray = tripService.tripDataArray;
    window.scrollTo(0,0);
    const today = new Date();
    today.setDate(today.getDate() + 1);
    // to fix the date field entered by the user
    this.minDate = today.toISOString().split('T') [0];
    this.maxDate = "2026-01-01"
  }

  selectedDiv: number | undefined;

  selectDiv(index: number) {
    this.selectedDiv = index;
  }

  openPhotoGallery(): void {
    const dialogRef = this.dialog.open(PhotoGalleryComponent, {
      width: '90%',
      height: '90%'
    });
  }

  ngOnInit() {
    this.data = history.state.package;
    // console.log(this.data)
    this.route.params.subscribe(params => {
      // this.boxIndex = +params['id'];
      this.packageId = +params['id'];
      this.location = params['location'];
      // Use the location parameter to fetch data or perform other operations
    });
  }
  // onTravelDateChange() {
  //   this.enteredDate = this.packageForm.get('travelDate')!.value;
  //   this.updateDates();
  // }
  
}
