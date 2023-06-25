import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
      },
    },
  },
  // server: {
  //   port: 8080, //启动端口
  //   // 设置代理
  //   proxy: {
  //     // '/api': {
  //     //   target: 'xxx',
  //     //   changeOrigin: true,
  //     //   rewrite: (path: string) => path.replace(/^\/api/, '')
  //     // }
  //   }
  // }
});
