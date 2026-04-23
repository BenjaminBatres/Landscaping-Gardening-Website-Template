'use client';
import { useEffect, useRef, useState } from 'react';

export default function Counter({ max, duration = 2000, ref, symbol }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  // 👀 Detect when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // 🔢 Count animation
  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;

      const value = Math.min((progress / duration) * max, max);
      setCount(Math.floor(value));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, max, duration]);

  return <span ref={ref} className='hidden sm:block'>{count.toLocaleString()}{symbol}</span>
}