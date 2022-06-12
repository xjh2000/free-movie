import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from "vite-plugin-pwa";
import mockServer from 'vite-plugin-mock-server';

// @ts-ignore
import manifestJson from './public/manifest.json'
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from 'unplugin-vue-components/resolvers';

const localEnabled = process.env.USE_MOCK || false;

const mockPlugin = localEnabled ? mockServer({
    mockRootDir: './src/mock',
}) : {} as Plugin;


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
            manifest: manifestJson,
        }),
        mockPlugin,
        Components({
            resolvers: [VantResolver()],
        }),
    ],
})
