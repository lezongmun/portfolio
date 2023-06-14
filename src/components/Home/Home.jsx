import {React, useEffect, useState} from "react";
import "./home.css";

const Home = ({ scrollPosition }) => {
    const [bgWhiteStart, setBgWhiteStart] = useState(null);


    useEffect(() => {
        const bgWhiteStartElement = document.getElementById("about_page");
        if (bgWhiteStartElement) {
            setBgWhiteStart(bgWhiteStartElement.offsetTop / 2.5);
        }
    }, []);

    let bgWhiteClass = "";
    if (scrollPosition > bgWhiteStart) {
        bgWhiteClass += "bg-white";
    }

    return (
        <div id="home" className={bgWhiteClass}>
            <div id="name" className="home_body">
                MUN LE ZONG
            </div>
            <div id="description" className="home_body">
                Software Engineer
            </div>
        </div>
    )

}

export default Home;