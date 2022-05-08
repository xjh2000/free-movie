import {GenerateSW} from "workbox-webpack-plugin";
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
  favicon: "/favicon.ico",
  links: [
    {rel: "icon", href: "/favicon.ico"},
    {rel: "apple-touch-icon", href: "/logo128.png"},
    {rel: "manifest", href: "/manifest.json"},
  ],
  // @ts-ignore
  chainWebpack(memo: any) {
    memo.plugin('workbox').use(GenerateSW, [
      {
        swDest: './sw.js',
      },
    ]);
  },
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],

});
