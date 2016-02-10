;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports'], factory)
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports)
  } else {
    // Browser globals
    factory(root)
  }
}(this, function (exports) {
  function isType (type) {
    return function (obj) {
      return {}.toString.call(obj) == '[object ' + type + ']'
    }
  }

  var isObject = isType('Object')
  var isString = isType('String')
  var isArray = Array.isArray || isType('Array')
  var isFunction = isType('Function')

  var getNumber = function (str) {
    if (isString(str)) {
      return parseInt(str, 10)
    }
    return str
  }

  var helpers = (function () {
    return {
      // 不符合循环的repeat返回一个数字
      repeat: function (start, end) {
        if (end === undefined) {
          return start
        } else {
          return this.numeric(start, end)
        }
      },

      numeric: function (start, end, format) {
        var m = getNumber(start)
        var n = getNumber(end)

        if (end === undefined) {
          return start
        }

        return Math.round(Math.random() * (n - m) + m)
      },

      bool: function () {
        return [true, false][this.numeric(0, 1)]
      },
      gender: function () {
        return ['male', 'female'][this.numeric(0, 1)]
      }
    }
  })()

  function bojson (tmpl) {
    // 匹配出来指令和它对应的参数
    var reg = /\{\{([^{(]+)(?:\(([^)]+)\))?\}\}/g
    var repeatReg = /\{\{repeat(?:\(([^)]+)\))\}\}/
    var i
    var len
    var rst

    if (isString(tmpl)) {
      tmpl = tmpl.replace(reg, function (input, command, args) {
        if (helpers[command]) {
          return helpers[command].apply(helpers, args ? args.split(',') : [])
        }

        return input
      })
    }

    if (isArray(tmpl)) {
      // 处理repeat，
      if (isString(tmpl[0]) && tmpl[0].match(repeatReg) !== null) {
        var count = tmpl[0].match(repeatReg)[1]
        if (!count) {
          throw new Error('repeat must has a count ')
        }

        count = helpers.numeric.apply(null, count.split(','))

        var seed = tmpl[1]
        tmpl = []

        for (i = 0; i < count; i++) {
          tmpl.push(bojson(seed, i))
        }
      } else {
        rst = []
        for (i = 0, len = tmpl.length; i < len; i++) {
          rst.push(bojson(tmpl[i], i))
        }

        tmpl = rst
      }
    }

    if (isObject(tmpl)) {
      rst = {}
      for (var key in tmpl) {
        rst[key] = bojson(tmpl[key])
      }

      tmpl = rst
    }

    if (isFunction(tmpl)) {
      var idx = [].slice.apply(arguments)[1]
      tmpl = tmpl.call(this, idx)
    }

    return tmpl
  }

  bojson.registeHelper = function (name, func) {
    if (helpers[name]) {
      throw new Error('helper named ' + name + ' already defined ')
    }

    helpers[name] = func
  }

  exports.BoJSON = bojson
}))
