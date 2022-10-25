# vite-plugin-slogan
Print slogans to the console to cheer you on while developing a Vite project
<p align='center'>
English | <a href="./README.md">简体中文</a>
</p>

## Usage
1. install as `devDependencies`

   ```bash
   npm add dev vite-plugin-slogan
   # or
   yarn add --dev vite-plugin-slogan
   # or
   pnpm add dev vite-plugin-slogan
   ```

2. using in `vite.config.ts` 

   ```ts
   import vue from '@vitejs/plugin-vue'
   import { defineConfig } from 'vite'
   import Slogan from 'vite-plugin-slogan'
   
   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [Slogan({
       // Options
     })],
   })
   ```

## Config
| name | type | default | description |
| :----: | :----:  | :----: | :----: |
| category | SloganCategory[] | ['anime'] | categories of slogan(Including multi categories when passing string array) |
| maxLength | number | 30 | max length of slogan |
| minLength | number | 0 | min length of slogan |

### SloganCategory
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

## Example
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

## Related/Thanks
[一言API](https://developer.hitokoto.cn/)