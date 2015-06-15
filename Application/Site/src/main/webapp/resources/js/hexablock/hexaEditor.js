
var HexaEditorStream = Stream.extend({

    initializeEditor : function() {
        this.nextHexagonToCreate = null;
        this.nextHexagonToCreateObject = null;
        this.nextHexagonToCreateObjectHexagon = null;
        this.minZoom = 0.5;
        this.maxZoom = 2;
        this.minDistanceBlock = 25;
        this.activeZoom = false;
        this.nameActiveMasterAgent = null;
        this.lastIndexActiveMasterTab = null;
        this.agentsMasterTab = [];
    },

    initMasterTab : function () {
        var tab1 = [];
        tab1.nameMaster = "WarBase";

        var tab2 = [];
        tab2.nameMaster = "WarEngineer";

        var tab3 = [];
        tab3.nameMaster = "WarExplorer";

        var tab4 = [];
        tab4.nameMaster = "WarKamikaze";

        var tab5 = [];
        tab5.nameMaster = "WarRocketLauncher";

        var tab6 = [];
        tab6.nameMaster = "WarTurret";

        this.agentsMasterTab.push(tab1);
        this.agentsMasterTab.push(tab2);
        this.agentsMasterTab.push(tab3);
        this.agentsMasterTab.push(tab4);
        this.agentsMasterTab.push(tab5);
        this.agentsMasterTab.push(tab6);

        for (i = 0; i < 6; i++) {
            this.createBlock(this.camera, this.getSpriteMaster(tab1.nameMaster), 90, 35, 1, i);
            this.createBlock(this.camera, listAction, 90, 200, 0, i);
            this.createBlock(this.camera, emptyBlock, 90, 125, 0.5, i);

            // FOR TEST
            /*
            this.createBlock(this.camera, actionWhen, 300, 300, 2, i);

            this.createBlock(this.camera, emptyBlock, 352, 300, 0.5, i);
            this.createBlock(this.camera, emptyBlock, 248, 300, 0.5, i);
            this.createBlock(this.camera, emptyBlock, 326, 345, 0.5, i);
            this.createBlock(this.camera, emptyBlock, 326, 255, 0.5, i);
            this.createBlock(this.camera, emptyBlock, 274, 345, 0.5, i);
            this.createBlock(this.camera, emptyBlock, 274, 255, 0.5, i);
            */
        }

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

    getSpriteMaster : function (name) {

        if(name != null) {
            switch(name) {
                case "WarBase":
                    return masterBase;
                    break;
                case "WarEngineer":
                    return masterEngineer;
                    break;
                case "WarExplorer":
                    return masterExplorer;
                    break;
                case "WarKamikaze":
                    return masterKamikaze;
                    break;
                case "WarRocketLauncher":
                    return masterRocketLauncher;
                    break;
                case "WarTurret":
                    return masterTurret;
                    break;
                default:
                  return null;
            }
        }
        return null;
    },

    getSpriteOfAgent : function (nameHexagon) {

        var hexagon = {
            name : nameHexagon,
            sprite : null,
            typeOfType : -1
        }

        if(nameHexagon != null) {
            switch(nameHexagon) {
                case "actionWhen":
                    hexagon.sprite = actionWhen;
                    hexagon.typeOfType = 110;
                    return hexagon;
                    break;
                case "actionDo":
                    hexagon.sprite = actionDo;
                    hexagon.typeOfType = 120;
                    return hexagon;
                    break;
                case "operatorAnd" :
                    hexagon.sprite = operatorAnd;
                    hexagon.typeOfType = 131;
                    return hexagon;
                    break;
                case "operatorOr" :
                    hexagon.sprite = operatorOr;
                    hexagon.typeOfType = 132;
                    return hexagon;
                    break;
                case "operatorNot" :
                    hexagon.sprite = operatorNot;
                    hexagon.typeOfType = 133;
                    return hexagon;
                    break;
                case "agentBaseTeam1":
                    hexagon.sprite = agentBaseTeam1;
                    hexagon.typeOfType = 211;
                    return hexagon;
                    break;
                case "agentEngineerTeam1":
                    hexagon.sprite = agentEngineerTeam1;
                    hexagon.typeOfType = 212;
                    return hexagon;
                    break;
                case "agentExplorerTeam1":
                    hexagon.sprite = agentExplorerTeam1;
                    hexagon.typeOfType = 213;
                    return hexagon;
                    break;
                case "agentKamikazeTeam1":
                    hexagon.sprite = agentKamikazeTeam1;
                    hexagon.typeOfType = 214;
                    return hexagon;
                    break;
                case "agentRocketLauncherTeam1":
                    hexagon.sprite = agentRocketLauncherTeam1;
                    hexagon.typeOfType = 215;
                    return hexagon;
                    break;
                case "agentTurretTeam1":
                    hexagon.sprite = agentTurretTeam1;
                    hexagon.typeOfType = 216;
                    return hexagon;
                    break;
                case "agentWallTeam1":
                    hexagon.sprite = agentWallTeam1;
                    hexagon.typeOfType = 217;
                    return hexagon;
                    break;
                case "agentBaseTeam2":
                    hexagon.sprite = agentBaseTeam2;
                    hexagon.typeOfType = 221;
                    return hexagon;
                    break;
                case "agentEngineerTeam2":
                    hexagon.sprite = agentEngineerTeam2;
                    hexagon.typeOfType = 222;
                    return hexagon;
                    break;
                case "agentExplorerTeam2":
                    hexagon.sprite = agentExplorerTeam2;
                    hexagon.typeOfType = 223;
                    return hexagon;
                    break;
                case "agentKamikazeTeam2":
                    hexagon.sprite = agentKamikazeTeam2;
                    hexagon.typeOfType = 224;
                    return hexagon;
                    break;
                case "agentRocketLauncherTeam2":
                    hexagon.sprite = agentRocketLauncherTeam2;
                    hexagon.typeOfType = 225;
                    return hexagon;
                    break;
                case "agentTurretTeam2":
                    hexagon.sprite = agentTurretTeam2;
                    hexagon.typeOfType = 226;
                    return hexagon;
                    break;
                case "agentWallTeam2":
                    hexagon.sprite = agentWallTeam2;
                    hexagon.typeOfType = 227;
                    return hexagon;
                    break;
                case "agentFood":
                    hexagon.sprite = agentFood;
                    hexagon.typeOfType = 231;
                    return hexagon;
                    break;
                case "viewAgent":
                    hexagon.sprite = viewAgent;
                    hexagon.typeOfType = 301;
                    return hexagon;
                    break;
                case "viewBaseTeam1":
                    hexagon.sprite = viewBaseTeam1;
                    hexagon.typeOfType = 311;
                    return hexagon;
                    break;
                case "viewEngineerTeam1":
                    hexagon.sprite = viewEngineerTeam1;
                    hexagon.typeOfType = 312;
                    return hexagon;
                    break;
                case "viewExplorerTeam1":
                    hexagon.sprite = viewExplorerTeam1;
                    hexagon.typeOfType = 313;
                    return hexagon;
                    break;
                case "viewKamikazeTeam1":
                    hexagon.sprite = viewKamikazeTeam1;
                    hexagon.typeOfType = 314;
                    return hexagon;
                    break;
                case "viewRocketLauncherTeam1":
                    hexagon.sprite = viewRocketLauncherTeam1;
                    hexagon.typeOfType = 315;
                    return hexagon;
                    break;
                case "viewTurretTeam1":
                    hexagon.sprite = viewTurretTeam1;
                    hexagon.typeOfType = 316;
                    return hexagon;
                    break;
                case "viewWallTeam1":
                    hexagon.sprite = viewWallTeam1;
                    hexagon.typeOfType = 317;
                    return hexagon;
                    break;
                case "viewBaseTeam2":
                    hexagon.sprite = viewBaseTeam2;
                    hexagon.typeOfType = 321;
                    return hexagon;
                    break;
                case "viewEngineerTeam2":
                    hexagon.sprite = viewEngineerTeam2;
                    hexagon.typeOfType = 322;
                    return hexagon;
                    break;
                case "viewExplorerTeam2":
                    hexagon.sprite = viewExplorerTeam2;
                    hexagon.typeOfType = 323;
                    return hexagon;
                    break;
                case "viewKamikazeTeam2":
                    hexagon.sprite = viewKamikazeTeam2;
                    hexagon.typeOfType = 324;
                    return hexagon;
                    break;
                case "viewRocketLauncherTeam2":
                    hexagon.sprite = viewRocketLauncherTeam2;
                    hexagon.typeOfType = 325;
                    return hexagon;
                    break;
                case "viewTurretTeam2":
                    hexagon.sprite = viewTurretTeam2;
                    hexagon.typeOfType = 326;
                    return hexagon;
                    break;
                case "viewWallTeam2":
                    hexagon.sprite = viewWallTeam2;
                    hexagon.typeOfType = 327;
                    return hexagon;
                    break;
                case "viewFood":
                    hexagon.sprite = viewFood;
                    hexagon.typeOfType = 331;
                    return hexagon;
                    break;
                case "actionEat":
                    hexagon.sprite = actionEat;
                    hexagon.typeOfType = 410;
                    return hexagon;
                    break;
                case "actionGive":
                    hexagon.sprite = actionGive;
                    hexagon.typeOfType = 420;
                    return hexagon;
                    break;
                case "actionIdle":
                    hexagon.sprite = actionIdle;
                    hexagon.typeOfType = 430;
                    return hexagon;
                    break;
                case "actionMove":
                    hexagon.sprite = actionMove;
                    hexagon.typeOfType = 440;
                    return hexagon;
                    break;
                case "actionTake":
                    hexagon.sprite = actionTake;
                    hexagon.typeOfType = 450;
                    return hexagon;
                    break;
                case "actionFire":
                    hexagon.sprite = actionFire;
                    hexagon.typeOfType = 460;
                    return hexagon;
                    break;
                case "actionReload":
                    hexagon.sprite = actionReload;
                    hexagon.typeOfType = 470;
                    return hexagon;
                    break;
                default:
                    hexagon.sprite = emptyBlock;
                    hexagon.typeOfType = 0;
                    return hexagon;
            }
        }
        return null;
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

    gestionCreationBlock : function (block, index) {
        /*
            name : nameHexagon,
            sprite : null,
            typeOfType : -1
        */

        //console.log(this.nextHexagonToCreateObjectHexagon.name);
        //console.log(this.nextHexagonToCreateObjectHexagon.typeOfType);

        var type = this.nextHexagonToCreateObjectHexagon.typeOfType;
        var tempBlock;

        if(type == 110) { // BLOCK WHEN

            // TODO VERIF SI PAS DANS UN WHEN
            // TODO REMOVE SI EMPTY OU DO ECRASE BLOCK EXISTANT

            this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);

            tempBlock = this.getPositionOfNeighbourBlock(block, 1); // BLOCK EMPTY
            this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);

            tempBlock = this.getPositionOfNeighbourBlock(block, 2); // BLOCK DO
            this.createBlock(this.camera, actionDo, tempBlock.x, tempBlock.y, 2, index);

            tempBlock = this.getPositionOfNeighbourBlock(block, 9); // BLOCK EMPTY
            this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);
        }
        else if (type >= 211 && type <= 331) { // BLOCK AGENT + BLOCK VIEW

            // TODO VERIF EMPTY NO ECRASE

            this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);

            tempBlock = this.getPositionOfNeighbourBlock(block, 1); // BLOCK EMPTY
            this.createBlock(this.camera, emptyBlock, tempBlock.x, tempBlock.y, 0.5, index);

        }
        else if (type >= 410 && type <= 470) { // BLOCK ACTION
            // on ne crait pas de empty car après une action on ne peut plus rien faire

            // TODO NE DOIT PAS ETRE DANS UN WHEN

            this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);
        }
        else if (type >= 131 && type <= 133) { // BLOCK OPERATOR
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
        else {
             this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);
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

            if(self.nameActiveMasterAgent != null) {
                for (i = 0; i < self.agentsMasterTab[indexTab].length; i++) {
                    var bl = self.agentsMasterTab[indexTab][i];

                    if(self.getDistanceInterBlock(this, bl) < self.minDistanceBlock) {
                        if(bl.type == 0.5) {
                           self.gestionCreationBlock(bl, indexTab);
                            // TODO destroy temp block maybe
                           self.camera.removeChild(self.agentsMasterTab[indexTab][i]);
                           self.agentsMasterTab[indexTab].splice(i, 1);
                           self.camera.children.sort(depthCompare);
                           // TODO destroy console log
                           console.log("Create Block");
                        }
                    }
                }

                for (i = 0; i < self.agentsMasterTab[indexTab].length; i++) {
                    self.agentsMasterTab[indexTab][i].alpha = 1;
                }
            }
        };

        this.nextHexagonToCreateObject = block;
    },

    addWheelListenerHexaEditorStream : function() {
        if(this.activeZoom) {

            if (this.container.addEventListener) {
                // IE9, Chrome, Safari, Opera
                this.container.addEventListener('onmousewheel', cameraZoomHexaEditorStream);
                // Firefox
                this.container.addEventListener("DOMMouseScroll", cameraZoomHexaEditorStream, false);
            }
            // IE 6/7/8
            else container.addEventListener("onmousewheel", cameraZoomHexaEditorStream);
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

function cameraZoomHexaEditorStream (e) {

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

//================================================================================//

var hexaEditor = new HexaEditorStream('#blocks', 0x777777);
hexaEditor.initializeEditor();
hexaEditor.initStream();
hexaEditor.initMasterTab();
hexaEditor.addWheelListenerHexaEditorStream();
hexaEditor.cameraMove();

animateHexaEditor();
