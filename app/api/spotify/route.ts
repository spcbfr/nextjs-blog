import { currentlyPlayingSong } from "lib/spotify";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = 'force-dynamic'
export async function GET(request: NextRequest) {
  const response = await currentlyPlayingSong();

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false }, {status: 200});
  }

  const song = await response.json();

  if (song.item === null) {
    return NextResponse.json({ isPlaying: false }, {status: 200});
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist : {name: string}) => _artist.name).join(", ");
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