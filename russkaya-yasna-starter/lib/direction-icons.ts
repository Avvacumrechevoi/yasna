import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Castle,
  Globe,
  Heart,
  Map,
  Navigation2,
  Search,
  Send,
  Sparkles,
  Star,
} from "lucide-react";

import type { DirectionIconKey, ResourceIconKey } from "@/lib/directions-data";

export const directionIconMap: Record<DirectionIconKey, LucideIcon> = {
  map: Map,
  book: BookOpen,
  star: Star,
  sparkles: Sparkles,
  heart: Heart,
  navigation: Navigation2,
  search: Search,
  castle: Castle,
};

export const resourceIconMap: Record<ResourceIconKey, LucideIcon> = {
  telegram: Send,
  site: Globe,
};
