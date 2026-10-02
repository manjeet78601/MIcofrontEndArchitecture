import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
    plugins: [
        react(),

        federation({
            name: 'product_catalog',

            filename: 'remoteEntry.js',

            exposes: {
                './ProductList': './src/ProductList.jsx',
            },

            shared: {
                react: {
                    singleton: true,
                    requiredVersion: '18.3.1',
                },

                'react-dom': {
                    singleton: true,
                    requiredVersion: '18.3.1',
                },
            },
        }),
    ],

    resolve: {
        dedupe: ['react', 'react-dom'],
    },

    build: {
        target: 'esnext',
        minify: false,
    },

    preview: {
        port: 3001,
        strictPort: true,
    },
});