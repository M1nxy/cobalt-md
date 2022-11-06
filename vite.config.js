import path from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), monacoEditorPlugin({})],
  resolve: {
    alias: {
      '@': path.resolve('renderer/src'),
    },
  },
  root: path.resolve(process.cwd(), 'renderer'),
  base: './',
})
