
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

    getConstantHexaEditor : function () {

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
            yFirstList   : 240,
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
            x : 90,
            y : 165,
            addY : 120,
            index : -1,
            indexInTab : 2
        };

        return newActionBlock;
    },

    initMasterTab : function () {

        var tab1 = [];
        tab1.nameMaster = "WarBase";
        tab1.currentActionBlock = this.getNewActionBlock();

        var tab2 = [];
        tab2.nameMaster = "WarEngineer";
        tab2.currentActionBlock = this.getNewActionBlock();

        var tab3 = [];
        tab3.nameMaster = "WarExplorer";
        tab3.currentActionBlock = this.getNewActionBlock();

        var tab4 = [];
        tab4.nameMaster = "WarKamikaze";
        tab4.currentActionBlock = this.getNewActionBlock();

        var tab5 = [];
        tab5.nameMaster = "WarRocketLauncher";
        tab5.currentActionBlock = this.getNewActionBlock();

        var tab6 = [];
        tab6.nameMaster = "WarTurret";
        tab6.currentActionBlock = this.getNewActionBlock();

        this.agentsMasterTab.push(tab1);
        this.agentsMasterTab.push(tab2);
        this.agentsMasterTab.push(tab3);
        this.agentsMasterTab.push(tab4);
        this.agentsMasterTab.push(tab5);
        this.agentsMasterTab.push(tab6);

        for (i = 0; i < 6; i++) {
            this.createBlock(this.camera, this.getSpriteMaster(tab1.nameMaster), 90, 75, 1, i);
            this.createBlock(this.camera, listAction, 90, 240, 0, i);
            this.createBlock(this.camera, emptyBlock, 90, 165, 0.5, i);

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
                    break;
                case "actionDo":
                    hexagon.sprite = actionDo;
                    hexagon.typeOfType = 120;
                    break;
                case "operatorAnd" :
                    hexagon.sprite = operatorAnd;
                    hexagon.typeOfType = 131;
                    break;
                case "operatorOr" :
                    hexagon.sprite = operatorOr;
                    hexagon.typeOfType = 132;
                    break;
                case "operatorNot" :
                    hexagon.sprite = operatorNot;
                    hexagon.typeOfType = 133;
                    break;
                case "agentBaseTeam1":
                    hexagon.sprite = agentBaseTeam1;
                    hexagon.typeOfType = 211;
                    break;
                case "agentEngineerTeam1":
                    hexagon.sprite = agentEngineerTeam1;
                    hexagon.typeOfType = 212;
                    break;
                case "agentExplorerTeam1":
                    hexagon.sprite = agentExplorerTeam1;
                    hexagon.typeOfType = 213;
                    break;
                case "agentKamikazeTeam1":
                    hexagon.sprite = agentKamikazeTeam1;
                    hexagon.typeOfType = 214;
                    break;
                case "agentRocketLauncherTeam1":
                    hexagon.sprite = agentRocketLauncherTeam1;
                    hexagon.typeOfType = 215;
                    break;
                case "agentTurretTeam1":
                    hexagon.sprite = agentTurretTeam1;
                    hexagon.typeOfType = 216;
                    break;
                case "agentWallTeam1":
                    hexagon.sprite = agentWallTeam1;
                    hexagon.typeOfType = 217;
                    break;
                case "agentBaseTeam2":
                    hexagon.sprite = agentBaseTeam2;
                    hexagon.typeOfType = 221;
                    break;
                case "agentEngineerTeam2":
                    hexagon.sprite = agentEngineerTeam2;
                    hexagon.typeOfType = 222;
                    break;
                case "agentExplorerTeam2":
                    hexagon.sprite = agentExplorerTeam2;
                    hexagon.typeOfType = 223;
                    break;
                case "agentKamikazeTeam2":
                    hexagon.sprite = agentKamikazeTeam2;
                    hexagon.typeOfType = 224;
                    break;
                case "agentRocketLauncherTeam2":
                    hexagon.sprite = agentRocketLauncherTeam2;
                    hexagon.typeOfType = 225;
                    break;
                case "agentTurretTeam2":
                    hexagon.sprite = agentTurretTeam2;
                    hexagon.typeOfType = 226;
                    break;
                case "agentWallTeam2":
                    hexagon.sprite = agentWallTeam2;
                    hexagon.typeOfType = 227;
                    break;
                case "agentFood":
                    hexagon.sprite = agentFood;
                    hexagon.typeOfType = 231;
                    break;
                case "viewAgent":
                    hexagon.sprite = viewAgent;
                    hexagon.typeOfType = 301;
                    break;
                case "viewBaseTeam1":
                    hexagon.sprite = viewBaseTeam1;
                    hexagon.typeOfType = 311;
                    break;
                case "viewEngineerTeam1":
                    hexagon.sprite = viewEngineerTeam1;
                    hexagon.typeOfType = 312;
                    break;
                case "viewExplorerTeam1":
                    hexagon.sprite = viewExplorerTeam1;
                    hexagon.typeOfType = 313;
                    break;
                case "viewKamikazeTeam1":
                    hexagon.sprite = viewKamikazeTeam1;
                    hexagon.typeOfType = 314;
                    break;
                case "viewRocketLauncherTeam1":
                    hexagon.sprite = viewRocketLauncherTeam1;
                    hexagon.typeOfType = 315;
                    break;
                case "viewTurretTeam1":
                    hexagon.sprite = viewTurretTeam1;
                    hexagon.typeOfType = 316;
                    break;
                case "viewWallTeam1":
                    hexagon.sprite = viewWallTeam1;
                    hexagon.typeOfType = 317;
                    break;
                case "viewBaseTeam2":
                    hexagon.sprite = viewBaseTeam2;
                    hexagon.typeOfType = 321;
                    break;
                case "viewEngineerTeam2":
                    hexagon.sprite = viewEngineerTeam2;
                    hexagon.typeOfType = 322;
                    break;
                case "viewExplorerTeam2":
                    hexagon.sprite = viewExplorerTeam2;
                    hexagon.typeOfType = 323;
                    break;
                case "viewKamikazeTeam2":
                    hexagon.sprite = viewKamikazeTeam2;
                    hexagon.typeOfType = 324;
                    break;
                case "viewRocketLauncherTeam2":
                    hexagon.sprite = viewRocketLauncherTeam2;
                    hexagon.typeOfType = 325;
                    break;
                case "viewTurretTeam2":
                    hexagon.sprite = viewTurretTeam2;
                    hexagon.typeOfType = 326;
                    break;
                case "viewWallTeam2":
                    hexagon.sprite = viewWallTeam2;
                    hexagon.typeOfType = 327;
                    break;
                case "viewFood":
                    hexagon.sprite = viewFood;
                    hexagon.typeOfType = 331;
                    break;
                case "actionEat":
                    hexagon.sprite = actionEat;
                    hexagon.typeOfType = 410;
                    break;
                case "actionGive":
                    hexagon.sprite = actionGive;
                    hexagon.typeOfType = 420;
                    break;
                case "actionIdle":
                    hexagon.sprite = actionIdle;
                    hexagon.typeOfType = 430;
                    break;
                case "actionMove":
                    hexagon.sprite = actionMove;
                    hexagon.typeOfType = 440;
                    break;
                case "actionTake":
                    hexagon.sprite = actionTake;
                    hexagon.typeOfType = 450;
                    break;
                case "actionFire":
                    hexagon.sprite = actionFire;
                    hexagon.typeOfType = 460;
                    break;
                case "actionReload":
                    hexagon.sprite = actionReload;
                    hexagon.typeOfType = 470;
                    break;
                case "actionRepair":
                    hexagon.sprite = actionRepair;
                    hexagon.typeOfType = 480;
                    break;
                case "bag00" :
                    hexagon.sprite = bag00;
                    hexagon.typeOfType = 500;
                    break;
                case "bag10" :
                    hexagon.sprite = bag10;
                    hexagon.typeOfType = 501;
                    break;
                case "bag20" :
                    hexagon.sprite = bag20;
                    hexagon.typeOfType = 502;
                    break;
                case "bag25" :
                    hexagon.sprite = bag25;
                    hexagon.typeOfType = 502.5;
                    break;
                case "bag30" :
                    hexagon.sprite = bag30;
                    hexagon.typeOfType = 503;
                    break;
                case "bag40" :
                    hexagon.sprite = bag40;
                    hexagon.typeOfType = 504;
                    break;
                case "bag50" :
                    hexagon.sprite = bag50;
                    hexagon.typeOfType = 505;
                    break;
                case "bag60" :
                    hexagon.sprite = bag60;
                    hexagon.typeOfType = 506;
                    break;
                case "bag70" :
                    hexagon.sprite = bag70;
                    hexagon.typeOfType = 507;
                    break;
                case "bag75" :
                    hexagon.sprite = bag75;
                    hexagon.typeOfType = 507.5;
                    break;
                case "bag80" :
                    hexagon.sprite = bag80;
                    hexagon.typeOfType = 508;
                    break;
                case "bag90" :
                    hexagon.sprite = bag90;
                    hexagon.typeOfType = 509;
                    break;
                case "bag100" :
                    hexagon.sprite = bag100;
                    hexagon.typeOfType = 510;
                    break;
                case "life00" :
                    hexagon.sprite = life00;
                    hexagon.typeOfType = 600;
                    break;
                case "life10" :
                    hexagon.sprite = life10;
                    hexagon.typeOfType = 601;
                    break;
                case "life20" :
                    hexagon.sprite = life20;
                    hexagon.typeOfType = 602;
                    break;
                case "life25" :
                    hexagon.sprite = life25;
                    hexagon.typeOfType = 602.5;
                    break;
                case "life30" :
                    hexagon.sprite = life30;
                    hexagon.typeOfType = 603;
                    break;
                case "life40" :
                    hexagon.sprite = life40;
                    hexagon.typeOfType = 604;
                    break;
                case "life50" :
                    hexagon.sprite = life50;
                    hexagon.typeOfType = 605;
                    break;
                case "life60" :
                    hexagon.sprite = life60;
                    hexagon.typeOfType = 606;
                    break;
                case "life70" :
                    hexagon.sprite = life70;
                    hexagon.typeOfType = 607;
                    break;
                case "life75" :
                    hexagon.sprite = life75;
                    hexagon.typeOfType = 607.5;
                    break;
                case "life80" :
                    hexagon.sprite = life80;
                    hexagon.typeOfType = 608;
                    break;
                case "life90" :
                    hexagon.sprite = life90;
                    hexagon.typeOfType = 609;
                    break;
                case "life100" :
                    hexagon.sprite = life100;
                    hexagon.typeOfType = 610;
                    break;
                case "createAgent" :
                    hexagon.sprite = createAgent;
                    hexagon.typeOfType = 700;
                    break;
                case "createBase" :
                    hexagon.sprite = createBase;
                    hexagon.typeOfType = 710;
                    break;
                case "createEngineer" :
                    hexagon.sprite = createEngineer;
                    hexagon.typeOfType = 720;
                    break;
                case "createExplorer" :
                    hexagon.sprite = createExplorer;
                    hexagon.typeOfType = 730;
                    break;
                case "createKamikaze" :
                    hexagon.sprite = createKamikaze;
                    hexagon.typeOfType = 740;
                    break;
                case "createRocketLauncher" :
                    hexagon.sprite = createRocketLauncher;
                    hexagon.typeOfType = 750;
                    break;
                case "createTurret" :
                    hexagon.sprite = createTurret;
                    hexagon.typeOfType = 760;
                    break;
                case "createWall" :
                    hexagon.sprite = createWall;
                    hexagon.typeOfType = 770;
                    break;
                case "messageContent" :
                    hexagon.sprite = messageContent;
                    hexagon.typeOfType = 800;
                    break;
                case "messageReceive" :
                    hexagon.sprite = messageReceive;
                    hexagon.typeOfType = 810;
                    break;
                case "messageSend" :
                    hexagon.sprite = messageSend;
                    hexagon.typeOfType = 820;
                    break;
                case "targetBase" :
                    hexagon.sprite = messageTargetBase;
                    hexagon.typeOfType = 830;
                    break;
                case "targetEngineer" :
                    hexagon.sprite = messageTargetEngineer;
                    hexagon.typeOfType = 840;
                    break;
                case "targetExplorer" :
                    hexagon.sprite = messageTargetExplorer;
                    hexagon.typeOfType = 850;
                    break;
                case "targetKamikaze" :
                    hexagon.sprite = messageTargetKamikaze;
                    hexagon.typeOfType = 860;
                    break;
                case "targetRocketLauncher" :
                    hexagon.sprite = messageTargetRocketLauncher;
                    hexagon.typeOfType = 870;
                    break;
                case "targetTurret" :
                    hexagon.sprite = messageTargetTurret;
                    hexagon.typeOfType = 880;
                    break;
                case "interactionBlocked" :
                    hexagon.sprite = interactionBlocked;
                    hexagon.typeOfType = 900;
                    break;
                case "interactionDebugMessage" :
                    hexagon.sprite = interactionDebugMessage;
                    hexagon.typeOfType = 910;
                    break;
                case "interactionDistance" :
                    hexagon.sprite = interactionDistance;
                    hexagon.typeOfType = 920;
                    break;
                case "interactionFollow" :
                    hexagon.sprite = interactionFollow;
                    hexagon.typeOfType = 930;
                    break;
                case "positionFirst" :
                    hexagon.sprite = positionFirst;
                    hexagon.typeOfType = 1000;
                    break;
                case "positionLast" :
                    hexagon.sprite = positionFirst;
                    hexagon.typeOfType = 1010;
                    break;
                case "positionRandom" :
                    hexagon.sprite = positionFirst;
                    hexagon.typeOfType = 1020;
                    break;



                default:
                    hexagon.sprite = emptyBlock;
                    hexagon.typeOfType = 0;
            }
        }
        return hexagon;
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

    managementOfNewActionBlocks : function (block, index, tempI) {

        var actionBlock = this.agentsMasterTab[index].currentActionBlock;

        console.log ("BITE");

        if(block.position.y > actionBlock.y && block.position.x == actionBlock.x) {
            console.log ("2");

            console.log (block.position.x);
            console.log (block.position.y);
            console.log (actionBlock.x);
            console.log (actionBlock.y);


            if(actionBlock.indexInTab != 2) {
               // this.agentsMasterTab[index].currentActionBlock.y + actionBlock.addY;
               // this.agentsMasterTab[index][actionBlock.indexInTab].position.y += actionBlock.addY;
            }
            else {
                //tempI[0] -= 1;
               // this.createBlock(this.camera, emptyBlock, actionBlock.x, actionBlock.y + actionBlock.addY, 0.5, index);
               // this.agentsMasterTab[index].currentActionBlock.y + actionBlock.addY;
               // this.agentsMasterTab[index].splice(actionBlock.indexInTab, 1); // on supprime l'ancien emptyBlock du tableau
               // this.agentsMasterTab[index].currentActionBlock.indexInTab = this.agentsMasterTab[index].length - 1; // on lui donne son nouveau index

            }
        }
        else if (block.position.y == actionBlock.y && block.position.x == actionBlock.x) {
                console.log ("3");
               //tempI[0] -= 1;
               console.log (this.agentsMasterTab[index].currentActionBlock.indexInTab);
                this.createBlock(this.camera, emptyBlock, actionBlock.x, actionBlock.y + actionBlock.addY, 0.5, index);
                this.agentsMasterTab[index].currentActionBlock.y += actionBlock.addY;
                //this.agentsMasterTab[index].splice(actionBlock.indexInTab, 1); // on supprime l'ancien emptyBlock du tableau
                this.agentsMasterTab[index].currentActionBlock.indexInTab = this.agentsMasterTab[index].length - 2; // on lui donne son nouveau index
                console.log (this.agentsMasterTab[index].currentActionBlock.indexInTab);
        }
    },

    gestionCreationBlock : function (block, index, tempI) {
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
        else if (type >= 410 && type <= 480) { // BLOCK ACTION
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
        else {
             this.createBlock(this.camera, this.nextHexagonToCreate, block.position.x, block.position.y, 2, index);
        }


        this.managementOfNewActionBlocks(block, index, tempI);

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
                           //console.log(self.agentsMasterTab[indexTab].length);
                           // TODO destroy console log
                           console.log("Create Block");
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

function addButton(scene, form, formDown, cX, cY, type) {

	var button = new PIXI.Sprite(form);

	button.position.x = cX;
	button.position.y = cY;

	button.anchor.x = 0.5;
	button.anchor.y = 0.5;

	button.scale.x = 0.15;
	button.scale.y = 0.15;

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

	scene.hud.addChild(button);
}

//================================================================================//

var hexaEditor = new HexaEditorStream('#blocks', 0x777777);
hexaEditor.initializeEditor();
hexaEditor.initStream();
hexaEditor.initMasterTab();
hexaEditor.addWheelListenerHexaEditorStream();
hexaEditor.cameraMove();

addButton(hexaEditor, revertOff, revertOn, 25, 25, 1);
addButton(hexaEditor, trashOff, trashOn, 65, 25, 1);

animateHexaEditor();



