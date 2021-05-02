import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Playlist } from '../playlist';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlists: Playlist[];
  playlist = new Playlist();

  constructor(private playlistService: PlaylistService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllPlaylists();
  }

  getAllPlaylists() {
    this.playlistService.getAllPlaylists().subscribe(
      response => {
        this.playlists = response;
      },
      error => {
        console.log("Error occurred while getting all playlist..");
      }
    );
  }

  createPlaylist() {
    this.router.navigate(['create-playlist']);
  }

  updatePlaylist(id: number) {
    this.router.navigate(['update-playlist', id]);
  }

  deletePlaylist(id: number) {
    this.playlistService.deletePlaylistById(id).subscribe(
      Response => {
        this.getAllPlaylists();
      },
      error => {
        console.log("error occurred");
        console.log(error);
      }
    );
  }

  deleteSongById(songId: number, playlistId: number) {
    this.playlistService.deleteSongById(songId, playlistId).subscribe(
      Response => {
        console.log(Response);
        this.getAllPlaylists();
      },
      error => {
        console.log("error occurred");
        console.log(error);
      }
    );
  }
}
