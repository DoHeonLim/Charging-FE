import React from 'react';

const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span>
      {text.split("").map((char, index) => (
        <span key={index} className="animate-char" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;