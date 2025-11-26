import { Component, inject, ViewChild, ViewChildren } from '@angular/core';
import { SongComponent } from '../song/song.component';
import { CommonModule } from '@angular/common';
import { SongService } from '../song.service';

@Component({
  selector: 'app-song-list',
  imports: [SongComponent,CommonModule],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})

export class SongListComponent {

songService = inject(SongService)
songs = this.songService.songs;

            
 }


