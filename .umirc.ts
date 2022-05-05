import {defineConfig} from "umi";

export default defineConfig({
    npmClient: "pnpm",
    hash: true,
    proxy: {
        "/api": {
            target: "http://localhost:8080",
            changeOrigin: true,
        }
    },
    tailwindcss: {},
    plugins: ["@umijs/plugins/dist/tailwindcss"],

});
