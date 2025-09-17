
import { useState } from 'react';
import StartButton from '@/components/StartButton';
import PreCountdown from '@/components/PreCountdown';
import MainEvent from '@/components/MainEvent';

type AppState = 'start' | 'countdown' | 'main';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('start');

  const handleStart = () => {
    setCurrentState('countdown');
  };

  const handleCountdownComplete = () => {
    setCurrentState('main');
  };

  switch (currentState) {
    case 'start':
      return <StartButton onStart={handleStart} />;
    case 'countdown':
      return <PreCountdown onComplete={handleCountdownComplete} />;
    case 'main':
      return <MainEvent />;
    default:
      return <StartButton onStart={handleStart} />;
  }
};

export default Index;
