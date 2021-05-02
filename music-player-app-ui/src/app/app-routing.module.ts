import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { UpdatePlaylistComponent } from './update-playlist/update-playlist.component';

const routes: Routes = [
  { path:"playlists", component: PlaylistsComponent},
  { path:"create-playlist", component: CreatePlaylistComponent},
  { path:"update-playlist/:id", component: UpdatePlaylistComponent},
  { path: "", redirectTo: "playlists", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
