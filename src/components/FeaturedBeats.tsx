import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaPause, FaHeart, FaShoppingCart, FaArrowRight, FaClock } from "react-icons/fa";

interface FeaturedBeat {
  img: string;
  name: string;
  genre: string;
  bpm: string;
  key: string;
  price: string;
  duration: string;
  artist: string;
  isExclusive?: boolean;
  isTrending?: boolean;
}

interface FeaturedBeatsProps {
  beats: FeaturedBeat[];
  className?: string;
}

export default function FeaturedBeats({ beats, className = '' }: FeaturedBeatsProps) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [likedBeats, setLikedBeats] = useState<Set<number>>(new Set());

  const handlePlayPause = (index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
    }
  };

  const handleLike = (index: number) => {
    const newLikedBeats = new Set(likedBeats);
    if (newLikedBeats.has(index)) {
      newLikedBeats.delete(index);
    } else {
      newLikedBeats.add(index);
    }
    setLikedBeats(newLikedBeats);
  };

  const handleAddToCart = (index: number) => {
    // Logique pour ajouter au panier
    console.log(`Added ${beats[index].name} to cart`);
  };

  return (
    <section className={`py-20 bg-black ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white tracking-tight">
            Featured Beats
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Discover our latest and most popular productions, carefully curated for your next hit
          </p>
        </div>

        {/* Grille de beats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {beats.map((beat, index) => (
            <div key={index} className="group bg-black border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
              {/* Image du beat avec overlay */}
              <div className="relative overflow-hidden">
                <Image 
                  src={beat.img} 
                  alt={beat.name} 
                  width={300} 
                  height={300} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {beat.isExclusive && (
                    <span className="px-3 py-1 bg-white text-black text-xs font-light tracking-wider uppercase border border-white/20">
                      EXCLUSIVE
                    </span>
                  )}
                  {beat.isTrending && (
                    <span className="px-3 py-1 bg-white/10 text-white text-xs font-light tracking-wider uppercase border border-white/20 backdrop-blur-sm">
                      TRENDING
                    </span>
                  )}
                </div>

                {/* Badge de durée */}
                <div className="absolute top-3 right-3 bg-black/80 text-white px-3 py-1 text-xs font-light tracking-wider uppercase flex items-center gap-1 border border-white/20 backdrop-blur-sm">
                  <FaClock className="text-xs" />
                  {beat.duration}
                </div>
                
                {/* Overlay avec bouton play */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    className={`w-16 h-16 flex items-center justify-center border transition-all duration-300 ${
                      playingIndex === index 
                        ? "bg-white text-black border-white" 
                        : "bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
                    }`}
                    onClick={() => handlePlayPause(index)}
                    aria-label={playingIndex === index ? "Pause" : "Play"}
                  >
                    {playingIndex === index ? <FaPause /> : <FaPlay className="ml-1" />}
                  </button>
                </div>
              </div>
              
              {/* Informations du beat */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-light mb-1 text-white group-hover:text-white/80 transition-colors duration-300 tracking-tight">
                    {beat.name}
                  </h3>
                  <p className="text-sm text-white/60 font-light">{beat.artist}</p>
                </div>
                
                {/* Métadonnées */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-white/50 mb-4 font-light">
                  <span className="px-3 py-1 border border-white/20 text-white/70 uppercase tracking-wider">
                    {beat.genre}
                  </span>
                  <span className="flex items-center gap-1">
                    {beat.bpm} BPM
                  </span>
                  <span className="flex items-center gap-1">
                    Key: {beat.key}
                  </span>
                </div>
                
                {/* Prix et actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="text-xl font-light text-white">${beat.price}</div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleLike(index)}
                      className={`w-10 h-10 border flex items-center justify-center transition-all duration-300 ${
                        likedBeats.has(index)
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
                      }`}
                      aria-label="Like beat"
                    >
                      <FaHeart className="text-xs" />
                    </button>
                    <button 
                      onClick={() => handleAddToCart(index)}
                      className="px-4 py-2 bg-white text-black border border-white hover:bg-white/90 transition-all duration-300 text-xs font-light tracking-wider uppercase flex items-center gap-2"
                    >
                      <FaShoppingCart className="text-xs" />
                      Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
