import { Mountain, Trees, Sparkles, Waves, Landmark, Gem } from "lucide-react";

/**
 * Data-driven source for the Themes carousel.
 * Swap `image` for any URL — the component only needs a reasonably
 * high-resolution landscape image (works well at 1600px wide).
 */
export const themes = [
  {
    id: "adventure",
    title: "Adventure",
    description:
      "Chase adrenaline across mountains, rivers, and trails built for the bold.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=80",
    cta: "Explore Adventure Trips",
    icon: Mountain,
  },
  {
    id: "nature",
    title: "Nature",
    description:
      "Slow down inside forests, valleys, and untouched landscapes that breathe.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    cta: "Explore Nature Trips",
    icon: Trees,
  },
  {
    id: "spiritual",
    title: "Spiritual",
    description:
      "Find stillness at sacred sites and rituals that ground the mind.",
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1600&q=80",
    cta: "Explore Spiritual Trips",
    icon: Sparkles,
  },
  {
    id: "beaches",
    title: "Beaches",
    description:
      "Trade your schedule for tide charts and horizons that don't end.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    cta: "Explore Beach Trips",
    icon: Waves,
  },
  {
    id: "culture-heritage",
    title: "Culture & Heritage",
    description:
      "Walk through living history, old markets, and stories still being told.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",
    cta: "Explore Culture Trips",
    icon: Landmark,
  },
  {
    id: "luxury-leisure",
    title: "Luxury & Leisure",
    description:
      "Unhurried mornings, private views, and comfort designed around you.",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
    cta: "Explore Luxury Trips",
    icon: Gem,
  },
];
