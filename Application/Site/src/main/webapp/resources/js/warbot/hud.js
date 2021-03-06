var HUD = Class.extend({

    init : function(stage) {
		this.container = new PIXI.Container();
		this.buttons   = new MapCollections(); 
		stage.addChild(this.container); 
        this.container.position.x = 0;
        this.container.position.y = 0;
    },

    addButton : function (name, button) {
    	this.buttons.insert(name, button);
    	this.container.addChild(button.sprite);
    },

    addSprite : function (name, button) {
    	this.buttons.insert(name, button);
    	this.container.addChild(button);
    },

    getButton : function (name) {
    	return this.buttons.get(name);    
    }

}); 