---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 小林的博客
  tagline: 每一个不曾起舞的日子都是对生命的辜负
  image:
    src: /logo.png
    alt: 小林的博客
  actions:
    - text: Java学习
      link: /java/collections/
    - text: 网站导航
      link: /nav/
      theme: alt
features:
  - title: 🍵Java学习
    details: 对Java学习的归纳思考
    link: /java/collections/
    linkText: Java学习
  - title: 🍔数据结构与算法
    details: 复习数据结构与算法
    link: /computer_science/data_structure/
    linkText: 数据结构与算法
  - title: 🧀设计模式
    details: 常学常新，书写优雅的代码
    link: /computer_science/design_pattern/
    linkText: 设计模式
---

<style>
/*爱的魔力转圈圈*/
/*.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}*/
.m-home-layout .details small {
  opacity: 0.8;
}
.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
