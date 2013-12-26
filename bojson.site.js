(function() {
    var defaultTmpl = [
        '{{repeat(5, 7)}}', {
            //id: '{{index}}',
            guid: '{{guid}}',
            isActive: '{{bool}}',
            //balance: '{{numeric(1000,4000,%=$0,0.00)}}',
            picture: 'http://placehold.it/32x32',
            age: '{{numeric(20,40)}}',
            name: '{{firstName}} {{surname}}',
            gender: '{{gender}}',
            company: '{{company}}',
            email: '{{email}}',
            phone: '+1 {{phone}}',
            address: '{{numeric(100,999)}} {{street}}, {{city}}, {{state}}, {{numeric(100,10000)}}',
            about: '{{lorem(1,paragraphs)}}',
            registered: '{{date(YYYY-MM-ddThh:mm:ss Z)}}',
            latitude: '{{numeric(-90.000001, 90)}}',
            longitude: '{{numeric(-180.000001, 180)}}',
            tags: [
                '{{repeat(7)}}',
                '{{lorem(1)}}'
            ],
            friends: [
                '{{repeat(3)}}', {
                    id: '{{index}}',
                    name: '{{firstName}} {{surname}}'
                }
            ],
            randomArrayItem: function(idx) {
                var choices = ['cherry', 'apple', 'lemon'];
                return choices[this.numeric(0, choices.length - 1)];
            }
        }
    ];

    function reset() {
        $('#tmpl').val(JSON.stringify(defaultTmpl, null, 4))
    }

    $(document).on('click', '#resetBtn', reset)

    $(document).on('click', '#parseBtn', function() {
        var tmpl = document.getElementById('tmpl').value
        var rstEl = document.getElementById('rst')

        rstEl.value = JSON.stringify(BoJSON(eval('(' + tmpl + ')')), null, 4)
    })

    $(reset)
    $('button[title]').tooltip();
})();
