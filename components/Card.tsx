"use client";
import { TextSearch } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type CardProps = {
  title: string;
  time: string;
  details: string;
  id: string;
  refs: string[] | null;
  image: string;
};

export default function Card({
  title,
  time,
  details,
  id,
  refs,
  image
}: CardProps) {
  const [showSources, setShowSources] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <>
      <section
        id={id}
        className={` flex flex-col justify-center w-1/2 h-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 transition-transform duration-300 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className={`${flipped ? "hidden" : "block"}`}>
          <h2 className="italic text-gray-400 text-right mr-2">
            {time} Years Ago
          </h2>
          <h1 className="font-semibold text-2xl">{title}</h1>
          <p>{details}</p>
          <div className="flex justify-between mt-4">
            <div>
              <Image
                src={image}
                alt="Supporting Image"
                width={100}
                height={100}
              />
            </div>
            <div className="flex items-center">
              <span
                className={`opacity-${
                  showSources ? "100" : "0"
                } mr-2 transition-opacity cursor-default`}
              >
                Show Sources
              </span>
              <button
                className="bg-black/30 p-3 rounded-full"
                onClick={handleClick}
                onMouseEnter={() => setShowSources(true)}
                onMouseLeave={() => setShowSources(false)}
              >
                <TextSearch />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${flipped ? "block" : "hidden"} rotate-y-180 text-left`}
        >
          <div>
            <h1 className="font-semibold text-2xl">Sources</h1>
            <ul className="space-y-2">
              {refs
                ? refs.map((ref, index) => <li key={index}>{ref}</li>)
                : null}
            </ul>
          </div>
          <div className="flex justify-end mt-4">
            <div className="flex items-center">
              <span
                className={`opacity-${
                  showSources ? "100" : "0"
                } mr-2 transition-opacity cursor-default`}
              >
                Show Info
              </span>
              <button
                className="bg-black/30 p-3 rounded-full"
                onClick={handleClick}
                onMouseEnter={() => setShowSources(true)}
                onMouseLeave={() => setShowSources(false)}
              >
                <TextSearch />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
