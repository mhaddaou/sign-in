import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'bg':'#f3f2f0',
        'head' : '#B2FCFF',
        'eco' : '#2880D1',
        'txt' : '#0a66c2',
        'bttn' : '#01754f',
        'open' : '#0a66c2',
        'eng' : '#01754f',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
