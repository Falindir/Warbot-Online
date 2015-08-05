
var HexagonEditorMode = {
    MINIMIZED : "minimizedMode",
    NORMAL    : "normalMode",
    EXTENDED  : "extendedMode"
};

var CONST_HEXA = {

};


// TODO test show for todo

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
        this.activeNexHexagonButton  = null;
		//this.blockXml = new Collections();
    },

    initHudEditor : function () {

        var sizeScreen = $('#editor').width();

        var ratio = 0.2;

        var blockSize = 173;

        var startX = 30;
        var startY = 30;

        var oldY = 100;

        function getNextPosY (old) {
            oldY = old + (blockSize * ratio) - (blockSize * ratio) % 1;
            return oldY;
        }

        this.createTruncatedBlock('nothing', blocksTruncatedSpriteSheet.blocks.get(0), startX, oldY, 1);
        this.createTruncatedBlock('blue', blocksTruncatedSpriteSheet.blocks.get(1), startX, getNextPosY(oldY), 1);
        this.createTruncatedBlock('aqua', blocksTruncatedSpriteSheet.blocks.get(2), startX, getNextPosY(oldY), 1);
        this.createTruncatedBlock('yellow', blocksTruncatedSpriteSheet.blocks.get(3), startX, getNextPosY(oldY), 1);
        this.createTruncatedBlock('orange', blocksTruncatedSpriteSheet.blocks.get(4), startX, getNextPosY(oldY), 1);
        this.createTruncatedBlock('red', blocksTruncatedSpriteSheet.blocks.get(5), startX, getNextPosY(oldY), 1);
        this.createTruncatedBlock('green', blocksTruncatedSpriteSheet.blocks.get(6), startX, getNextPosY(oldY), 1);
        this.createTruncatedBlock('purple', blocksTruncatedSpriteSheet.blocks.get(7), startX, getNextPosY(oldY), 1);
        this.createTruncatedBlock('magenta', blocksTruncatedSpriteSheet.blocks.get(8), startX, getNextPosY(oldY), 1);
        this.createTruncatedBlock('pink', blocksTruncatedSpriteSheet.blocks.get(9), startX, getNextPosY(oldY), 1);
        this.createTruncatedBlock('lemon', blocksTruncatedSpriteSheet.blocks.get(10), startX, getNextPosY(oldY), 1);
        this.createTruncatedBlock('brun', blocksTruncatedSpriteSheet.blocks.get(11), startX, getNextPosY(oldY), 1);
        this.createTruncatedBlock('light-green', blocksTruncatedSpriteSheet.blocks.get(12), startX, getNextPosY(oldY), 1);
        this.createTruncatedBlock('light-red', blocksTruncatedSpriteSheet.blocks.get(13), startX, getNextPosY(oldY), 1);
        this.createTruncatedBlock('slime', blocksTruncatedSpriteSheet.blocks.get(14), startX, getNextPosY(oldY), 1);
        this.createTruncatedBlock('white', blocksTruncatedSpriteSheet.blocks.get(15), startX, getNextPosY(oldY), 1);

        var oldXButton = 30;

        var buttonSize = 200;

        function getNextPosXButton (old) {
            oldXButton = old + (buttonSize * ratio) - (buttonSize * ratio) % 1 + startX / 2;
            return oldXButton;
        }

        this.createButtonUI('view', buttonHUDSpriteSheet.blocks.get(6), buttonHUDSpriteSheet.blocks.get(7), buttonHUDSpriteSheet.blocks.get(8), startX, startY, 0);
        this.createButtonUI('undo', buttonHUDSpriteSheet.blocks.get(0), buttonHUDSpriteSheet.blocks.get(1), buttonHUDSpriteSheet.blocks.get(2), getNextPosXButton(oldXButton), startY, 0);
        this.createButtonUI('clear', buttonHUDSpriteSheet.blocks.get(3), buttonHUDSpriteSheet.blocks.get(4), buttonHUDSpriteSheet.blocks.get(5), getNextPosXButton(oldXButton), startY, 0);
        this.createButtonUI('save', buttonHUDSpriteSheet.blocks.get(9), buttonHUDSpriteSheet.blocks.get(10), buttonHUDSpriteSheet.blocks.get(11), getNextPosXButton(oldXButton), startY, 0);
        this.createButtonUI('load', buttonHUDSpriteSheet.blocks.get(12), buttonHUDSpriteSheet.blocks.get(13), buttonHUDSpriteSheet.blocks.get(14), getNextPosXButton(oldXButton), startY, 0);



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
    },

    createButtonUI : function (name, textureOff, textureOn, texturTrans, cX, cY, type) {
        var button = new Sprite(textureOn);
        button.name = name;
        button.Off = textureOff;
        button.On = textureOn;
        button.Trans = texturTrans;
        button.setPosX(cX);
        button.setPosY(cY);
        button.setAnchs(0.5);
        button.setScales(0.2);

        button.setInteractive(true);
        button.setButtonMode(true);
        button.setCursor(Cursor.pointer);

        button.sprite.isdown = false;

        button.sprite.mouseover = function(data) {
            this.isOver = true;
            if (this.isdown)
                return;
            this.texture = texturTrans;
        };

        button.sprite.mouseout = function(data) {
              this.isOver = false;
              if (this.isdown)
                  return;
              this.texture = textureOn;
        };

        this.hud.addButton(button.name, button);
    }

});

var hexaEditor = null;

function animateHexaEditorComplete() {
        requestAnimationFrame( animateHexaEditorComplete );
        hexaEditor.resizeStream();
        hexaEditor.renderer.render(hexaEditor.stage);


}




var blocksRegularSpriteSheet = new SpriteSheet('/resources/hexaBlocks/regular.png', 2750, 4000, 250, 250);
blocksRegularSpriteSheet.cut();

var blocksTruncatedSpriteSheet = new SpriteSheet('/resources/hexaBlocks/truncated.png', 2750, 4000, 250, 250);
blocksTruncatedSpriteSheet.cut();

var buttonHUDSpriteSheet = new SpriteSheet('/resources/hexaBlocks/buttonHUD.png', 1000, 600, 200, 200);
buttonHUDSpriteSheet.cut();

var blocksRegularTexture = new MapCollections();




//var blocksTruncatedTexture = new MapCollections();


