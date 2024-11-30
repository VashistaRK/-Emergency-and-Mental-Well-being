import React from "react";
import '../styles/Home.css';
import image from './image.jpg'; // Import the image

/**
 * @function Home
 * @returns {JSX.Element}
 */
function Home() {
  /** @type {string} */
  const userName = "John Doe"; // Replace with dynamic data

  /** @type {string} */
  const quote = "Your mental health matters. Take care of yourself!";

  return (
    <div className="home">
      <div className="img">
        <img src={image} alt="Mental Health" /> {/* Using imported image */}
      </div>
      <div className="di2">
        <h1>Welcome, {userName}!</h1>
        <p className="quote">{quote}</p>
      </div>
    </div>
  );
}

export default Home;
