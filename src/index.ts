import type { Plugin } from 'vite'
import * as chalk from 'chalk'
import type { SloganConfig } from './api'
import { getSlogan } from './api'
function getRandomColor() {
  return `#${'0123456789abcdef'
  .split('')
  .map((_v, i, a) => {
    return i > 5 ? null : a[Math.floor(Math.random() * 16)]
  })
  .join('')}`
}

function printSlogan(slogan: string) {
  const draw = chalk.hex(getRandomColor())
  // eslint-disable-next-line no-console
  console.log(draw(slogan))
}

export default function slogan(config?: SloganConfig): Plugin {
  return {
    name: 'vite-plugin-slogan',
    apply: 'serve',
    async buildStart() {
      const slogan = await getSlogan(config)
      printSlogan(slogan)
    },
    async handleHotUpdate() {
      const slogan = await getSlogan(config)
      printSlogan(slogan)
    },
  }
}
