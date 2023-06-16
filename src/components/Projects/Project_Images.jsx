import React, { useEffect } from "react";
import  "./project_images.css";


const ProjectImages = () => {

    useEffect(() => {
        
        var divisor_1 = 7;
        var divisor_2 = 15;
        var divisor_3 = 10;
        var divisor_4 = 20;


        const aroundnusStart = document.getElementById("aroundnus_images");
        const aroundnusScrollPosition = aroundnusStart.offsetTop;


        var aroundnus_img1 = document.getElementById("aroundnus_img1");
        var aroundnus_img2 = document.getElementById("aroundnus_img2");
        var aroundnus_img3 = document.getElementById("aroundnus_img3");
        var aroundnus_img4 = document.getElementById("aroundnus_img4");


        const contechStart = document.getElementById("contech_images");
        const contechScrollPosition = contechStart.offsetTop;

        var contech_img1 = document.getElementById("contech_img1");
        var contech_img2 = document.getElementById("contech_img2");
        var contech_img3 = document.getElementById("contech_img3");
        var contech_img4 = document.getElementById("contech_img4");


        const eatwhereStart = document.getElementById("eatwhere_images");
        const eatwhereScrollPosition = eatwhereStart.offsetTop;

        var eatwhere_img1 = document.getElementById("eatwhere_img1");
        var eatwhere_img2 = document.getElementById("eatwhere_img2");
        var eatwhere_img3 = document.getElementById("eatwhere_img3");
        var eatwhere_img4 = document.getElementById("eatwhere_img4");



        function parallax() {
            
            var yPos_1 = 0 - window.scrollY/divisor_1;	
            var yPos_2 = 0 - window.scrollY/divisor_2;	
            var yPos_3 = 0 - window.scrollY/divisor_3;	
            var yPos_4 = 0 - window.scrollY/divisor_4;	

        
            // AROUNDNUS
            aroundnus_img1.style.top = (aroundnusScrollPosition/divisor_1) + yPos_1 + "%";
            aroundnus_img2.style.top = (aroundnusScrollPosition/divisor_2) + yPos_2 + "%";
            aroundnus_img3.style.top = (aroundnusScrollPosition/divisor_3) + yPos_3 + "%";
            aroundnus_img4.style.top = (aroundnusScrollPosition/divisor_4) + yPos_4 + "%";

            // CONTECH
            contech_img1.style.top = (contechScrollPosition/divisor_1) + yPos_1 + "%";
            contech_img2.style.top = (contechScrollPosition/divisor_2) + yPos_2 + "%";
            contech_img3.style.top = (contechScrollPosition/divisor_3) + yPos_3 + "%";
            contech_img4.style.top = (contechScrollPosition/divisor_4) + yPos_4 + "%";


            // EATWHERE
            eatwhere_img1.style.top = (eatwhereScrollPosition/divisor_1) + yPos_1 + "%";
            eatwhere_img2.style.top = (eatwhereScrollPosition/divisor_2) + yPos_2 + "%";
            eatwhere_img3.style.top = (eatwhereScrollPosition/divisor_3) + yPos_3 + "%";
            eatwhere_img4.style.top = (eatwhereScrollPosition/divisor_4) + yPos_4 + "%";


          //alert(yPos);
        }
        
        window.addEventListener("scroll", parallax);

        // Clean up the scroll event listener when the component unmounts or the page becomes hidden
        return () => {
            window.removeEventListener("scroll", parallax);
        };
    }, []);

    return (

        <div id="projects_images" >
            <div id="aroundnus_images" className="images">
                <div className="column">
                    <div id="aroundnus_img1" className="image image1"></div>
                    <div id="aroundnus_img3" className="image image3"></div>
                </div>
                <div className="column">
                    <div id="aroundnus_img2" className="image image2"></div>
                    <div id="aroundnus_img4" className="image image4"></div>
                </div>
            </div>

            <div id="contech_images" className="images">
                <div className="column">
                    <div id="contech_img1" className="image cli_image1"></div>
                    <div id="contech_img3" className="image cli_image3"></div>
                </div>
                <div className="column">
                    <div id="contech_img2" className="image cli_image2"></div>
                    <div id="contech_img4" className="image cli_image4"></div>
                </div>
            </div>

            <div id="eatwhere_images" className="images">
                <div className="column">
                    <div id="eatwhere_img1" className="image image1"></div>
                    <div id="eatwhere_img3" className="image image3"></div>
                </div>
                <div className="column">
                    <div id="eatwhere_img2" className="image image2"></div>
                    <div id="eatwhere_img4" className="image image4"></div>
                </div>
            </div>

        </div>
    )

}

export default ProjectImages;