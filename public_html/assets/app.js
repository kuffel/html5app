
var Application = Backbone.Router.extend({
    
    initialize: function(options){
        Backbone.history.start();
        console.log('initialize');
    },
    
    routes: {
        "*actions": "routeDefault"
    },
    
    routeDefault : function( actions ){
        var showPageID = '#app-page-main';
        if(actions !== null){
            showPageID = '#app-page-'+actions;
        }
        var page = $(showPageID+'.app-page');
        if(page.length > 0){
            $('.app-page').hide();
            $(showPageID+'.app-page').show();
        }else{
            $('.app-page').hide();
            $('#app-page-404.app-page').show();
        }
        $('li', '#navbar-main').removeClass('active');
        if(actions === null){
            $('[href="#"]', '#navbar-main').parent('li').addClass('active');
        }else{
            $('[href="#'+actions+'"]', '#navbar-main').parent('li').addClass('active');
        }
        console.log(showPageID);
    }
    
    
    
    
    
    
});



$(document).ready(function(){
    //$('[href="'+document.location.pathname+'"]').parent('li').addClass('active');
    //console.log(document.location.pathname);
    $('.app-page').hide();
    app = new Application({});       
});

