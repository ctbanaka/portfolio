import './style.css';
import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const preloaderText = document.getElementById('preloader-text');
  const header = document.getElementById('header');
  const heroSection = document.getElementById('hero-section');

  // Ensure all elements exist before proceeding
  if (!preloader || !preloaderText || !header || !heroSection) {
    console.error('One or more elements are missing:', {
      preloader,
      preloaderText,
      header,
      heroSection,
    });
    return;
  }

  // GSAP timeline for preloader animation
  const tl = gsap.timeline();

  // Preloader text animation - move up and fade out
  tl.to(preloaderText, {
    y: '-100%',
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    delay: 1, // Delay before starting text animation
  });

  // Preloader background sliding down
  tl.to(preloader, {
    y: '100%',
    duration: 1.5,
    ease: 'power2.inOut',
    onComplete: () => {
      // Hide preloader after animation completes
      preloader.style.display = 'none';
      // Reveal header and hero section
      header.classList.remove('hidden');
      heroSection.classList.remove('hidden');
    },
  });

  // Animate header appearance
  tl.fromTo(
    header,
    {
      opacity: 0,
      y: -50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    '-=1' // Start this animation 1 second before the previous one ends
  );

  // Animate hero section appearance
  tl.fromTo(
    heroSection,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    '-=1' // Sync with header animation
  );
});
