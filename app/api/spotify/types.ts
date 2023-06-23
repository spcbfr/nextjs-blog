export type Spotify = {
    item: item
    is_playing: boolean
}
export type item = {
    album:             Album;
    artists:           SpotifyArtist[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     ExternalUrls;
    href:              string;
    id:                string;
    is_playable:       boolean;
    linked_from:       LinkedFrom;
    restrictions:      Restrictions;
    name:              string;
    popularity:        number;
    preview_url:       string;
    track_number:      number;
    type:              string;
    uri:               string;
    is_local:          boolean;
}

export type Album = {
    album_type:             string;
    total_tracks:           number;
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           string;
    release_date_precision: string;
    restrictions:           Restrictions;
    type:                   string;
    uri:                    string;
    copyrights:             Copyright[];
    external_ids:           ExternalIDS;
    genres:                 string[];
    label:                  string;
    popularity:             number;
    album_group:            string;
    artists:                AlbumArtist[];
}

export type AlbumArtist = {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    name:          string;
    type:          string;
    uri:           string;
}

export type ExternalUrls = {
    spotify: string;
}

export type Copyright = {
    text: string;
    type: string;
}

export type ExternalIDS = {
    isrc: string;
    ean:  string;
    upc:  string;
}

export type Image = {
    url:    string;
    height: number;
    width:  number;
}

export type Restrictions = {
    reason: string;
}

export type SpotifyArtist = {
    external_urls: ExternalUrls;
    followers:     Followers;
    genres:        string[];
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    popularity:    number;
    type:          string;
    uri:           string;
}

export type Followers = {
    href:  string;
    total: number;
}

export type LinkedFrom = {
}
