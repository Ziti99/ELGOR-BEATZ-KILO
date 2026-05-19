'use client';

import { useState } from 'react';
import { FaPlay, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import Reveal from '@/components/Reveal';

interface Production {
  id: number;
  title: string;
  artist: string;
  youtubeId: string;
  thumbnail?: string;
  description?: string;
  year?: string;
}

const extractYouTubeId = (urlOrId: string): string => {
  if (!urlOrId) return '';

  const trimmed = urlOrId.trim();
  try {
    if (trimmed.includes('youtube.com') || trimmed.includes('youtu.be')) {
      const u = new URL(trimmed.startsWith('http') ? trimmed : `https://${trimmed}`);
      const v = u.searchParams.get('v');
      if (v && v.length === 11) return v;
      const path = u.pathname.replace(/^\/+/, '');
      if (u.hostname.includes('youtu.be') && path.length >= 11) {
        return path.slice(0, 11);
      }
      const embed = path.match(/^embed\/([\w-]{11})/);
      if (embed) return embed[1];
    }
  } catch {
    /* fallback regex ci-dessous */
  }

  if (!trimmed.includes('youtube.com') && !trimmed.includes('youtu.be')) {
    return trimmed.length === 11 ? trimmed : '';
  }

  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = trimmed.match(regExp);
  return match && match[2].length === 11 ? match[2] : '';
};

/** Lien canon ; extractYouTubeId accepte aussi l’URL complète avec playlist */
const YOUTUBE_OKULU =
  'https://www.youtube.com/watch?v=eAJ9w23GEM4';

const productions: Production[] = [
  {
    id: 1,
    title: 'Tantine',
    artist: 'WAZA',
    youtubeId: 'QtcD5S3ncls',
    description: 'Production musicale pour WAZA - Une collaboration qui allie énergie et émotion',
    year: '2024',
  },
  {
    id: 2,
    title: 'OKULU',
    artist: "L'Oiseau Rare feat. Didi B Kiff No Beat",
    youtubeId: YOUTUBE_OKULU,
    description:
      "Clip officiel — L'Oiseau Rare · feat. Didi B Kiff No Beat TV (vidéo YouTube officielle).",
    year: '2024',
  },
  {
    id: 3,
    title: "L'Oiseau Rare",
    artist: 'Ngoze Sisia',
    youtubeId: 'gRPutMSdbiU',
    description: "Production pour Ngoze Sisia - Fusion de styles et d'influences",
    year: '2024',
  },
  {
    id: 4,
    title: 'Donzer',
    artist: 'Ngoze Sisia',
    youtubeId: YOUTUBE_OKULU,
    description:
      'Production pour Ngoze Sisia — remplacez ce lien par le clip officiel « Donzer » lorsque disponible.',
    year: '2024',
  },
  {
    id: 5,
    title: 'Wololo',
    artist: "L'Oiseau Rare",
    youtubeId: YOUTUBE_OKULU,
    description:
      "Production pour L'Oiseau Rare — remplacez par le clip « Wololo » lorsque disponible.",
    year: '2024',
  },
  {
    id: 6,
    title: 'Niamatos',
    artist: "L'Oiseau Rare",
    youtubeId: YOUTUBE_OKULU,
    description:
      "Production pour L'Oiseau Rare — remplacez par le clip « Niamatos » lorsque disponible.",
    year: '2024',
  },
];

export default function ProductionsSection() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const getYouTubeThumbnail = (urlOrId: string) => {
    const videoId = extractYouTubeId(urlOrId);
    if (!videoId) return '/Highlights/IMG_2050.JPEG';
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const getYouTubeUrl = (urlOrId: string) => {
    const videoId = extractYouTubeId(urlOrId);
    if (!videoId) return '#';
    return `https://www.youtube.com/watch?v=${videoId}`;
  };

  const getYouTubeEmbedUrl = (urlOrId: string) => {
    const videoId = extractYouTubeId(urlOrId);
    if (!videoId) return '';
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  };

  const handleVideoClick = (production: Production, e: React.MouseEvent) => {
    e.stopPropagation();
    if (production.youtubeId) {
      const videoId = extractYouTubeId(production.youtubeId);
      if (playingVideoId === videoId) {
        setPlayingVideoId(null);
      } else {
        setPlayingVideoId(videoId);
      }
    }
  };

  return (
    <section className="relative py-40 px-4 sm:px-6 lg:px-8 border-t border-stone-900/[0.07] bg-gradient-to-b from-cream-muted/50 via-cream to-cream-paper/40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_52%_at_82%_12%,rgba(201,162,39,0.06),transparent),radial-gradient(ellipse_55%_42%_at_10%_88%,rgba(107,33,168,0.05),transparent)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <>
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-16 bg-gradient-to-r from-foil/70 via-accent-copper/45 to-transparent" />
            <span className="text-[10px] font-mono uppercase tracking-[0.32em] text-stone-500">
              Réalisations
            </span>
          </div>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl font-normal tracking-tight leading-[0.96] mb-8 text-ink [text-shadow:0_1px_0_rgba(255,253,249,0.85)]">
            Productions
            <br />
            <span className="bg-gradient-to-r from-accent-copper via-foil to-[#7c2d12] bg-clip-text text-transparent">
              notables
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl font-light leading-relaxed">
            Collaborations et projets où la précision technique rencontre l&apos;émotion brute du son.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {productions.map((production) => (
            <div
              key={production.id}
              className={`group relative rounded-2xl overflow-hidden bg-cream-paper ring-1 ring-stone-900/[0.06] shadow-lux hover:shadow-lux-hover hover:ring-foil/25 transition-all duration-500 ${
                production.youtubeId ? 'cursor-pointer' : 'cursor-default'
              }`}
              onClick={(e) => production.youtubeId && handleVideoClick(production, e)}
            >
              <div className="relative aspect-video bg-espresso overflow-hidden">
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,253,249,0.06)] pointer-events-none z-[5]" />
                {production.youtubeId && playingVideoId === extractYouTubeId(production.youtubeId) ? (
                  <iframe
                    src={getYouTubeEmbedUrl(production.youtubeId)}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`${production.artist} - ${production.title}`}
                  />
                ) : (
                  <>
                    {production.youtubeId ? (
                      <Image
                        src={getYouTubeThumbnail(production.youtubeId)}
                        alt={`${production.artist} - ${production.title}`}
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = production.thumbnail || '/Highlights/IMG_2050.JPEG';
                        }}
                      />
                    ) : production.thumbnail ? (
                      <Image
                        src={production.thumbnail}
                        alt={`${production.artist} - ${production.title}`}
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-cream-deep to-stone-300 flex items-center justify-center">
                        <FaYoutube className="text-6xl text-stone-400/80" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent group-hover:from-ink/35 transition-all duration-500" />

                    {production.youtubeId && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-[4.5rem] h-[4.5rem] rounded-full border-2 border-cream/95 ring-2 ring-foil/35 flex items-center justify-center bg-espresso/65 backdrop-blur-md group-hover:scale-110 transition-transform duration-500 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.45)]">
                          <FaPlay className="text-cream text-2xl ml-1" />
                        </div>
                      </div>
                    )}

                    {production.youtubeId && (
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-700/92 backdrop-blur-sm border border-white/15 shadow-lg">
                          <FaYoutube className="text-cream text-sm" />
                          <span className="text-[10px] text-cream font-mono uppercase tracking-[0.18em]">
                            YouTube
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="p-6 sm:p-7 bg-gradient-to-b from-cream-paper/98 to-cream-muted/25 border-t border-stone-900/[0.05]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl font-normal mb-1 text-ink group-hover:text-accent-copper transition-colors duration-300 truncate tracking-tight">
                      {production.title}
                    </h3>
                    <p className="text-base text-stone-600 font-light truncate">{production.artist}</p>
                  </div>
                  {production.year && (
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 ml-2 flex-shrink-0 px-2 py-1 rounded-md border border-stone-900/[0.06] bg-cream-paper/80">
                      {production.year}
                    </span>
                  )}
                </div>

                {production.description && (
                  <p className="text-stone-500 text-xs font-light leading-relaxed mb-3 line-clamp-2">
                    {production.description}
                  </p>
                )}

                <div className="flex items-center justify-between">
                  {production.youtubeId ? (
                    <>
                      <div className="flex items-center gap-2 text-stone-500 group-hover:text-ink transition-colors duration-300 text-[10px] font-mono uppercase tracking-[0.2em]">
                        <FaPlay className="text-xs" />
                        <span>Lire l&apos;extrait</span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(getYouTubeUrl(production.youtubeId), '_blank');
                        }}
                        className="flex items-center gap-1 text-stone-400 hover:text-accent-copper transition-colors duration-300 text-xs"
                        title="Ouvrir sur YouTube"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                      </button>
                    </>
                  ) : (
                    <div className="text-xs text-stone-400 italic">Lien YouTube à venir</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-16 border-t border-stone-900/10">
          <p className="text-stone-600 mb-8 text-xl font-display italic">
            Un projet en tête ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-14 py-5 rounded-sm border border-stone-900/[0.12] text-ink font-mono tracking-[0.2em] uppercase text-xs hover:border-foil/40 hover:bg-cream-paper hover:shadow-lux transition-all duration-500 group touch-manipulation ring-1 ring-transparent hover:ring-foil/15 bg-cream-paper/60 backdrop-blur-sm"
          >
            Discutons de votre projet
            <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
          </>
        </Reveal>
      </div>
    </section>
  );
}
