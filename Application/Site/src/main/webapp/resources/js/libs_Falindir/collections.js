
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
    
    },

    getInterval : function (start, end) {
        var interval = new Collections();

        for (i = start; i <= end; i++) {
            interval.add(this.get(i));
        }
        
        return interval;
    }

}); 

var MapContent = Class.extend({

    init : function(key, value) {
        this.key = key;
        this.value = value;       
    }

}); 

var MapCollections = Class.extend({

    init : function() {
        this.keys = new Collections();
        this.values = new Collections();
        this.size = 0;
    },

    clear : function () {
        this.keys = new Collections();
        this.values = new Collections();
    }, 

    get : function (key) {
        if(this.keys.contains(key)) {
            var index = this.keys.getIndex(key);
            return this.values.get(index);
        }
            

        return null;
    },

    getContent : function (index) {

        if(index < this.size) {
            var key = this.keys.get(index);
            var value = this.values.get(index);
            var content = new MapContent(key, value);
            return content;
        }
            
        return null;
    
    },

    insert : function (key, value) {
        if(!this.keys.contains(key)) {
            this.keys.add(key);
            this.values.add(value);
            this.size += 1;
        }
    },

    remove : function (key) {
        if(this.keys.contains(key)) {
            var index = this.keys.getIndex(key);
            this.keys.remove(index);
            this.values.remove(index);
            this.size -= 1;
        }
    } 

}); 

var Node = Class.extend({

    init : function() {
        this.value = null;
        this.depth = -1;
    },

    setValue : function (value) {
        this.value = value;
    },

    setDepth : function (depth) {
        this.depth = depth;
    }
}); 

var Tree = Class.extend({

    init : function() {
        this.depth    = -1;
        this.father   = null;
        this.node     = new Node();
        this.children = new Collections();

        this.node.setDepth(0);
    },

    addChild : function (child) {
        if(child instanceof Tree){
            if(!this.children.contains(child))
                this.children.add(child);
        }        
    },

    addFather : function (father) {
        if(father instanceof Tree){
            if(this.father != father) { 
                this.father = father;
                
                // security if not init depth of father
                if(this.father.depth == -1)
                    this.father.depth = 0;

                this.depth = this.father.depth + 1;
            }    
        }   
    },

    haveFather : function () {
        return this.father != null;
    }

    isNull : function () {
        return this.depth == -1; 
    }, 

    isEmpty : function () {
        return this.children.size == 0;
    },

    getSize : function () {
        return this.children.size + 1;
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