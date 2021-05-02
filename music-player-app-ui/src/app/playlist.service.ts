import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from './playlist';

const API_URL = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private httpClient: HttpClient) { }

  getAllPlaylists(): Observable<Playlist[]> {
    return this.httpClient.get<Playlist[]>(`${API_URL}/playlists`);
  }

  createPlaylist(playlist : Playlist): Observable<Object> {
    console.log(playlist);
    return this.httpClient.post(`${API_URL}/playlist`, playlist);
  }

  getPlaylistbyId(playlistId): Observable<Playlist> {
    return this.httpClient.get<Playlist>(`${API_URL}/playlist/${playlistId}`);
  }

  updatePlaylist(playlistId: number, playlist: Playlist): Observable<Object> {
    return this.httpClient.put(`${API_URL}/playlist/${playlistId}`, playlist);
  }

  deletePlaylistById(playlistId: number): Observable<Object> {
    return this.httpClient.delete(`${API_URL}/playlist/${playlistId}`);
  }

  deleteSongById(songId: number, playlistId: number): Observable<Object> {
    return this.httpClient.delete(`${API_URL}/playlist/${playlistId}/song/${songId}`);
  }
}
