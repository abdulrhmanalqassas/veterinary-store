/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {  gridTemplateRows: {
      '[auto,auto,1fr]': 'auto auto 1fr',
    },
    
     backgroundImage: {
      'custom-gradient': 'linear-gradient(to top,rgba(58, 85, 148,1)  1%, rgba(0, 0, 0, 1) 70%, transparent 70%, transparent  )',
      'gradient-inverse': 'linear-gradient(to top,rgba(17, 23, 58,1)  1%, rgba(58, 85, 148, 1) 70%  )',
      'icon-gradient': 'linear-gradient(315deg, rgba(58, 85, 148,1) 11.2%, rgb(17, 23, 58) 78.9%)',

    },},
  },
  plugins: [ '@tailwindcss/aspect-ratio','@tailwindcss/forms'],
}

