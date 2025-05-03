import React, { useState, useEffect } from "react";

const PushNotification = () => {
  const Notifications = [
    "Hey! How are you feeling today? Your mind deserves a check-in 💙",

    "You’ve survived 100% of your bad days. Log today’s win ✨",

    "Have you taken a breath today? Your calm starts here 🧘",

    "You're not alone. We’re always here to listen ❤",

    "Feeling scattered? Come back home to your breath 😁",

    "Stressed? The kind of quiet you need is just one click away.",
  ];

  const [currentNotifications, setCurrentNotifications] = useState(
    Notifications[0]
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % Notifications.length;
        setCurrentQuote(Notifications[nextIndex]);
        return nextIndex;
      });
    }, 10000);
    return () => clearInterval(interval); 
  });
  return(
 <>
  
 </>
  )
};

export default PushNotification;
