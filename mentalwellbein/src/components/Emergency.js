import React from "react";

function Emergency() {
  const emergencyContacts = ["+1234567890", "+0987654321"];

  const handleSendSMS = (contact) => {
    alert("$contact"); // Replace with actual SMS logic
  };

  return (
    <div className="emergency">
      <h2>Emergency Assistance</h2>
      {emergencyContacts.map((contact, index) => (
        <div key={index} className="contact">
          <p>{contact}</p>
          <button onClick={() => handleSendSMS(contact)}>Send SMS</button>
        </div>
      ))}
    </div>
  );
}

export default Emergency;