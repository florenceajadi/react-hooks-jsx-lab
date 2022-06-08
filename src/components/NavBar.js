import React from "react";

function NavBar() {
  // update the JSX being returned!
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
 
  
  )
}

export default NavBar;


//1. a <nav> element
// 2. inside the nav element, there should be two child elements:
// 3. an <a> element, with the href attribute set to #home, and the content text set to "Home"
// 4. an <a> element, with the href attribute set to #about, and the content text set to "About"