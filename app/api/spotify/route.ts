import { currentlyPlayingSong } from "lib/spotify";
import { NextRequest, NextResponse } from "next/server";
import { Spotify } from "./types";
export const dynamic = 'force-dynamic'
export async function GET(request: NextRequest) {
  const response = await currentlyPlayingSong();

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false }, {status: 200});
  }

  const song: Spotify = await response.json();

  if (song.item === null) {
    return NextResponse.json({ isPlaying: false }, {status: 200});
  }

  const isPlaying = song.is_playing;

  let title = song.item.name;
  // Remove the remastered notice at the end of the title if it exists
  if (title.includes("- Remastered")) {
    title = title.slice(0, title.indexOf("- Remastered") - 1)
  }

  const artist = song.item.artists.slice(0,2).map((_artist : {name: string}) => _artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;


  return NextResponse.json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  }, {
    status: 200
  });
}