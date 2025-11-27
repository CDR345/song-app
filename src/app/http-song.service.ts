import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SongInterface } from './data/songInterface';


@Injectable({
  providedIn: 'root'
})
export class HttpSongService {

  httpClient = inject(HttpClient)

  getAll(): Observable<SongInterface[]>{
    return this.httpClient.get<SongInterface[]>("http://localhost:8082/api/songs");
  }

  create_song(song: SongInterface): Observable<SongInterface>{
    return this.httpClient.post<SongInterface>("http://localhost:8082/api/songs", song);
  }
  
}
