import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["three"],
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
  base: "/kruemel",
});