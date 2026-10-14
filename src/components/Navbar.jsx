import React from "react";
import { Image, Sun, Moon, User } from "lucide-react";

const Navbar = ({ theme, onToggleTheme }) => {
  return (
    <nav
      className="
        fixed top-0 left-0 z-50
        flex h-15 w-full items-center justify-between
        border-b border-[#292B30]
        bg-[#16191c] px-8 py-4 transition-colors duration-300 ease-in-out
        light:border-[#E7E9ED]
        light:bg-[#FFFFFF]
      "
    >
      <div className="flex gap-5 items-center">
        <Image
          size={28}
          className="text-amber-400 w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-colors duration-300 ease-in-out"
          absoluteStrokeWidth
        />
        <h3 className="text-white light:text-black text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-300 ease-in-out">
          Gallery
        </h3>
      </div>
      <div className="flex gap-8">
        <button className="cursor-pointer" onClick={onToggleTheme}>
          {theme === "dark" ? (
            <Sun
              size={28}
              className="text-[#f5d63d] w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-colors duration-300 ease-in-out"
              strokeWidth={2.25}
              absoluteStrokeWidth
            />
          ) : (
            <Moon
              size={28}
              className="text-[#FFD700] w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-colors duration-300 ease-in-out"
              fill="#FFD700"
              stroke="#FFD700"
              strokeWidth={2.25}
              absoluteStrokeWidth
            />
          )}
        </button>
        <button className="cursor-pointer">
          <User
            size={28}
            strokeWidth={2.5}
            absoluteStrokeWidth
            className="text-[#F5F5F5] light:text-[#202124] w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-colors duration-300 ease-in-out"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
