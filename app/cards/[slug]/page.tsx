import { notFound } from "next/navigation";
import Information, { CardData } from "@/lib/information";
import Navbar from '@/components/Navbar';
import Footer from './../../../components/Footer';
import Image from "next/image";  

interface CardPageProps {
  params: Promise<{ slug: string }>; // Make params asynchronous
}


const getCardData = (slug: string): CardData | null => {
  for (const section of Information) {
    const foundCard = section.cards.find((card) => card.slug === slug);
    if (foundCard) return foundCard;
  }
  return null;
};


const CardPage = async ({ params }: CardPageProps) => {
  const { slug } = await params; 
  
  // Get the card data synchronously
  const cardData = getCardData(slug);

  if (!cardData) {
    return notFound(); // Return 404 if data is not found
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-20 mb-20 p-6">
        <Image 
          src={cardData.image} 
          alt={cardData.title} 
          width={800}
          height={400} 
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{cardData.title}</h1>
        <p className="text-lg text-gray-700 mt-2">{cardData.description}</p>
      </div>
      <Footer />
    </div>
  );
};

export default CardPage;
