import React from "react";
import { useState, useEffect } from "react";

import "./navbar.css";

const NavBar = ({ scrollPosition }) => {
    let navbarClassNames = "";
    if (scrollPosition > 290) {
        navbarClassNames += "bg-white";
    }

    const headerItems = [
        {id: "home", href: "home_page", label: "HOME"},
        {id: "about", href: "about_page", label: "ABOUT"},
        {id: "projects", href: "projects_page", label: "PROJECTS"},
        {id: "contact", href: "contact_page", label: "CONTACT"}
    ];


    const [activeItem, setActiveItem] = useState(headerItems[0].id);
    const handleItemClick = (itemId, itemHref, event) => {
        event.preventDefault();
        setActiveItem(itemId);
        const section = document.getElementById(itemHref);
        section.scrollIntoView({behavior: "smooth"});
    }

    useEffect(() => {
        const homeSection = document.getElementById("home_page");
        const aboutSection = document.getElementById("about_page");
        const projectsSection = document.getElementById("projects_page");
        const contactSection = document.getElementById("contact_page");
    
        const homeOffset = homeSection.offsetTop;
        const aboutOffset = aboutSection.offsetTop;
        const projectsOffset = projectsSection.offsetTop;
        const contactOffset = contactSection.offsetTop;
    
        if (scrollPosition < 0.65*aboutOffset) {
          setActiveItem("home");
        } else if (scrollPosition < projectsOffset - (0.35*aboutOffset)) {
          setActiveItem("about");
        } else if (scrollPosition < contactOffset - (0.35*aboutOffset)) {
          setActiveItem("projects");
        } else {
          setActiveItem("contact");
        }
      }, [scrollPosition]);


    

    return (
        <nav id="navbar" className={navbarClassNames}>
            <ul>
                {headerItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.href}`}
                            className={activeItem === item.id ? "navbar_item active" : "navbar_item"}
                            onClick={(event) => handleItemClick(item.id, item.href, event)}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

export default NavBar;