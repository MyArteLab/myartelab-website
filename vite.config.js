import { defineConfig } from 'vite';

export default defineConfig({
    root: 'myartelab-website',
    server: {
        open: true,
    },
    build: {
        outDir: 'dist',
    },
});
