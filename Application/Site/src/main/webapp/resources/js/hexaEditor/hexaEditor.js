
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

        var oldY = 150;

        function getNextPosY (old) {
            oldY = old + (blockSize * ratio) - (blockSize * ratio) % 1;
            return oldY;
        }

        this.createTruncatedBlock('nothing', blocksTruncatedSpriteSheet.blocks.get(0), startX, oldY, 1, null);
        this.createTruncatedBlock('blue', blocksTruncatedSpriteSheet.blocks.get(1), startX, getNextPosY(oldY), 1, null);
        this.createTruncatedBlock('aqua', blocksTruncatedSpriteSheet.blocks.get(2), startX, getNextPosY(oldY), 1, null);
        this.createTruncatedBlock('yellow', blocksTruncatedSpriteSheet.blocks.get(3), startX, getNextPosY(oldY), 1, null);
        this.createTruncatedBlock('orange', blocksTruncatedSpriteSheet.blocks.get(4), startX, getNextPosY(oldY), 1, null);
        this.createTruncatedBlock('red', blocksTruncatedSpriteSheet.blocks.get(5), startX, getNextPosY(oldY), 1, null);
        this.createTruncatedBlock('green', blocksTruncatedSpriteSheet.blocks.get(6), startX, getNextPosY(oldY), 1, null);
        this.createTruncatedBlock('purple', blocksTruncatedSpriteSheet.blocks.get(7), startX, getNextPosY(oldY), 1, null);
        this.createTruncatedBlock('magenta', blocksTruncatedSpriteSheet.blocks.get(8), startX, getNextPosY(oldY), 1, null);
        this.createTruncatedBlock('pink', blocksTruncatedSpriteSheet.blocks.get(9), startX, getNextPosY(oldY), 1, null);
        this.createTruncatedBlock('lemon', blocksTruncatedSpriteSheet.blocks.get(10), startX, getNextPosY(oldY), 1, null);
        this.createTruncatedBlock('brun', blocksTruncatedSpriteSheet.blocks.get(11), startX, getNextPosY(oldY), 1, null);
        this.createTruncatedBlock('light-green', blocksTruncatedSpriteSheet.blocks.get(12), startX, getNextPosY(oldY), 1, null);
        this.createTruncatedBlock('light-red', blocksTruncatedSpriteSheet.blocks.get(13), startX, getNextPosY(oldY), 1, null);
        this.createTruncatedBlock('slime', blocksTruncatedSpriteSheet.blocks.get(14), startX, getNextPosY(oldY), 1, null);
        this.createTruncatedBlock('white', blocksTruncatedSpriteSheet.blocks.get(15), startX, getNextPosY(oldY), 1, null);


        var oldXButton = 30;

        var buttonSize = 200;

        function getNextPosXButton (old) {
            oldXButton = old + (buttonSize * ratio) - (buttonSize * ratio) % 1 + startX / 2;
            return oldXButton;
        }

        this.createButtonUI('view', buttonHUDSpriteSheet.blocks.get(6), buttonHUDSpriteSheet.blocks.get(7), buttonHUDSpriteSheet.blocks.get(8), startX, startY, 0, 1);
        this.createButtonUI('undo', buttonHUDSpriteSheet.blocks.get(0), buttonHUDSpriteSheet.blocks.get(1), buttonHUDSpriteSheet.blocks.get(2), getNextPosXButton(oldXButton), startY, 0, 2);
        this.createButtonUI('clear', buttonHUDSpriteSheet.blocks.get(3), buttonHUDSpriteSheet.blocks.get(4), buttonHUDSpriteSheet.blocks.get(5), getNextPosXButton(oldXButton), startY, 0, 3);
        this.createButtonUI('save', buttonHUDSpriteSheet.blocks.get(9), buttonHUDSpriteSheet.blocks.get(10), buttonHUDSpriteSheet.blocks.get(11), getNextPosXButton(oldXButton), startY, 0, 4);
        this.createButtonUI('load', buttonHUDSpriteSheet.blocks.get(12), buttonHUDSpriteSheet.blocks.get(13), buttonHUDSpriteSheet.blocks.get(14), getNextPosXButton(oldXButton), startY, 0, 5);

        var listAgent = new Sprite(buttonHUDListAgent.blocks.get(0));
        listAgent.setScales(0.3);
        listAgent.setAnchs(0.5);
        listAgent.setPosX(100);
        listAgent.setPosY(85);
        listAgent.setInteractive(true);
        listAgent.setButtonMode(true);
        listAgent.setCursor(Cursor.pointer);

        listAgent.sprite.isdown = true;

        var self = this;

        listAgent.sprite.mousedown = function(data) {
            var agent = null;

            if(this.isdown) {
                this.isdown = false;

                for (i = 0; i < self.hud.buttons.size; i++) {
                    agent = self.hud.buttons.getContent(i);

                    if(agent.value.type == 2) {
                        agent.value.setAlpha(1);
                        agent.value.setVisible(true);
                    }
                }
            }
            else {
                this.isdown = true;

                for (i = 0; i < self.hud.buttons.size; i++) {
                    agent = self.hud.buttons.getContent(i);

                    if(agent.value.type == 2) {
                        agent.value.setAlpha(-1);
                        agent.value.setVisible(false);
                    }
                }


            }
        };

        this.hud.addButton('listAgent', listAgent);

        this.createListAgents('base', agentsHUDSpriteSheet.blocks.get(0), agentsHUDSpriteSheet.blocks.get(1), 220, 85, 2, 1, nameAgentHUDSpriteSheet.blocks.get(0));
        this.createListAgents('engineer', agentsHUDSpriteSheet.blocks.get(2), agentsHUDSpriteSheet.blocks.get(3), 270, 85, 2, 2, nameAgentHUDSpriteSheet.blocks.get(1));
        this.createListAgents('explorer', agentsHUDSpriteSheet.blocks.get(4), agentsHUDSpriteSheet.blocks.get(5), 320, 85, 2, 3, nameAgentHUDSpriteSheet.blocks.get(2));
        this.createListAgents('kamikaze', agentsHUDSpriteSheet.blocks.get(6), agentsHUDSpriteSheet.blocks.get(7), 370, 85, 2, 4, nameAgentHUDSpriteSheet.blocks.get(3));
        this.createListAgents('rocketLauncher', agentsHUDSpriteSheet.blocks.get(8), agentsHUDSpriteSheet.blocks.get(9), 420, 85, 2, 5, nameAgentHUDSpriteSheet.blocks.get(4));
        this.createListAgents('turret', agentsHUDSpriteSheet.blocks.get(10), agentsHUDSpriteSheet.blocks.get(11), 470, 85, 2, 6, nameAgentHUDSpriteSheet.blocks.get(5));

        this.createMasterBlock('base', masterAgent.blocks.get(0), 400, 400, 3, 1);

    },

    createRegularBlock : function () {


    },


    createTruncatedBlock : function (name, texture, cX, cY, type, father) {
        var block = new ButtonHexa(name, texture);
        block.type = type;
        block.setPosX(cX);
        block.setPosY(cY);
        block.setAnchs(0.5);
        block.setScales(0.2);
        block.father = father;


        block.sprite.mousedown = function(data) {
            console.log(block.name);
        };

        this.hud.addButton(block.name, block);

        return block;
    },

    createButtonUI : function (name, textureOff, textureOn, textureTrans, cX, cY, type, subType) {
        var button = new Sprite(textureOn);
        button.name = name;
        button.Off = textureOff;
        button.On = textureOn;
        button.Trans = textureTrans;
        button.setPosX(cX);
        button.setPosY(cY);
        button.setAnchs(0.5);
        button.setScales(0.2);
        button.type = type;
        button.sprite.subType = subType;

        button.setInteractive(true);
        button.setButtonMode(true);
        button.setCursor(Cursor.pointer);

        button.sprite.isdown = false;

        var self = this;

        button.sprite.mouseover = function(data) {
            this.isOver = true;
            if (this.isdown)
                return;
            this.texture = textureTrans;
        };

        button.sprite.mouseout = function(data) {
              this.isOver = false;
              if (this.isdown)
                  return;
              this.texture = textureOn;
        };

        button.sprite.mousedown = function(data) {

            var but = null;

            if(this.subType == 1) {

              if(this.isdown) {
                  this.isdown = false;

                  this.texture = textureOn;

                  for (i = 0; i < self.hud.buttons.size; i++) {
                      but = self.hud.buttons.getContent(i);

                      if(but.value.type == 1) {
                          but.value.setAlpha(1);
                          but.value.setVisible(true);
                      }
                  }

              }
              else {
                  this.isdown = true;

                  this.texture = textureOff;

                  for (i = 0; i < self.hud.buttons.size; i++) {
                      but = self.hud.buttons.getContent(i);

                      if(but.value.type == 1) {
                          but.value.setAlpha(-1);
                          but.value.setVisible(false);
                      }
                  }
              }
            }
        };

        this.hud.addButton(button.name, button);
    },

    createListAgents : function (name, textureOff, textureTrans, cX, cY, type, subType, textureName) {
        var agent = new Sprite(textureOff);
        agent.name = name;
        agent.Off = textureOff;
        agent.Trans = textureTrans;
        agent.setPosX(cX);
        agent.setPosY(cY);
        agent.setAnchs(0.5);
        agent.setScales(0.25);
        agent.type = type;
        agent.sprite.subType = subType;
        agent.setAlpha(-1);
        agent.setVisible(false);

        agent.setInteractive(true);
        agent.setButtonMode(true);
        agent.setCursor(Cursor.pointer);

        var nameAgent = new Sprite(textureName);
        nameAgent.setPosX(cX);
        nameAgent.setPosY(-35 + cY); // TODO faire une distance générique

        nameAgent.setAnchs(0.5);
        nameAgent.setScales(0.25);
        nameAgent.setAlpha(-1);
        nameAgent.setVisible(false);

        agent.sprite.mouseover = function(data) {
            this.isOver = true;
            if (this.isdown)
                return;
            this.texture = textureTrans;
            nameAgent.setAlpha(1);
            nameAgent.setVisible(true);
        };

        agent.sprite.mouseout = function(data) {
              this.isOver = false;
              if (this.isdown)
                  return;
              this.texture = textureOff;
              nameAgent.setAlpha(-1);
              nameAgent.setVisible(false);
        };

        agent.sprite.mousedown = function(data) {

            // TODO creation master hexagon
        };

        this.hud.addButton(agent.name, agent);
        this.hud.addButton('nameAgent-'+agent.name, nameAgent);


    },

    createMasterBlock : function (name, texture, cX, cY, type, subType) {
        var master = new Sprite(texture);

        master.name = name + '-master';
        master.setPosX(cX);
        master.setPosY(cY);
        master.setAnchs(0.5);
        master.setScales(0.4);
        master.type = type;
        master.sprite.subType = subType;

        this.hud.addButton(master.name, master);
    }

});

var hexaEditor = null;

function animateHexaEditorComplete() {
        requestAnimationFrame( animateHexaEditorComplete );
        hexaEditor.resizeStream();
        hexaEditor.renderer.render(hexaEditor.stage);


}
