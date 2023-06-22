"use client"
import { ReactNode } from "react";
import useSWR from "swr"
const fetcher = (url: string) => fetch(url).then((res) => res.json());
type swr = {
  data: {
    album: string;
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
  },
  isLoading: any,
  error: any
};
function SpotifyWrapper({children}: {children: ReactNode}){
  return (
    <div className="bg-emerald-900 hover:bg-emerald-800 transition-all text-emerald-100 p-2 w-fit rounded-md flex flex-row">{children}</div>
  )
}
export default function Spotify(){
    const {data, error, isLoading}: swr  = useSWR("/api/spotify", fetcher)
    if (error) return <SpotifyWrapper>failed to load</SpotifyWrapper>
    if (isLoading) return <SpotifyWrapper>loading...</SpotifyWrapper>
    if(data.isPlaying){
      return (
          <SpotifyWrapper >
            <div style={{backgroundImage: `url(${data.albumImageUrl})`}}  className="w-12 h-12 bg-cover rounded-md" />
            <div className="inline ms-2">
              <h1><a href={data.songUrl} target="_blank">{data.title}</a></h1>
              <h2 className="text-left font-medium">{data.artist}</h2>
            </div>
          </SpotifyWrapper>
      )
    } else {
      return (
          <SpotifyWrapper>
            <h1 className="font-bold">Not Listening on Spotify</h1>
          </SpotifyWrapper>
      )
    }
}