import React from "react";

function Profile() {
  const userDetails = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    profession: "Engineer",
    mentalStatus: "Good",
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      <ul>
        {Object.entries(userDetails).map(([key, value]) => (
          <li key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;