// Composants principaux
export { default as Header } from './Header';
export { default as Footer } from './Footer';
export { default as BurgerMenu } from './BurgerMenu';
export { default as HeroSection } from './HeroSection';
export { default as ProductionsSection } from './ProductionsSection';

// Composants de page standardisés
export { default as PageHero } from './PageHero';
export { default as SectionHeader } from './SectionHeader';
export { default as PageSection } from './PageSection';
export { default as PageContainer } from './PageContainer';

// Composants de beats
export { default as BeatCard } from './BeatCard';
export { default as BeatsGrid } from './BeatsGrid';
export { default as BeatsWithFilters } from './BeatsWithFilters';
export { default as FeaturedBeats } from './FeaturedBeats';

// Composants de navigation et filtres
export { default as Navigation } from './Navigation';
export { default as SearchBar } from './SearchBar';
export { default as FilterSidebar } from './FilterSidebar';

// Composants d'interface
export { default as Button } from './Button';
export { default as Badge } from './Badge';
export { default as Modal } from './Modal';
export { default as Pagination } from './Pagination';

// Composants audio
export { default as AudioPlayer } from './AudioPlayer';
export { default as AudioVisualizer } from './AudioVisualizer';
export { default as AudioVisualizerHero } from './AudioVisualizerHero';

// Ré-exports des composants spécialisés
export { 
  PrimaryButton, 
  SecondaryButton, 
  OutlineButton, 
  GhostButton, 
  DangerButton 
} from './Button';

export { 
  GenreBadge, 
  BpmBadge, 
  KeyBadge, 
  PriceBadge, 
  DurationBadge, 
  StatusBadge 
} from './Badge';

export { 
  BeatModal, 
  PlayerModal, 
  FullScreenModal 
} from './Modal';

export { 
  UserActions 
} from './Navigation';

export { 
  BeatsList 
} from './BeatsGrid';
