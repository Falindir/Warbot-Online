

/**
 * [init description]
 * @param  {[type]} ) {                      }} [description]
 * @return {[type]}   [description]
 */
var SpriteSheet = Class.extend({

    init : function() {
       
    }

}); 


/**
 * @ClassNeed   : Class
 * @ClassNeed   : Pixi
 * @author      : Falindir
 * @version     : 1.0
 * @description : Permet de géner les Sprites de Pixi.js
 */
var Sprite = Class.extend({

    init : function(texture) {
        this.sprite               = new PIXI.Sprite(texture);
        this.sprite.position.x    = 0;
        this.sprite.position.y    = 0;
        this.sprite.anchor.x      = 0;
        this.sprite.anchor.y      = 0;
        this.sprite.alpha         = 1;
        this.sprite.scale.x       = 1;
        this.sprite.scale.y       = 1;
        this.sprite.rotation      = 0;
        this.sprite.visible       = true;
        this.sprite.interactive   = false;
        this.sprite.buttonMode    = false; 
        this.sprite.defaultCursor = Cursor.defaultC;
        this.zIndex               = 0;
    },

    setPosX : function (posX) {
        this.sprite.position.x = posX;
    },

    setPosY : function (posY) {
        this.sprite.position.y = posY;
    },

    multiplyPosFactor : function (factor) {
        this.sprite.position.x *= factor;
        this.sprite.position.y *= factor;
    },   

    setAnchX : function (anchX) {
        this.sprite.anchor.x = anchX;
    },

    setAnchY : function (anchY) {
        this.sprite.anchor.y = anchY;
    },

    setAnchs : function (val) {
        this.setAnchX(val);
        this.setAnchY(val);    
    },

    setAlpha : function (alpha) {
        this.sprite.alpha = alpha;    
    },

    setScaleX : function (scaleX) {
        this.sprite.scale.x = scaleX;
    },

    setScaleY : function (scaleY) {
        this.sprite.scale.y = scaleY;
    },

    setScales : function (val) {
        this.setScaleX(val);
        this.setScaleY(val);    
    },

    multiplyScalesFactor : function (factor) {
        this.sprite.scale.x *= factor;
        this.sprite.scale.y *= factor;
    },

    setVisible : function (visible) {
        this.sprite.visible = visible;
    },

    setRotation : function (rotation) {
        this.sprite.rotation = rotation;
    },

    incrementRotation : function (rotation) {
        this.sprite.rotation += rotation;
    },

    setInteractive : function (interact) {
        this.sprite.interactive = interact;
    },

    setButtonMode : function (butMode) {
        this.sprite.buttonMode = butMode;    
    },

    setCursor : function (cursor) {
        this.sprite.defaultCursor = cursor;    
    },

    getX : function () {
        return this.sprite.position.x;
    },

    getY : function () {
        return this.sprite.position.y;
    },

    setTexture : function (texture) {
        this.sprite.setTexture(texture);
    }

}); 


var HexagonInfo = Class.extend({

    init : function(name, sprite, type, team, agent) {
        this.name = name;
        this.sprite = sprite;
        this.typeOfType = type;
        this.team = team;
        this.agent = agent;
    }

}); 

function getSpriteOfAgent (nameHexagon) {

    var hexagon = null;

    if(nameHexagon != null) {
        switch(nameHexagon) {
            case "actionWhen":
                hexagon = new HexagonInfo(nameHexagon, actionWhen, 110, null, null);
                break;
            case "actionDo":
                hexagon = new HexagonInfo(nameHexagon, actionDo, 120, null, null);
                break;
            case "operatorAnd" :
                hexagon = new HexagonInfo(nameHexagon, operatorAnd, 131, null, null);
                break;
            case "operatorOr" :
                hexagon = new HexagonInfo(nameHexagon, operatorOr, 132, null, null);
                break;
            case "operatorNot" :
                hexagon = new HexagonInfo(nameHexagon, operatorNot, 133, null, null);                 
                break;
            case "nothing" :
                hexagon = new HexagonInfo(nameHexagon, nothing, 134, null, null);                                  
                break;
            case "agentBaseTeam1":
                hexagon = new HexagonInfo(nameHexagon, agentBaseTeam1, 211, "ally", "warbase"); 
                break;
            case "agentEngineerTeam1":
                hexagon = new HexagonInfo(nameHexagon, agentEngineerTeam1, 212, "ally", "warengineer");                  
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
             case "ableGive" :
                 hexagon.sprite = ableGive;
                 hexagon.typeOfType = 1100;
                 break;
             case "ableTake" :
                 hexagon.sprite = ableTake;
                 hexagon.typeOfType = 1110;
                 break;
             case "heading00" :
                 hexagon.sprite = heading00;
                 hexagon.typeOfType = 1200;
                 break;
             case "heading45" :
                 hexagon.sprite = heading45;
                 hexagon.typeOfType = 1210;
                 break;
             case "heading90" :
                 hexagon.sprite = heading90;
                 hexagon.typeOfType = 1220;
                 break;
             case "heading135" :
                 hexagon.sprite = heading135;
                 hexagon.typeOfType = 1230;
                 break;
             case "heading180" :
                 hexagon.sprite = heading180;
                 hexagon.typeOfType = 1240;
                 break;
             case "heading225" :
                 hexagon.sprite = heading225;
                 hexagon.typeOfType = 1250;
                 break;
             case "heading270" :
                 hexagon.sprite = heading270;
                 hexagon.typeOfType = 1260;
                 break;
             case "heading315" :
                 hexagon.sprite = heading315;
                 hexagon.typeOfType = 1270;
                 break;
             case "heading360" :
                 hexagon.sprite = heading360;
                 hexagon.typeOfType = 1280;
                 break;
             case "headingRandom" :
                 hexagon.sprite = headingRandom;
                 hexagon.typeOfType = 1290;
                 break;
             case "moreCost" :
                 hexagon.sprite = moreCost;
                 hexagon.typeOfType = 1500;
                 break;
             case "stringIAmHere" :
                 hexagon.sprite = stringIAmHere;
                 hexagon.typeOfType = 1300;
                 break;
             case "stringWhereAreYou" :
                 hexagon.sprite = stringWhereAreYou;
                 hexagon.typeOfType = 1301;
                 break;
             default:
                 hexagon.sprite = emptyBlock;
                 hexagon.typeOfType = 0;
         }
    }

    return hexagon;
};

function getViewInfo (viewContent) {

    var content = {
        team : null,
        agent : null
    }

    // TODO finir tout les views possible

    if(viewContent != null) {
        switch(viewContent) {
            case "viewBaseTeam1":
                content.team = "ally";
                content.agent = "warbase";
                break;
            case "viewEngineerTeam1":
                content.team = "ally";
                content.agent = "warengineer";
                break;
            default:
                content.team = "";
                content.agent = "";
        }
    }
    return content;
}

var SpriteBlock = {

    getMaster : function(name) {
        switch(name) {
            case agentType.base :
                return masterBase;
                break;
            case agentType.engineer :
                return masterEngineer;
                break;
            case agentType.explorer :
                return masterExplorer;
                break;
            case agentType.kamikaze:
                return masterKamikaze;
                break;
            case agentType.rocketLauncher:
                return masterRocketLauncher;
                break;
            case agentType.turret:
                return masterTurret;
                break;
            default:
            return null;
        }
    },

    getAgent : function (type, red) {

        console.log("Type : " + type);

        switch(type) {
            case agentType.base :
                if(red)
                    return gameTexture.getTexture("baseRed");
                else
                    return gameTexture.getTexture("baseBlue");    
                break;
            case agentType.engineer :
                if(red)
                    return gameTexture.getTexture("engineerRed");
                else
                    return gameTexture.getTexture("engineerBlue");                 
                break;
            case agentType.explorer :
                if(red)
                    return gameTexture.getTexture("explorerRed");
                else
                    return gameTexture.getTexture("explorerBlue");                 
                break;
            case agentType.kamikaze:
                 if(red)
                    return gameTexture.getTexture("kamikazeRed");
                else
                    return gameTexture.getTexture("kamikazeBlue");                
                break;
            case agentType.rocketLauncher:
                 if(red)
                    return gameTexture.getTexture("rocketLauncherRed");
                else
                    return gameTexture.getTexture("rocketLauncherBlue");
                break;
            case agentType.turret:
                 if(red)
                    return gameTexture.getTexture("turretRed");
                else
                    return gameTexture.getTexture("turretBlue");
                break;
            case agentType.wall:
                 if(red)
                    return gameTexture.getTexture("wallRed");
                else
                    return gameTexture.getTexture("wallBlue");        
                break;
            case agentType.food:
                return gameTexture.getTexture("food"); 
                break;
            case agentType.rocket:
                   return gameTexture.getTexture("rocket"); 
                break;                
            default:
                return;    
        }        
    },

    getLife : function (life) {
        if(lifeP == 100) {
            return life001;
        }
        else if (lifeP <= 99 && lifeP > 92.5) {
            return life002;
        }
        else if (lifeP <= 92.5 && lifeP > 85) {
            return life003;
        }
        else if (lifeP <= 85 && lifeP > 77.5) {
            return life004;
        }
        else if (lifeP <= 77.5 && lifeP > 70) {
            return life005;
        }
        else if (lifeP <= 70 && lifeP > 62.5) {
            return life006;
        }
        else if (lifeP <= 62.5 && lifeP > 55) {
            return life007;
        }
        else if (lifeP <= 55 && lifeP > 47.5) {
            return life008;
        }
        else if (lifeP <= 47.5 && lifeP > 40) {
            return life009;
        }
        else if (lifeP <= 40 && lifeP > 32.5) {
            return life010;
        }
        else if (lifeP <= 32.5 && lifeP > 25) {
            return life011;
        }
        else if (lifeP <= 25 && lifeP > 17.5) {
            return life012;
        }
        else if (lifeP <= 17.5 && lifeP > 10) {
            return life013;
        }
        else if (lifeP <= 10 && lifeP > 1.5) {
            return life014;
        }
        else {

            return life015;
        }

    },

    getPercept : function (type) {

        // TODO swith  + enum + type

        if(agent.type == "WarExplorer") {
            if(agent.teamType == 1)
                return perceptExplorerRed;
            else
                return perceptExplorerBlue;
        }
        else if(agent.type == "WarEngineer") {
            if(agent.teamType == 1)
                return perceptEngineerRed;
            else
                return perceptEngineerBlue;
        }
        else if(agent.type == "WarRocketLauncher") {
            if(agent.teamType == 1)
                return perceptRocketLauncherRed;
            else
                return perceptRocketLauncherBlue;
        }
        else if(agent.type == "witch(name) {WarKamikaze") {
            if(agent.teamType == 1)
                return perceptKamikazeRed;
            else
                return perceptKamikazeBlue;
        }
        else if(agent.type == "WarTurret") {
            if(agent.teamType == 1)
                return perceptTurretRed;
            else
                return perceptTurretBlue;
        }
        else if(agent.type == "WarBase") {
            if(agent.teamType == 1)
                return perceptBaseRed;
            else
                return perceptBaseBlue;
        }
        else {
            return perceptOther;
        }    
    
    },

    getButton : function (type) {
        switch(type) {
            case ButtonsType.life:
        
                break;
            case ButtonsType.life:
        
                break;
            case ButtonsType.life:
        
                break;                                
            default:
                return;    
        }        
        
    
    }

}