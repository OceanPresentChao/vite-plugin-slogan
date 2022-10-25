# vite-plugin-slogan
在开发Vite项目时在控制台打印口号为你加油助威
<p align='center'>
<a href="./README.EN.md">English</a> | 简体中文
</p>

## 使用
1. 安装到 `devDependencies`

   ```bash
   npm add dev vite-plugin-slogan
   # or
   yarn add --dev vite-plugin-slogan
   # or
   pnpm add dev vite-plugin-slogan
   ```

2. 在 `vite.config.ts` 中使用

   ```ts
   import vue from '@vitejs/plugin-vue'
   import { defineConfig } from 'vite'
   import Slogan from 'vite-plugin-slogan'
   
   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [Slogan()],
   })
   ```

## 配置
| name | type | default | description |
| :----: | :----:  | :----: | :----: |
| category | SloganCategory[] | ['anime'] | 语句的分类（传入多个值可包含多个领域） |
| maxLength | number | 30 | 语句最大长度 |
| minLength | number | 0 | 语句最小长度 |

### SloganCategory说明
| value | description |
| :----: | :----:  | 
|'comic' | 漫画 |
| 'anime' | 动画 |
| 'game' | 游戏 |
| 'literature' | 文学 |
| 'other' | 其他 |
| 'internet' | 网络 |
| 'poem' | 诗词 |
| 'philosophy' | 哲学 |
| 'joke' | 段子 |
| 'film' | 影视 |
| 'netease'| 网易云Netease Cloud Music Comment |

## 示例
 ```ts
 import vue from '@vitejs/plugin-vue'
 import { defineConfig } from 'vite'
 import Slogan from 'vite-plugin-slogan'
 
 // https://vitejs.dev/config/
 export default defineConfig({
   plugins: [Slogan({
     category: ['anime', 'joke'],
     maxLength: 20,
     minLength: 10
   })],
 })
   ```

## 相关/感谢
[一言API](https://developer.hitokoto.cn/)