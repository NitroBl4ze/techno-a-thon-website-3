import { Button } from "@/components/ui/button";

interface StartButtonProps {
  onStart: () => void;
}

const StartButton = ({ onStart }: StartButtonProps) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Button 
        onClick={onStart}
        className="bg-arcade-purple hover:bg-arcade-purple/90 text-white text-6xl px-16 py-8 rounded-lg font-bold"
        style={{ fontFamily: 'Arcade, monospace' }}
      >
        START
      </Button>
    </div>
  );
};

export default StartButton;