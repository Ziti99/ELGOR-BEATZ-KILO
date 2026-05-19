import { useState } from 'react';
import { FaTh, FaList, FaThLarge } from 'react-icons/fa';
import BeatCard from './BeatCard';
import Image from 'next/image';

interface Beat {
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
}

interface BeatsGridProps {
  beats: Beat[];
  onPlayPause: (index: number) => void;
  onLike: (index: number) => void;
  onAddToCart: (index: number) => void;
  playingIndex: number | null;
}

export default function BeatsGrid({ 
  beats, 
  onPlayPause, 
  onLike, 
  onAddToCart, 
  playingIndex 
}: BeatsGridProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'compact'>('grid');

  const viewModes = [
    { id: 'grid', icon: FaTh, label: 'Grid' },
    { id: 'list', icon: FaList, label: 'List' },
    { id: 'compact', icon: FaThLarge, label: 'Compact' }
  ] as const;

  return (
    <div className="space-y-6">
      {/* Header avec sélecteur de vue et compteur - responsive */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">All Beats</h3>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
            {beats.length} beats found
          </span>
        </div>
        
        {/* Sélecteur de vue - responsive */}
        <div className="flex items-center gap-1 sm:gap-2 bg-gray-100 rounded-lg p-1">
          {viewModes.map((mode) => {
            const Icon = mode.icon;
            return (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id)}
                className={`p-2 sm:p-2.5 rounded-md transition-all duration-200 flex items-center gap-1 sm:gap-2 ${
                  viewMode === mode.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <Icon className="text-sm sm:text-base" />
                <span className="hidden sm:inline text-sm font-medium">{mode.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grille de beats - responsive */}
      <div className={`
        ${viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'
          : viewMode === 'list'
          ? 'space-y-4 sm:space-y-6'
          : 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4'
        }
      `}>
        {beats.map((beat, index) => (
          <BeatCard
            key={beat.id}
            beat={beat}
            index={index}
            isPlaying={playingIndex === index}
            onPlayPause={onPlayPause}
            onLike={onLike}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {/* Message si aucun beat trouvé */}
      {beats.length === 0 && (
        <div className="text-center py-12 sm:py-20">
          <div className="text-6xl sm:text-8xl mb-4">🎵</div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">No beats found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}

// Composant spécialisé pour la vue liste
export function BeatsList({ 
  beats, 
  onPlayPause, 
  onLike, 
  onAddToCart, 
  playingIndex 
}: BeatsGridProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      {beats.map((beat, index) => (
        <div 
          key={beat.id}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row">
            {/* Image */}
            <div className="relative w-full sm:w-48 h-48 sm:h-32 flex-shrink-0">
              <Image
                src={beat.img}
                alt={beat.name}
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-lg transition-all duration-300 ${
                    playingIndex === index 
                      ? "bg-red-600 hover:bg-red-700 text-white" 
                      : "bg-white hover:bg-gray-100 text-gray-900"
                  }`}
                  onClick={() => onPlayPause(index)}
                >
                  {playingIndex === index ? '⏸️' : '▶️'}
                </button>
              </div>
            </div>
            
            {/* Contenu */}
            <div className="flex-1 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between h-full">
                <div className="flex-1 mb-4 sm:mb-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{beat.name}</h3>
                  <p className="text-gray-600 mb-3">{beat.artist}</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">{beat.genre}</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full">{beat.bpm} BPM</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full">{beat.key}</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">{beat.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold text-blue-600">${beat.price}</div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => onLike(index)}
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors duration-300"
                    >
                      ♡
                    </button>
                    <button 
                      onClick={() => onAddToCart(index)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 text-sm font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
