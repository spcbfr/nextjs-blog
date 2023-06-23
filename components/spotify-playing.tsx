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
    <div className="bg-emerald-900 hover:bg-emerald-800 transition-all items-center text-emerald-100 p-2 w-fit rounded-md flex flex-row">{children}</div>
  )
}
export default function Spotify(){
    const {data, error, isLoading}: swr  = useSWR("/api/spotify", fetcher)
    if (error) {
      return (
          <SpotifyWrapper >
            <div style={{backgroundImage: "url('/spotify.jpg')"}} className="md:w-12 md:h-12 h-10 w-10 bg-cover rounded-lg" />
            <div className="inline ms-2">
              <h1 className="text-left">Failed to load</h1>
              <h2 className="text-left font-medium sm:text-base text-sm">Something went wrong</h2>
            </div>
          </SpotifyWrapper>)
    }
    if (isLoading) { 
      return (
        <div className="bg-emerald-900 rounded-lg p-2 flex flex-row">
          <div className="md:h-12 md:w-12 h-10 w-10 rounded-lg animate-pulse bg-emerald-600"></div>
          <div className="space-y-3 mt-[2px]">
            <div className="w-28 h-[14px] ml-2 rounded-md bg-emerald-600 animate-pulse"></div>
            <div className="w-12 h-[14px] ml-2 rounded-md bg-emerald-600 animate-pulse"></div>
          </div>
        </div>
      )
    }
    if(data.isPlaying){
      return (
          <SpotifyWrapper >
            <div style={{backgroundImage: `url(${data.albumImageUrl})`}}  className="md:w-12 md:h-12 h-10 w-10 bg-cover rounded-lg" />
            <div className="inline text-left ms-2">
              <h1><a href={data.songUrl} className="" target="_blank">{data.title}</a></h1>
              <h2 className="font-medium sm:text-base text-sm">{data.artist}</h2>
            </div>
          </SpotifyWrapper>

      )
    } else {
      return (
          <SpotifyWrapper >
            <div style={{backgroundImage: "url('/spotify.jpg')"}} className="md:w-12 md:h-12 h-10 w-10 bg-cover rounded-lg" />
            <div className="inline ms-2">
              <h1 className="text-left">Not Listening</h1>
              <h2 className="text-left font-medium sm:text-base text-sm">Yusuf's Spotify</h2>
            </div>
          </SpotifyWrapper>)
    }
}
