"use client";

import { ArrowRight, Heart, MapPin, Quote, Star } from "lucide-react";
import Image from "next/image";
import Carousel from "./UI/Carousel";
import { motion } from "motion/react";

const reviews = [
  {
    review:
      "The entire trip was so well planned. From the hotel to the sightseeing, everything was smooth and hassle-free. Goa was absolutely beautiful!",
    name: "Riya Sharma",
    destination: {
      city: "Goa",
      country: "India",
    },
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&h=1600&q=85",
  },
  {
    review:
      "I had an amazing experience exploring Jaipur. The itinerary was perfectly balanced and the team made sure everything went according to plan.",
    name: "Arjun Mehta",
    destination: {
      city: "Jaipur",
      country: "India",
    },
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&h=1600&q=85",
  },

  {
    review:
      "The trip to Manali was exactly what we needed. Beautiful views, comfortable stays and a very well-organized itinerary.",
    name: "Rahul Verma",
    destination: {
      city: "Manali",
      country: "India",
    },
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&h=1600&q=85",
  },
  {
    review:
      "Everything about our Kerala trip was wonderful. The houseboat experience was the highlight, and the whole journey was completely stress-free.",
    name: "Ananya Singh",
    destination: {
      city: "Alappuzha",
      country: "India",
    },
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=900&h=1600&q=85",
  },
  {
    review:
      "A perfect short getaway! Everything was arranged on time and the recommendations for places to visit and eat were excellent.",
    name: "Pooja Bansal",
    destination: {
      city: "Pondicherry",
      country: "India",
    },
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=900&h=1600&q=85",
  },

  // International
  {
    review:
      "Dubai was an incredible experience. From airport transfers to the desert safari, everything was organized beautifully. We didn't have to worry about a thing.",
    name: "Aman Gupta",
    destination: {
      city: "Dubai",
      country: "UAE",
    },
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&h=1600&q=85",
  },
  {
    review:
      "Bangkok was such a fun trip! The itinerary covered all the places we wanted to see while still giving us plenty of free time to explore.",
    name: "Simran Kaur",
    destination: {
      city: "Bangkok",
      country: "Thailand",
    },
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&h=1600&q=85",
  },
  {
    review:
      "Singapore was perfect for our family vacation. The hotel was great, transfers were seamless and every detail was taken care of.",
    name: "Vivek Agarwal",
    destination: {
      city: "Singapore",
      country: "Singapore",
    },
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&h=1600&q=85",
  },
  {
    review:
      "Bali was absolutely magical! The combination of beaches, temples and beautiful resorts made this one of our best vacations yet.",
    name: "Megha Joshi",
    destination: {
      city: "Bali",
      country: "Indonesia",
    },
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&h=1600&q=85",
  },
  {
    review:
      "Our Paris trip was beautifully planned. We got to see all the major attractions without feeling rushed, and the hotel location was excellent.",
    name: "Rohan Khanna",
    destination: {
      city: "Paris",
      country: "France",
    },
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&h=1600&q=85",
  },
  {
    review:
      "The Tokyo trip exceeded our expectations. Everything from the accommodation to the transfers was handled professionally. An amazing experience!",
    name: "Ishita Rao",
    destination: {
      city: "Tokyo",
      country: "Japan",
    },
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&h=1600&q=85",
  },
  {
    review:
      "Switzerland looked like a dream and the trip was planned perfectly. The scenic train rides and mountain views were unforgettable.",
    name: "Aditya Sethi",
    destination: {
      city: "Zurich",
      country: "Switzerland",
    },
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=900&h=1600&q=85",
  },
];

const reviewLayouts = [
  { type: "text" },
  { type: "image-text" },
  { type: "text" },
  { type: "image-text" },
  { type: "text" },
  { type: "btn" },
];

const positions = [
  "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",

  "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",

  "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",

  "lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-3",

  "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",

  "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
];

const TextReview = ({ review, index }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center">
        <Quote
          className="text-blue-400 rotate-180 shrink-0"
          fill="#2196f3"
          size={26}
        />

        <div className="flex gap-[clamp(0.25rem,2vw,0.5rem)] text-blue-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="#2196f3" />
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 flex-1 line-clamp-16 text-justify">
        {review.review}
      </p>

      <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-100">
        <h3 className="font-medium">{review.name}</h3>

        {review.destination && (
          <span className="flex items-center gap-[clamp(0.25rem,2vw,0.5rem)] text-xs text-slate-500">
            <MapPin size={14} />
            {review.destination}
          </span>
        )}
      </div>
      {/* {index === 4 && (
        <button className="w-fit mx-auto mt-8 flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full cursor-pointer">
          See more reviews{" "}
          <span className="text-black bg-white p-1 rounded-full">
            <ArrowRight />
          </span>
        </button>
      )} */}
    </div>
  );
};

const ImageTextReview = ({ review, index }) => {
  return (
    <div
      className={`h-full flex gap-[clamp(0.25rem,2vw,1.25rem)] ${
        index === 3 ? "flex-row-reverse" : ""
      }`}
    >
      <div className="relative w-[40%] rounded-2xl overflow-hidden">
        <Image
          src={review.image}
          fill
          alt={review.destination ?? "destination image"}
          className="object-cover hover:scale-115 transition duration-700"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center">
          <Quote
            size={26}
            fill="#2196f3"
            className="text-blue-400 rotate-180"
          />

          <div className="flex gap-[clamp(0.25rem,2vw,0.25rem)] text-blue-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#2196f3" />
            ))}
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 flex-1 line-clamp-5 text-justify">
          {review.review}
        </p>

        <div className="flex justify-between items-center pt-4 mt-2 border-t border-slate-100">
          <h3 className="font-medium">{review.name}</h3>

          {review.destination && (
            <span className="flex items-center gap-[clamp(0.25rem,2vw,0.25rem)] text-xs text-slate-500">
              <MapPin size={14} />
              {review.destination}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ReviewCard = ({ review, layout, index }) => {
  return (
    <div>
      {layout.type === "image-text" ? (
        <ImageTextReview review={review} index={index} />
      ) : layout.type === "btn" ? (
        <button className="w-full mx-auto mt-5 flex items-center justify-center gap-[clamp(0.25rem,2vw,0.5rem)] bg-black text-white px-8 py-3 rounded-lg  cursor-pointer">
          See more reviews{" "}
          <span className="text-black bg-white p-1 rounded-full">
            <ArrowRight />
          </span>
        </button>
      ) : (
        <>
          <TextReview review={review} index={index} />
        </>
      )}
    </div>
  );
};

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative h-full w-full overflow-hidden bg-slate-200 shadow-people"
    >
      {/* Image */}
      <motion.img
        src={testimonial.image}
        alt={`${testimonial.destination.city}, ${testimonial.destination.country}`}
        className="absolute inset-0 h-full w-full object-cover object-center"
        variants={{
          rest: {
            scale: 1,
          },
          hover: {
            scale: 1.04,
          },
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-black/0"
        variants={{
          rest: {
            backgroundColor: "rgba(0,0,0,0)",
          },
          hover: {
            backgroundColor: "rgba(0,0,0,0.42)",
          },
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Top icons */}
      <div className="absolute left-7 right-7 top-7 flex items-center justify-between">
        <motion.div
          className="flex size-16 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-white backdrop-blur-md"
          variants={{
            rest: {
              opacity: 0,
              y: -10,
            },
            hover: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ duration: 0.35 }}
        >
          <Quote className="size-7 fill-white" />
        </motion.div>

        <motion.button
          type="button"
          aria-label="Save testimonial"
          className="flex size-16 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-white backdrop-blur-md"
          variants={{
            rest: {
              opacity: 0,
              y: -10,
            },
            hover: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          <Heart className="size-7" />
        </motion.button>
      </div>

      {/* Bottom collapsed info */}
      <motion.div
        className="absolute bottom-7 left-7 right-7 overflow-hidden rounded-2xl border border-white/30 bg-white/20 p-6 text-white backdrop-blur-xl"
        variants={{
          rest: {
            height: 110,
          },
          hover: {
            height: 320,
          },
        }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Drag / handle */}
        <motion.div
          className="mx-auto rounded-full bg-white"
          variants={{
            rest: {
              opacity: 0,
            },
            hover: {
              opacity: 0.8,
            },
          }}
        />

        {/* User info */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <div className="min-w-0">
              <h3 className="truncate text-xl font-semibold">
                {testimonial.name}
              </h3>

              <div className="mt-1 flex items-center gap-1.5 text-sm text-white/90">
                <MapPin className="size-4" />
                <span>
                  {testimonial.destination.city},{" "}
                  {testimonial.destination.country}
                </span>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex shrink-0 items-center gap-2">
            <Star className="size-6 fill-yellow-400 text-yellow-400" />
            <span className="text-lg font-medium">
              {testimonial.rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className="my-5 h-px bg-white/30"
          variants={{
            rest: {
              opacity: 0,
            },
            hover: {
              opacity: 1,
            },
          }}
        />

        {/* Review */}
        <motion.p
          className="text-lg leading-8 text-white/95"
          variants={{
            rest: {
              opacity: 0,
              y: 20,
            },
            hover: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.4,
            delay: 0.12,
          }}
        >
          {testimonial.review}
        </motion.p>
      </motion.div>
    </motion.article>
  );
}

export const TextTestimonials = () => {
  return (
    <>
      {/* <div
        className="relative grid grid-cols-1 lg:grid-cols-3 gap-[clamp(0.25rem,2vw,1.25rem)] mt-14 rounded-2xl p-6 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=2400&q=90')",
        }}
      >
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        {reviews.map((r, i) => (
          <div
            key={i}
            className={
              positions[i] +
              ` ${
                reviewLayouts[i].type === "btn"
                  ? "relative"
                  : " bg-white font-bold backdrop-blur-xs text-black relative h-fit shadow-people rounded-2xl p-6"
              }`
            }
          >
            <ReviewCard layout={reviewLayouts[i]} review={r} index={i} />
          </div>
        ))}
      </div> */}

      <Carousel visibleSlides={4}>
        {reviews.map((testimonial, index) => (
          <div
            key={index}
            className="shrink-0 rounded-2xl overflow-hidden shadow-sm w-[50%] lg:w-[33.333%] xl:w-[25%] relative h-[70vh] flex items-end cursor-pointer group"
          >
            <TestimonialCard testimonial={testimonial} index={index} />
          </div>
        ))}
      </Carousel>
    </>
  );
};
