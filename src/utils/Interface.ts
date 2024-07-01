export interface INavigation {
  navigate(page: string, params?: any): void;
  goBack(): void;
}

export interface ITrack {
  album: IAlbum;
  name: string;
  artist: IArtist;
  wiki: IWiki;
}

export interface IWiki {
  content: string;
}

export interface IAlbum {
  image: IImages[];
}

export interface ITracks {
  name: string;
  mbid: string;
  image: IImages[];
  artist: IArtist;
  listeners: string;
}

export interface IArtist {
  name: string;
}

export interface IImages {
  '#text': string;
  size: string;
}
