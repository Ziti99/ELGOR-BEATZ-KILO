import { useState } from 'react';
import Image from 'next/image';
import { FaPlay, FaPause, FaHeart, FaShoppingCart, FaClock } from 'react-icons/fa';

interface BeatCardProps {
  beat: {
    id: number;
    img: string;
    name: string;
    artist: string;
    genre: string;
    bpm: string;
    key: string;
    price: string;
    duration: string;
    isExclusive?: boolean;
    isTrending?: boolean;
  };
  index: number;
  isPlaying: boolean;
  onPlayPause: (index: number) => void;
  onLike: (index: number) => void;
  onAddToCart: (index: number) => void;
}

export default function BeatCard({ 
  beat, 
  index, 
  isPlaying, 
  onPlayPause, 
  onLike, 
  onAddToCart 
}: BeatCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    onLike(index);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(index);
  };

  return (
    <div className="group bg-black border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
      {/* Image container with enhanced overlay */}
      <div className="relative overflow-hidden bg-black">
        <Image 
          src={beat.img} 
          alt={beat.name} 
          width={400} 
          height={400} 
          className="w-full h-52 sm:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Enhanced badges with better positioning */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
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

        {/* Duration badge with enhanced design */}
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1 text-xs font-light tracking-wider uppercase flex items-center gap-1 border border-white/20">
          <FaClock className="text-xs" />
          {beat.duration}
        </div>
        
        {/* Enhanced play overlay with better animations */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <button
            className={`w-16 h-16 flex items-center justify-center border transition-all duration-300 ${
              isPlaying 
                ? "bg-white text-black border-white" 
                : "bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onPlayPause(index);
            }}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
          </button>
        </div>
      </div>
      
      {/* Content section with improved layout */}
      <div className="p-4 sm:p-5 lg:p-6 space-y-4">
        {/* Title and artist with better typography */}
        <div className="space-y-2">
          <h3 className="text-lg font-light text-white line-clamp-1 group-hover:text-white/80 transition-colors duration-300 tracking-tight">
            {beat.name}
          </h3>
          <p className="text-sm text-white/60 line-clamp-1 font-light">
            {beat.artist}
          </p>
        </div>
        
        {/* Enhanced metadata with better visual hierarchy */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="px-3 py-1 border border-white/20 text-white/70 text-xs font-light tracking-wider uppercase">
            {beat.genre}
          </span>
          <span className="text-xs text-white/50 font-light">
            {beat.bpm} BPM
          </span>
          <span className="text-xs text-white/50 font-light">
            {beat.key}
          </span>
        </div>
        
        {/* Price and actions with improved layout */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="text-xl font-light text-white">
            ${beat.price}
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              onClick={handleLike}
              className={`w-10 h-10 border flex items-center justify-center transition-all duration-300 ${
                isLiked
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
              }`}
            >
              <FaHeart className="text-xs" />
            </button>
            <button 
              onClick={handleAddToCart}
              className="px-4 py-2 bg-white text-black border border-white hover:bg-white/90 transition-all duration-300 text-xs font-light tracking-wider uppercase flex items-center gap-2"
            >
              <FaShoppingCart className="text-xs" />
              <span className="hidden sm:inline">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
