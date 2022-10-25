import axios from 'axios'
import * as qs from 'qs'

type SloganCategory = 'comic' | 'anime' | 'game' | 'literature' | 'other' | 'internet' | 'poem' | 'philosophy' | 'joke' | 'film' | 'netease'
export interface SloganConfig {
  category?: SloganCategory[]
  maxLength?: number
  minLength?: number
}

const categoryMap: {
  [P in SloganCategory]: string
} = {
  anime: 'a',
  comic: 'b',
  game: 'c',
  literature: 'd',
  internet: 'f',
  other: 'g',
  film: 'h',
  poem: 'i',
  netease: 'j',
  philosophy: 'k',
  joke: 'i',
}
export async function getSlogan(config: SloganConfig = {}) {
  const { category = ['anime'], maxLength = 30, minLength = 0 } = config
  const kinds = category.map(v => categoryMap[v])
  const res = await axios({
    method: 'get',
    url: 'https://v1.hitokoto.cn/',
    params: {
      c: kinds,
      max_length: maxLength,
      min_length: minLength,
    },
    paramsSerializer: {
      serialize: (params) => {
        return qs.stringify(params, { indices: false })
      },
    },
  })
  const data = res.data
  const sentence = data.hitokoto || ''
  const from = `${data.from_who || ''}《${data.from || ''}》`
  const slogan = sentence + (from ? `————${from}` : from)
  return slogan
}
