import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev: number) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main loader content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">E</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Elgor Beatz
          </h1>
        </div>

        {/* Progress bar */}
        <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden mb-6">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress text */}
        <div className="text-gray-400 mb-8">
          <div className="text-2xl font-bold text-white mb-2">{Math.round(progress)}%</div>
          <div className="text-sm">Chargement en cours...</div>
        </div>

        {/* Loading animation */}
        <div className="flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Loading messages */}
        <div className="mt-8 text-gray-500 text-sm">
          <div className="animate-pulse">
            {progress < 30 && "Initialisation..."}
            {progress >= 30 && progress < 60 && "Chargement des composants..."}
            {progress >= 60 && progress < 90 && "Préparation de l'interface..."}
            {progress >= 90 && "Finalisation..."}
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-blue-500/50 rounded-tl-2xl" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-purple-500/50 rounded-tr-2xl" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-purple-500/50 rounded-bl-2xl" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-blue-500/50 rounded-br-2xl" />
    </div>
  );
} 