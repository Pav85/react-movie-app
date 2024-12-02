import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/react-movie-app/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        fallback: "404.html",
      },
    },
  },
});
