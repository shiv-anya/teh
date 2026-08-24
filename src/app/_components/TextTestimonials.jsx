import { ArrowRight, MapPin, Quote, Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Shino Ulahannan",
    rating: 5,
    destination: "Thailand",
    review:
      "Our recent family trip to Thailand was an absolutely delightful experience, thanks to the exceptional service provided by Travel Empire Holidays & Trvldeals --- Appreciate Abhinav, Aman, Immanuel & team for the wonderful job. Right from the initial planning to the completion of the journey, everything was handled with great professionalism and attention to detail. All travel arrangements—flights, hotel stays, airport transfers, and sightseeing—were perfectly organized. The team provided timely updates, the pickups and local coordination were punctual, and the accommodations were comfortable and well-chosen for our needs. We never had to worry about logistics, allowing us to fully enjoy quality time together as a family. Truly commendable service — organized, responsive, and customer-focused. Highly recommended for anyone looking for a well-planned, cost-effective, worry-free travel experience!",
    image: null,
  },
  {
    name: "Nidhi Shrivastava",
    rating: 5,
    destination: "Andaman",
    review:
      "I had a trip of Andmaan with Travel Empire,it was a very well structured and well organised one,there was good coordination and understanding between distant coordinators at various other places to visit,they were available on just s phone call and were ready to modify and plan accordingly,to our needs.They managed the things very well.All very thanks and good wishes to the team Travel Empire.... Looking forward to many more trips with them.",
    image: "/images/nidhi.webp",
  },
  {
    name: "Subhash Kg",
    rating: 5,
    destination: null,
    review:
      "The journey was extremely convenient and relaxing. The transportation and residence were very sophisticated and comforting. The guide was very friendly and knowledgeable.Overall we had an amazing holiday",
    image: null,
  },
  {
    name: "Yogesh Daudkhane",
    rating: 5,
    destination: null,
    review:
      "It was a wonderful tour organized by Travel empire. Special thanks to Abhinav & Emanuel for their support during the tour. Keep it up.",
    image: "/images/yogesh.webp",
  },
  {
    name: "Srikant Pote",
    rating: 5,
    destination: null,
    review:
      "Thank you so much for the exceptional support and seamless service throughout our journey. Every detail was thoughtfully managed, making our overall experience truly memorable and hassle-free. We genuinely appreciate your efforts and look forward to traveling with you again.",
    image: null,
  },
  {},
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

export const TextTestimonials = () => {
  return (
    <>
      <div
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
      </div>
    </>
  );
};
