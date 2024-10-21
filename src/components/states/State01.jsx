// Clock.js

import React, { useState, useEffect } from 'react';

export default function State01({ color, time }) {
  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
      const intervalId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds} AM`);
    }, 1000);

    return () => clearInterval(intervalId);
    
  }, []);

  return (
    <h1 style={{ color: color }}>
      {currentTime}
    </h1>
  );
}