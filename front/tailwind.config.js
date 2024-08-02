export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      width: {
        'card-lg': '40rem',
      },
      height: {
        'subpage': 'calc(100vh - 5.5rem)',
      },
      boxShadow: {
        'down-8': '0 8px 0 0 black',
      },
      colors: {
        gray: {
          900: '#000000',
          800: '#121212',
          'hover' : '#1f1f1f',
          'menu' : '#282828',
          'input' : '#242424',
          // 900: '#1f2937',
          // 800: '#111827' 
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
  ],
}

// const config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       colors: {
//         primary: "#1479FF",
//         secondary:"rgba(20,121,255,0.3)",
//         third:"rgba(25,59,104,0.05)",
//         fourth:"rgba(25,59,104)"
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
