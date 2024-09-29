const destinations = [
  {
    image: "../../public/images/paris.jpg",
    title: "Paris,France",
    description:
      "Paris, the capital of France, is famous for its art, culture, and landmarks like the Eiffel Tower and the Louvre. It's a global hub for fashion, cuisine, and history.",
  },
  {
    image: "../../public/images/bali.jpg",
    title: "Bali,Indonesia",
    description:
      "Bali is a popular Indonesian island known for its stunning beaches, vibrant culture, and spiritual temples. ",
  },
  {
    image: "../../public/images/antalya.jpg",
    title: "Antalya,Turkey",
    description:
      "Antalya is a picturesque city on Turkey's Mediterranean coast, known for its beautiful beaches, ancient ruins, and vibrant tourist resorts.",
  },
];

const PopularDestinatin = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Destinatins
        </h2>
        <div className="grid gap-6 sm:grid-cols-3 xl:grid-cols-4">
          {destinations.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img
                src={city.image}
                alt={city.title}
                className="w-full h-48 object-cover transform transition duration-300 hover:scale-110"
              />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">{city.title}</h4>
                <p className="text-gray-600">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinatin;
