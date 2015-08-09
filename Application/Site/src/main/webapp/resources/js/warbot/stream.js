/**
 * @author Falindir
 */

var Stream = Class.extend({

    init : function(cnt, color) {
            this.nameContainer = cnt;
            this.container     = $(cnt)[0];
            this.renderer      = new PIXI.autoDetectRenderer(this.container.offsetWidth,this.container.offsetHeight,{backgroundColor : color});
            this.stage         = new PIXI.Container();
            this.backGround    = new PIXI.Container();


            this.stage.addChild(this.backGround);
            var texture = PIXI.Texture.fromImage("/resources/hexaBlocks/backgroung.png");
            var tilingSprite = new PIXI.extras.TilingSprite(texture, 2000, 2000);
            tilingSprite.scale.x = 0.3;
            tilingSprite.scale.y = 0.3;
            this.sp = tilingSprite;
            this.backGround.addChild(tilingSprite);
            this.camera        = new Camera(this.stage);
            this.hud           = new HUD(this.stage);

            this.coordCenterX  = 0;
            this.coordCenterY  = 0;
            this.zoom          = 1;
            this.minZoom       = 0;
            this.maxZoom       = 100000;
            this.prevX         = 0;
            this.prevY         = 0;
            this.isDragging    = false;
            this.activeZoom    = true;
            this.activeMove    = true;
    },

    initStream : function() {
        	this.stage.interactive = true;
        	this.renderer.view.style.display = "block";
            this.container.appendChild(this.renderer.view);
            //this.stage.addChild(this.camera);
            //this.stage.addChild(this.hud);
            //this.camera.position.x = 0;
            //this.camera.position.y = 0;
            this.camera.initPosition();
    },

    resizeStream : function () {
        this.renderer.resize(this.container.offsetWidth-1, this.container.offsetHeight-1);
        this.coordCenterX = this.container.offsetWidth-1 / 2;
        this.coordCenterY = this.container.offsetHeight-1 / 2;
        this.sp.height = this.container.offsetHeight / 0.3;
        this.sp.width = this.container.offsetWidth / 0.3;
    },

    renderStream : function () {
        this.renderer.render(this.stage);
    },

    cameraMove : function () {

        var self = this;

    	this.stage.mousedown = function (moveData) {
    		var pos = moveData.data.global;
    		this.prevX = pos.x;
    		this.prevY = pos.y;
    		this.isDragging = true;
    	};

    	this.stage.mouseup = function (moveDate) {
    		this.isDragging = false;
    	};

    	this.stage.mouseover = function (moveDate) {

    	};

    	this.stage.mousemove = function (moveData) {

        if(this.activeMove) {
        		if (!this.isDragging) {
        		    self.moveWhenNotDragging(moveData);
        			return;
        		}

        		var pos = moveData.data.global;

        		if(pos.x > 0 && pos.y > 0 && pos.x < self.container.offsetWidth-1 && pos.y < self.container.offsetHeight-1) {
                    var dx = pos.x - this.prevX;
                    var dy = pos.y - this.prevY;

                    //self.camera.position.x += dx;
                    //self.camera.position.y += dy;
                    self.camera.moveX(dx);
                    self.camera.moveY(dy);

                    this.prevX = pos.x;
                    this.prevY = pos.y;
        		}
        		else {
        		    this.isDragging = false;
        		}
        }
    	};
    },

    moveWhenNotDragging : function (moveData) {
            //abstract function
    }

});


function depthCompare(a,b) {

  if (a.zIndex < b.zIndex)
     return -1;
  if (a.zIndex > b.zIndex)
    return 1;
  return 0;
}
