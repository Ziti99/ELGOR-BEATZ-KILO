import { useState } from "react";
import { FaTimes, FaChevronDown, FaChevronUp, FaSlidersH } from "react-icons/fa";

interface FilterOptions {
  genres: string[];
  bpmRange: [number, number];
  keys: string[];
  priceRange: [number, number];
  mood: string[];
  instruments: string[];
  duration: [number, number];
  tags: string[];
}

interface AdvancedFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterChange: (filters: FilterOptions) => void;
  currentFilters: FilterOptions;
}

export default function AdvancedFilters({
  isOpen,
  onClose,
  onFilterChange,
  currentFilters
}: AdvancedFiltersProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['genres', 'bpm', 'keys']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const updateFilters = (newFilters: Partial<FilterOptions>) => {
    onFilterChange({ ...currentFilters, ...newFilters });
  };

  const clearAllFilters = () => {
    const defaultFilters: FilterOptions = {
      genres: [],
      bpmRange: [60, 200],
      keys: [],
      priceRange: [0, 100],
      mood: [],
      instruments: [],
      duration: [0, 10],
      tags: []
    };
    onFilterChange(defaultFilters);
  };

  const genres = ["Hip-Hop", "Trap", "R&B", "Afro", "Drill", "Pop", "Electronic", "Jazz", "Reggae", "Rock", "Country", "Blues"];
  const keys = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const moods = ["Aggressive", "Chill", "Energetic", "Dark", "Uplifting", "Melancholic", "Playful", "Serious"];
  const instruments = ["Drums", "Bass", "Piano", "Guitar", "Strings", "Brass", "Synth", "Vocals"];
  const tags = ["Exclusive", "Trending", "New Release", "Featured", "Best Seller", "Limited Edition"];

  return (
    <>
      {/* Overlay pour mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:relative lg:transform-none ${
        isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <FaSlidersH className="text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Advanced Filters</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={clearAllFilters}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300"
            >
              Clear all
            </button>
            <button
              onClick={onClose}
              className="lg:hidden w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <FaTimes className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Contenu des filtres */}
        <div className="p-6 space-y-6 overflow-y-auto h-[calc(100vh-120px)]">
          {/* Genres */}
          <div className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleSection('genres')}
              className="flex items-center justify-between w-full text-left mb-3"
            >
              <h4 className="font-medium text-gray-900">Genres</h4>
              {expandedSections.includes('genres') ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {expandedSections.includes('genres') && (
              <div className="space-y-2">
                {genres.map((genre) => (
                  <label key={genre} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={currentFilters.genres.includes(genre)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          updateFilters({ genres: [...currentFilters.genres, genre] });
                        } else {
                          updateFilters({ genres: currentFilters.genres.filter(g => g !== genre) });
                        }
                      }}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{genre}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* BPM Range */}
          <div className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleSection('bpm')}
              className="flex items-center justify-between w-full text-left mb-3"
            >
              <h4 className="font-medium text-gray-900">BPM Range</h4>
              {expandedSections.includes('bpm') ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {expandedSections.includes('bpm') && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{currentFilters.bpmRange[0]} BPM</span>
                  <span>{currentFilters.bpmRange[1]} BPM</span>
                </div>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="60"
                    max="200"
                    value={currentFilters.bpmRange[0]}
                    onChange={(e) => updateFilters({ bpmRange: [parseInt(e.target.value), currentFilters.bpmRange[1]] })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="range"
                    min="60"
                    max="200"
                    value={currentFilters.bpmRange[1]}
                    onChange={(e) => updateFilters({ bpmRange: [currentFilters.bpmRange[0], parseInt(e.target.value)] })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Keys */}
          <div className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleSection('keys')}
              className="flex items-center justify-between w-full text-left mb-3"
            >
              <h4 className="font-medium text-gray-900">Keys</h4>
              {expandedSections.includes('keys') ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {expandedSections.includes('keys') && (
              <div className="grid grid-cols-3 gap-2">
                {keys.map((key) => (
                  <label key={key} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={currentFilters.keys.includes(key)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          updateFilters({ keys: [...currentFilters.keys, key] });
                        } else {
                          updateFilters({ keys: currentFilters.keys.filter(k => k !== key) });
                        }
                      }}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{key}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Range */}
          <div className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleSection('price')}
              className="flex items-center justify-between w-full text-left mb-3"
            >
              <h4 className="font-medium text-gray-900">Price Range</h4>
              {expandedSections.includes('price') ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {expandedSections.includes('price') && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>${currentFilters.priceRange[0]}</span>
                  <span>${currentFilters.priceRange[1]}</span>
                </div>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={currentFilters.priceRange[0]}
                    onChange={(e) => updateFilters({ priceRange: [parseInt(e.target.value), currentFilters.priceRange[1]] })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={currentFilters.priceRange[1]}
                    onChange={(e) => updateFilters({ priceRange: [currentFilters.priceRange[0], parseInt(e.target.value)] })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Mood */}
          <div className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleSection('mood')}
              className="flex items-center justify-between w-full text-left mb-3"
            >
              <h4 className="font-medium text-gray-900">Mood</h4>
              {expandedSections.includes('mood') ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {expandedSections.includes('mood') && (
              <div className="space-y-2">
                {moods.map((mood) => (
                  <label key={mood} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={currentFilters.mood.includes(mood)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          updateFilters({ mood: [...currentFilters.mood, mood] });
                        } else {
                          updateFilters({ mood: currentFilters.mood.filter(m => m !== mood) });
                        }
                      }}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{mood}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Instruments */}
          <div className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleSection('instruments')}
              className="flex items-center justify-between w-full text-left mb-3"
            >
              <h4 className="font-medium text-gray-900">Instruments</h4>
              {expandedSections.includes('instruments') ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {expandedSections.includes('instruments') && (
              <div className="space-y-2">
                {instruments.map((instrument) => (
                  <label key={instrument} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={currentFilters.instruments.includes(instrument)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          updateFilters({ instruments: [...currentFilters.instruments, instrument] });
                        } else {
                          updateFilters({ instruments: currentFilters.instruments.filter(i => i !== instrument) });
                        }
                      }}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{instrument}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleSection('tags')}
              className="flex items-center justify-between w-full text-left mb-3"
            >
              <h4 className="font-medium text-gray-900">Tags</h4>
              {expandedSections.includes('tags') ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {expandedSections.includes('tags') && (
              <div className="space-y-2">
                {tags.map((tag) => (
                  <label key={tag} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={currentFilters.tags.includes(tag)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          updateFilters({ tags: [...currentFilters.tags, tag] });
                        } else {
                          updateFilters({ tags: currentFilters.tags.filter(t => t !== tag) });
                        }
                      }}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{tag}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
