import { Component, inject, ViewChild, ViewChildren } from '@angular/core';
import { SongComponent } from '../song/song.component';
import { CommonModule } from '@angular/common';
import { SongService } from '../song.service';
import { HttpSongService } from '../http-song.service';
import { SongInterface } from '../data/songInterface';
import { SongAddComponent } from "../song-add/song-add.component";

@Component({
  selector: 'app-song-list',
  imports: [SongComponent, CommonModule, SongAddComponent],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})

export class SongListComponent {

//songService = inject(SongService)
//songs = this.songService.songs;

  httpSongService = inject(HttpSongService)
    songs: SongInterface[] = []

    constructor(){
      this.httpSongService.getAll().subscribe(m => this.songs = m)
    }
            
 }


