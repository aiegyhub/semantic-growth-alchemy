
import { 
  House, AirVent, Wrench, Bolt, Bug, Trees, Building, Construction, Brush, Sofa, Wind, Fan, Cog,
  Plug, Lightbulb, ShowerHead, Heater, Camera, Bell,
  Sprout, LucideIcon, Scissors, Shield, Zap, Droplets, Hammer, Eye, Leaf, Trash2,
  Settings, Lock, Car, Briefcase, Smartphone, Wifi, Router, Server, Bird,
  Waves, LayoutGrid, Grid, Home, Layers, ShieldCheck, PaintRoller, Gem, KeyRound, Truck,
  Archive, Ruler, BringToFront, Video, Rat, SatelliteDish, Shirt
} from 'lucide-react';

interface ServiceIconProps {
  iconName: string;
  className?: string;
  size?: number;
}

// A structured and organized map of all available icons.
// This approach uses a single canonical key for each icon to ensure consistency.
const iconMap: Record<string, LucideIcon> = {
  // General & UI
  house: House,
  home: Home,
  building: Building,
  construction: Construction,
  cog: Cog,
  settings: Settings,
  shield: Shield,
  'shield-check': ShieldCheck,
  lock: Lock,
  'key-round': KeyRound,
  camera: Camera,
  video: Video,
  bell: Bell,
  eye: Eye,
  trash: Trash2,
  briefcase: Briefcase,
  car: Car,
  archive: Archive,
  ruler: Ruler,
  'bring-to-front': BringToFront,

  // Service Specific
  'ac-services': AirVent,
  plumbing: Wrench,
  electrical: Bolt,
  'pest-control': Bug,
  'rodent-control': Rat,
  'bird-control': Bird,
  landscaping: Trees,
  gardening: Sprout,
  'leaf-cleanup': Leaf,
  trimming: Scissors,
  cleaning: Brush,
  'sofa-cleaning': Sofa,
  painting: PaintRoller,
  carpentry: Hammer,
  'leak-detection': Waves,
  'water-tank': Droplets,
  'appliance-repair': Cog,
  'washing-machine': Shirt,
  'tile-installation': LayoutGrid,
  'marble-polishing': Gem,
  'moving-relocation': Truck,
  'gypsum-decor': Layers,
  'glass-aluminum': Grid,
  'satellite-services': SatelliteDish,
  
  // Tech
  smartphone: Smartphone,
  wifi: Wifi,
  plug: Plug,
  lightbulb: Lightbulb,
  router: Router,
  server: Server,

  // Misc
  wind: Wind,
  zap: Zap,
  fan: Fan,
  heater: Heater,
  'shower-head': ShowerHead,
};

export default function ServiceIcon({ iconName, className = "", size = 24 }: ServiceIconProps) {
  const Icon = iconMap[iconName] || House; // Fallback to a default House icon
  
  return <Icon size={size} className={className} />;
}
