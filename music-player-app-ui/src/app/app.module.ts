import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { UpdatePlaylistComponent } from './update-playlist/update-playlist.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    CreatePlaylistComponent,
    UpdatePlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
