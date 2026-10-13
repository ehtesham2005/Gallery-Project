import React, { useEffect, useState } from "react";
import { Heart, Bookmark } from "lucide-react";

const Card = (props) => {
  const [likedCards, setLikedCards] = useState({});
  const [savedCards, setSavedCards] = useState({});
  useEffect(() => {
    console.log(likedCards);
  }, [likedCards, savedCards]);

  const handleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSave = (id) => {
    setSavedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex flex-wrap gap-10 m-5 p-5">
      {props.userData.map((ele) => {
        return (
          <div
            key={ele.id}
            className="w-32 sm:w-48 lg:w-64 aspect-[4/3] rounded-xl overflow-hidden"
          >
            <div className="w-full h-[85%]">
              <img
                className="h-full w-full object-cover"
                src={ele.download_url}
                alt=""
              />
            </div>
            <div className="bg-gray-800 light:bg-[#edeaea] w-full h-[15%]  px-4 py-2 flex justify-between items-center transition-colors duration-300 ease-in-out">
              <div>
                <h2 className="text-[0.375rem] sm:text-[0.75rem] lg:text-sm text-white light:text-black transition-colors duration-300 ease-in-out">
                  {ele.author}
                </h2>
              </div>
              <div className="flex gap-2 items-center">
                {/* <Heart
                  className={`cursor-pointer ${
                    likedCards[ele.id]
                      ? "text-[#FFC233] light:text-[#111315]"
                      : "text-[#F5F5F5] light:text-[#202124]"
                  }`}
                  fill={likedCards[ele.id] ? "#FFC233" : "none"}
                  strokeWidth={1.25}
                  size={18}
                  onClick={() => {
                    handleLike(ele.id);
                  }}
                /> */}
                <Heart
                  className="cursor-pointer w-2 sm:w-4 lg:w-5"
                  color={likedCards[ele.id] ? "#FFC233" : undefined}
                  fill={likedCards[ele.id] ? "#FFC233" : "none"}
                  strokeWidth={1.25}
                  onClick={() => {
                    handleLike(ele.id);
                  }}
                />
                <Bookmark
                  className={`cursor-pointer w-2 sm:w-4 lg:w-5 ${
                    savedCards[ele.id]
                      ? "text-[#FFFFFF] light:text-[#111315] transition-colors duration-300 ease-in-out"
                      : "text-[#F5F5F5] light:text-[#202124] transition-colors duration-300 ease-in-out"
                  }`}
                  fill={savedCards[ele.id] ? "currentColor" : "none"}
                  strokeWidth={1.25}
                  onClick={() => {
                    handleSave(ele.id);
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
