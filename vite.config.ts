import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
// Ant Design Vue 4.x 自动按需引入组件
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// unocss
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        // Ant Design Vue 4.x 自动按需引入组件
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
    Unocss({
      presets: [presetAttributify(), presetUno()],
    }),
  ],
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
      API: path.resolve(__dirname, 'src/api'),
      Store: path.resolve(__dirname, 'src/store'),
    },
  },
  server: {
    port: 3000, // 本地开发服务端口
    proxy: {
      '/API': {
        target: 'http://127.0.0.3:62000', // 要代理的地址
        changeOrigin: true,
        followRedirects: true, // Cookie支持重定向
        rewrite: (path) => path.replace(/^\/API/, ''),
      },
    },
  },
})
