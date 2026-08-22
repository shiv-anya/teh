import Image from "next/image";
import { Container } from "./UI/Container";
import { Headphones, MapPinned, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Personalized Itineraries",
  },
  {
    icon: MapPinned,
    title: "Expert Travel Guidance",
  },
  {
    icon: ShieldCheck,
    title: "Hassle-Free Planning",
  },
  {
    icon: Headphones,
    title: "Quick Response",
  },
];

export const Enquiry = () => {
  return (
    <Container>
      <section className="my-16 h-screen w-full h-max-[800px] relative flex justify-end rounded-2xl overflow-hidden">
        <Image
          src={"/images/form_bg.jpg"}
          alt="travel form background"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        <div className="w-1/2 p-10 py-20 h-full text-white relative flex justify-center items-center">
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col gap-5">
              <h2 className="text-5xl font-bold">
                Let&apos;s Plan Your Perfect Escape.
              </h2>
              <p>
                Tell us a little about your trip and our travel experts will
                create a package that fits your plans, preferences, and budget.
              </p>
            </div>
            <div className="flex gap-5 bg-black/20 rounded-2xl font-bold overflow-hidden backdrop-blur-sm p-5">
              {features.map((f, i) => (
                <div className="" key={i}>
                  <div className="">
                    <f.icon />
                  </div>
                  <p>{f.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full relative flex justify-center items-center">
          <div className="bg-red-500">
            <form></form>
          </div>
        </div>
      </section>
    </Container>
  );
};
