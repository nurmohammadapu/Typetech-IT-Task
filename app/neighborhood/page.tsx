import Image from "next/image";
import Footer from './../../components/Footer';
import Navbar from './../../components/Navbar';
const neighborhoods = [
  {
    id: 1,
    image: "/images/Wynwood.jpeg",
    name: "Downtown",
    description: "Vibrant city life with easy access to restaurants, shops, and entertainment.",
  },
  {
    id: 2,
    image: "/images/South Beach.jpeg",
    name: "Suburbia",
    description: "Quiet residential areas perfect for families, with great schools and parks.",
  },
  {
    id: 3,
    image: "/images/Founders Park.jpeg",
    name: "Beachside",
    description: "Relaxed coastal living with beautiful ocean views and water activities.",
  },
  {
    id: 4,
    image: "/images/Miami.jpeg",
    name: "Historic District",
    description: "Charming area with well-preserved architecture and rich cultural heritage.",
  },
];

export default function Neighborhood() {
  return (
    <div>
    <Navbar/>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore Our Neighborhoods</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {neighborhoods.map((neighborhood) => (
          <div key={neighborhood.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              {neighborhood.image ? (
                <Image
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <div className="h-64 bg-gray-300 flex items-center justify-center text-gray-600">
                  No Image Available
                </div>
              )}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{neighborhood.name}</h2>
              <p className="text-gray-600">{neighborhood.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Neighborhoods?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Safe Communities</h3>
            <p className="text-gray-600">Our neighborhoods prioritize safety with active community watch programs and well-lit streets.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Great Schools</h3>
            <p className="text-gray-600">Access to top-rated schools for all ages, from elementary to high school.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Amenities Nearby</h3>
            <p className="text-gray-600">Enjoy easy access to shopping centers, parks, and recreational facilities.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
