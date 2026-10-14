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
    <div className="flex flex-wrap gap-x-2 gap-y-5 lg:gap-10 m-5 p-5">
      {props.userData.map((ele) => {
        return (
          <div
            key={ele.id}
            className="w-[calc(50%-4px)] sm:w-48 lg:w-64 grow aspect-[4/3] rounded-xl overflow-hidden"
          >
            <div className="w-full h-[85%]">
              <img
                className="h-full w-full object-cover"
                src={ele.download_url}
                alt=""
              />
            </div>
            <div className="bg-gray-800 light:bg-[#dddada] w-full h-[15%]  px-4 py-2 flex justify-between items-center transition-colors duration-300 ease-in-out">
              <div>
                <h2 className="text-[2.4vw] xs:text-[0.575rem] sm:text-[0.75rem] lg:text-sm text-white light:text-black truncate max-w-[60%]: transition-colors duration-300 ease-in-out">
                  {ele.author}
                </h2>
              </div>
              <div className="flex gap-x-1 lg:gap-x-2 items-center shrink-0 justify-end">
                <Heart
                  className={`cursor-pointer w-3 sm:w-4 lg:w-5 h-auto ${
                    likedCards[ele.id]
                      ? "text-[#ED4956] transition-colors duration-300 ease-in-out"
                      : "text-[#F5F5F5] light:text-[#202124] transition-colors duration-300 ease-in-out"
                  }`}
                  fill={likedCards[ele.id] ? "#ED4956" : "none"}
                  strokeWidth={1.25}
                  size={18}
                  onClick={() => {
                    handleLike(ele.id);
                  }}
                />
                <Bookmark
                  className={`cursor-pointer w-3 sm:w-4 lg:w-5 ${
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
