
  export interface Track {
      trackNumber: number;
      trackName: string;
      trackLength: string;
      trackPrice: number;
  }

  export interface AlbumInfo {
      name: string;
      releaseDate: string;
      coverImage: string;
      tracks: Track[];
  }

  export interface Album {
      id: number;
      artist: string;
      album: AlbumInfo;
  }
