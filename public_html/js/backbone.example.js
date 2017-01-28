// Backbone.js Models and Collections.


var Post = Backbone.Model.extend({

    defaults : {
        "_id" : null,
        "guid" : null,
        "title" : null,
        "description" : null,
        "picture" : null,
        "latitude" : null,
        "longitude" : null,
        "created" : null,
        "tags" : []
    }
});

var Posts = Backbone.Collection.extend({
    model: Post
});

Posts.loadPosts = function( callback ){
    $.get('./demodata/posts.json', function(posts){
        if(_.isFunction(callback)){
            callback(new Posts(posts));
        }
    });
};



var Person = Backbone.Model.extend({

    defaults : {
        "_id": null,
        "gender": null,
        "firstname": null,
        "lastname": null,
        "birthdate": null,
        "size": null,
        "weight": null
    }

});

var PersonCard = Backbone.View.extend({

    tagName: "div",

    className: "person-card",

    events: {
        "click" : "handleClick"

    },

    handleClick : function(){
        console.log("handleClick: "+this.model.get("_id"));
        this.model.destroy();
    },

    initialize: function( options ) {
        //console.log(options);
        this.id = "person-card-"+options.model.get('_id');
        this.listenTo(this.model, "change", this.render);
        //this.listenTo(this.model, "remove", this.remove);
        this.listenTo(this.model, "destroy", this.remove);
    },

    render : function(){
        var compiled = _.template("<p><%= id %></p> <p><%= firstname %> <%= lastname %></p>");
        this.$el.html( compiled({
            id : this.model.get('_id'),
            firstname : this.model.get('firstname'),
            lastname : this.model.get('lastname')

        }));
        return this;
    }

});



var Persons = Backbone.Collection.extend({
    model: Person
});

Persons.loadPersons = function( callback ){
    $.get('./demodata/persons.json', function(persons){
        if(_.isFunction(callback)){
            callback(new Persons(persons));
        }
    });
};

var BodyView = Backbone.View.extend({
    el: 'body',
    events: {
        'click' :  "onBodyClick",
        'mouseover' : "onBodyClick"
    },
    onBodyClick : function(){
        console.log("onBodyClick");
    },
    render : function(){
        this.$el.css("backgroundColor","#eaeaea");
        return this;
    }
});



Persons.loadPersons(function(loaded){

    /*
     p200 = loaded.at(200);
     pc200 = new PersonCard({ model: p200 });
     jQuery('body').append(pc200.render().el);
     */

    demoPersons = loaded;
    for(var i = 0 ; i < _.size(demoPersons); i++){
        var p = demoPersons.at(i);
        var pv = new PersonCard({ model: p });
        jQuery('body').append(pv.render().el);
    }



});

