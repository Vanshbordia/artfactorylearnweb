"use client"
import React from 'react'

export default function YoutubePlayer({ link }) {
    console.log(link)
    return (
<div className='w-full overflow-hidden'>
    Watch the video to Learn better
  <div className="aspect-video">
    <iframe
      className="w-full h-full"
      src="https://www.youtube-nocookie.com/embed/Z_DssjLeGa0?si=DF3dXPATWOsE_gOQ"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
</div>
    )
}
