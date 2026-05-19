export interface Beat {
  id: number;
  img: string;
  name: string;
  artist: string;
  genre: string;
  bpm: string;
  key: string;
  price: string;
  duration: string;
  audio: string;
  isExclusive?: boolean;
  isTrending?: boolean;
  tags: string[];
  description: string;
  releaseDate: string;
  downloads: number;
  likes: number;
}

export const beats: Beat[] = [
  {
    id: 1,
    img: "/images/04.21.04_48ea42df.jpg",
    name: "Midnight Vibes",
    artist: "Elgor Beatz",
    audio: "/test-beat.mp3",
    genre: "Hip-Hop",
    bpm: "140",
    key: "C#m",
    price: "29.99",
    duration: "3:45",
    isExclusive: true,
    isTrending: true,
    tags: ["Dark", "Atmospheric", "Bass Heavy"],
    description: "A dark and atmospheric hip-hop beat with heavy bass and haunting melodies.",
    releaseDate: "2024-01-15",
    downloads: 156,
    likes: 89
  },
  {
    id: 2,
    img: "/images/04.13.05_f40135f6.jpg",
    name: "Urban Flow",
    artist: "Elgor Beatz",
    audio: "/test-beat.mp3",
    genre: "Trap",
    bpm: "145",
    key: "Am",
    price: "34.99",
    duration: "3:20",
    isTrending: true,
    tags: ["Aggressive", "High Energy", "808s"],
    description: "High-energy trap beat with aggressive 808s and dynamic hi-hats.",
    releaseDate: "2024-01-10",
    downloads: 203,
    likes: 127
  },
  {
    id: 3,
    img: "/images/04.13.07_43247365.jpg",
    name: "Soulful Nights",
    artist: "Elgor Beatz",
    audio: "/test-beat.mp3",
    genre: "R&B",
    bpm: "130",
    key: "F#m",
    price: "27.99",
    duration: "4:15",
    tags: ["Smooth", "Melodic", "Soulful"],
    description: "Smooth R&B beat with soulful melodies and laid-back vibes.",
    releaseDate: "2024-01-08",
    downloads: 98,
    likes: 67
  },
  {
    id: 4,
    img: "/images/04.13.08_4ed0143b.jpg",
    name: "Afro Fusion",
    artist: "Elgor Beatz",
    audio: "/test-beat.mp3",
    genre: "Afro",
    bpm: "120",
    key: "Gm",
    price: "32.99",
    duration: "3:30",
    isExclusive: true,
    tags: ["African", "Rhythmic", "Uplifting"],
    description: "Rhythmic Afro fusion beat with traditional African elements.",
    releaseDate: "2024-01-05",
    downloads: 134,
    likes: 92
  },
  {
    id: 5,
    img: "/images/04.13.08_ad07ad5b.jpg",
    name: "Drill Master",
    artist: "Elgor Beatz",
    audio: "/test-beat.mp3",
    genre: "Drill",
    bpm: "150",
    key: "Bm",
    price: "36.99",
    duration: "3:55",
    isTrending: true,
    tags: ["Drill", "Dark", "Hard"],
    description: "Hard-hitting drill beat with dark melodies and heavy percussion.",
    releaseDate: "2024-01-03",
    downloads: 187,
    likes: 145
  },
  {
    id: 6,
    img: "/images/04.13.09_2585b017.jpg",
    name: "Pop Sensation",
    artist: "Elgor Beatz",
    audio: "/test-beat.mp3",
    genre: "Pop",
    bpm: "125",
    key: "Dm",
    price: "31.99",
    duration: "3:40",
    tags: ["Pop", "Catchy", "Radio Ready"],
    description: "Catchy pop beat perfect for radio hits and mainstream appeal.",
    releaseDate: "2024-01-01",
    downloads: 245,
    likes: 178
  },
  {
    id: 7,
    img: "/images/04.13.09_3b86065a.jpg",
    name: "Electronic Dreams",
    artist: "Elgor Beatz",
    audio: "/test-beat.mp3",
    genre: "Electronic",
    bpm: "128",
    key: "Em",
    price: "33.99",
    duration: "4:05",
    tags: ["Electronic", "Synth", "Futuristic"],
    description: "Futuristic electronic beat with synth-heavy production.",
    releaseDate: "2023-12-28",
    downloads: 167,
    likes: 113
  },
  {
    id: 8,
    img: "/images/04.13.09_44aada12.jpg",
    name: "Jazz Fusion",
    artist: "Elgor Beatz",
    audio: "/test-beat.mp3",
    genre: "Jazz",
    bpm: "110",
    key: "Cmaj",
    price: "28.99",
    duration: "4:30",
    tags: ["Jazz", "Smooth", "Complex"],
    description: "Complex jazz fusion beat with sophisticated harmonies.",
    releaseDate: "2023-12-25",
    downloads: 89,
    likes: 56
  },
  {
    id: 9,
    img: "/images/04.22.11_508929a1.jpg",
    name: "Reggae Vibes",
    artist: "Elgor Beatz",
    audio: "/test-beat.mp3",
    genre: "Reggae",
    bpm: "80",
    key: "Amaj",
    price: "25.99",
    duration: "3:50",
    tags: ["Reggae", "Chill", "Island"],
    description: "Chill reggae beat with island vibes and laid-back rhythm.",
    releaseDate: "2023-12-20",
    downloads: 112,
    likes: 78
  }
];

export const featuredBeats = beats.filter(beat => beat.isExclusive || beat.isTrending);

export const getBeatsByGenre = (genre: string) => {
  if (genre === "All") return beats;
  return beats.filter(beat => beat.genre === genre);
};

export const searchBeats = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return beats.filter(beat => 
    beat.name.toLowerCase().includes(lowercaseQuery) ||
    beat.artist.toLowerCase().includes(lowercaseQuery) ||
    beat.genre.toLowerCase().includes(lowercaseQuery) ||
    beat.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getBeatById = (id: number) => {
  return beats.find(beat => beat.id === id);
};
