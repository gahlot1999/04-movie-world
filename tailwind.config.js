/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#263238', //main background and header/footer elements.
        secondary: '#FFC107', //buttons, icons, and interactive elements.
        'secondary-1': '#E4AB00',
        warning: '#F44336', //critical elements, draw attention, error messages, warnings.
        'text-color-1': '#333333', //regular text content.
        'text-color-2': '#ECEFF1',
        highlight: '#E0E0E0', //subtle dividers, borders, or background highlights
        'poseter-overlay': 'rgba(0, 0, 0, 0.6)', //When displaying movie posters on cards, use this semi-transparent black overlay to make the text details more readable and give a cinematic effect.
        'card-background': '#E0E0E090',
      },
    },
  },
  plugins: [],
};
