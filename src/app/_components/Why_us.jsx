import Image from "next/image";
import { Container } from "./UI/Container";
import { ArrowRight } from "lucide-react";
import { Counter } from "./UI/Counter";

export const statistics = [
  {
    number: 15,
    title: "Years Experience",
  },
  {
    number: 50,
    title: "Happy Travellers",
  },
  {
    number: 80,
    title: "International Trips",
  },
  {
    number: 150,
    title: "India Tour Packages",
  },
];

export const WhyUs = () => {
  return (
    <section className="h-auto my-[clamp(1.6rem,5vw,4rem)] mt-15">
      <Container>
        <div className="flex flex-col gap-[clamp(0.25rem,2vw,0.5rem)]">
          <p className="uppercase font-bold text-blue-500 bg-blue-500/10 w-fit p-1 px-3 rounded-full text-sm">
            Why choose us
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex-1 font-jakarta text-5xl font-bold leading-10 md:leading-12 lg:leading-16">
              <h2 className="w-full text-[clamp(1.8rem,5vw,2.5rem)]">
                Handpicked Journeys, <br /> Perfectly Crafted
              </h2>
            </div>
            <div className="flex-1 md:text-right">
              Whether you&apos;re seeking adventure, relaxation, or cultural
              immersion, our curated itineraries ensure every moment of your
              journey is unforgettable.
            </div>
          </div>
          <div className="h-150 mt-8 w-full relative rounded-2xl overflow-hidden">
            <Image
              src={"/images/woman.png"}
              fill
              alt="selfie of a woman on an adventure"
              className="absolute h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-transparent backdrop-blur-xs flex rounded-2xl justify-center items-center"></div>
            <div className="absolute inset-5 backdrop-blur-xl flex bg-white rounded-2xl justify-center items-center">
              <div className="overflow-hidden h-[98%] w-[99%] rounded-2xl relative flex items-end p-5">
                <Image
                  src={"/images/woman.png"}
                  fill
                  alt="selfie of a woman on an adventure"
                  className="absolute h-full w-full object-cover"
                />
                <div className="h-auto w-full bg-white relative rounded-2xl flex flex-col gap-[clamp(0.2rem,2vw,1rem)] lg:flex-row justify-between lg:items-center p-[clamp(0.5rem,3vw,1rem)]">
                  <div className="lg:w-[70%] flex flex-col gap-[clamp(0.25rem,2vw,0.5rem)]">
                    <h2 className="text-[clamp(1.8rem,5vw,2.5rem)] font-semibold hidden md:block leading-10 md:leading-12">
                      Unforgettable Moments for All Ages
                    </h2>
                    <p className="text-gray-700">
                      Travel experiences designed to entertain, educate, and
                      bond families together. From amusement parks to cultural
                      tours, we make family travel simple and memorable.
                    </p>
                  </div>

                  <button className="bg-black text-white rounded-full w-fit px-6 py-2 flex justify-center items-center cursor-pointer">
                    See Itineraries{" "}
                    <ArrowRight
                      size={20}
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        marginLeft: "10px",
                        borderRadius: "100%",
                        padding: "2px",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[clamp(0.5rem,2vw,1rem)] mt-8">
            {statistics.map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 shadow-people flex-1 flex flex-col items-center gap-[clamp(0.25rem,2vw,0.5rem)]"
              >
                <h2 className="text-blue-400 font-bold text-[clamp(1.8rem,5vw,2.5rem)]">
                  <Counter value={stat.number} />
                  {stat.number === 50 ? <span>K+</span> : <span>+</span>}
                </h2>
                <p className="text-xl text-gray-800 font-semibold">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
