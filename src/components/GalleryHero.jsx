import React from "react";

const GalleryHero = () => {
  const links = ["All", "Nature", "Technology", "Travel", "Architecture"];
  return (
    <section className="px-8">
      <h1 className="text-white light:text-black text-2xl sm:text-4xl lg:text-6xl font-bold mb-3 transition-colors duration-300 ease-in-out">
        Explore the <span className="text-amber-400">Gallery</span>
      </h1>
      <p className="text-gray-400 text-xs sm:text-sm lg:text-lg mb-6 px-1">
        Discover beautiful photos from talented creators around the world.
      </p>
      <div className="flex gap-1.5 sm:gap-3 lg:gap-5">
        {links.map((ele, idx) => (
          <button
            key={idx}
            className={`
        px-2 sm:px-3 lg:px-5 py-1 rounded-3xl text-xs sm:text-sm lg:text-lg border border-gray-700 light:border-gray-200
        transition-colors duration-300 ease-in-out
        cursor-pointer
        ${
          ele === "All"
            ? "bg-amber-300 text-black"
            : "bg-gray-900 light:bg-[#FFFFFF] text-white light:text-black hover:bg-amber-300 hover:text-black transition-colors duration-300 ease-in-out"
        }
      `}
          >
            {ele}
          </button>
        ))}
      </div>
    </section>
  );
};

export default GalleryHero;
