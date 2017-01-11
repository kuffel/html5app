# json-generator.com

## persons.json

    [
        '{{repeat(5, 10)}}',
        {
          _id: '{{objectId()}}',
          gender: '{{gender()}}',
          firstname: '{{firstName()}}',
          lastname: '{{surname()}}',
          birthdate: '{{date()}}',
          size: '{{integer(120,190)}}',
          weight: '{{integer(60,120)}}'
        }
    ]


## posts.json

    [
      '{{repeat(100, 200)}}',
      {
        _id: '{{objectId()}}',
        guid: '{{guid()}}',
        title : '{{lorem(3, "words")}}',
        description: '{{lorem(1, "paragraphs")}}',
        picture: 'http://lorempixel.com/{{integer(300, 1200)}}/{{integer(300, 800)}}/{{random("abstract", "city", "people", "transport", "animals", "food", "nature", "business", "nightlife", "sports", "cats", "fashion", "technics")}}',
        latitude: '{{floating(-90.000001, 90)}}',
        longitude: '{{floating(-180.000001, 180)}}',
        created: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
        tags: [
          '{{repeat(1,7)}}',
          '{{lorem(1, "words")}}'
        ]
      }
    ]






