// Mental status 

import React, { useState } from "react";

function MentalStatus() {
  const [answers, setAnswers] = useState([]);

  const questions = [
    "How do you feel today?",
    "How often do you experience stress?",
    "Rate your energy levels (1-10).",
  ];

  const handleAnswerChange = (index, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
  };

  return (
    <div className="mental-status">
      <h2>Mental Status Check</h2>
      {questions.map((question, index) => (
        <div key={index} className="question">
          <p>{question}</p>
          <input
            type="text"
            onChange={(e) => handleAnswerChange(index, e.target.value)}
          />
        </div>
      ))}
      <button>Submit</button>
    </div>
  );
}

export default MentalStatus;