import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';

@Component({
  selector: 'app-root',
  imports: [SongListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = ' Melody songs';
}
