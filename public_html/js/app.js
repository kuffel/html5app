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

    validator.js examples
    https://github.com/chriso/validator.js

    async examples
    https://github.com/caolan/async

    moment.js examples
    https://momentjs.com/

    localforage examples
    https://localforage.github.io/localForage/

    // TODO: Libraries
    http://marionettejs.com/
    http://velocityjs.org/
    http://lunrjs.com/
    http://tether.io/
    http://interactjs.io/
    https://github.com/bevacqua/dragula
    http://twitter.github.io/typeahead.js/
    http://listjs.com/
    https://scrollrevealjs.org/
    http://socket.io/
    https://libraries.io/bower/fastclick
    http://i18next.com/

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

    $('#datetimepicker1').datetimepicker({
        calendarWeeks : true,
        showTodayButton : true,
        showClear : true,
        showClose : true
    });

    $('#datetimepicker2').datetimepicker({
        locale : 'de',
        format: 'DD.MM.YYYY',
        calendarWeeks : true,
        showTodayButton : true,
        showClear : true,
        showClose : true
    });

    $('#datetimepicker3').datetimepicker({
        locale : 'de',
        format: 'LT'
    });

    $('#datetimepicker4').datetimepicker({
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-arrow-up",
            down: "fa fa-arrow-down"
        },
        viewMode: 'years'
    });

    $('#datetimepicker5').datetimepicker({
        defaultDate: moment( "11/01/2013", "MM/DD/YYYY" ),
        disabledDates: [
            moment("12/25/2013" , "MM/DD/YYYY"),
            moment("12/11/2013" , "MM/DD/YYYY"),
            moment("12/22/2013" , "MM/DD/YYYY"),
            new Date(2013, 11 - 1, 21)
            //"11/22/2013 00:53"
        ]
    });

    $('#datetimepicker6').datetimepicker({
        daysOfWeekDisabled: [5, 6]
    });
    $('#datetimepicker7').datetimepicker({
        useCurrent: false //Important! See issue #1075
    });
    $("#datetimepicker6").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });

    $('#datetimepicker10').datetimepicker({
        viewMode: 'years',
        format: 'MM.YYYY'
    });

    $('#datetimepicker12').datetimepicker({
        inline: true,
        sideBySide: true
    });



});