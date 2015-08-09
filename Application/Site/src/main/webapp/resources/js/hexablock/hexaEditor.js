

var HexagonEditorMode = {
    MINIMIZED : "minimizedMode",
    NORMAL    : "normalMode",
    EXTENDED  : "extendedMode"
};

var MinimizedMode = {
    DEPTH : 5,
    WIDTH : 10
};

var HexagonEditorStream = Stream.extend({

    init : function(cnt, color) {
        this._super(cnt, color);
        this.nextHexagonToCreate              = null;
        this.nextHexagonToCreateObject        = null;
        this.nextHexagonToCreateObjectHexagon = null;
        this.minZoom                          = 0.5;
        this.maxZoom                          = 2;
        this.minDistanceBlock                 = 25;
        this.activeZoom                       = false;
        this.nameActiveMasterAgent            = null;
        this.lastIndexActiveMasterTab         = null;
        this.agentsMasterTab                  = [];
        this.idBlock                          = 0;
        this.blockXmlTab                      = new Collections();
        this.CONSTANT                         = this.getConstant();
        this.mode                             = HexagonEditorMode.NORMAL;
    },

    getNextIdBlock : function () {
        this.idBlock += 1;
        return this.idBlock;
    },

    getConstant : function () {
        var typeB = {
            list   : 0,
            empty  : 0.5,
            master : 1,
            normal : 2
        };

        var coord = {
            xFirstBlock  : 90,
            yFirstBlock  : 165,
            xMasterBlock : 90,
            yMasterBlock : 75,
            xFirstList   : 90,
            yFirstList   : 240
        };

        var constant = {
            coordinate      : coord,
            sizeBlock       : 60,
            indexFirstBlock : 2,
            typeBlock       : typeB
        };

        return constant;
    },

    getNewActionBlock : function () {
        var newActionBlock = {
            x           : 90,
            y           : 165,
            addY        : 120,
            index       : -1,
            indexInTab  : 2
        };

        return newActionBlock;
    },

    initMasterBlock : function(name, index) {
        var tab = [];
        tab.nameMaster = name;
        tab.currentActionBlock = this.getNewActionBlock();
        tab.numberList = 1;
        tab.lastPosYList = this.CONSTANT.coordinate.yFirstList;

        this.agentsMasterTab.push(tab);
        this.createBlock(this.camera, SpriteBlock.getMaster(tab.nameMaster), this.CONSTANT.coordinate.xMasterBlock, this.CONSTANT.coordinate.yMasterBlock, 1, index);

        var blockXml = new Block(this.getNextIdBlock(), 'master', this.CONSTANT.coordinate.xMasterBlock, this.CONSTANT.coordinate.yMasterBlock, name);
        this.blockXmlTab.add(blockXml);

        this.createBlock(this.camera, listAction, this.CONSTANT.coordinate.xFirstList, this.CONSTANT.coordinate.yFirstList, this.CONSTANT.typeBlock.list, index);
        this.createBlock(this.camera, emptyBlock, this.CONSTANT.coordinate.xFirstBlock, this.CONSTANT.coordinate.yFirstBlock, this.CONSTANT.typeBlock.empty, index);
        //var actionUser = new Block(this.getNextIdBlock(), 'actionUser', this.CONSTANT.coordinate.xFirstBlock, this.CONSTANT.coordinate.yFirstBlock, "ActionUser");
        //this.blockXmlTab.get(index).addChild(actionUser);
    },

    initMasterTab : function () {
        this.initMasterBlock(agentType.base, 0);
        this.initMasterBlock(agentType.engineer, 1);
        this.initMasterBlock(agentType.explorer, 2);
        this.initMasterBlock(agentType.kamikaze, 3);
        this.initMasterBlock(agentType.rocketLauncher, 4);
        this.initMasterBlock(agentType.turret, 5);

        this.camera.children.sort(depthCompare);
    },

    getDistanceInterBlock : function (b1, b2) {
        if( b1 == null || b2 == null)
            return 100000;

        var x = (b2.position.x - b1.position.x) * (b2.position.x - b1.position.x);
        var y = (b2.position.y - b1.position.y) * (b2.position.y - b1.position.y);
        var dist = Math.sqrt(x + y);
        return dist;
    },

    loadMasterAgent : function () {
        if(this.nameActiveMasterAgent != null) {
            var indexTab = this.getGoodIndexMasterTab();

            if(this.lastIndexActiveMasterTab != null) {
                for (i = 0; i < this.agentsMasterTab[this.lastIndexActiveMasterTab].length; i++) {
                    this.agentsMasterTab[this.lastIndexActiveMasterTab][i].alpha = -1;
                }
            }

            for (i = 0; i < this.agentsMasterTab[indexTab].length; i++) {
                this.agentsMasterTab[indexTab][i].alpha = 1;
            }

            this.lastIndexActiveMasterTab = indexTab;

            this.camera.position.x = 0;
            this.camera.position.y = 0;
        }
    },

    getGoodIndexMasterTab : function () {
        if(this.nameActiveMasterAgent) {
            for (i = 0; i < this.agentsMasterTab.length; i++) {
                if(this.agentsMasterTab[i].nameMaster == this.nameActiveMasterAgent)
                    return i;
            }
        }
    },

    createBlock : function(scene, form, cX, cY, type, indexTab) {

        var block = new PIXI.Sprite(form);

        block.position.x = cX;
        block.position.y = cY;

        block.anchor.x = 0.5;
        block.anchor.y = 0.5;

        block.scale.x = 0.3;
        block.scale.y = 0.3;

        if(type == 2) {
             block.interactive = true;
             block.buttonMode = true;
             block.defaultCursor = "pointer";
             block.zIndex = 100;
        }
        else {
             block.interactive = false;
             block.buttonMode = false;

             if(type == 0) {
                block.zIndex = 10;
             }
             else if (type == 0.5) {
                block.zIndex = 25;
             }
             else if (type == 1) {
                block.zIndex = 50;
             }
        }
       block.type = type;

       block.alpha = -1;

       this.agentsMasterTab[indexTab].push(block);

       scene.addChild(block);

    },

    getPositionOfNeighbourBlock : function (block, type) {
        var neighbour = {
            x : 0,
            y : 0
        }

        switch(type) {
            case 0:
                neighbour.x = block.position.x;
                neighbour.y = block.position.y;
                return neighbour;
                break;

            case 1 :
                neighbour.x = block.position.x + 52;
                neighbour.y = block.position.y + 0;
                return neighbour;
                break;
            case 2 :
                neighbour.x = block.position.x + 26;
                neighbour.y = block.position.y + 45;
                return neighbour;
                break;
            case 3 :
                neighbour.x = block.position.x - 26;
                neighbour.y = block.position.y + 45;
                return neighbour;
                break;
            case 4 :
                 neighbour.x = block.position.x - 52;
                 neighbour.y = block.position.y + 0;
                 return neighbour;
                 break;
            case 5 :
                neighbour.x = block.position.x - 26;
                neighbour.y = block.position.y - 45;
                return neighbour;
                break;
            case 6 :
                neighbour.x = block.position.x + 26;
                neighbour.y = block.position.y - 45;
                return neighbour;
                break;
            case 7 :
                neighbour.x = block.position.x + 0;
                neighbour.y = block.position.y + 60;
                return neighbour;
                break;
            case 8 :
                neighbour.x = block.position.x + 0;
                neighbour.y = block.position.y - 60;
                return neighbour;
                break;
            case 9 :
                neighbour.x = block.position.x + 26 + 52;
                neighbour.y = block.position.y + 45;
                return neighbour;
                break;
            default:
                return neighbour;
        }

    },

    managementOfNewActionBlocks : function (block, index, tempI) {

        var actionBlock = this.agentsMasterTab[index].currentActionBlock;

        if (block.position.y == actionBlock.y && block.position.x == actionBlock.x) {
            this.createBlock(this.camera, emptyBlock, actionBlock.x, actionBlock.y + actionBlock.addY, 0.5, index);
            this.agentsMasterTab[index].currentActionBlock.y += actionBlock.addY;
            this.agentsMasterTab[index].currentActionBlock.indexInTab = this.agentsMasterTab[index].length - 2; // on lui donne son nouveau index
            this.agentsMasterTab[index].numberList += 1;
            var nextAction = new Block(this.getNextIdBlock(), 'actionUser', actionBlock.x, actionBlock.y + actionBlock.addY, "ActionUser");
            this.blockXmlTab.get(index).addChild(nextAction);
            if(this.agentsMasterTab[index].numberList % 2 == 1) {
                this.createBlock(this.camera, listAction, actionBlock.x, this.agentsMasterTab[index].lastPosYList + 240, 0, index);
                this.agentsMasterTab[index].lastPosYList += 240;
            }
        }
    },

    gestionCreationBlock : function (block, index, tempI) {

        var type = this.nextHexagonToCreateObjectHexagon.typeOfType;
        var name = this.nextHexagonToCreateObjectHexagon.name;
        var tempBlock;
        var actionBlock = this.agentsMasterTab[index].currentActionBlock;

        if (block.position.y == actionBlock.y && block.position.x == actionBlock.x) {
            if(type == 110) { // BLOCK WHEN

                        // TODO VERIF SI PAS DANS UN WHEN
                        // TODO REMOVE SI EMPTY OU DO ECRASE BLOCK EXISTANT

                        this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);
                        var whenBlock = new Block(this.getNextIdBlock(), 'when', block.position.x, block.position.y, 'When');

                        tempBlock = this.getPositionOfNeighbourBlock(block, 1); // BLOCK EMPTY
                        this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);

                        tempBlock = this.getPositionOfNeighbourBlock(block, 2); // BLOCK DO
                        this.createBlock(this.camera, actionDo, tempBlock.x, tempBlock.y, 2, index);
                        var doBlock = new Block(this.getNextIdBlock(), 'do', tempBlock.x, tempBlock.y, 'Do');

                        tempBlock = this.getPositionOfNeighbourBlock(block, 9); // BLOCK EMPTY
                        this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);

                        this.managementOfNewActionBlocks(block, index, tempI);

                        var numberAction = this.agentsMasterTab[index].numberList;
                        this.blockXmlTab.get(index).childTab.get(numberAction - 2).addChild(whenBlock);
                        this.blockXmlTab.get(index).childTab.get(numberAction - 2).addChild(doBlock);

                        //console.log(this.blockXmlTab.get(index).getXmlCode());
            }
            else {

                this.createBlock(this.camera, emptyBlock, actionBlock.x, actionBlock.y, 0.5, index);
            }
        }
        else {
            if(type == 110) {
                tempBlock = this.getPositionOfNeighbourBlock(block, 0); // BLOCK EMPTY
                this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);
            }

            else if (type >= 211 && type <= 331) { // BLOCK AGENT + BLOCK VIEW

                // TODO VERIF EMPTY NO ECRASE

                this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);

                tempBlock = this.getPositionOfNeighbourBlock(block, 1); // BLOCK EMPTY
                this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);

                if(type >= 301) {// VIEW

                    var i = 0;
                    var cont = true;
                    var viewBlock = new Block(this.getNextIdBlock(), 'view', tempBlock.x, tempBlock.y, 'View');
                    var typeViewBlock = getViewInfo(name);

                    while(i < this.blockXmlTab.get(index).childTab.size && cont) {
                        var list = this.blockXmlTab.get(index).childTab.get(i);
                        var w = list.childTab.get(0);
                        var d = list.childTab.get(1);

                        if(w.posY == tempBlock.y) {
                            cont = false;
                            viewBlock.createNode(typeViewBlock.agent);
                            viewBlock.createNode(typeViewBlock.team);
                            this.blockXmlTab.get(index).childTab.get(i).childTab.get(0).addChild(viewBlock);

                        }
                        else if(d.posY == tempBlock.y) {
                            cont = false;
                            viewBlock.createNode(typeViewBlock.agent);
                            viewBlock.createNode(typeViewBlock.team);
                            this.blockXmlTab.get(index).childTab.get(i).childTab.get(1).addChild(viewBlock);
                        }
                        i += 1;
                    }

                }
                else { // AGENT
                    console.log("BITE");
                }

                console.log(this.blockXmlTab.get(index).getXmlCode());

            }
            else if (type >= 410 && type <= 480) { // BLOCK ACTION
                // on ne crait pas de empty car après une action on ne peut plus rien faire

                // TODO NE DOIT PAS ETRE DANS UN WHEN

                this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);
            }
            else if (type >= 131 && type <= 134) { // BLOCK OPERATOR
                if(type != 133) {
                    // TODO verif entre 2 BLOCK FOR AND ET OR
                }
                else {
                    // TODO VERIF POUR NOT
                }

                this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);

                tempBlock = this.getPositionOfNeighbourBlock(block, 1); // BLOCK EMPTY
                this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);
            }
            else if (type >= 500 && type <= 610) { // BLOCK BAG + LIFE
                // TODO VERIF EMPTY NO ECRASE

                this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);

                tempBlock = this.getPositionOfNeighbourBlock(block, 1); // BLOCK EMPTY
                this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);
            }
            else if (type >= 700 && type <= 770) { // BLOCK CREATE
                // TODO VERIF EMPTY NO ECRASE

                this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);

                tempBlock = this.getPositionOfNeighbourBlock(block, 1); // BLOCK EMPTY
                this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);
            }
            else if (type >= 800 && type <= 880) { // BLOCK MESSAGE
                // TODO VERIF EMPTY NO ECRASE

                this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);

                tempBlock = this.getPositionOfNeighbourBlock(block, 1); // BLOCK EMPTY
                this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);
            }
            else if (type >= 900 && type <= 930) { // BLOCK INTERACTION
                // TODO VERIF EMPTY NO ECRASE

                this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);

                tempBlock = this.getPositionOfNeighbourBlock(block, 1); // BLOCK EMPTY
                this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);
            }
            else if (type >= 1000 && type <= 1020) { // BLOCK INTERACTION
                // TODO VERIF EMPTY NO ECRASE

                this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);

                tempBlock = this.getPositionOfNeighbourBlock(block, 1); // BLOCK EMPTY
                this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);
            }
            else if (type >= 1100 && type <= 1110) { // BLOCK ABLE
                // TODO VERIF EMPTY NO ECRASE

                this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);

                tempBlock = this.getPositionOfNeighbourBlock(block, 1); // BLOCK EMPTY
                this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);
            }
            else if (type >= 1200 && type <= 1290) { // BLOCK HEADING
                // TODO VERIF EMPTY NO ECRASE

                this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);

                tempBlock = this.getPositionOfNeighbourBlock(block, 1); // BLOCK EMPTY
                this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);
            }
            else if (type >= 1300 && type <= 1301) { // BLOCK STRING
                        // TODO VERIF EMPTY NO ECRASE

                        this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);

                        tempBlock = this.getPositionOfNeighbourBlock(block, 1); // BLOCK EMPTY
                        this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);
            }
            else if (type >= 1500 && type <= 1501) { // BLOCK HEADING
                        // TODO VERIF EMPTY NO ECRASE

                        this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);

                        tempBlock = this.getPositionOfNeighbourBlock(block, 1); // BLOCK EMPTY
                        this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);
            }
            else {
                 this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);
            }
        }
    },

    createTempBlock : function(scene, form, cX, cY) {
        var block = new PIXI.Sprite(form);
        var self = this;

        block.position.x = cX;
        block.position.y = cY;

        block.anchor.x = 0.5;
        block.anchor.y = 0.5;

        block.scale.x = 0.3;
        block.scale.y = 0.3;

        block.interactive = true;
        block.buttonMode = true;
        block.defaultCursor = "pointer";

        block.alpha = 1;
        block.isdown = false;

        block.zIndex = 1000;

        scene.addChild(block);

        block.mousedown = function(data) {
            var indexTab = self.getGoodIndexMasterTab();

            var ind = -1;
            var cont = true
            var i = 0;

            if(self.nameActiveMasterAgent != null) {
                while (i < self.agentsMasterTab[indexTab].length && cont) {
                    var bl = self.agentsMasterTab[indexTab][i];

                    if(self.getDistanceInterBlock(this, bl) < self.minDistanceBlock) {
                        if(bl.type == 0.5) {
                           var tempI = [];
                           tempI[0] = i;

                           self.gestionCreationBlock(bl, indexTab, tempI);
                            // TODO destroy temp block maybe

                           self.camera.removeChild(self.agentsMasterTab[indexTab][tempI[0]]);
                           self.agentsMasterTab[indexTab].splice(tempI[0], 1);
                           self.camera.children.sort(depthCompare);
                           // TODO destroy console log
                           cont = false;
                        }
                    }

                    i++;
                }



                for (i = 0; i < self.agentsMasterTab[indexTab].length; i++) {
                    self.agentsMasterTab[indexTab][i].alpha = 1;
                }
            }
        };

        this.nextHexagonToCreateObject = block;
    },

    addWheelListenerHexagonEditorStream : function() {
        if(this.activeZoom) {

            if (this.container.addEventListener) {
                // IE9, Chrome, Safari, Opera
                this.container.addEventListener('onmousewheel', cameraZoomHexagonEditorStream);
                // Firefox
                this.container.addEventListener("DOMMouseScroll", cameraZoomHexagonEditorStream, false);
            }
            // IE 6/7/8
            else container.addEventListener("onmousewheel", cameraZoomHexagonEditorStream);
        }
    },

    moveWhenNotDragging : function (moveData) {
        if(this.nextHexagonToCreate != null) {
            var pos = moveData.data.global;

            if(pos.x < 0 || pos.y < 0 || pos.x > this.container.offsetWidth-1 || pos.y > this.container.offsetHeight-1) {
                this.camera.removeChild(this.nextHexagonToCreateObject);
                this.nextHexagonToCreateObject = null;
            }
            else {
                if(this.nextHexagonToCreateObject == null)
                    this.createTempBlock(this.camera, this.nextHexagonToCreate, 0, 0);
                else {

                    this.nextHexagonToCreateObject.position.x = pos.x - this.camera.position.x;
                    this.nextHexagonToCreateObject.position.y = pos.y - this.camera.position.y;
                }
            }
        }
        else {
            if(this.nextHexagonToCreateObject != null) {
                this.camera.removeChild(this.nextHexagonToCreateObject);
                this.nextHexagonToCreateObject = null;
            }
        }
    }

});

function animateHexaEditor() {
        requestAnimationFrame( animateHexaEditor );
        hexaEditor.resizeStream();
        hexaEditor.renderer.render(hexaEditor.stage);
}

function cameraZoomHexagonEditorStream (e) {

    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    var x = e.clientX;
    var y = e.clientY;
    var isZoomIn = delta > 0;
    var direction = isZoomIn ? 1 : -1;
    var factor = (1 + direction * 0.1);

    if(hexaEditor.zoom * factor <= hexaEditor.maxZoom && hexaEditor.zoom * factor >= hexaEditor.minZoom) {
        hexaEditor.zoom *= factor;
/*
        for (i = 0; i < hexaEditor.blockTab.length; i++) {
            hexaEditor.blockTab[i].scale.x *= factor;
            hexaEditor.blockTab[i].scale.y *= factor;
            hexaEditor.blockTab[i].position.x *= factor;
            hexaEditor.blockTab[i].position.y *= factor;
        }*/
    }
};

function addButton(name, scene, form, formDown, cX, cY, type) {

	var button = new PIXI.Sprite(form);

	button.position.x = cX;
	button.position.y = cY;

	button.anchor.x = 0.5;
	button.anchor.y = 0.5;

	button.scale.x = 0.25;
	button.scale.y = 0.25;



	button.interactive = true;
	button.buttonMode = true;
	button.defaultCursor = "pointer";
	button.type = type;

	button.alpha = 1;
	button.isdown = false;

	button.mouseover = function(data) {
        this.isOver = true;
        if (this.isdown)
            return;
        this.texture = formDown;
    };

    button.mouseout = function(data) {
        this.isOver = false;
        if (this.isdown)
            return;
        this.texture = form;
   	};

   	button.mousedown = function(data) {
        if( type == 1 ) {
            var index = scene.getGoodIndexMasterTab();
            var size = scene.agentsMasterTab[index].length;
            for (i = size; i > 1; i--) {
                scene.camera.removeChild(scene.agentsMasterTab[index][i]);
                scene.agentsMasterTab[index].splice(i, 1);
                scene.agentsMasterTab[index].currentActionBlock.y = 165;
                scene.agentsMasterTab[index].currentActionBlock.indexInTab = 2;
            }

            scene.camera.position.x = 0;
            scene.camera.position.y = 0;
            scene.createBlock(scene.camera, emptyBlock, 90, 165, 0.5, index);
            scene.agentsMasterTab[index][2].alpha = 1;
        }
    };

	//scene.hud.addChild(button);
    scene.hud.addSprite(name, button);
}



//================================================================================//
//                                      MAIN                                      //
//================================================================================//

var hexaEditor = new HexagonEditorStream('#blocks', 0x777777);
hexaEditor.initStream();
hexaEditor.initMasterTab();
hexaEditor.addWheelListenerHexagonEditorStream();
hexaEditor.cameraMove();
addButton("revert", hexaEditor, revertOff, revertOn, 25, 25, 1);
addButton("trash", hexaEditor, trashOff, trashOn, 65, 25, 2);

//addButton("when", hexaEditor, editorTexture.get("when"), editorTexture.get("when"), 100, 100, 3);

// test feuille de style

// Taille des block sur la carte
var blockWidth = 250;
var blockHeight = 250;

// Taille des block sur le tileset
var blockTextureWidth = 250;
var blockTextureHeight = 250;

// Chargement de la texture du tileset
var blocksetTexture = PIXI.Texture.fromImage('/resources/hexaBlocks/block.png');

// Taille total du tileset
var blocksetTextureWidth = 500;
var blocksetTextureHeight = 500;

var blockList = [];

for (var i = 0; i < blocksetTextureHeight / blockTextureHeight; i++) {
    for (var j = 0; j < blocksetTextureWidth / blockTextureWidth; j++) {

        // Calculate the Tile coordinate to cut
        var blockPosition = new PIXI.Rectangle(j * blockTextureWidth, i * blockTextureHeight, blockTextureWidth, blockTextureHeight);

        // Build the Tile texture
        var bTile = new PIXI.Texture(blocksetTexture.baseTexture, blockPosition);

        // Push the texture into table
        blockList.push(bTile);
    }
}

console.log(blockList);

addButton("when", hexaEditor, blockList[1], blockList[2], 250, 250, 3);

animateHexaEditor();
