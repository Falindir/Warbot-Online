var Background = Class.extend({

    init : function(stage, texture, width, height, scale) {
    		this.container = new PIXI.Container();
    		this.tilingSprite = new PIXI.extras.TilingSprite(texture, width, height);
        this.setScale(scale);
        stage.addChild(this.container);
        this.container.addChild(this.tilingSprite);
    },

    setScale : function (scale) {
      this.tilingSprite.scale.x = scale;
      this.tilingSprite.scale.y = scale;
    }

});
