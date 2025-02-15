"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { MapPin, Phone, Mail } from "lucide-react";
import Footer from './../../components/Footer';
import Navbar from './../../components/Navbar';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setFormStatus("sent");
      toast.success("Message sent successfully!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);  // Log the error message
      } else {
        console.error("An unexpected error occurred");
      }
      toast.error("Something went wrong. Please try again.");
      setFormStatus("idle");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              We&apos;re here to help you with any questions you may have about our properties or services. Feel free to reach
              out to us using the contact information below or by filling out the form.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                <span>123 Real Estate St, City, State 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-2" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-2" />
                <span>info@realestate.com</span>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                  disabled={formStatus === "sending" || formStatus === "sent"}
                >
                  {formStatus === "sending" ? "Sending..." : formStatus === "sent" ? "Sent!" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
