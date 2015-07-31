var Camera = Class.extend({

    init : function(stage) {
    	this.container = new PIXI.Container();
    	stage.addChild(this.container); 
        this.container.position.x = 0;
        this.container.position.y = 0;
    },

    addSprite : function (sprite) {
    	this.container.addChild(sprite);
    },

    setPosX : function (posX) {
    	this.container.position.x = posX;
    },

    setPosY : function (posY) {
    	this.container.position.y = posY;
    },

    setPos : function (posX, posY) {
    	this.setPosX(posX);
    	this.setPosY(posY);    
    },

    samePosX : function (posX) {
    	return this.container.position.x == posX;
    },

    samePosY : function (posY) {
    	return this.container.position.y == posY;
    },

    samePos : function (posX, posY) {
    	return this.samePosX(posX) && this.samePosY(posY);    
    }

}); 