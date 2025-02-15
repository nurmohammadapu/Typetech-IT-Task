export interface CardData {
  image: string;
  title: string;
  description: string;
  slug: string;  
}

export interface SectionData {
  name: string;
  cards: CardData[];
}

const Information: SectionData[] = [
  {
      name: "Broward County",
      cards: [
          {
              image: "/images/Miami-Dade County.jpeg",
              title: "Miami-Dade County",
              description: "A vibrant metropolitan area known for its stunning beaches, luxury real estate, and thriving cultural scene.",
              slug: "miami-dade-county",
          },
          {
              image: "/images/South Beach.jpeg",
              title: "South Beach",
              description: "An iconic destination known for its Art Deco architecture, pristine beaches, and vibrant nightlife.",
              slug: "south-beach",
          },
          {
              image: "/images/Miami.jpeg",
              title: "Miami",
              description: "A dynamic city blending modern luxury with cultural diversity, offering some of the most sought-after properties in the world.",
              slug: "miami",
          },
          {
              image: "/images/Mid Beach.jpeg",
              title: "Mid Beach",
              description: "A quieter alternative to South Beach, offering oceanfront luxury and world-class resorts.",
              slug: "mid-beach",
          },
      ]
  },

  {
      name: "Miami Dade County",
      cards: [
          {
              image: "/images/Miami-Dade County.jpeg",
              title: "Miami-Dade County",
              description: "A vibrant metropolitan area known for its stunning beaches, luxury real estate, and thriving cultural scene.",
              slug: "miami-dade-county",
          },
          {
              image: "/images/Brickell.jpeg",
              title: "Brickell",
              description: "Miami’s financial hub, featuring high-rise condos, upscale restaurants, and breathtaking waterfront views.",
              slug: "brickell",
          },
          {
              image: "/images/Downtown Miami.jpeg",
              title: "Downtown Miami",
              description: "A bustling district with modern skyscrapers, cultural attractions, and a lively nightlife scene.",
              slug: "downtown-miami",
          },
          {
            image: "/images/Wynwood.jpeg",
            title: "Wynwood",
            description: "A vibrant metropolitan area known for its stunning beaches, luxury real estate, and thriving cultural scene.",
            slug: "miami-Wynwood",
        },
        {
            image: "/images/Edgewater.jpeg",
            title: "Edgewater",
            description: "Miami’s financial hub, featuring high-rise condos, upscale restaurants, and breathtaking waterfront views.",
            slug: "brickell-Edgewater",
        },
        {
            image: "/images/Doral Central.jpeg",
            title: "Doral Central",
            description: "A bustling district with modern skyscrapers, cultural attractions, and a lively nightlife scene.",
            slug: "downtown-Doral-Central",
        },
        {
          image: "/images/Mid Beach.jpeg",
          title: "Mid Beach",
          description: "A vibrant metropolitan area known for its stunning beaches, luxury real estate, and thriving cultural scene.",
          slug: "miami-dade-Mid-Beach",
      },
      {
          image: "/images/South Beach.jpeg",
          title: "South Beach",
          description: "Miami’s financial hub, featuring high-rise condos, upscale restaurants, and breathtaking waterfront views.",
          slug: "brickell-South-Beach",
      },
      {
        image: "/images/Miami.jpeg",
        title: "Miami",
        description: "A vibrant metropolitan area known for its stunning beaches, luxury real estate, and thriving cultural scene.",
        slug: "miami-dade-county-Miami",
    },
    {
        image: "/images/Founders Park.jpeg",
        title: "Founders Park",
        description: "Miami’s financial hub, featuring high-rise condos, upscale restaurants, and breathtaking waterfront views.",
        slug: "brickell-Founders-Park",
    },
    {
        image: "/images/Dorai Central Park.jpeg",
        title: "Dorai Central Park",
        description: "A bustling district with modern skyscrapers, cultural attractions, and a lively nightlife scene.",
        slug: "downtown-miami-Dorai-Central-Park",
    },

      ]
  },

  {
      name: "Monroe County",
      cards: [
          {
              image: "/images/Miami-Dade County.jpeg",
              title: "Miami-Dade County",
              description: "A vibrant metropolitan area known for its stunning beaches, luxury real estate, and thriving cultural scene.",
              slug: "miami-dade-county",
          },
          {
              image: "/images/South Beach.jpeg",
              title: "South Beach",
              description: "An iconic destination known for its Art Deco architecture, pristine beaches, and vibrant nightlife.",
              slug: "south-beach",
          },
      ]
  },

  {
      name: "Palm Beach County",
      cards: [
          {
              image: "/images/Miami-Dade County.jpeg",
              title: "Miami-Dade County",
              description: "A vibrant metropolitan area known for its stunning beaches, luxury real estate, and thriving cultural scene.",
              slug: "miami-dade-county",
          },
          {
              image: "/images/South Beach.jpeg",
              title: "South Beach",
              description: "An iconic destination known for its Art Deco architecture, pristine beaches, and vibrant nightlife.",
              slug: "south-beach",
          },
      ]
  },
];

export default Information;
