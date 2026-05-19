import { useState } from "react";
import BeatCard from "./BeatCard";
import SearchBar from "./SearchBar";
import FilterSidebar from "./FilterSidebar";
import { FaFilter, FaTh, FaList, FaThLarge } from "react-icons/fa";

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

interface BeatsWithFiltersProps {
  beats: Beat[];
  onPlayPause: (index: number) => void;
  onLike: (index: number) => void;
  onAddToCart: (index: number) => void;
  playingIndex: number | null;
  className?: string;
}

type ViewMode = 'grid' | 'list' | 'compact';

export default function BeatsWithFilters({
  beats,
  onPlayPause,
  onLike,
  onAddToCart,
  playingIndex,
  className = ''
}: BeatsWithFiltersProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const viewModeConfig = {
    grid: {
      container: "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
      icon: FaTh,
      label: "Grid"
    },
    list: {
      container: "space-y-4",
      icon: FaList,
      label: "List"
    },
    compact: {
      container: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
      icon: FaThLarge,
      label: "Compact"
    }
  };

  const currentConfig = viewModeConfig[viewMode];

  // Filtrage des beats
  const filteredBeats = beats.filter(beat => {
    const matchesSearch = beat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         beat.genre.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "All" || beat.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const genres = ["All", ...Array.from(new Set(beats.map(beat => beat.genre)))];

  if (filteredBeats.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🎵</div>
        <h3 className="text-2xl font-light text-white mb-2">No beats found</h3>
        <p className="text-white/60 font-light">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Header avec recherche et filtres */}
      <div className="mb-8">
        <SearchBar 
          onSearch={setSearchQuery}
          onFilterChange={() => {}}
          placeholder="Search for beats, genres, or artists..."
        />
        
        {/* Filtres rapides */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 border text-xs font-light tracking-wider uppercase transition-all duration-300 ${
                selectedGenre === genre
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Contrôles de vue et filtres */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/60 font-light uppercase tracking-wider">View:</span>
          <div className="flex border border-white/10 p-1">
            {Object.entries(viewModeConfig).map(([mode, config]) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode as ViewMode)}
                className={`flex items-center gap-2 px-3 py-2 text-xs font-light transition-all duration-200 uppercase tracking-wider ${
                  viewMode === mode
                    ? "bg-white text-black"
                    : "text-white/60 hover:text-white bg-transparent"
                }`}
              >
                <config.icon className="text-xs" />
                {config.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-xs text-white/60 font-light uppercase tracking-wider">
            {filteredBeats.length} beat{filteredBeats.length !== 1 ? 's' : ''} found
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-2 border text-xs font-light tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
              showFilters 
                ? "bg-white text-black border-white" 
                : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
            }`}
          >
            <FaFilter className="text-xs" />
            Filters
          </button>
        </div>
      </div>

      {/* Layout principal */}
      <div className="flex gap-8">
        {/* Grille de beats */}
        <div className="flex-1">
          <div className={currentConfig.container}>
            {filteredBeats.map((beat, index) => (
              <BeatCard
                key={index}
                beat={beat}
                index={index}
                isPlaying={playingIndex === index}
                onPlayPause={onPlayPause}
                onLike={onLike}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>

        {/* Sidebar de filtres */}
        <FilterSidebar
          isOpen={showFilters}
          onClose={() => setShowFilters(false)}
        />
      </div>
    </div>
  );
}
