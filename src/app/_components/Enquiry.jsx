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
      <section className="my-[clamp(1.6rem,5vw,4rem)] h-auto md:h-screen w-full md:max-h-[900px] lg:max-h-[750px] relative flex flex-col lg:flex-row justify-end rounded-2xl overflow-hidden">
        <Image
          src={"/images/form_bg.jpg"}
          alt="travel form background"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        <div className="w-full lg:w-[55%] p-10 py-5 lg:py-20 h-full text-white relative flex justify-center items-center">
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col gap-[clamp(0.25rem,2vw,1rem)]">
              <h2 className="text-[clamp(1.8rem,5vw,2.5rem)]">
                Let&apos;s Plan Your Perfect Escape.
              </h2>
              <p>
                Tell us a little about your trip and our travel experts will
                create a package that fits your plans, preferences, and budget.
              </p>
            </div>
            <div className="hidden md:flex bg-black/20 w-fit rounded-2xl overflow-hidden backdrop-blur-sm py-5">
              {features.map((f, i) => (
                <div
                  className={`flex flex-col gap-[clamp(0.25rem,2vw,1rem)] items-center px-5 ${
                    i === features.length - 1 ? "" : "border-r border-gray-500"
                  }`}
                  key={i}
                >
                  <div>
                    <f.icon />
                  </div>
                  <p className="text-center text-xs">{f.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[45%] h-full relative flex justify-center items-center px-8 pb-8 lg:p-8 text-white">
          <div className="bg-black/50 shadow-glass backdrop-blur-sm h-fit w-full rounded-2xl p-8">
            <h2 className="text-[clamp(1.8rem,5vw,2.5rem)] border-b border-gray-500 text-center pb-4">
              Allow us to call you back
            </h2>
            <form className="w-full max-w-2xl mx-auto">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="my-4 block text-sm font-medium text-gray-100"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-500 px-4 py-3 outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-slate-900/10"
                  required
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1">
                <div>
                  <label
                    htmlFor="email"
                    className="my-4 block text-sm font-medium text-gray-100"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-500 px-4 py-3 outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-slate-900/10"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="my-4 block text-sm font-medium text-gray-100"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-gray-500 px-4 py-3 outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-slate-900/10"
                    required
                  />
                </div>
              </div>

              {/* Travel Date + Travellers */}
              <div className="grid grid-cols-1 gap-[clamp(0.25rem,2vw,1rem)] md:grid-cols-2">
                <div>
                  <label
                    htmlFor="travelDate"
                    className="my-4 block text-sm font-medium text-gray-100"
                  >
                    Travel Date
                  </label>

                  <input
                    id="travelDate"
                    name="travelDate"
                    type="date"
                    className="w-full rounded-xl border border-gray-500 px-4 py-3 outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-slate-900/10"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="travellers"
                    className="my-4 block text-sm font-medium text-gray-100"
                  >
                    Number of Travellers
                  </label>

                  <input
                    id="travellers"
                    name="travellers"
                    type="number"
                    min="1"
                    placeholder="2"
                    className="w-full rounded-xl border border-gray-500 px-4 py-3 outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-slate-900/10"
                    required
                  />
                </div>
              </div>

              {/* Budget */}
              {/* <div>
                <label
                  htmlFor="budget"
                  className="my-4 block text-sm font-medium text-gray-100"
                >
                  Approximate Budget
                </label>

                <select
                  id="budget"
                  name="budget"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-slate-900/10"
                >
                  <option value="">Select your budget</option>
                  <option value="under-50000">Under ₹50,000</option>
                  <option value="50000-100000">₹50,000 – ₹1,00,000</option>
                  <option value="100000-200000">₹1,00,000 – ₹2,00,000</option>
                  <option value="200000+">₹2,00,000+</option>
                </select>
              </div> */}

              {/* Message */}
              {/* <div>
                <label
                  htmlFor="message"
                  className="my-4 block text-sm font-medium text-gray-100"
                >
                  Anything else you'd like us to know?
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your trip..."
                  className="w-full resize-none rounded-xl border border-gray-500 px-4 py-3 outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-slate-900/10"
                />
              </div> */}

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-black mt-4 px-5 py-3.5 font-medium text-white transition hover:bg-[#0b2033] active:scale-[0.99]"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
};
