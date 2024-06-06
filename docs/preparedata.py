import os
import re


def create_dir_and_files(link):
  path = link.strip('/')
  # 检查路径中是否有'/'结尾
  if link.endswith('/'):
    # 创建文件夹
    os.makedirs(path, exist_ok=True)
    # 创建index.md文件
    with open(os.path.join(path, 'index.md'), 'w',encoding='utf-8') as f:
      f.write(f'# {path.split("/")[-1]}\n')
  else:
    # 提取目录和文件名
    directory, filename = os.path.split(path)
    os.makedirs(directory, exist_ok=True)
    # 创建.md文件
    with open(os.path.join(directory, f'{filename}.md'), 'w',encoding='utf-8') as f:
      f.write(f'# {filename}\n')


def process_nav_file(filename):
  # 读取文件内容
  with open(filename, 'r',encoding='utf-8') as file:
    content = file.read()

  # 使用正则表达式找到所有的link字段
  links = re.findall(r'link: \'([^\']+)\'', content)

  # 对每个找到的链接创建文件夹和文件
  for link in links:
    create_dir_and_files(link)


# 调用函数处理文件
process_nav_file('nav.txt')
