import { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import SurveyScriptGenerator from '@/components/SurveyScriptGenerator';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleEnterApp = () => {
    setShowWelcome(false);
  };

  const handleBackToWelcome = () => {
    setShowWelcome(true);
  };

  if (showWelcome) {
    return <WelcomeScreen onEnter={handleEnterApp} />;
  }

  return <SurveyScriptGenerator onBack={handleBackToWelcome} />;
}
