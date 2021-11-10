import Card from "./Card";

const cards = [
  {
    category: "All-in-one",
    title: "Lorem all of your file management on PicLab ipsum.",
    text: "No more need to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "/images/card-1.jpeg",
  },
  {
    category: "Organization",
    title: "Lorem ipsum organization dor sit epsilon.",
    text: "Easily organize all of lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "/images/card-2.jpeg",
  },
  {
    category: "Lorem",
    title: "Lorem all of your file management on PicLab ipsum.",
    text: "No more need to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "/images/card-3.jpeg",
  },
];

const CardsSection = () => {
  return (
    <div className="flex flex-col items-center pt-20">
      <div className="w-full sm:w-2/3 md:w-1/3 px-6">
        <h1 className="text-lg sm:text-xl text-white text-center">
          Why <span className="font-semibold">PicLab</span> is the perfect lorem
          ipsum for you.
        </h1>
      </div>

      <div className="scroll-x no-scrollbar mt-20 px-8 md:px-14">
        {cards.map((card) => (
          <Card key={card.title} content={card} />
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
