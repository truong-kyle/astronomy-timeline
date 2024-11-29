"use client"
import React, { useState, useEffect } from 'react';

const ScrollProgression = () => {
  const [years, setYears] = useState(2024); // Starting year
  const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

  const handleScroll = () => {
    const scrollTop = window.scrollY; // Current scroll position
    const scrollPercent = scrollTop / totalScrollHeight; // Calculate scroll percentage
    const newYears = Math.max(0, Math.floor(years - (scrollPercent * years))); // Decrease years based on scroll
    setYears(newYears);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [years]);

  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h1>Years Remaining: {years}</h1>
      <p>Scroll down to see the years decrease!</p>
    </div>
  );
};

export default ScrollProgression;