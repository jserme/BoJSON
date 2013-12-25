# BoJSON
可以叫剥JSON，也是播JSON, 仿  http://www.json-generator.com/

## 用法

```javascript
var tmpl = {
    a: '{{numeric(3, 10)}}',
    b: ['{{repeat(1,3)}}',
        function(idx) {
            return 'i am ' + idx
        }
    ]
};

console.log(JSON.stringify(BoJSON(tmpl), null, 4));

//返回的结果
//{
//    "a": "4",
//    "b": [
//        "i am 0",
//        "i am 1",
//        "i am 2"
//    ]
//}
```

### 目前支持模板
* `repeat(n)` :  必须是数组第一个元素, 循环n次输出数组第二个元素
* `numeric(m,n)` :  返回一个m到n的随机数
* `gender` : 返回性别
* `bool` : 返回一个布尔值

### 注册自定义的模板

```javascript
    BoJSON.registeHelper('city', function(){
          var cities = ['北京', '天津', '杭州', '上海']
          return cities[this.numeric(cities.length-1)]
    }
```
