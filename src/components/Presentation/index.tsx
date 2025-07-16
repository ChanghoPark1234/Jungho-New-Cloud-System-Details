'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Slide from './Slide';
import { slides } from './slides';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalSlides = slides.length;

  const changeSlide = useCallback((direction: number) => {
    setCurrentSlide(prev => {
      const newSlide = prev + direction;
      if (newSlide >= 0 && newSlide < totalSlides) {
        return newSlide;
      }
      return prev;
    });
  }, [totalSlides]);

  const goToSlide = useCallback((slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      setCurrentSlide(slideIndex);
    }
  }, [totalSlides]);

  // 키보드 네비게이션
  useEffect(() => {
    if (!mounted) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          changeSlide(-1);
          break;
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          changeSlide(1);
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalSlides - 1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [changeSlide, goToSlide, totalSlides, mounted]);

  // 마우스 휠 네비게이션
  useEffect(() => {
    if (!mounted) return;
    const handleWheel = (e: Event) => {
      const wheelEvent = e as WheelEvent;
      wheelEvent.preventDefault();
      if (wheelEvent.deltaY > 0) {
        changeSlide(1);
      } else {
        changeSlide(-1);
      }
    };

    const container = document.querySelector('.presentation-container');
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [changeSlide, mounted]);

  const handlePrevClick = () => changeSlide(-1);
  const handleNextClick = () => changeSlide(1);

  if (!mounted) return null;

  return (
    <div className="presentation-container">
      <div className="slide-counter">
        <span>{currentSlide + 1}</span> / <span>{totalSlides}</span>
      </div>

      {slides.map((slide, index) => (
        <Slide
          key={slide.id}
          active={index === currentSlide}
          className={slide.className || ''}
        >
          {slide.content}
        </Slide>
      ))}

      <div className="navigation">
        <button
          className="nav-btn"
          onClick={handlePrevClick}
          disabled={currentSlide === 0}
        >
          ◀ 이전
        </button>
        <button
          className="nav-btn"
          onClick={handleNextClick}
          disabled={currentSlide === totalSlides - 1}
        >
          다음 ▶
        </button>
      </div>
    </div>
  );
} 