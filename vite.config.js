import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   esbuild: {
//     // Set the loader for JS files to 'jsx' to handle JSX syntax
//     loaders: {
//       '.js': 'jsx',
//     },
//   },
// });
