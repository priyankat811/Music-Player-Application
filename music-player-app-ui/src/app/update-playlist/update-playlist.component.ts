import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Playlist, Song } from '../playlist';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-update-playlist',
  templateUrl: './update-playlist.component.html',
  styleUrls: ['./update-playlist.component.css']
})
export class UpdatePlaylistComponent implements OnInit {

  playlist = new Playlist();
  id: number;

  constructor(private playlistService: PlaylistService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.playlistService.getPlaylistbyId(this.id).subscribe(
      Response => {
        console.log(Response);
        this.playlist = Response;
      },
      error => {
        console.log("Error occurred while fetching playlist details..");
        console.log(error);
      }
    );
  }

  onSubmit() {
    console.log(this.playlist);
    this.savePlaylist();
  }

  savePlaylist() {
    this.playlistService.updatePlaylist(this.id,this.playlist).subscribe(
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
