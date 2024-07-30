import { Component, OnInit } from '@angular/core';
import { Firestore,collection,addDoc,collectionData,doc,updateDoc,deleteDoc } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss'
})
export class ConfirmComponent implements OnInit{
  wish: Observable<any>;

  constructor(
    private firestore: Firestore,
    private toastr: ToastrService
  ){}

  data:any = history.state.package

  ngOnInit(): void {
      this.addData(this.data)
      localStorage.setItem("paid","false")
  }

  // booking list firestore backend
  addData(f:any){

    // adding data to firestore
    const dataInstance = collection(this.firestore,'bookingList')
    addDoc(dataInstance,f).then(() => {
      // alert('Data Saved Successfully')
      this.toastr.success
      
      ("Added to BookingList","BookingList Log")
    },err => {
      // alert(err.message)
      this.toastr.error(err.message,"Error Log")
    })
  }
}
