// #F5F3EA
import { ArrowRight, Search } from "lucide-react";
import { Navbar } from "./_components/Navbar";
import { People } from "./_components/People";
import { Themes } from "./_components/Themes";
import { TrendingDestinations } from "./_components/TrendingDestinations";
import { Container } from "./_components/UI/Container";
import { WhyUs } from "./_components/Why_us";
import { Destinations } from "./_components/Destinations";
import { Reviews } from "./_components/Reviews";
import { Enquiry } from "./_components/Enquiry";

export const domesticDestinations = [
  {
    title: "Goa",
    imageSrc:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Kashmir",
    imageSrc:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Manali",
    imageSrc:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&auto=format&fit=crop&q=80",
  },

  {
    title: "Jaipur",
    imageSrc:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Udaipur",
    imageSrc:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=1200&auto=format&fit=crop&q=80",
  },

  {
    title: "Kerala",
    imageSrc:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Andaman",
    imageSrc:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&auto=format&fit=crop&q=80",
  },

  {
    title: "Shimla",
    imageSrc:
      "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Ooty",
    imageSrc:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Mysore",
    imageSrc:
      "https://images.unsplash.com/photo-1590766940554-634a7ed41450?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Varanasi",
    imageSrc:
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Agra",
    imageSrc:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&auto=format&fit=crop&q=80",
  },
];

export const internationalDestinations = [
  {
    title: "Dubai",
    imageSrc:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Singapore",
    imageSrc:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Bali",
    imageSrc:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Maldives",
    imageSrc:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Thailand",
    imageSrc:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Switzerland",
    imageSrc:
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Paris",
    imageSrc:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "London",
    imageSrc:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Rome",
    imageSrc:
      "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Tokyo",
    imageSrc:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Istanbul",
    imageSrc:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "New York",
    imageSrc:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Sydney",
    imageSrc:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Mauritius",
    imageSrc:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Vietnam",
    imageSrc:
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&auto=format&fit=crop&q=80",
  },
];

export default function Home() {
  return (
    <section>
      <div className="relative h-[100svh] min-h-[600px] max-h-[1000px] mb-235 lg:mb-78 7xl:mb-58">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

        <header className="relative z-20 w-full">
          <Navbar />
        </header>

        <Container className="absolute inset-0">
          <div className="h-full w-full flex flex-col gap-4 text-white justify-center items-center text-center px-4 sm:px-6 md:px-8 -translate-y-4 sm:-translate-y-6">
            <h2 className="text-[clamp(1.8rem,5vw,2.5rem)] sm:text-4xl md:text-5xl lg:text-6xl font-thin font-jakarta leading-[1.1] max-w-5xl">
              WHERE WILL YOU GO NEXT?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-center leading-relaxed max-w-xl">
              Discover amazing places, unforgettable experiences,
              <br className="hidden sm:block" />
              and journeys that stay with you forever.
            </p>
          </div>
        </Container>
        <People />
      </div>
      <Themes />
      <TrendingDestinations />
      <WhyUs />
      <div className="w-full">
        <Container>
          <h1 className="font-jakarta text-5xl capitalize">
            international <span className="text-blue-400">Destinations</span>
          </h1>
          <Destinations cards={internationalDestinations} />
        </Container>
      </div>
      <div className="w-full my-8">
        <Container>
          <h1 className="font-jakarta text-5xl capitalize">
            domestic <span className="text-blue-400">Destinations</span>
          </h1>
          <Destinations cards={domesticDestinations} />
        </Container>
      </div>
      <Reviews />
      <Enquiry />
    </section>
  );
}
