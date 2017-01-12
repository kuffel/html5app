
QUnit.module("Base");

QUnit.test("Dependencies", function( assert ){
    console.log("Testing dependencies...");
    assert.ok( jQuery !== undefined, "jQuery found." );
    assert.ok( _ !== undefined, "underscore.js found." );
    assert.ok( s !== undefined, "underscore.string found." );
    assert.ok( Backbone !== undefined, "Backbone.js found." );
    assert.ok( async !== undefined, "async.js found." );
    assert.ok( validator !== undefined, "validator.js found." );
    assert.ok( localforage !== undefined, "localforage found." );
    assert.ok( moment !== undefined, "moment.js found." );
    //assert.ok( jQuery.cookie !== undefined, "jQuery.cookie found." );
    assert.ok( wysihtml5 !== undefined, "wysihtml5 found." );
});