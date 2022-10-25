/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, expect, it, vi } from 'vitest'
import type { Plugin } from 'vite'
import { getSlogan } from '../src/api'
import Slogan from '../src/index'
describe('index', () => {
  it.skip('api', async () => {
    const slogan = await getSlogan({
      category: ['comic', 'anime'],
    })
    expect(slogan).toMatchInlineSnapshot('"己所欲者，杀而夺之，亦同天赐————阿兹莉尔《游戏人生》"')
  })

  it('plugin', async () => {
    const spyConsole = vi.spyOn(console, 'log')
    const plugin: Plugin = Slogan()
    // @ts-expect-error
    await plugin.buildStart()
    // @ts-expect-error
    await plugin.handleHotUpdate()
    expect(spyConsole).toBeCalledTimes(2)
  })
})

