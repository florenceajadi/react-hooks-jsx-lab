import React from "react";
import { name, city } from "../data/data.js";


function Home() {
  // update the JSX being returned!
  return (
    <div id = "home">
      
      <h1 style = {{color:'firebrick'}}>"{name} is a Web Developer from Your{city}"</h1>
      
    </div>
  )
}

export default Home;
 

// inside the div element, there should be one child element:
// 1. an <h1> element, with the style attribute set to a color of "firebrick" and the content of "Your //Name is a Web Developer from Your City"
// 2. use JSX expression syntax to use the imported name and city variables inside your JSX elements