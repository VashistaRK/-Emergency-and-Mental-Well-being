import React, { useState } from "react";
import "../styles/Emergency.css";
import Emergencyimg from "./emergency-call.png";

function Emergency() {
  const [messageSent, setMessageSent] = useState(false);
  const emergencyContacts = ["+1234567890", "+0987654321"];

  const handleEmergencyClick = () => {
    // Simulating fetching the current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        alert(`SOS SMS sent with location: https://maps.google.com/?q=${latitude},${longitude}`);
        setMessageSent(true);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="emergency">
      <p id="h2">Emergency Assistance</p>
      <img
        src={Emergencyimg} // Replace with your emergency image URL
        alt="Emergency SOS"
        className="emergency-image"
        onClick={handleEmergencyClick}
      />
      <p>Click the image above 👆 to send an SOS message to your emergency contacts:</p>
      {messageSent && (
        <div className="confirmation">
          <p>SOS SMS has been sent to the following contacts:</p>
          <ul>
            {emergencyContacts.map((contact, index) => (
              <li key={index}>{contact}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Emergency;
