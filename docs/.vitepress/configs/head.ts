import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'apple-touch-icon', href: '/icon.ico' }],
  ['link', { rel: 'icon', href: '/icon.ico', color: '#3eaf7c' }],
  ['link', { rel: 'mask-icon', href: '/icon.ico', color: '#3eaf7c' }],
  ['meta', { name: 'msapplication-TileImage', content: '/icon.ico' }],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
]
