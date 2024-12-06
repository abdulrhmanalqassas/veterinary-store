/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {  gridTemplateRows: {
      '[auto,auto,1fr]': 'auto auto 1fr',
    },
    
     backgroundImage: {
      'custom-gradient': 'linear-gradient(to top,rgba(244, 164, 96,1)  1%, rgba(255, 249, 196, 1) 70%, transparent 70%, transparent  )',
      'gradient-inverse': 'linear-gradient(to top,rgba(255, 249, 196,1)  1%, rgba(244, 164, 96, 1) 70%  )',
      'icon-gradient': 'linear-gradient(315deg, rgba(244, 164, 96,1) 11.2%, rgb(255, 249, 196) 78.9%)',

    },},
  },
  plugins: [ '@tailwindcss/aspect-ratio','@tailwindcss/forms'],
}

