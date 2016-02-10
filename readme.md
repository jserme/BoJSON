# BoJSON
可以叫剥JSON，也是播JSON, 仿  http://www.json-generator.com/

点击这里预览效果  http://jser.me/BoJSON/

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

### 目前内置模板
* `repeat(n)` :  必须是数组第一个元素, 循环n次输出数组第二个元素

* `numeric(m,n)` :  返回一个m到n区间的随机数
* `gender` : 随机返回性别
* `bool` : 随机返回一个布尔值

### 扩展的模板

扩展的模板使用[Mock.js](http://mockjs.com)的`Random`来生成的
使用的时候需要额外再引入两个JS

* http://mockjs.com/dist/mock.js 
* bojson.helpers.js 

详细的扩展如下,
部分支持参数，详见[https://github.com/nuysoft/Mock/wiki/Mock.Random](https://github.com/nuysoft/Mock/wiki/Mock.Random)

模板 | 说明 
---  |---|
natural|返回一个随机的自然数（大于等于 0 的整数），支持min,max参数
integer|返回一个随机的整数。
float|返回一个随机的浮点数。
character|返回一个随机字符。
string|返回一个随机字符串。
range|返回一个整型数组。
date|返回一个随机的日期字符串。详见[http://mockjs.com/#date](http://mockjs.com/#date)
time|返回一个随机的时间字符串。
datetime|返回一个随机的日期和时间字符串。
image|生成一个随机的图片地址。
dataImage|生成一段随机的 Base64 图片编码。
color|随机生成一个颜色，格式为 '#RRGGBB'。
paragraph|随机生成一段文本。
sentence|随机生成一个句子，第一个的单词的首字母大写。
word|随机生成一个单词。
title|随机生成一句标题，其中每个单词的首字母大写。
first/firstName|随机生成一个常见的英文名。
last/surname|随机生成一个常见的英文姓。
name|随机生成一个常见的英文姓名。
url|随机生成一个 URL。
domain|随机生成一个域名。
email|随机生成一个邮件地址。
ip|随机生成一个 IP 地址。
tld|随机生成一个顶级域名。
guid|随机生成一个 GUID。
id|随机生成一个 18 位身份证。
company|随机生成一个常见的英文名。


### 注册自定义的模板

```javascript
    BoJSON.registeHelper('city', function(){
          var cities = ['北京', '天津', '杭州', '上海']
          return cities[this.numeric(cities.length-1)]
    }
```
