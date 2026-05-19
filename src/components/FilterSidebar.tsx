import { useState } from 'react';
import { FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FilterSidebar({ isOpen, onClose }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:relative lg:transform-none ${
        isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center"
          >
            <FaTimes className="text-gray-600" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleSection('genres')}
              className="flex items-center justify-between w-full text-left mb-3"
            >
              <h4 className="font-medium text-gray-900">Genres</h4>
              {expandedSections.has('genres') ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {expandedSections.has('genres') && (
              <div className="space-y-2">
                {["Hip-Hop", "Trap", "R&B", "Afro", "Drill", "Pop"].map((genre) => (
                  <label key={genre} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">{genre}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleSection('bpm')}
              className="flex items-center justify-between w-full text-left mb-3"
            >
              <h4 className="font-medium text-gray-900">BPM Range</h4>
              {expandedSections.has('bpm') ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {expandedSections.has('bpm') && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>60 BPM</span>
                  <span>200 BPM</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="200"
                  className="w-full h-2 bg-gray-200 rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
