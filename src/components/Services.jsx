import {
  FaConciergeBell,
  FaHotel,
  FaPlane,
  FaUmbrellaBeach,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPlane className="text-4xl text-blue-500" />,
    title: "Flight Booking",
    description:
      "We provide easy and quick flight booking services to make your travel hassle-free",
  },
  {
    icon: <FaHotel className="text-4xl text-blue-500" />,
    title: "Hotel Booking",
    description:
      "Book hotels at the pest prices with our exclusive deals and discounts",
  },
  {
    icon: <FaUmbrellaBeach className="text-4xl text-blue-500" />,
    title: "Beach Tours",
    description:
      "Enjoy relaxing beach tours with all-inclusive packages and guided tours",
  },
  {
    icon: <FaConciergeBell className="text-4xl text-blue-500" />,
    title: "Concierge Services",
    description:
      "Get personalized concierge sevices for a seamless travel experience",
  },
];

const Services = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md flex flex-col  p-4 items-center  cursor-pointer transition duration-300 hover:scale-110"
            >
              <div className="mb-4 ">{service.icon}</div>

              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
