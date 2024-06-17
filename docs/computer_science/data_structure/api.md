# Java 常用api

## HashMap

| 方法                         | 作用                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| map.put(key,value)           | 添加键值对                                                   |
| map.get(key)                 | 根据key获取value                                             |
| map.containsKey(key)         | 判断是否包含某个key，返回boolean                             |
| map.getOrDefault(key,默认值) | 如果key存在返回value，否则返回设定的默认值(例如：当value为一个list时，没有key则通过默认方式new一个list出来) |
| map.values()                 | 获取map中的所有values构成的集合对象                          |

