import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Playlist, Song } from '../playlist';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {

  playlist = new Playlist();
  constructor(private playlistService: PlaylistService,
              private router: Router) { 
                if (!this.playlist.song || this.playlist.song.length === 0) {
                  this.playlist.song = [];
                  this.playlist.song.push(new Song());
                }
  }


  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    this.playlist = new Playlist();
  }

  onSubmit() {
    console.log(this.playlist);
    this.savePlaylist();
  }

  savePlaylist() {
    this.playlistService.createPlaylist(this.playlist).subscribe(
      Response => {
        console.log(Response);
        this.gotoPlaylistsPage();
      },
      error => {
        console.log("Error occurred in creating playlist..");
        console.log(error);
      }
    );
  }

  gotoPlaylistsPage() {
    this.router.navigate(['playlists']);
  }

  addSong() {
    this.playlist.song.push(new Song());
  }
}
