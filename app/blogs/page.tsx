"use client";

import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Footer from './../../components/Footer';
import Navbar from './../../components/Navbar';

const blogPosts = [
  {
    id: 1,
    image: "/sale1.jpg",
    title: "10 Tips for First-Time Home Buyers",
    date: "2024-05-15",
    excerpt:
      "Buying your first home can be exciting and overwhelming. Here are 10 essential tips to help you navigate the process.",
  },
  {
    id: 2,
    image: "/sale2.jpg",
    title: "How to Stage Your Home for a Quick Sale",
    date: "2024-05-10",
    excerpt: "Learn the secrets of home staging that can help you sell your property faster and for a better price.",
  },
  {
    id: 3,
    image: "/sale3.jpg",
    title: "Understanding the Real Estate Market in 2023",
    date: "2024-05-05",
    excerpt: "Get insights into the current real estate market trends and what they mean for buyers and sellers.",
  },
  {
    id: 4,
    image: "/images/Dorai Central Park.jpeg",
    title: "The Pros and Cons of Living in a Gated Community",
    date: "2024-04-30",
    excerpt: "Explore the advantages and potential drawbacks of choosing a home in a gated community.",
  },
];

export default function Blogs() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Simulate API request delay
    toast.promise(
      new Promise((resolve) => setTimeout(() => resolve("Subscribed successfully!"), 1000)),
      {
        loading: "Subscribing...",
        success: "Subscribed successfully!",
        error: "Subscription failed. Try again!",
      }
    );

    // Clear input field after submission
    setEmail("");
  };

  return (
    <div>
    <Navbar/>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Real Estate Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{new Date(post.date).toLocaleDateString()}</p>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-blue-600 hover:underline">
                Read more
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Stay updated with the latest real estate news and tips</p>
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 rounded-l-lg border-t border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-r-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
