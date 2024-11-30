// Resources 
import "../styles/resource.css";

import React from "react";

function Resources() {
  const resources = [
    { title: "Breathing Exercises", description: "Relax with breathing techniques." },
    { title: "Guided Meditation", description: "Try a 10-minute guided session." },
    { title: "Mini Games", description: "De-stress with fun games." },
  ];

  return (
    <div className="resources">
      <p id="h2">Resources for You</p>
      <div className="resource-list">
        {resources.map((resource, index) => (
          <div key={index} className="resource-card">
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;