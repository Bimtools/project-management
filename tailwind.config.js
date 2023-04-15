/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        "tk-primary":'rgb(0,160,245)',
        "tk-light-gray":'rgb(238,240,242)',
        'tk-gray':'rgb(217,222,232)',
        'tk-medium-gray':'rgb(120,135,155)',
        'tk-dark-gray':'rgb(75,85,100)',
        'tk-dark-blue': 'rgb(0,60,125)',
        'tk-medium-blue':'rgb(0,85,190)',
        'tk-blue':'rgb(0,120,220)',
        'tk-bright-blue':'rgb(80,175,225)',
        'tk-light-blue':'rgb(115,195,240',
        'tk-orange':'rgb(255,180,0)',
        'tk-purple':'rgb(165,20,130)',
        'tk-red':'rgb(230,0,80)',
        'tk-yellow':'rgb(250,225,0)',
        'tk-green':'rgb(155,200,50)',
        'tk-turquoise':'rgb(15,150,140)'
      }
    },
  },
  plugins: [],
}
