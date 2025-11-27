import { Injectable } from '@angular/core';
import { SongInterface } from './data/songInterface';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  songs : SongInterface[]  = [
      {id: 1, title:"Billie Jean", artist: "Michael Jackson", dateReleased: new Date(1983,1,2), price: 10.99, votes:0},
      {id: 2, title:"I don't wanna miss a thing", artist: "Aerosmith", dateReleased: new Date(1998,5,2), price: 9.99, votes:0},
      {id: 3, title:"My heart will go on", artist: "Celine Dion", dateReleased: new Date(1997,11,19), price: 7.99, votes:0},
      {id: 4, title:"New song is here", artist: "Good Singer", dateReleased: new Date(1997,11,19), price: 9.99, votes:0}
    ];
}
