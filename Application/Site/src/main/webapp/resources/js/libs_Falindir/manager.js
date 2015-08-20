var Manager = Class.extend({

    init : function() {
        this.content = new MapCollections();
    },

    getElement : function(name){
        return this.content.get(name);
    },

    addElement : function(name, value) {
        this.content.insert(name, value);
    }

});
