import { Component,inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpSongService } from '../http-song.service';

@Component({
  selector: 'app-song-add',
  imports: [ReactiveFormsModule],
  templateUrl: './song-add.component.html',
  styleUrl: './song-add.component.css'
})
export class SongAddComponent {
[x: string]: any;

  fb = inject(FormBuilder);
  httpsongservice: HttpSongService = inject(HttpSongService);

  myForm: FormGroup = this.fb.group({
    title:"",
    artist: "",
    dateReleased: "",
    price: "",
    votes: ""
  });

  submitForm() {
    console.log(this.myForm.value);
    this.httpsongservice.create_song(this.myForm.value).subscribe(v=>console.log(v));
  }

}
