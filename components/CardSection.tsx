"use client";
import React, { useState } from "react";
import Link from "next/link"; 
import Image from "next/image"; // Import Image component from Next.js
import Information, { SectionData } from "@/lib/information";

const CardSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-20 mb-[899px]">
      <div className="w-9/12 mx-auto flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="w-full">
          {Information.map((data: SectionData, index: number) => (
            <div key={index} className="mb-9 w-full flex flex-col gap-6 pb-4">
              <div className="flex w-[full] border-b border-brown-200 pb-4 items-center justify-between">
                <p className="font-bold text-[22px]">{data.name}</p>
                <div className="flex items-center justify-center gap-8">
                  {activeIndex === index ? (
                    <div className="hidden md:flex gap-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="hover:scale-150"
                      >
                        <path
                          d="M17.5 17.5L13.9166 13.9166M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="hover:scale-150"
                      >
                        <path
                          d="M17.5 13.334L14.1667 16.6673M14.1667 16.6673L10.8333 13.334M14.1667 16.6673V3.33398M2.5 6.66732L5.83333 3.33398M5.83333 3.33398L9.16667 6.66732M5.83333 3.33398V16.6673"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="hover:scale-150"
                      >
                        <path
                          d="M2.5 13.334L5.83333 16.6673M5.83333 16.6673L9.16667 13.334M5.83333 16.6673V3.33398M9.16667 3.33398H17.5M9.16667 6.66732H15M9.16667 10.0007H12.5"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  ) : null}
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="ml-2 transition-all duration-400"
                  >
                    {activeIndex === index ? (
                      <div className="flex gap-8 justify-center items-center">
                        <div className="p-[14px] flex items-center justify-center rounded-[8px] bg-[#F3F3F3] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M5.83203 5.83398H14.1654M14.1654 5.83398V14.1673M14.1654 5.83398L5.83203 14.1673"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div className="p-[14px] flex items-center justify-center rounded-[8px] bg-[#FF5A3C] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5.83203 5.83398L14.1654 14.1673M14.1654 14.1673V5.83398M14.1654 14.1673H5.83203"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                </div>
              </div>

              {activeIndex === index && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {data.cards.map((card) => (
                    <Link
                      key={card.slug}
                      href={`/cards/${card.slug}`}
                      className="border gap-5 p-6 rounded-[20px] shadow-lg flex flex-col"
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={500} // specify width
                        height={177} // specify height
                        className="w-full h-[177px] rounded-[24px] mb-2"
                      />
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-[22px]">{card.title}</h3>
                        <div className="p-[14px] flex items-center justify-center rounded-[8px] bg-[#F3F3F3] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M5.83203 5.83398H14.1654M14.1654 5.83398V14.1673M14.1654 5.83398L5.83203 14.1673"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
