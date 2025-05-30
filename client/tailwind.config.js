/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      colors: {
        'cjn-primary': '#2C3E50',       // Dark Slate Blue (deep and professional)
            'cjn-secondary': '#F0F4F8',     // Light Gray Blue (soft background)
            'cjn-accent-light': '#E0E7ED',  // Slightly darker gray for borders/details
            'cjn-text-main': '#34495E',     // Darker text for readability
            'cjn-text-light': '#FFFFFF',    // Pure white for contrast on dark backgrounds
            'cjn-card-bg': '#FFFFFF',       // White for card backgrounds
            'cjn-shadow-subtle': 'rgba(0, 0, 0, 0.08)', // Softer shadow
            'cjn-success': '#28a745',       // Standard green for success/CTA
            'cjn-success-dark': '#218838',  // Darker green on hover
            'cjn-info': '#17A2B8', 
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.1)', opacity: '0.3' },
        },
        'pulse-slow-delay': { // Same as pulse-slow but will be called with animation-delay
          '0%, 100%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.1)', opacity: '0.3' },
        },
        'pulse-slow-2': { // Another variant for a different element
          '0%, 100%': { transform: 'scale(0.95)', opacity: '0.15' },
          '50%': { transform: 'scale(1.05)', opacity: '0.25' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-up-delay-200': 'fade-in-up 0.8s ease-out 0.2s forwards',
        'fade-in-up-delay-400': 'fade-in-up 0.8s ease-out 0.4s forwards',
        'fade-in-up-delay-500': 'fade-in-up 0.8s ease-out 0.5s forwards',
        'fade-in-up-delay-600': 'fade-in-up 0.8s ease-out 0.6s forwards',
        'pulse-slow': 'pulse-slow 8s infinite ease-in-out',
        'pulse-slow-delay': 'pulse-slow-delay 8s infinite ease-in-out 2s', // Starts 2s later
        'pulse-slow-2': 'pulse-slow-2 10s infinite ease-in-out 1s', // Longer duration, different delay
      },
    },
  },
  plugins: [],
};
