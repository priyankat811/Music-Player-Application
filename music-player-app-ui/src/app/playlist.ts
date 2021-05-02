export class Playlist {
    id: number;
    playlistName: string;
    song: Song[] = [];
    constructor() {
        this.song.push(new Song());
    }
}

export class Song {
    songTitle: string;
    singer: string;
}