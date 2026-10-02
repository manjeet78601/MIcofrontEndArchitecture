import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
    plugins: [
        react(),

        federation({
            name: 'host_app',

            remotes: {
                product_catalog: 'http://localhost:3001/assets/remoteEntry.js',
                cart_checkout: 'http://localhost:3002/assets/remoteEntry.js',
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
    },

    preview: {
        port: 3000,
        strictPort: true,
    },
});