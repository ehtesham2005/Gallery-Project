import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import GalleryHero from "./components/GalleryHero";
import Footer from "./components/Footer";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [dataAvail, setDataAvail] = useState(false);
  const [index, setIndex] = useState(1);
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };
  let loading = "Loading...";

  useEffect(() => {
    getData();
  }, [index]);

  const getData = async () => {
    setUserData([]);
    setDataAvail(false);
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`,
    );
    setUserData(res.data);
    setDataAvail(true);
    const link = res.headers.link;
  };

  return (
    <div
      className={`${theme === "light" ? "light" : ""} bg-[#0D0F11] text-[#F5F5F5] light:bg-[#F5F6F8] light:text-[#202124] transition-colors duration-300 ease-in-out`}
    >
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="pt-20">
        <GalleryHero />
        {!dataAvail && (
          <p className="text-gray-400 text-2xl text-center py-20 ">{loading}</p>
        )}
        <Card userData={userData} />
      </main>
      <Footer index={index} setIndex={setIndex} />
    </div>
  );
};

export default App;
