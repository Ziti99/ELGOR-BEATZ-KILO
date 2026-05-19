import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: SearchFilters) => void;
  placeholder?: string;
}

export interface SearchFilters {
  genre: string;
  bpmRange: [number, number];
  key: string;
  priceRange: [number, number];
}

export default function SearchBar({ onSearch, onFilterChange, placeholder = "Search for beats, genres, or artists..." }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    genre: "All",
    bpmRange: [60, 200],
    key: "All",
    priceRange: [0, 100]
  });

  const genres = ["All", "Hip-Hop", "Trap", "R&B", "Afro", "Drill", "Pop", "Electronic", "Jazz", "Reggae", "Rock"];
  const keys = ["All", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleFilterChange = (newFilters: Partial<SearchFilters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const clearFilters = () => {
    const defaultFilters: SearchFilters = {
      genre: "All",
      bpmRange: [60, 200],
      key: "All",
      priceRange: [0, 100]
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Barre de recherche principale */}
      <div className="relative mb-6">
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full px-6 py-4 pl-16 pr-32 text-lg border border-stone-900/12 rounded-full focus:border-accent-copper/50 focus:outline-none focus:ring-2 focus:ring-accent-copper/15 transition-all duration-300 shadow-sm bg-cream-paper text-ink placeholder-stone-400"
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-stone-400 text-xl" />
        
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
              showFilters ? 'bg-ink text-cream' : 'bg-cream-muted text-ink-muted hover:bg-cream-deep'
            }`}
          >
            <FaFilter className="text-sm" />
            Filters
          </button>
          
          <button 
            onClick={handleSearch}
            className="px-6 py-2 bg-accent-copper text-cream rounded-full hover:bg-accent-copper/90 transition-all duration-300 font-medium shadow-sm"
          >
            Search
          </button>
        </div>
      </div>

      {/* Panneau de filtres */}
      {showFilters && (
        <div className="bg-cream-paper rounded-2xl p-6 shadow-lg border border-stone-900/10 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-ink">Filtres avancés</h3>
            <button
              onClick={clearFilters}
              className="text-sm text-stone-500 hover:text-accent-copper transition-colors duration-300"
            >
              Tout effacer
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Genre */}
            <div>
              <label className="block text-sm font-medium text-stone-600 mb-2">Genre</label>
              <select
                value={filters.genre}
                onChange={(e) => handleFilterChange({ genre: e.target.value })}
                className="w-full px-3 py-2 border border-stone-900/15 rounded-lg focus:border-accent-copper/50 focus:outline-none transition-colors duration-300 bg-cream-paper text-ink"
              >
                {genres.map((genre) => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            {/* Key */}
            <div>
              <label className="block text-sm font-medium text-stone-600 mb-2">Key</label>
              <select
                value={filters.key}
                onChange={(e) => handleFilterChange({ key: e.target.value })}
                className="w-full px-3 py-2 border border-stone-900/15 rounded-lg focus:border-accent-copper/50 focus:outline-none transition-colors duration-300 bg-cream-paper text-ink"
              >
                {keys.map((key) => (
                  <option key={key} value={key}>{key}</option>
                ))}
              </select>
            </div>

            {/* BPM Range */}
            <div>
              <label className="block text-sm font-medium text-stone-600 mb-2">BPM Range</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={filters.bpmRange[0]}
                  onChange={(e) => handleFilterChange({ bpmRange: [parseInt(e.target.value), filters.bpmRange[1]] })}
                  className="w-20 px-2 py-2 border border-stone-900/15 rounded-lg focus:border-accent-copper/50 focus:outline-none text-sm bg-cream-paper text-ink"
                  placeholder="Min"
                />
                <span className="text-stone-400">-</span>
                <input
                  type="number"
                  value={filters.bpmRange[1]}
                  onChange={(e) => handleFilterChange({ bpmRange: [filters.bpmRange[0], parseInt(e.target.value)] })}
                  className="w-20 px-2 py-2 border border-stone-900/15 rounded-lg focus:border-accent-copper/50 focus:outline-none text-sm bg-cream-paper text-ink"
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-stone-600 mb-2">Price Range</label>
              <div className="flex items-center gap-2">
                <span className="text-stone-400 text-sm">$</span>
                <input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) => handleFilterChange({ priceRange: [parseInt(e.target.value), filters.priceRange[1]] })}
                  className="w-20 px-2 py-2 border border-stone-900/15 rounded-lg focus:border-accent-copper/50 focus:outline-none text-sm bg-cream-paper text-ink"
                  placeholder="Min"
                />
                <span className="text-stone-400">-</span>
                <input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) => handleFilterChange({ priceRange: [filters.priceRange[0], parseInt(e.target.value)] })}
                  className="w-20 px-2 py-2 border border-stone-900/15 rounded-lg focus:border-accent-copper/50 focus:outline-none text-sm bg-cream-paper text-ink"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
