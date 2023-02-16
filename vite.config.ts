import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import testHookPlugin from "./test-hooks-plugin";
import virtual from "./plugins/virtual-module";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), virtual()],
});
