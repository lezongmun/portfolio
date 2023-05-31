import React from "react";
import "./home.css";

const Home = ({ scrollPosition }) => {
    let classNames = "";
    if (scrollPosition > 270) {
        classNames += "bg-white";
    }

    return (
        <div id="home" className={classNames}>
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