import { useEffect, useState } from 'react';

interface PreCountdownProps {
  onComplete: () => void;
}

const PreCountdown = ({ onComplete }: PreCountdownProps) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div 
        className="text-white text-[20rem] font-bold animate-pulse"
        style={{ fontFamily: 'Arcade, monospace' }}
      >
        {count}
      </div>
    </div>
  );
};

export default PreCountdown;