var HexagonEditorMode = {
    MINIMIZED : "minimizedMode",
    NORMAL    : "normalMode",
    EXTENDED  : "extendedMode"    
};

var CONST_HEXA = {

};

var HexagonEditor = Stream.extend({

    init : function(cnt, color) {
        this._super(cnt, color);
        this.mode                    = HexagonEditorMode.NORMAL;
        this.nameNextHexagonToCreate = null;
        this.zoom                    = new Zoom();
        this.minDistanceBlock        = 25;
        this.masters                 = new MapCollections();
        this.nameActiveMaster        = null;
        this.nameLastActiveMaster    = null;
        this.idBlock                 = new SingletonInteger();
		//this.blockXml = new Collections();
    },

    initHudEditor : function () {

        var sizeScreen = $('#editor').width();
    
        this.createTruncatedBlock('nothing', blocksTruncatedSpriteSheet.blocks.get(0), 30, 100, 0);
        this.createTruncatedBlock('blue', blocksTruncatedSpriteSheet.blocks.get(1), 30, 134.5, 0);
        this.createTruncatedBlock('aqua', blocksTruncatedSpriteSheet.blocks.get(2), 30, 169, 0);
        this.createTruncatedBlock('yellow', blocksTruncatedSpriteSheet.blocks.get(3), 30, 250, 0);
        this.createTruncatedBlock('orange', blocksTruncatedSpriteSheet.blocks.get(4), 100, 308, 0);
        this.createTruncatedBlock('red', blocksTruncatedSpriteSheet.blocks.get(5), 100, 360, 0);
        this.createTruncatedBlock('green', blocksTruncatedSpriteSheet.blocks.get(6), 100, 412, 0);
        this.createTruncatedBlock('purple', blocksTruncatedSpriteSheet.blocks.get(7), 100, 464, 0);
        this.createTruncatedBlock('magenta', blocksTruncatedSpriteSheet.blocks.get(8), 100, 516, 0);
        this.createTruncatedBlock('pink', blocksTruncatedSpriteSheet.blocks.get(9), 100, 568, 0);
        this.createTruncatedBlock('lemon', blocksTruncatedSpriteSheet.blocks.get(10), 100, 620, 0);
        this.createTruncatedBlock('brun', blocksTruncatedSpriteSheet.blocks.get(11), 100, 672, 0);
        this.createTruncatedBlock('light-green', blocksTruncatedSpriteSheet.blocks.get(12), 100, 724, 0);
        this.createTruncatedBlock('light-red', blocksTruncatedSpriteSheet.blocks.get(13), 100, 776, 0);        
        this.createTruncatedBlock('slime', blocksTruncatedSpriteSheet.blocks.get(14), 100, 828, 0);  
        this.createTruncatedBlock('white', blocksTruncatedSpriteSheet.blocks.get(15), 100, 880, 0);  
    },

    createRegularBlock : function () {
    
    
    },


    createTruncatedBlock : function (name, texture, cX, cY, type) {
        var block = new ButtonHexa(name, texture);
        block.type = type;
        block.setPosX(cX);
        block.setPosY(cY);
        block.setAnchs(0.5);
        block.setScales(0.2);

        this.hud.addButton(block.name, block);

        return block;
    }

}); 

var hexaEditor = null;

function animateHexaEditorComplete() {
        requestAnimationFrame( animateHexaEditorComplete );
        hexaEditor.resizeStream();
        hexaEditor.renderer.render(hexaEditor.stage);


}

