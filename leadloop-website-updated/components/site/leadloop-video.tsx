'use client'

import { Play } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

// Set to a direct .mp4 URL (or a file in /public, e.g. "/videos/leadloop.mp4") to enable playback.
const VIDEO_SRC = ''

export function LeadloopVideo() {
  const [playing, setPlaying] = useState(false)

  if (playing && VIDEO_SRC) {
    return (
      <video
        src={VIDEO_SRC}
        poster="/images/leadloop-poster.png"
        controls
        autoPlay
        playsInline
        className="aspect-video w-full bg-black"
      >
        <track kind="captions" />
      </video>
    )
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[#2a160a]">
      <Image
        src="/images/leadloop-poster.png"
        alt="Leadloop Extension side panel showing a captured lead with a score and a sync to CRM button"
        fill
        sizes="(min-width: 1104px) 1104px, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className="group absolute inset-0 flex flex-col items-center justify-center gap-4 text-white focus-visible:outline-none"
        aria-label="Play Leadloop Extension product video"
      >
        <span className="flex size-20 items-center justify-center rounded-full bg-primary shadow-[0_10px_40px_-6px_rgba(232,105,28,0.8)] ring-8 ring-white/15 transition-transform group-hover:scale-105 group-focus-visible:ring-white/60">
          <Play className="size-8 translate-x-0.5 fill-current" aria-hidden="true" />
        </span>
        <span className="rounded-full bg-black/40 px-3 py-1 text-sm font-medium backdrop-blur">
          {playing ? 'Product video coming soon' : 'Watch the 2-minute demo'}
        </span>
      </button>
    </div>
  )
}
