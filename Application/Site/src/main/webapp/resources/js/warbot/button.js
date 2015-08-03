var Buttons = MapCollections.extend({

    init : function() {
    	this._super();
    }

});  

var ButtonHexa = Sprite.extend({

    init : function(name, texture) {
    	this._super(texture);
		this.name   = name;
		this.type   = -1;
		this.isDown = false;
		this.setInteractive(true);
		this.setButtonMode(true);
		this.setCursor(Cursor.pointer);
    }

}); 


var ButtonUI = Sprite.extend({

    init : function(textDefault, textDown, textTrans) {
		this._super(textDefault);  
		this.default = textDefault;
		this.down    = textDown;
		this.trans   = textTrans;
		this.type    = null;
		this.isDown  = false;
		this.setInteractive(true);
		this.setButtonMode(true);
		this.setCursor(Cursor.pointer);
    },

    setType : function (type) {
        this.type = type;
    },


}); 

var ButtonsType = {
	life 	: "life",
	message : "message",
	percept : "percept",
	stop 	: "stop",
	delete 	: "delete",
	clear 	: "clear",
	play 	: "play",
	load 	: "loading"
}