/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nicky: ['"Nicky Laatz"'],
        playfairsc: ['"Playfair Display SC"'],
        playfair: ['"Playfair Display"'],
      },
    },
  },
  plugins: [],
};
