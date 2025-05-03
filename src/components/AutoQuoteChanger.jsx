import { useState, useEffect } from 'react';

const notificationMessages = [
  "Hey! How are you feeling today? Your mind deserves a check-in 💙",
  "You’ve survived 100% of your bad days. Log today’s win ✨",
  "Have you taken a breath today? Your calm starts here ",
  "You're not alone. We’re always here to listen ❤",
  "Feeling scattered? Come back home to your breath 😁",
  "Stressed? The kind of quiet you need is just one click away 💬"
];

const FloatingNotification = ({ interval = 60000 }) => {
  const [visible, setVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  const showRandomNotification = () => {
    const randomIndex = Math.floor(Math.random() * notificationMessages.length);
    setCurrentMessage(notificationMessages[randomIndex]);
    setVisible(true);
    
    setTimeout(() => {
      setVisible(false);
    }, 5000); 
  };

  useEffect(() => {
    showRandomNotification(); // Show first notification immediately
    
    const timer = setInterval(() => {
      if (!isPaused) {
        showRandomNotification();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [interval, isPaused]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-3 right-4 z-50 animate-fade-in">
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transform transition-all duration-300 hover:scale-105"
        
      >
        <div className="flex items-start p-4 max-w-xs md:max-w-sm">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <svg 
                className="h-5 w-5 text-blue-500 dark:text-blue-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {currentMessage}
            </p>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="ml-2 -mx-1.5 -my-1.5 bg-white dark:bg-gray-800 text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg focus:ring-2 focus:ring-gray-300 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 inline-flex h-8 w-8"
          >
            <span className="sr-only">Close</span>
            <svg 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
        {/* Progress bar */}
        <div className="bg-gray-200 dark:bg-gray-700 h-1 w-full">
          <div 
            className="bg-blue-500 h-1 animate-progress" 
            style={{ 
              animationDuration: '5000ms',
              animationFillMode: 'forwards'
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Add these to your global CSS:
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

@keyframes progress {
  from { width: 100% }
  to { width: 0% }
}
.animate-progress {
  animation: progress linear forwards;
}
*/

export default FloatingNotification;