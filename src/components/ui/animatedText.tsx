import React from 'react';

const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span>
      {text.split('.').map((char, index) => (
        <span
          key={index}
          className='inline-block opacity-0 animate-fadeIn mr-0.5'
          style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
