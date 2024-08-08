// src/components/Countdown.jsx
import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="bg-[#6C9ACD] text-center p-4 rounded-2xl mx-2 w-24">
        <div className="text-4xl font-bold text-white">{timeLeft[interval]}</div>
        <div className="text-xs uppercase">{interval}</div>
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default Countdown;