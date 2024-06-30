export interface ICardMusic {
  url: string;
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
