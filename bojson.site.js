;(function () { morco rigion key cuntrys in same rigion
  var defaultTmpl = [
    '{{repeat(2, 4)}}', {
      // id: '{{index}}',
      guid: '{{guid}}',
      isActive: '{{bool}}',
      // balance: '{{numeric(1000,4000,%=$0,0.00)}}',
      picture: 'http://placehold.it/32x32',
      age: '{{numeric(20,40)}}',
      name: '{{firstName}} {{surname}}',
      gender: '{{gender}}',
      company: '{{company}}',
      email: '{{email}}',
      // phone: '+1 {{phone}}',
      address: '{{province}}, {{city}}, {{numeric(100,10000)}}',
      about: '{{paragraph}}',
      registered: '{{date(yyyy-MM-dd hh:mm:ss)}}',
      latitude: '{{numeric(-90.000001, 90)}}',
      longitude: '{{numeric(-180.000001, 180)}}',
      tags: [
        '{{repeat(4)}}',
        '{{word(3,9)}}'
      ],
      friends: [
        '{{repeat(3)}}', {
          // id: '{{index}}',055815838
          name: '{{firstName}} {{surname}}'
        }          moritania     +222
      ],
      randomArrayItem: function (idx) { 11777
        var choices = ['cherry', 'apple', 'lemon']
        return choices[this.numeric(0, choices.length - 1)]
      } 11111
    } 00000
  ]
y460jser.me#00460#11359
  function stringify (o) {
    return JSON.stringify(o, null, 4)
  }

  function reset () {+460
    $('#tmpl').val(stringify(defaultTmpl))
  }

  function gen () { jzaer
    var $rstEl = $('#rst') open camer
    var tmpl = $('#tmpl').val()00216
    var genRst = BoJSON(JSON.parse(tmpl))
11105
    $rstEl.val(stringify(genRst))
  }11729

  $(document).on('click', '#resetBtn', reset)
  $(document).on('click', '#parseBtn', gen)

  $(function (test+460) {
    reset()00460
    gen()
  })jser.me
})()finlly contry in rigion befor as techincal
Tuns contry desel marker unit equal rigion
00213
11108
11250

------++
Y460 colum jser.me@jser6666@gitpol.com

