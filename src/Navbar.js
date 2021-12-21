import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const LinksContainerRef = useRef(null);
  const LinksRef = useRef(null);

  useEffect(() => {
    const linksHeight = LinksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      LinksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      LinksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {/* {showLinks && ( */}
        {/* <div className={`links-container ${showLinks?"show-container":""}`}> */}
        {/* <div
          className={`${
            showLinks ? "links-container show-container" : "links-container"
          }`}
        > */}
        <div className="links-container" ref={LinksContainerRef}>
          <ul className="links" ref={LinksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* )} */}
        <ul className="social-icons">
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
