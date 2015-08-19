
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
        this.activeZoom              = false;
        this.activeMove              = false;
        this.nameActiveBlock         = null;
        this.newRegularBlock         = null;
        this.mouse = null;

        //this.blockXml = new Collections();

        // TODO insert in Camera ?
        this.camera.sprites          = new MapCollections();
        this.camera.lastListAction   = null;
    },

    getRegularBlockInfo : function(name) {

      // TODO move other and simplify because complexity is orrible

      var blockRegular = new Collections();
      blockRegular.transformTab(blockRegularTab, true);

      var blockRegularMap = new MapCollections();

      var index = 0;
      while(index < blockRegular.size) {
          var block = blockRegular.get(index);
          blockRegularMap.insert(block.name, block);
          index++;
      }

      var result = blockRegularMap.get(name);

      if(result === null)
          return blockRegularMap.get('nothing');

      return result;
    },

    initHudEditor : function () {

        var sizeScreen = $('#editor').width();

        var ratio = 0.2;

        var blockSize = 173;

        var startX = 30;
        var startY = 30;

        var oldY = 150;

        function getNextPosY (old) { // TODO need refactor
            oldY = old + (blockSize * ratio) - (blockSize * ratio) % 1;
            return oldY;
        }

        var blockTruncated = new Collections();
        blockTruncated.transformTab(blockTruncatedTab, true);

        var index = 0;
        var blockP = null;
        while(index < blockTruncated.size) {
            var trunc = blockTruncated.get(index);
            if(trunc.type === 1) { // father block
                this.createTruncatedBlock(trunc.name, blocksTruncatedSpriteSheet.blocks.get(trunc.index), startX, getNextPosY(oldY), trunc.type, trunc.father);
            }
            else { // child
              blockP = this.getTruncatedBlockPosition(this.hud.getButton(trunc.neighbour), 2, 0.2);
              this.createTruncatedBlock(trunc.name, blocksTruncatedSpriteSheet.blocks.get(trunc.index), blockP.x, blockP.y, trunc.type, trunc.father);
            }
            index++;
        }

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

        this.createMasterBlock('base', masterAgent.blocks.get(0), 230, 160, 3, 1);
        this.createMasterBlock('engineer', masterAgent.blocks.get(1), 230, 160, 3, 2);
        this.createMasterBlock('explorer', masterAgent.blocks.get(2), 230, 160, 3, 3);
        this.createMasterBlock('kamikaze', masterAgent.blocks.get(3), 230, 160, 3, 4);
        this.createMasterBlock('rocketLauncher', masterAgent.blocks.get(4), 230, 160, 3, 5);
        this.createMasterBlock('turret', masterAgent.blocks.get(5), 230, 160, 3, 6);

        this.camera.container.children.sort(depthCompare);
    },

    createRegularBlock : function (name, texture, cX, cY, type, subType, nameMaster, mode) {
          var block = new Sprite(texture);
          block.name = name;
          block.setScales(0.3);
          block.setPosX(cX);
          block.setPosY(cY);
          block.setAnchs(0.5);
          block.sprite.zIndex = 100;
          block.setAlpha(-1);
          block.setVisible(false);
          block.setInteractive(true);
          block.setButtonMode(true);
          block.setCursor(Cursor.pointer);

          block.nameMaster = nameMaster;

          block.normalMode = mode;

          // TODO add to master

          if(nameMaster !== null)
              this.camera.sprites.get(nameMaster).get('blocks').add(block);



          block.sprite.mousedown = function(data) {

              if(block.normalMode) {

              }
              else { //temp block, mouse

              }

          };

          if(nameMaster !== null)
              var blocksList = this.camera.sprites.get(nameMaster).get('blocks');

          this.camera.addSprite(block.sprite);
          this.camera.container.children.sort(depthCompare);

          return block;
    },


    createTruncatedBlock : function (name, texture, cX, cY, type, father) {
        var block = new ButtonHexa(name, texture);
        block.type = type;
        block.setPosX(cX);
        block.setPosY(cY);
        block.setAnchs(0.5);
        block.setScales(0.2);
        block.father = father;

        if(block.type !== 1) {
          block.setVisible(false);
          block.setAlpha(-1);
        }

        var self = this;

        block.sprite.mousedown = function(data) {

            if(self.nameActiveBlock == block.name)
                self.nameActiveBlock = null;
            else
                self.nameActiveBlock = block.name;


            var bl = null;

            if(block.type == 1 || block.type == 1.31 || block.type == 1.32) {
                for (var i = 0; i < self.hud.buttons.size; i++) {
                    bl = self.hud.buttons.getContent(i);
                    if(bl.value.father == block.name) {

                        console.log("Active : " +self.nameActiveBlock);

                        console.log(bl.value.name);

                        if(block.name == self.nameActiveBlock) {
                            bl.value.setAlpha(1);
                            bl.value.setVisible(true);
                        }
                        else {
                            bl.value.setAlpha(-1);
                            bl.value.setVisible(false);
                        }
                    }
                    else {
                        if(bl.value.type > 1 && bl.value.type < 2) {
                            if(block.type == 1) { // TODO need finish

                                bl.value.setAlpha(-1);
                                bl.value.setVisible(false);
                            }
                        }
                    }
                }
            }
            else {

                if(self.newRegularBlock !== null) {
                    self.camera.removeSprite(self.newRegularBlock.sprite);
                }

                var blockRG = self.getRegularBlockInfo(block.name);

                self.newRegularBlock = self.createRegularBlock(blockRG.name, blocksRegularSpriteSheet.blocks.get(blockRG.index), self.mouse.x, self.mouse.y, 4, blockRG.type, self.nameActiveMaster, false);
                self.newRegularBlock.setAlpha(1);
                self.newRegularBlock.setVisible(true);
            }
        };

        this.hud.addButton(block.name, block);

        return block;
    },

    moveWhenNotDragging : function (moveData) {

        this.mouse = moveData.data.global;

        if(this.newRegularBlock !== null) {
            this.newRegularBlock.setPosX(this.mouse.x);
            this.newRegularBlock.setPosY(this.mouse.y);
        }



    },

    getTruncatedBlockPosition : function (blockBase, typePos, ratio) {

        var pos = {
            x : 0,
            y : 0
        };

        // TODO need more test

        switch (typePos) {
          case 1:
                pos.x = blockBase.getX();
                pos.y = blockBase.getY();
            break;
          case 2: // OK
                pos.x = blockBase.getX() + 160 * ratio;
                pos.y = blockBase.getY() - (blockBase.sprite.height * ratio) - 7;
            break;
          case 3:
                pos.x = blockBase.getX();
                pos.y = blockBase.getY();
            break;
          case 4:
                pos.x = blockBase.getX();
                pos.y = blockBase.getY() + (blockSize.sprite.height * ratio) - (blockSize * ratio) % 1;
            break;

          // TODO cont case 5 and 6

          default:

        }

        return pos;
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

                      if(but.value.type >= 1 && but.value.type < 2) {
                          but.value.setAlpha(-1);
                          but.value.setVisible(false);

                          self.nameActiveBlock = null;
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

        var self = this;

        agent.sprite.mouseover = function(data) {
            this.isOver = true;
            //if (this.isdown)
              //  return;
            this.texture = textureTrans;
            nameAgent.setAlpha(1);
            nameAgent.setVisible(true);
        };

        agent.sprite.mouseout = function(data) {
              this.isOver = false;
              //if (this.isdown)
              //    return;
              this.texture = textureOff;
              nameAgent.setAlpha(-1);
              nameAgent.setVisible(false);
        };

        agent.sprite.mousedown = function(data) {

            // TODO creation master hexagon
            var name = agent.name + '-master';
            self.nameActiveMaster = name;

            var index = 0;

            var listAction = null;
            var panel = null;
            var list = null;
            var block = null;
            var blocks = null;

            while(index < self.camera.sprites.size) {
                but = self.camera.sprites.getContent(index);

                if(but.value.get('master').type == 3) {
                    but.value.get('master').setAlpha(-1);
                    but.value.get('master').setVisible(false);

                }

                index += 1;

            }

            if(self.nameLastActiveMaster === null) {
                self.nameLastActiveMaster = name;

            }
            else {
                if(self.nameLastActiveMaster != name) {

                    panel = self.camera.sprites.get(self.nameLastActiveMaster);
                    listAction = panel.get('list');

                    list = null;
                    index = 0;
                    while(index < listAction.size) {
                        list = listAction.get(index);
                        list.setAlpha(-1);
                        list.setVisible(false);
                        index++;
                    }

                    block = null;
                    index = 0;
                    blocks = panel.get('blocks');
                    while(index < blocks.size) {
                      block = blocks.get(index);
                      block.setAlpha(-1);
                      block.setVisible(false);
                      index++;
                    }

                    self.nameLastActiveMaster = name;

                }



            }

            panel = self.camera.sprites.get(name);

            var master = panel.get('master');
            master.setAlpha(1);
            master.setVisible(true);

            listAction = panel.get('list');
            index = 0;

            list = null;
            while(index < listAction.size) {
                list = listAction.get(index);
                list.setAlpha(1);
                list.setVisible(true);
                index++;
            }

            blocks = panel.get('blocks');
            index = 0;
            block = null;

            while(index < blocks.size) {
                block = blocks.get(index);
                block.setAlpha(1);
                block.setVisible(true);
                index++;
            }




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

        master.setAlpha(-1);
        master.setVisible(false);
        master.sprite.zIndex = 50;


        var listBlock = new Collections();

        var listAction = new Collections();

        var masterCollections = new MapCollections();
        masterCollections.insert('master', master);
        masterCollections.insert('list', listAction);
        masterCollections.insert('blocks', listBlock); // TODO recup lisp with server XML

        this.camera.sprites.insert(master.name, masterCollections);
        this.createListeAction(master.name, listActionHUD.blocks.get(0), cX, cY, false);
        this.createRegularBlock('nothing', blocksRegularSpriteSheet.blocks.get(0), cX - 46, cY + 110, 4, 0, master.name, true);
        this.camera.addSprite(master.sprite);

    },

    createListeAction : function (nameMaster, texture, cX, cY, afterLast) {

        var actionBar = new Sprite(texture);
        actionBar.setAnchs(0.5);
        actionBar.setScales(0.2);
        // TODO fix this bug
        actionBar.sprite.zIndex = 10;
        actionBar.setAlpha(-1);
        actionBar.setVisible(false);

        var listAction = this.camera.sprites.get(nameMaster).get('list');

        if(afterLast) {
            if(listAction.size !== 0) {
                // TODO after other listAction
            }
        }
        else {
            actionBar.setPosX(cX * 0.8);
            actionBar.setPosY(cY * 1.7);


        }

        listAction.add(actionBar);
        this.camera.addSprite(actionBar.sprite);
    }
});

var hexaEditor = null;

function animateHexaEditorComplete() {
        requestAnimationFrame( animateHexaEditorComplete );
        hexaEditor.resizeStream();
        hexaEditor.renderer.render(hexaEditor.stage);
}
