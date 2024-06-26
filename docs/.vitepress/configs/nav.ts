import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  { text: '网站导航', link: '/nav/' },
  { text: 'Java学习',
    items: [
      {text: "Java基础",link: '/java/javase/'},
      { text: "Java集合", link: '/java/collections/' },
      {text: "Java并发",link: '/java/concurrent/'},
      {text: "JVM",link: '/java/jvm/'},
      {text: "Java IO",link: '/java/io/'},
    ]
   },
  { text: '计算机内功',
    items:[
      {text: "操作系统",link: '/computer_science/os/'},
      { text: "数据结构算法", link: '/computer_science/data_structure/' },
      {text: "计算机网络",link: '/computer_science/computer_network/'},
      {text: "设计模式",link: '/computer_science/design_pattern/'},
    ] },
    { text: '框架与中间件',
      items:[
        {
          text: "Spring 框架",
          items:[
            {text: "Spring",link: '/framework/spring'},
            {text: "SpringBoot",link: '/framework/springboot/'},
          ]
        }, 
        {
          text: "消息队列",
          items:[
            {text: "kafka",link: '/framework/kafka'},
            {text: "RabbitMQ",link: '/framework/rabbitmq'},
          ]
        }
    ] },
    { text: '数据库',
      items:[
        {text: "MySQL",link: '/database/mysql/'},
        {text: "Redis",link: '/database/redis/'},
    ] },
    { text: '部署工具',
      items:[
        {text: "git",link: '/deploy/git'},
        {text: "docker",link: '/deploy/docker'},
        {text: "linux",link: '/deploy/linux/'},
    ] },

]
