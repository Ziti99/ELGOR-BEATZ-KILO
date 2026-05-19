import { useState } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp, FaVolumeMute, FaExpand, FaHeart, FaDownload, FaShare } from "react-icons/fa";
import Image from "next/image";

interface AudioPlayerProps {
  currentBeat: {
    img: string;
    name: string;
    artist: string;
    genre: string;
    bpm: string;
    key: string;
    price: string;
    duration: string;
  };
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  onLike: () => void;
  onDownload: () => void;
  onShare: () => void;
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
  volume: number;
  onVolumeChange: (volume: number) => void;
  isLiked: boolean;
}

export default function AudioPlayer({
  currentBeat,
  isPlaying,
  onPlayPause,
  onNext,
  onPrev,
  onLike,
  onDownload,
  onShare,
  currentTime,
  duration,
  onSeek,
  volume,
  onVolumeChange,
  isLiked
}: AudioPlayerProps) {
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const seekTime = percent * duration;
    onSeek(seekTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    onVolumeChange(newVolume);
  };

  // Modal plein écran pour mobile
  if (isExpanded) {
    return (
      <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Now Playing</h2>
            <button
              onClick={() => setIsExpanded(false)}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
          </div>

          {/* Cover and Info */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="relative mx-auto mb-4 sm:mb-6">
              <Image
                src={currentBeat.img}
                alt={currentBeat.name}
                width={300}
                height={300}
                className="rounded-2xl shadow-2xl mx-auto w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover"
              />
              {isPlaying && (
                <div className="absolute inset-0 bg-blue-400/20 rounded-2xl animate-pulse"></div>
              )}
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{currentBeat.name}</h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-4">{currentBeat.artist}</p>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                {currentBeat.genre}
              </span>
              <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-medium">
                {currentBeat.bpm} BPM
              </span>
              <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium">
                Key: {currentBeat.key}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <button
              onClick={onPrev}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-700 transition-all duration-300"
            >
              <FaStepBackward className="text-lg sm:text-xl" />
            </button>
            
            <button
              onClick={onPlayPause}
              className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-lg transition-all duration-300 hover:scale-110"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            
            <button
              onClick={onNext}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-700 transition-all duration-300"
            >
              <FaStepForward className="text-lg sm:text-xl" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-3 mb-6 sm:mb-8">
            <div className="flex justify-between text-sm text-gray-500">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div
              className="w-full h-2 sm:h-3 bg-gray-200 rounded-full cursor-pointer overflow-hidden"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-blue-600 transition-all duration-100 rounded-full"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              onClick={onLike}
              className={`px-4 sm:px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
                isLiked
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              <FaHeart className={isLiked ? "text-red-500" : ""} />
              {isLiked ? "Liked" : "Like"}
            </button>
            
            <button
              onClick={onDownload}
              className="px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaDownload />
              Download
            </button>
            
            <button
              onClick={onShare}
              className="px-4 sm:px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaShare />
              Share
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Player compact sticky en bas
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Cover and Info - responsive */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
            <div className="relative">
              <Image
                src={currentBeat.img}
                alt={currentBeat.name}
                width={64}
                height={64}
                className="rounded-lg sm:rounded-xl object-cover shadow-lg border border-gray-200 w-12 h-12 sm:w-16 sm:h-16"
              />
              {isPlaying && (
                <div className="absolute inset-0 bg-blue-400/20 rounded-lg sm:rounded-xl animate-pulse"></div>
              )}
            </div>
            
            <div className="min-w-0">
              <div className="font-bold text-gray-900 truncate text-sm sm:text-base">{currentBeat.name}</div>
              <div className="text-xs sm:text-sm text-gray-600 truncate">{currentBeat.artist} • {currentBeat.genre}</div>
            </div>
          </div>

          {/* Controls - responsive */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={onPrev}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-1.5 sm:p-2 rounded-full hover:bg-gray-100"
            >
              <FaStepBackward className="text-sm sm:text-base" />
            </button>
            
            <button
              onClick={onPlayPause}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center text-lg sm:text-xl shadow-lg transition-all duration-300 hover:scale-110"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            
            <button
              onClick={onNext}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-1.5 sm:p-2 rounded-full hover:bg-gray-100"
            >
              <FaStepForward className="text-sm sm:text-base" />
            </button>
          </div>

          {/* Progress Bar - responsive */}
          <div className="flex-1 max-w-32 sm:max-w-md hidden sm:block">
            <div className="flex items-center gap-2 sm:gap-3 mb-1">
              <span className="text-xs text-gray-500 min-w-[30px] sm:min-w-[40px]">{formatTime(currentTime)}</span>
              <div
                className="flex-1 h-1 bg-gray-200 rounded-full cursor-pointer overflow-hidden"
                onClick={handleSeek}
              >
                <div
                  className="h-full bg-blue-600 transition-all duration-100 rounded-full"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
              </div>
              <span className="text-xs text-gray-500 min-w-[30px] sm:min-w-[40px] text-right">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Volume and Actions - responsive */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Volume Control - caché sur très petit écran */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-1.5 sm:p-2 rounded-full hover:bg-gray-100"
              >
                {volume > 0 ? <FaVolumeUp className="text-sm sm:text-base" /> : <FaVolumeMute className="text-sm sm:text-base" />}
              </button>
              
              {showVolumeSlider && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              )}
            </div>

            {/* Like Button - responsive */}
            <button
              onClick={onLike}
              className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
                isLiked
                  ? "bg-red-100 text-red-600 hover:bg-red-200"
                  : "text-gray-600 hover:text-red-600 hover:bg-red-50"
              }`}
            >
              <FaHeart className={`text-sm sm:text-base ${isLiked ? "text-red-500" : ""}`} />
            </button>

            {/* Expand Button - responsive */}
            <button
              onClick={() => setIsExpanded(true)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-1.5 sm:p-2 rounded-full hover:bg-gray-100"
            >
              <FaExpand className="text-sm sm:text-base" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
