import React from "react";
import Navbar from "./Navbar.js"
import CoverPage from "./CoverPage.js";
import Card from "./Card.js";
import Data from "./data.js";
import Footer from "./Footer.js";

export default function App() {
  const cardElements = Data.map(data => {
    return (
      <Card 
      key={data.id}
      {...data}
      />
    )
  })
  return (
    <div className="App">
    <Navbar />
    <CoverPage />
    <div className="cards">
    {cardElements}
    </div>
    <div className="cards">
    {cardElements}
    </div>
    <div className="cards">
    {cardElements}
    </div>
    <Footer />

    </div>
  );
}

