import { Component, OnInit } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Firestore,collection,addDoc,collectionData,doc,updateDoc,deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrl: './package.component.scss'
})
export class PackageComponent implements OnInit{
  data:any;

  constructor(
    private router: Router,
    private firestore: Firestore,
    private toastr: ToastrService
  ) {}

  


  // passing the dynamic package data
  selectData(box:any){
    this.data = box
    console.log(this.data)
    this.router.navigate(['/package-details/:id'], { state: { package: this.data } });
  }

  boxes = [
    {
      id: 1,
      imageUrl: '../../assets/images/a-1.jpg',
      title: '(Mysuru) Mysore Day Out - A Royal Experience Private Tour',
      description:'Design your own tour of Mysore with this private package from Bengaluru, which includes round trip transfers from and to your hotel.',
      likes: '25',
      price: 1500,
      addWish: false,
    },
    {
      id: 2,
      imageUrl: '../../assets/images/nrl.jpg',
      title: "(Norway) TROMSØ 'Where your Arctic adventure begins'",
      description:'Increase your chances of a sighting the Northern Lights by joining a guided excursion, especially if you’re only in Tromso briefly.',
      price: 1200,
      likes: '40',
      addWish: false,
    },
 
    {
      id: 3,
      imageUrl: '../../assets/images/ROME.jpg',
      title: 'Rome, Italy - A Cultural Gem Best Time: Throughout the year',
      description:'It’s easy to see why Rome’s one of the most-visited places on the planet: There’s history everywhere!',
      likes: '30',
      price: 2000,
      addWish: false,
    },
 
    {
      id: 4,
      imageUrl: '../../assets/images/srilanka.jpg',
      title: "Splendid Srilanka visit locations: Kandy/Nuwara Eliya/Colombo",
      description:'Known by a flotilla of aliases, the Resplendent Isle is one of gorgeous beaches, tea plantations and ancient cities. ',
      likes: '10',
      price: 12000,
      addWish: false,
     
    },
 
    {
      id: 5,
      imageUrl: '../../assets/images/EP.jpg',
      title: 'Fantastic France & Switzerland (3N Paris,1N Lyon,3N Zurich)',
      description:"from the fairy-tale châteaux of the Loire Valley to the lavender fields of Provence, and the French Riviera's celebrity-studded beaches.",
      likes: '25',
      price: 2300,
      addWish: false,
    },
    {
      id: 6,
      imageUrl: '../../assets/images/NETHER.jpg',
      title: 'Amsterdam, Netherlands - Heritage, Parks & Fresh Beer',
      description:'From its picturesque canals and bridges to its historic homes, Amsterdam could be considered straight out of a fairytale ',
      likes: '15',
      price: 3000,
      addWish: false,
    },
 
    {
      id: 7,
      imageUrl: '../../assets/images/ISTANBUL.jpg',
      title: 'Istanbul,Turkey Best Time: March to May',
      description:'Istanbul is a city that mixes old and new, and the best way to explore it is through its mahalles (neighborhoods). ',
      likes: '18',
      price: 10026,
      addWish: false,
    },
 
    {
      id: 8,
      imageUrl: '../../assets/images/dubai.jpg',
      title: 'Dubai Tour with 4 Nights Stay at Gevora Hotel (Tallest Hotel)',
      description:'Everything feels extra spectacular in Dubai—from the ultra-modern Burj Khalifa to the souks and malls filled with gold and jewelry vendors.',
      likes: '48',
      price: 8801,
      addWish: false,
    }
  ];


  filteredBoxes: any[] = [];
  likedBoxes: number[] = [];
  filterText: string = '';

  ngOnInit() {
    
    if(window.isLoggedIn == true){
      this.getData();
    }
    else{
      this.filteredBoxes = this.boxes;
    }
  }

  filterBoxes() {
    this.filteredBoxes = this.boxes.filter(box =>
      box.title.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  navigateToDetails(id: number) {
    if (id === 1) {
      this.router.navigate(['/package-details']);
    } else if (id === 2) {
      this.router.navigate(['/package-details-2']);
    }
  }

  // wishlist part
 
  // current wishlist status
  toggleWish(event:Event,box: any){
    // to stop the parent click method from routing to package details page
    // & toggle wishlist instead.
    event.stopPropagation();

    // if not logged in
    if(window.isLoggedIn == false){
      this.toastr.warning("Log In for WishList feature","Session Log",{closeButton:true})
      return;
    }

    let temp = box.addWish;

    this.updateData(box)

    // now converse the actual addWish condition as value is already toggled in the previous line
    if(temp == false){
      this.toastr.success("Added to WishList","Wishlist Log",{closeButton:true})
    }else{
      this.toastr.info("Removed from WishList","Wishlist Log",{closeButton:true})
    }
  }
  
  // reading wishlist data from firestore
  getData(){
    const dataInstance = collection(this.firestore,'wishlist')
    // manually extacting the id using idField
    collectionData(dataInstance,{ idField: 'idd' }).subscribe(val => {
    this.filteredBoxes = val
  },err => {
    this.toastr.error(err.message,"Error Log")
  })
}

  // updating the addWish flag on firebase to implement the wishlist toggle feature
  updateData(box:any){
    // path of the doc to be editted
    const docInstance = doc(this.firestore,'wishlist',box.idd)

    const up = {
      addWish: !box.addWish
    }

    updateDoc(docInstance,up).then(()=>{
      console.log("Data Updated")
    },err => {
      console.log(err.message)
    })
  }
  
}
