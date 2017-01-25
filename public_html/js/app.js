/*
    underscore.js examples
    http://underscorejs.org

    $.get('./demodata/posts.json', function(posts){ data = posts });

    _.each(data,function(i){ console.log(i); });
    _.map([1, 2, 3], function(num){ return num * 3; });
    _.find(data,function(i){ return i.title.indexOf('ex') >= 0 }); // Filter first
    _.filter(data,function(i){ return i.title.indexOf('ex') > 0 }); // Filter all
    _.reject(data,function(i){ return i.title.indexOf('ex') > 0 }); // Opposite of filter, filter out if true
    _.where(data, { guid : "6b1a6f92-5542-485e-b5cf-52d9ec5c4ac1" });  // Find all
    _.findWhere(data, { guid : "6b1a6f92-5542-485e-b5cf-52d9ec5c4ac1" }); // Find and return first
    _.every(data,function(i){ return i.title.length > 0 });
    _.some(data,function(i){ return i.title.length == 12 });
    _.contains([1,2,3,4,5,6,7,8], 4 );
    _.invoke([ 'alpha', 'beta', 'charlie', 'delta' ], 'toUpperCase');
    _.pluck( data , 'guid')
    _.max([23,534,63,35345,23432,10000,88123]);
    _.min([23,534,63,35345,23432,10000,88123]);
    _.sortBy(data, 'title')
    _.groupBy(['one', 'two', 'three'], 'length');
    _.shuffle([1, 2, 3, 4, 5, 6]);
    _.sample(data,4);
    _.size(data);


    underscore.string examples
    https://epeli.github.io/underscore.string/







 */


$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    /*
     CKEDITOR.replace( 'ckeditor1', {
     //customConfig: 'js/ckeditor_config.js'
     });
     */


    $('.app-wysihtml5').wysihtml5({
        toolbar: {
            "font-styles": true, //Font styling, e.g. h1, h2, etc. Default true
            "emphasis": true, //Italics, bold, etc. Default true
            "lists": true, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
            "html": false, //Button which allows you to edit the generated HTML. Default false
            "link": true, //Button to insert a link. Default true
            "image": false, //Button to insert an image. Default true,
            "color": true, //Button to change color of font
            "blockquote": true, //Blockquote
            "size": "sm", //default: none, other options are xs, sm, lg,
            "fa" : true
        },
        "locale": 'de-DE'

    });

    $('.chosen-select').chosen({
        disable_search_threshold: 10,
        no_results_text: "Oops, nothing found!"
    });



});