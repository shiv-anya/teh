import Image from "next/image";
import { Container } from "./UI/Container";
import Link from "next/link";

const brands = [
  { brandName: "MakeMyTrip", logo: "" },
  { brandName: "Goibibo", logo: "" },
  { brandName: "Cleartrip", logo: "" },
  { brandName: "EaseMyTrip", logo: "" },
  { brandName: "Yatra", logo: "" },
  { brandName: "Booking.com", logo: "" },
  { brandName: "Expedia", logo: "" },
  { brandName: "Agoda", logo: "" },
  { brandName: "Skyscanner", logo: "" },
  { brandName: "Trip.com", logo: "" },
];

const quickLinks = [
  { title: "Home", link: "" },
  { title: "About Us", link: "" },
  { title: "Flight Booking", link: "" },
  { title: "Destinations", link: "" },
  { title: "Contact Us", link: "" },
];

const domesticDestinations = [
  { title: "Delhi", link: "" },
  { title: "Mumbai", link: "" },
  { title: "Goa", link: "" },
  { title: "Jaipur", link: "" },
  { title: "Kerala", link: "" },
];

const internationalDestinations = [
  { title: "Dubai", link: "" },
  { title: "Singapore", link: "" },
  { title: "Bali", link: "" },
  { title: "London", link: "" },
  { title: "Paris", link: "" },
];

const legal = [
  { title: "Terms & Conditions", link: "" },
  { title: "Privacy Policy", link: "" },
  { title: "Cancellation Policy", link: "" },
  { title: "Refund Policy", link: "" },
];

const ListedLinks = ({ list, title }) => {
  return (
    <div>
      <h2 className="text-white font-bold text-lg">{title}</h2>
      <ul className="text-sm text-gray-400 flex flex-col gap-4 mt-8">
        {list.map((l, i) => (
          <Link href={l.link} key={i}>
            {l.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

const Branding = () => {
  return (
    <div className="bg-gray-300 py-[clamp(1.6rem,5vw,4rem)]">
      <Container className="overflow-hidden">
        <div className="flex w-max items-center gap-8 animate-marquee hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((b, i) => (
            <p key={i} className="shrink-0 text-3xl font-semibold">
              {b.brandName}
            </p>
          ))}
        </div>
      </Container>
    </div>
  );
};

export const Footer = () => {
  return (
    <>
      <Branding />

      <div className="relative p-8">
        <Image
          src={"/images/mountains.jpg"}
          alt="mountains"
          fill
          className="absolute inset-0 object-center object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/90"></div>
        <Container>
          <div className="relative flex justify-between py-16 border-b border-gray-500 ">
            <div>
              <ListedLinks list={quickLinks} title={"Quick Links"} />
            </div>
            <div>
              <ListedLinks
                list={domesticDestinations}
                title={"Popular India"}
              />
            </div>
            <div>
              <ListedLinks
                list={internationalDestinations}
                title={"Explore Worldwide"}
              />
            </div>
            <div>
              <ListedLinks list={legal} title={"Legal"} />
            </div>
          </div>
          <div className="relative py-16 flex flex-col border-b border-gray-500 items-center text-center">
            <div className="flex flex-col">
              <h2 className="text-white text-3xl font-medium">
                Travel Empire Holidays
              </h2>
              <p className="text-white text-sm">
                <span>New Delhi, India</span>
              </p>
              <p className="text-sm text-gray-300 mt-5">
                Your trusted partner for seamless journeys, unforgettable
                experiences, and hassle-free travel.
              </p>
            </div>
            <div className="flex w-[60%] justify-around my-5 text-gray-300">
              <p className="bg-black/20 backdrop-blur-xs rounded-full py-2 px-6">
                <Link href="mailto:info@travelempireholidays.com">
                  info@travelempireholidays.com
                </Link>
              </p>

              <p className="bg-black/20 backdrop-blur-xs rounded-full py-2 px-6">
                <Link href="tel:+911140012345">+91 11 4001 2345</Link>
              </p>

              <p className="bg-black/20 backdrop-blur-xs rounded-full py-2 px-6">
                <Link href="https://travelempireholidays.com">
                  travelempireholidays.com
                </Link>
              </p>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-300 items-center relative pt-8">
            <p>© 2026 Trvltkts Travel. All rights reserved.</p>

            <div className="flex gap-5">
              <Link href="/cookies-policy">Cookies and Privacy Policy</Link>
              <Link href="/terms-conditions">Terms & Conditions</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
