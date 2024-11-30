// Home

import React from "react";

function Home() {
  const userName = "John Doe"; // Replace with dynamic data
  const quote = "Your mental health matters. Take care of yourself!";

  return (
    <div className="home">
      <h1>Welcome, {userName}!</h1>
      <p className="quote">{quote}</p>
    </div>
  );
}

export default Home;