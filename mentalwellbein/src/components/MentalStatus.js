import React, { useState } from "react";
import '../styles/MentalStatus.css';

function MentalStatus() {
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  const questions = {
    emotionalHealth: [
      "I feel happy and content most of the time.",
      "I can manage my emotions effectively.",
      "I feel confident in my abilities to handle challenges.",
      "I rarely feel overwhelmed by my thoughts.",
      "I find it easy to stay calm in stressful situations."
    ],
    stressAnxiety: [
      "I feel relaxed and peaceful throughout the day.",
      "I am able to focus on tasks without feeling distracted by worries.",
      "I do not frequently feel nervous or anxious.",
      "I sleep well without being disturbed by stress or anxiety.",
      "I feel free from physical symptoms of stress like headaches or fatigue."
    ],
    socialConnections: [
      "I have meaningful and supportive relationships in my life.",
      "I feel connected to my friends and family.",
      "I can share my feelings openly with someone I trust.",
      "I rarely feel lonely or isolated.",
      "I enjoy social activities and interactions."
    ],
    selfPerception: [
      "I have a positive self-image.",
      "I feel motivated to pursue my goals.",
      "I rarely doubt my worth or abilities.",
      "I feel proud of my accomplishments, big or small.",
      "I am satisfied with my overall appearance and personality."
    ],
    lifeSatisfaction: [
      "I feel that my life has a sense of purpose.",
      "I enjoy my daily activities and responsibilities.",
      "I look forward to the future with hope and excitement.",
      "I am satisfied with the work-life balance I have achieved.",
      "I feel my life is on the right track."
    ],
    copingSkills: [
      "I can adapt to changes and uncertainties in life.",
      "I have effective strategies to deal with stressful situations.",
      "I rarely feel overwhelmed by the demands of my daily life.",
      "I find it easy to stay optimistic, even in tough times.",
      "I can set boundaries to protect my mental health."
    ]
  };

  const handleAnswerChange = (index, section, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[section] = updatedAnswers[section] || [];
    updatedAnswers[section][index] = answer;
    setAnswers(updatedAnswers);

    // Calculate score based on answers
    const totalScore = updatedAnswers.flat().reduce((total, score) => total + parseInt(score), 0);
    setScore(totalScore);
  };

  const calculateFeedback = () => {
    if (score >= 120) {
      setFeedback("You're doing great! Keep it up!");
    } else if (score >= 90) {
      setFeedback("You're doing okay. Consider some self-care.");
    } else {
      setFeedback("It's okay to seek help; you're not alone.");
    }
  };

  const submitAnswers = () => {
    calculateFeedback();
  };

  return (
    <div className="mental-status">
      <h2>Mental Status Check</h2>
      <div className="sections">
        {Object.keys(questions).map((section, sectionIndex) => (
          <div key={sectionIndex} className="section">
            <h3>{section.replace(/([A-Z])/g, ' $1').toUpperCase()}</h3>
            {questions[section].map((question, index) => (
              <div key={index} className="question">
                <p>{question}</p>
                <input
                  type="range"
                  min="1"
                  max="5"

                  onChange={(e) => handleAnswerChange(index, sectionIndex, e.target.value)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={submitAnswers} className="submit-btn">Submit</button>
      <div className="feedback">
        {feedback && <p>{feedback}</p>}
        {/* <p>Score: {score} / 150</p> */}
      </div>
    </div>
  );
}

export default MentalStatus;
