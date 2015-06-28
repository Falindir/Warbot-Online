
var Block = Class.extend({

    init : function(id, type, x, y, name) {
            this.id = id;
    		this.type = type;
    		this.posX = x;
    		this.posY = y;
    		this.father = null;
    		this.depth = -1;
    		this.childTab = [];
    		this.childTab2 = [];
    		this.name = name;
    },

    getXmlCode : function() {
        if(this.type == "master")
            var node = $('<?xml version="1.0" encoding="UTF-8"?><'+this.type+'></'+this.type+'>');
        else
            var node = $('<'+this.type+'></'+this.type+'>');

        node.attr('x', this.posX);
        node.attr('y', this.posY);
        node.attr('name', this.name);

        var i = 0;
        while(i < this.childTab.length) {
            node.append(this.childTab[i].getXmlCode());
            i += 1;
        }

        i = 0;
        while(i < this.childTab2.length) {
            node.append(this.childTab2[i]);
            i += 1;
        }

        return node;
    },

    addChild : function(child) {

        child.father = this;

        this.childTab.push(child);

        if(this.childTab.length == 0)
            child.depth = this.father.depth + 1;
        else
            child.depth = this.childTab[this.childTab.length - 1].depth + 1;

    },

    getChild : function(typeChild ) {

        var i = 0;
        var cont = true;
        while (i < this.childTab.length && cont) {

            if(this.childTab[i].type == typeChild) {
                cont = false;
                return this.childTab[i];
            }

            i++;
        }

        return false;
    },

    createNode : function (node) {
        var node = $('<'+node+'></'+node+'>');
        this.childTab2.push(node);
    }


});
