import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      Assets: path.resolve(__dirname, 'src/assets'),
      Components: path.resolve(__dirname, 'src/components'),
      Utils: path.resolve(__dirname, 'src/utils'), // 工具类方法（新创建的）
      Config: path.resolve(__dirname, 'src/config'),
      Views: path.resolve(__dirname, 'src/views'),
      Plugins: path.resolve(__dirname, 'src/plugins'),
      Routes: path.resolve(__dirname, 'src/routes'),
    },
  },
})
