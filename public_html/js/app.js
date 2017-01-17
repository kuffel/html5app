

var app = {
    instance : null
};


app.Application = Backbone.Router.extend({

    defaultOptions: {
        logging: false,
        pushState: false
    },

    initialize : function(options){
        _.extend(this.defaultOptions, options);

        console.log('initialize');

        Backbone.history.start();
    }, // END initialize

    routes : {
        'signup' : 'signup',
        '*path' : 'defaultRoute'
    },

    defaultRoute: function( path ){
        console.log(path);
    }

});




$(document).ready(function(){


    app.instance = new app.Application({});


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