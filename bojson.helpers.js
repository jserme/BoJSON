;(function () {
  var Random = Mock.Random

  var helpers = {
    firstName: function () {
      return Random.first()
    },
    surname: function () {
      return Random.last()
    },
    company: function () {
      return Random.name()
    }
  }

  var methodInMock = 'natural,integer,float,\
                      character,string,range,date,\
                      time,datetime,image,dataImage,\
                      color,paragraph,sentence,word,\
                      title,first,last,name,url,domain,\
                      email,ip,tld,region,province,city,county,guid,id,zip'
    .split(',')
    .map(function (v) {
      return v.trim()
    })

  var key

  for (var i = 0; i < methodInMock.length; i++) {
    key = methodInMock[i]
    helpers[key] = (function (k) {
      return function () {
        return Random[k].apply(Random, [].slice.apply(arguments))
      }
    })(key)
  }

  for (key in helpers) {
    BoJSON.registeHelper(key, helpers[key])
  }
})()
