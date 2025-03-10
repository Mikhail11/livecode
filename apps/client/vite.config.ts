import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@routes": path.resolve(__dirname, "./src/app/routes"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@entities": path.resolve(__dirname, "./src/entities"),
            "@api": path.resolve(__dirname, "./src/shared/api"),
            "@ui/*": path.resolve(__dirname, "./src/shared/ui"),
        },
    },
    plugins: [react()],
})
