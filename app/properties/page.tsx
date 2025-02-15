import Image from "next/image"
import Footer from './../../components/Footer';
import Navbar from "@/components/Navbar";

const properties = [
  { id: 1, image: "/images/Mid Beach.jpeg",title: "Modern Apartment", price: "$250,000", beds: 2, baths: 2, sqft: 1200 },
  { id: 2, image: "/images/South Beach.jpeg", title: "Cozy Townhouse", price: "$350,000", beds: 3, baths: 2.5, sqft: 1800 },
  { id: 3, image: "/images/Miami.jpeg", title: "Luxury Villa", price: "$1,200,000", beds: 5, baths: 4, sqft: 4500 },
  { id: 4, image: "/images/Founders Park.jpeg", title: "City Loft", price: "$180,000", beds: 1, baths: 1, sqft: 800 },
  { id: 5, image: "/images/Dorai Central Park.jpeg", title: "Suburban Home", price: "$450,000", beds: 4, baths: 3, sqft: 2500 },
  { id: 6, image: "/images/Wynwood.jpeg", title: "Beachfront Condo", price: "$550,000", beds: 2, baths: 2, sqft: 1500 },
]

export default function Properties() {
  return (
    <div>
    <Navbar/>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Properties</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={property.image}
                alt={property.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
              <p className="text-gray-600 mb-4">{property.price}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{property.beds} beds</span>
                <span>{property.baths} baths</span>
                <span>{property.sqft} sqft</span>
              </div>
              <p
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                View Details
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  )
}

