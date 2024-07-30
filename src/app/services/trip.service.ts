import { Injectable } from '@angular/core';

export interface TripData {
  id: number;
  title: string;
  duration: string;
  lunch: string;
  pickup: string;
  note: string;
}

@Injectable({
  providedIn: 'root'
})
export class TripService {
  tripDataArray: TripData[] = [
    {
      id: 0,
      title: '(Mysuru) Mysore Day Out - A Royal Experience Private Tour from Bangalore',
      duration: '12 hours',
      lunch: 'Included',
      pickup: 'Included',
      note: '(No additional taxes or booking fees)'
    },
    {
      id: 1,
      title: 'Unveiling the Art of Mysore Silk: A Journey from Bangalore to Explore Silk Weaving and the Magnificent Palace',
      duration: '12 hours',
      lunch: 'Included',
      pickup: 'Included',
      note: '(No additional taxes or booking fees)'
    }
    
  ];

  tripDataArray2: TripData[] = [
    {
      id: 0,
      title: 'A Trip into the Country Side Beaty of Norway',
      duration: '4 Days',
      lunch: 'Included',
      pickup: 'Included',
      note: '(No additional taxes or booking fees)'
    },
    {
      id: 1,
      title: 'Architecture and The History of the Lost Country',
      duration: '4 Days',
      lunch: 'Included',
      pickup: 'Included',
      note: '(No additional taxes or booking fees)'
    }
    
  ];
  constructor() { }
}
