import { TextTestimonials } from "./TextTestimonials";
import { Container } from "./UI/Container";
import VideoTestimonials from "./VideoTestimonials";

export const Reviews = () => {
  return (
    <section className="my-[clamp(1.6rem,5vw,4rem)]">
      <Container>
        <div className="flex flex-col items-start lg:items-center gap-[clamp(0.25rem,2vw,0.5rem)]">
          <h2 className="capitalize text-[clamp(1.8rem,5vw,2.5rem)]">
            Loved by Travelers, Backed by experiences
          </h2>
          <p className="text-gray-600">
            Real stories, from real people who explored world with us
          </p>
        </div>
        <TextTestimonials />
        <VideoTestimonials />
      </Container>
    </section>
  );
};
