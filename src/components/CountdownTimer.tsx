import React, { useState, useRef, useEffect } from 'react';

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(24 * 60 * 60); // default 24 hours
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && seconds > 0) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, seconds]);

  const handlePause = () => setIsRunning(false);
  const handleResume = () => setIsRunning(true);
  const handleReset = () => setSeconds(24 * 60 * 60);

  // Format seconds to HH:MM:SS
  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return [h, m, s].map((v) => String(v).padStart(2, '0')).join(':');
  };

  return (
    <div className="bg-black/70 backdrop-blur-sm px-16 py-8 rounded-2xl border border-white/30 shadow-2xl flex flex-col items-center w-full max-w-2xl">
      <div 
        className="text-7xl font-mono font-bold tracking-wider bg-gradient-to-r from-arcade-purple via-arcade-pink to-arcade-purple bg-clip-text text-transparent animate-pulse"
        style={{ fontFamily: 'Arcade, monospace' }}
      >
        {formatTime(seconds)}
      </div>
      <div className="flex gap-6 mt-6">
        <button onClick={handlePause} className="bg-white/80 text-black px-6 py-2 rounded text-lg font-semibold">Pause</button>
        <button onClick={handleResume} className="bg-white/80 text-black px-6 py-2 rounded text-lg font-semibold">Resume</button>
        <button onClick={handleReset} className="bg-white/80 text-black px-6 py-2 rounded text-lg font-semibold">Reset</button>
      </div>
    </div>
  );
};

export default CountdownTimer;