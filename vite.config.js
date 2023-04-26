import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// eslint-disable-next-line no-undef
const isGitHub = process.env.TARGET === "github";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGitHub ? "/TechNiHao/" : "/",
});
