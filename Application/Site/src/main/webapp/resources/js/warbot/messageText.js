var MessageText = Class.extend({

    init : function(text, color) {
        this.text             = new PIXI.Text(agent.messageDebug, {font:"12px Arial", fill:agent.colorDebug});
        this.text.messageText = text;
        this.text.colorText   = color;
        this.text.font        = "12px Arial";
        this.text.position.x  = 0;
        this.text.position.y  = 0;
        this.text.anchor.x    = 0;
        this.text.anchor.y    = 0;
    }

    setText : function () {
    
    
    },

    setColor : function () {
    
    
    },

    setFont : function () {
    
    
    },

    setPosX : function (posX) {
        this.text.position.x = posX;   
    },

    setPosY : function (posY) {
        this.text.position.y = posY; 
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