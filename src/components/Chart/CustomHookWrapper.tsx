import React, { useState, useEffect, useRef } from 'react';

const useInView = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [key, setKey] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          setKey((prevKey) => prevKey + 1);
        } else {
          setIsIntersecting(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isIntersecting, key] as const;
};

// Wrapper Component for Animations
const AnimatedChart: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ref, isInView, key] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
    >
      {React.cloneElement(children as React.ReactElement, { key })}
    </div>
  );
};

export default AnimatedChart;
