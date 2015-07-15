var MessageText = Class.extend({

    init : function(text, color) {
        this.text             = new PIXI.Text(text, {font:"12px Arial", fill:color});
        this.text.messageText = text;
        this.text.colorText   = color;
        this.text.font        = "12px Arial";
        this.text.position.x  = 0;
        this.text.position.y  = 0;
        this.text.anchor.x    = 0;
        this.text.anchor.y    = 0;
    },

    setText : function () {
    
    
    },

    setColor : function () {
    
    
    },

    setFont : function (size) {
        this.text.scale.x = size;
        this.text.scale.y = size;    
    },

    multiplyFont : function (size) {
        this.text.scale.x *= size;
        this.text.scale.y *= size;
    },

    setPosX : function (posX) {
        this.text.position.x = posX;   
    },

    setPosY : function (posY) {
        this.text.position.y = posY; 
    },

    multiplyPos : function (fact) {
        this.text.position.x *= fact;
        this.text.position.y *= fact;    
    },

    setAnchX : function (anchX) {
        this.text.anchor.x = anchX;
    },

    setAnchY : function (anchY) {
        this.text.anchor.y = anchY;    
    },

    setAnchs : function (val) {
        this.setAnchX(val);
        this.setAnchY(val);    
    },    
}); 