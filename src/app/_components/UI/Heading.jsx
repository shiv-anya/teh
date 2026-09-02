export const Heading = ({ heading, highlight, subheading }) => {
  return (
    <div className="flex gap-1 flex-col mb-8 sm:mb-10">
      <h2 className="text-[clamp(1.8rem,5vw,2.5rem)] font-eb capitalize">
        {heading}{" "}
        <span className="text-blue-400 italic font-alex">{highlight}</span>
      </h2>

      <p className="text-base sm:text-lg text-gray-600">{subheading}</p>
    </div>
  );
};
