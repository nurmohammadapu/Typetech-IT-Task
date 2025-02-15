"use client";

import Image from "next/image";
import { FaHome, FaShieldAlt, FaChartLine } from "react-icons/fa";
import Footer from './../../components/Footer';
import Navbar from './../../components/Navbar';

// Reusable Section Header Component
type SectionHeaderProps = {
  title: string;
  subtitle: string;
  description?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, description }) => (
  <div className="mt-20 lg:text-center">
    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">{subtitle}</h2>
    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</p>
    {description && <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">{description}</p>}
  </div>
);

// Feature Data
type Feature = {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    id: 1,
    icon: FaHome,
    title: "Premium Properties",
    description: "Explore a wide range of high-quality homes, apartments, and commercial properties tailored to your needs.",
  },
  {
    id: 2,
    icon: FaShieldAlt,
    title: "Trusted & Secure",
    description: "Our platform ensures secure transactions, verified property listings, and expert guidance every step of the way.",
  },
  {
    id: 3,
    icon: FaChartLine,
    title: "Market Insights",
    description: "Get access to real-time market data and expert analysis to make informed property investment decisions.",
  },
];

// Team Member Data
type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  { id: 1, name: "Michael Carter", role: "Founder & CEO", image: "/one.jpg" },
  { id: 2, name: "Sophia Rodriguez", role: "Chief Real Estate Advisor", image: "/two.jpg" },
  { id: 3, name: "Daniel Lee", role: "Head of Customer Relations", image: "/three.jpg" },
];

export default function AboutPage() {
  return (
    <div>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Our Real Estate Platform
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Connecting buyers and sellers with the perfect properties, seamlessly and securely.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ id, icon: Icon, title, description }) => (
            <div key={id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                    <p className="mt-2 text-base text-gray-500">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Mission */}
        <SectionHeader
          title="Helping You Find Your Dream Property"
          subtitle="Our Mission"
          description="We strive to make property buying and selling an effortless experience. Our platform is designed to provide transparency, trust, and the best deals in the real estate market."
        />

        {/* Our Team */}
        <SectionHeader
          title="Meet the Experts Behind Our Platform"
          subtitle="Our Team"
        />

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map(({ id, name, role, image }) => (
            <div key={id} className="bg-white overflow-hidden shadow rounded-lg">
              <Image
                className="w-full h-48 object-cover"
                src={image}
                alt={name}
                width={400}
                height={400}
                priority
              />
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900">{name}</h3>
                <p className="text-base text-gray-500">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
