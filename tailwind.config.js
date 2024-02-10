/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '24px'
      },
      colors: {
        'base': '#7C3AED',
        'primary': '#FF7700',
        'gray-custom': '#444444',
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('flowbite/plugin')
  ],
}

