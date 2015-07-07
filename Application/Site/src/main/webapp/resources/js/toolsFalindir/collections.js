var Collections = Class.extend({

    init : function() {
       this.collections = [];
       this.size = 0;
    },

    clear : function () {
        this.collections = [];
    },

    get : function (index) {
        return this.collections[index];    
    },

    add : function (value) {
        this.collections.push(value);
        this.size += 1;
    },

    set : function (index, value) {
        this.collections[index] = value;
    },

    remove : function (index) {
        this.collections.splice(index, 1);
        if(this.size > 0)
            this.size -= 1;
    },

    contains : function (value) {
        for (i = 0; i < this.collections.length; i++)
            if(this.collections[i] === value)
                return true;
    
        return false;
    },

    getIndex : function (value) {
        for (i = 0; i < this.collections.length; i++)
            if(this.collections[i] === value)
                return i;            
        
        return -1;
    },

    getAllIndex : function (value) {
        var index = new Collections();

        for (i = 0; i < this.collections.length; i++)
            if(this.collections[i] === value)
                return index.add(i);            
        
        return index;    
    
    }

}); 

var MapContent = Class.extend({

    init : function(key, value) {
        this.key = key;
        this.value = value;       
    }

}); 

var Map = Class.extend({

    init : function() {
        this.keys = new Collections();
        this.values = new Collections();
    },

    size : function () {
        return this.keys.size();    
    },

    clear : function () {
        this.keys = new Collections();
        this.values = new Collections();
    }, 

    get : function (key) {
        if(this.keys.contains(key))
            return this.values.get()


        return null;
    },

    position : function (index) {
        
    
    }

    insert : function (key, value) {
    
    
    }  

}); 

var Tree = Class.extend({

    init : function() {
        this.position = 0;
        this.father   = null;
        this.value    = null;
        this.children = new Collections();
    },

    addChild : function (child) {
        if(child instanceof Tree){
            if(!this.children.contains(child))
                this.children.add(child);
        }        
    },

    addFather : function (father) {
        if(father instanceof Tree){
            

        }   
    }

}); 

var BinaryTree = Class.extend({

    init : function() {
        this.position = 0;
        this.father   = null;
        this.value    = null;
        this.right    = null;
        this.left     = null;   
    }

}); 