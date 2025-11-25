import { Component,EventEmitter,Input,Output, ViewChild, ViewChildren } from '@angular/core';
import { SongInterface } from '../data/SongInterface';

@Component({
  selector: 'app-song',
  imports: [],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {
  @Input({required: true}) song!: SongInterface;
  @Input() isTopSong: boolean = false;
  @Output() voteUp = new EventEmitter<number>();
  clickVoteUp() {
    this.voteUp.emit(this.song.id);
  }


  
}
