"use client"
import { Globe, RedditLogo, TwitterLogo } from "@phosphor-icons/react";

export default function SocialMediaIcon({site, size}: {site: string, size: number}){
    if ( site == "twitter") return <TwitterLogo weight="fill" color="#1DA1F2" size={size}/>
    else if ( site == "reddit") return <RedditLogo color="#FF4300" weight="fill" size={size}/>
    else return <Globe weight="fill" color="gray" size={size}/>
}