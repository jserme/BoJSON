;(function () {
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
          // id: '{{index}}',
          name: '{{firstName}} {{surname}}'
        }
      ],
      randomArrayItem: function (idx) {
        var choices = ['cherry', 'apple', 'lemon']
        return choices[this.numeric(0, choices.length - 1)]
      }
    }
  ]

  function stringify (o) {
    return JSON.stringify(o, null, 4)
  }

  function reset () {
    $('#tmpl').val(stringify(defaultTmpl))
  }

  function gen () {
    var $rstEl = $('#rst')
    var tmpl = $('#tmpl').val()
    var genRst = BoJSON(JSON.parse(tmpl))

    $rstEl.val(stringify(genRst))
  }

  $(document).on('click', '#resetBtn', reset)
  $(document).on('click', '#parseBtn', gen)

  $(function () {
    reset()
    gen()
  })
})()
