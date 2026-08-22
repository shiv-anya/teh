import Image from "next/image";
import Carousel from "./UI/Carousel";

export const Destinations = ({ cards }) => {
  return (
    <Carousel visibleSlides={4}>
      {cards.map((card, i) => (
        <div
          key={i}
          className="shrink-0 rounded-2xl overflow-hidden shadow-sm w-[50%] lg:w-[33.333%] xl:w-[18%] relative h-full flex items-end cursor-pointer group"
        >
          <Image
            src={card.imageSrc}
            fill
            className="object-cover absolute group-hover:scale-115 transition duration-300"
            alt={card.title}
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/30 to-transparent"></div>
          <div className="p-0 relative text-xl text-center h-[15%] w-full text-white bg-gradient-to-t from-black/30 to-transparent backdrop-blur-xs flex justify-center items-center font-semibold">
            {card.title}
          </div>
        </div>
      ))}
    </Carousel>
  );
};
