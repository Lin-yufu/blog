import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '常用工具',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT',
        link: 'https://chat.openai.com/chat',
      },
      {
        icon: '/icons/notion.svg',
        title: 'Notion 笔记',
        link: 'https://www.notion.so',
      }
    ],
  },
  {
    title: '大厂技术参考',
    items: [
      {
        icon: '/icons/meituan.svg',
        title: '美团技术团队',
        link: 'https://tech.meituan.com/'
      },
      {
        icon: '/icons/tencent.svg',
        title: '腾讯技术工程',
        link: 'https://new.qq.com/omn/author/6093642'
      },
      {
        icon: '/icons/dewu.svg',
        title: '得物技术',
        link: 'https://https://tech.dewu.com/'
      },
      {
        icon: '/icons/bilibili.svg',
        title: '哔哩哔哩技术',
        link: 'https://www.bilibili.com/read/cv28997672/'
      }
    ]
  },
  {
    title: 'Java 学习整理',
    items: [{
      icon: '/icons/java.svg',
      title: 'Java全栈知识体系',
      link: 'https://pdai.tech/'
    },
    {
      icon: '/icons/xiaolin.png',
      title: '小林coding',
      link: 'https://xiaolincoding.com/'
    },
    {
      icon: '/icons/java.svg',
      title: 'JavaGuide',
      link: 'https://javaguide.cn/'
    }   
    ]
  },
  {
    title: '官方文档',
    items: [
      {
        icon: '/icons/redis.svg',
        title: 'redis',
        link: 'https://redis.io/docs/latest/'
      },
      {
        icon: '/icons/spring.svg',
        title: 'Spring',
        link: 'https://spring.io/'
      }


    ]
  }
]
