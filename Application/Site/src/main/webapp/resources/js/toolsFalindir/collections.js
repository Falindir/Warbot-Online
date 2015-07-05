var Collections = Class.extend({

    init : function() {
       this.collections = [];
    },

    size : function () {
        return this.collections.length;
    },

    clear : function () {
        this.collections = [];
    },

    get : function (index) {
        return this.collections[index];    
    },

    add : function (value) {
        this.collections.push(value);
    },

    set : function (index, value) {
        this.collections[index] = value;
    },

    remove : function (index) {
        this.collections.splice(index, 1);
    }

}); 

var Map = Class.extend({

    init : function() {
       
    }

}); 