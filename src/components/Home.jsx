import React from "react";
import { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
        <div id="home" className={scrollPosition > 270 ? 'home bg-white' : 'home'}>
            <div id="home_body">
                <div id="name" className="home_body">
                    MUN LE ZONG
                </div>
                <div id="description" className="home_body">
                    Software Engineer
                </div>
            </div>
        </div>
    )

}

export default Home;