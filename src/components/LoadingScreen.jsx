import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Welcome />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 350);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center">
      <div className="mb-6 text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
        {text}
        <span className="animate-blink ml-1 text-white">|</span>
      </div>

      <div className="w-[200px] h-[3px] bg-white/10 rounded overflow-hidden">
        <div className="w-[40%] h-full bg-gradient-to-r from-red-600 to-red-400 animate-loading-bar shadow-[0_0_15px_rgba(220,38,38,0.4)]" />
      </div>
    </div>
  );
};
