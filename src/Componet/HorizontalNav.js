import React from 'react';

const HorizontalNav = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col">
          <div className="scrollmenu">
            <div className="row">
              <div className="col-md-6">
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <div className="dropdown">
                  <a href="#about" className="dropbtn">About</a>
                  <div className="dropdown-content">
                    <a href="#Item1">Submenu Item 1</a>
                    <a href="#Item1">Submenu Item 2</a>
                    <a href="#Item1">Submenu Item 3</a>
                  </div>
                </div>
                <div className="dropdown">
                  <a href="#Item1support" className="dropbtn">Support</a>
                  <div className="dropdown-content">
                    <a href="#Item1">Submenu Item 1</a>
                    <a href="#Item1">Submenu Item 2</a>
                    <a href="#Item1">Submenu Item 3</a>
                  </div>
                </div>
                <a href="#blog">Blog</a>
              </div>
              <div className="col-md-6">
                <a href="#logo">Logo</a>
                <a href="#work">Work</a>
                <div className="dropdown">
                  <a href="#friends" className="dropbtn">Friends</a>
                  <div className="dropdown-content">
                    <a href="#Item1">Submenu Item 1</a>
                    <a href="#Item1">Submenu Item 2</a>
                    <a href="#Item1">Submenu Item 3</a>
                  </div>
                </div>
                <div className="dropdown">
                  <a href="#Item1partners" className="dropbtn">Partners</a>
                  <div className="dropdown-content">
                    <a href="#Item1">Submenu Item 1</a>
                    <a href="#Item1">Submenu Item 2</a>
                    <a href="#Item1">Submenu Item 3</a>
                  </div>
                </div>
                <div className="dropdown">
                  <a href="#Item1people" className="dropbtn">People</a>
                  <div className="dropdown-content">
                    <a href="#Item1">Submenu Item 1</a>
                    <a href="#Item1">Submenu Item 2</a>
                    <a href="#Item1">Submenu Item 3</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalNav;
