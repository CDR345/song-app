import { TestBed } from '@angular/core/testing';

import { HttpSongService } from './http-song.service';

describe('HttpMovieService', () => {
  let service: HttpSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
