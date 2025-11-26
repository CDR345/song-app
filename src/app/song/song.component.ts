import { Component,EventEmitter,Input,Output, ViewChild, ViewChildren } from '@angular/core';
import { SongInterface } from '../data/songInterface';

@Component({
  selector: 'app-song',
  imports: [],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {
  @Input({required: true}) song!: SongInterface;
  @Input() isTopSong: boolean = false;

 voteUp() {this.song.votes++;}
 voteDown(){ if(this.song.votes>=1)this.song.votes--;}
  
}

