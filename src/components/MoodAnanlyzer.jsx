import React, { useState } from "react";

const questions = [
  "Lost much sleep over worry?",
  "Felt constantly under strain?",
  "Felt you couldn't overcome difficulties?",
  "Been feeling unhappy or depressed?",
  "Lost confidence in yourself?",
  "Felt you couldn't concentrate?",
  "Felt you couldn't face problems?",
  "Been able to enjoy your daily activities?", // reverse
  "Felt reasonably happy?", // reverse
  "Been able to make decisions?", // reverse
  "Been playing a useful role?", // reverse
  "Been feeling capable about things?" // reverse
];

const reverseIndices = [7, 8, 9, 10, 11]; // Reverse-scored questions

const moodIcons = {
  excellent: "🌈",
  good: "🌱",
  mild: "🌦",
  moderate: "🌧",
  severe: "🌪"
};

export default function MoodAnalyzer() {
  const [answers, setAnswers] = useState(Array(12).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (index, value) => {
    const updated = [...answers];
    updated[index] = parseInt(value);
    setAnswers(updated);
    if (index < questions.length - 1) {
      setCurrentQuestion(index + 1);
    }
  };

  const calculateScore = () => {
    // Validate all questions are answered first
    if (answers.includes(null)) {
      throw new Error("All questions must be answered before calculating score");
    }
  
    return answers.reduce((totalScore, currentAnswer, questionIndex) => {
      // Skip if somehow answer is still null (should be caught above)
      if (currentAnswer === null) return totalScore;
  
      // Reverse-scored questions (positive wording)
      if (reverseIndices.includes(questionIndex)) {
        // For reverse questions: No (0) = 1 point, Yes (1) = 0 points
        return totalScore + (currentAnswer === 0 ? 1 : 0);
      } 
      // Normal questions (negative wording)
      else {
        // For normal questions: Yes (1) = 1 point, No (0) = 0 points
        return totalScore + (currentAnswer === 1 ? 1 : 0);
      }
    }, 0); // Start with 0 and accumulate
  };
  const getInterpretation = (score) => {
    if (score === 0) return { 
      text: "Your mental health is absolutely thriving! Keep nurturing your wellbeing.", 
      icon: moodIcons.excellent,
      color: "text-purple-600",
      bg: "bg-purple-50"
    };
    if (score <= 2) return { 
      text: "Your mental wellness is flourishing with just minor concerns!", 
      icon: moodIcons.good,
      color: "text-teal-600",
      bg: "bg-teal-50"
    };
    if (score <= 4) return { 
      text: "Some light clouds in your mental weather - occasional self-care could help.", 
      icon: moodIcons.mild,
      color: "text-amber-500",
      bg: "bg-amber-50"
    };
    if (score <= 6) return { 
      text: "Noticeable mental distress - regular self-care and support would be beneficial.", 
      icon: moodIcons.moderate,
      color: "text-orange-600",
      bg: "bg-orange-50"
    };
    return { 
      text: "You're experiencing significant distress - professional support could help you weather this storm.", 
      icon: moodIcons.severe,
      color: "text-rose-600",
      bg: "bg-rose-50"
    };
  };

  const handleSubmit = () => {
    if (answers.includes(null)) {
      alert("Please answer all questions before submitting.");
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Array(12).fill(null));
    setSubmitted(false);
    setCurrentQuestion(0);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
    <div className="min-h-screen mt-11 bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Track Mental Health</h1>
          <p className="text-indigo-100">Nurture your mental wellbeing</p>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-gray-200">
          <div 
            className="h-full bg-indigo-400 transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {!submitted ? (
          <div className="p-6">
            {/* Current question */}
            <div className="mb-8 text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h2 className="text-xl font-medium text-gray-800 mb-2">
                Question {currentQuestion + 1} of {questions.length}
              </h2>
              <p className="text-lg text-gray-700">
                {questions[currentQuestion]}
                {reverseIndices.includes(currentQuestion) && (
                  <span className="text-xs text-gray-500 ml-2">(positive)</span>
                )}
              </p>
            </div>

            {/* Answer options */}
            <div className="flex justify-center space-x-6 mb-8">
              <button
                onClick={() => handleAnswer(currentQuestion, 1)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  answers[currentQuestion] === 1 
                    ? "bg-indigo-100 text-indigo-700 border-2 border-indigo-300" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer(currentQuestion, 0)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  answers[currentQuestion] === 0 
                    ? "bg-indigo-100 text-indigo-700 border-2 border-indigo-300" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                No
              </button>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              {currentQuestion > 0 && (
                <button
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  ← Previous
                </button>
              )}
              <div className="flex-1"></div>
              {currentQuestion < questions.length - 1 && answers[currentQuestion] !== null && (
                <button
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Next →
                </button>
              )}
              {currentQuestion === questions.length - 1 && answers[currentQuestion] !== null && (
                <button
                  onClick={handleSubmit}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full font-medium"
                >
                  Get Results
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="p-6">
            
            <div className={`{text-center p-6 rounded-2xl mb-6 ${getInterpretation(calculateScore()).bg}}`}>
              <div className="text-6xl mb-4">{getInterpretation(calculateScore()).icon}</div>
              <h2 className={`{text-2xl font-bold mb-2 ${getInterpretation(calculateScore()).color}}`}>
                {getInterpretation(calculateScore()).text}
              </h2>
              <div className="text-4xl font-bold my-4">{calculateScore()}/12</div>
              
             
              <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div 
                  className="absolute h-full bg-gradient-to-r from-teal-400 via-amber-400 to-rose-500"
                  style={{ width: `${(calculateScore() / 12) * 100}% `}}
                ></div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-600">
      <span>0 (Excellent)</span>
      <span>2 (Good)</span>
      <span>4 (Mild)</span>
      <span>6 (Moderate)</span>
      <span>12 (Severe)</span>
    </div>
            </div>

            {/* Resources */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
              <h3 className="font-bold text-lg mb-3 text-gray-800">Wellness Resources</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">🌼</span>
                  <a href="#" className="text-indigo-600 hover:underline">Mindfulness exercises</a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📞</span>
                  <a href="#" className="text-indigo-600 hover:underline">Crisis hotlines</a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📚</span>
                  <a href="#" className="text-indigo-600 hover:underline">Self-help books</a>
                </li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-full font-medium transition-colors"
            >
              Take Again
            </button>
          </div>
        )}
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-500">
        Note: This is not a diagnostic tool. If you're concerned about your mental health, please consult a professional.
      </div>
    </div>
    </>
  );
}