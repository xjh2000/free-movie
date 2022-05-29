import {GenerateSW} from "workbox-webpack-plugin";
import {defineConfig} from "umi";


export default defineConfig({
    npmClient: 'pnpm',
    favicons: ["/favicon.ico"],
    links: [
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
});
