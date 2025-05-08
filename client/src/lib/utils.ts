import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const animateOnScroll = () => {
  const elements = document.querySelectorAll('.appear');
  const triggerBottom = window.innerHeight * 0.8;
  
  elements.forEach(element => {
    const elementTop = (element as HTMLElement).getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      element.classList.add('active');
    }
  });
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
