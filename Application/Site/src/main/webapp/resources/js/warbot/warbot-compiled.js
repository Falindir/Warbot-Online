var Cursor = {
    defaultC : 'default',
    pointer  : 'pointer'
}

var MessageText = Class.extend({

    init : function(text, color) {
        this.text             = new PIXI.Text(text, {font:"25px Arial", fill:color});
        this.text.messageText = text;
        this.text.colorText   = color;
        this.text.font        = "25px Arial";
        this.text.position.x  = 0;
        this.text.position.y  = 0;
        this.text.anchor.x    = 0;
        this.text.anchor.y    = 0;
    },

    setText : function () {
    
    
    },

    setColor : function () {
    
    
    },

    setFont : function (size) {
        this.text.scale.x = size;
        this.text.scale.y = size;    
    },

    multiplyFont : function (size) {
        this.text.scale.x *= size;
        this.text.scale.y *= size;
    },

    setPosX : function (posX) {
        this.text.position.x = posX;   
    },

    setPosY : function (posY) {
        this.text.position.y = posY; 
    },

    multiplyPos : function (fact) {
        this.text.position.x *= fact;
        this.text.position.y *= fact;    
    },

    setAnchX : function (anchX) {
        this.text.anchor.x = anchX;
    },

    setAnchY : function (anchY) {
        this.text.anchor.y = anchY;    
    },

    setAnchs : function (val) {
        this.setAnchX(val);
        this.setAnchY(val);    
    },    
}); 

var Teams = Class.extend({
    
    init : function() {
        this.teamRed      = null;
        this.teamBlue     = null;
        this.teamMother   = null;
        this.typeRed      = 1;
        this.typeBlue     = 2;
        this.typeMother   = 0;
        this.colorRed     = new ColorRGB(149, 149, 149);
        this.colorBlue    = new ColorRGB(255, 98, 255);
        this.colorGreen   = new ColorRGB(0, 255, 0);
        this.nameTeamRed  = null;
        this.nameTeamBlue = null;
    },

    add : function (team) {
        var color = new ColorRGB(team.color.r, team.color.g, team.color.b);

        if(color.isSame(this.colorRed))
            this.teamRed = team;
        else if(color.isSame(this.colorBlue))
            this.teamBlue = team;
        else if(color.isSame(this.colorGreen))
            this.teamMother = team;
        else
            console.log("Error : team color not supported");   
    },

    getTeam : function (name) {
        var team = null;

        if(name == this.teamRed.name) {
            team = this.teamRed;
            team.teamType = this.typeRed;
        }
        else if (name == this.teamBlue.name) {
            team = this.teamBlue;
            team.teamType = this.typeBlue;
        }
        else if (name == this.teamMother.name) {
            team = this.teamMother;
            team.teamType = this.typeRed;
        }
        else 
            console.log("Error : team name not supported");

        return team;      
    },

    isRedTeam : function (team) {
        if(this.typeRed == team.teamType)
            return true;
        return false;    
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

var agentType = {
	base 		   : "WarBase",
	engineer 	   : "WarEngineer",
	explorer 	   : "WarExplorer",
	kamikaze 	   : "WarKamikaze",
	rocketLauncher : "WarRocketLauncher",
	turret 		   : "WarTurret",
	wall 		   : "Wall",
	food 		   : "WarFood",
	rocket 		   : "WarRocket"
};

/**
 * @author Falindir
 */

var Stream = Class.extend({

    init : function(cnt, color) {
            this.nameContainer = cnt;
            this.container     = $(cnt)[0];
            this.renderer      = new PIXI.autoDetectRenderer(this.container.offsetWidth,this.container.offsetHeight,{backgroundColor : color});
            this.stage         = new PIXI.Container();
            this.camera        = new PIXI.Container();
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
    },

    initStream : function() {
        	this.stage.interactive = true;
        	this.renderer.view.style.display = "block";
            this.container.appendChild(this.renderer.view);
            this.stage.addChild(this.camera);
            //this.stage.addChild(this.hud);
            this.camera.position.x = 0;
            this.camera.position.y = 0;
    },

    resizeStream : function () {
        this.renderer.resize(this.container.offsetWidth-1, this.container.offsetHeight-1);
        this.coordCenterX = this.container.offsetWidth-1 / 2;
        this.coordCenterY = this.container.offsetHeight-1 / 2;
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

    	}

    	this.stage.mousemove = function (moveData) {

    		if (!this.isDragging) {
    		    self.moveWhenNotDragging(moveData);
    			return;
    		}

    		var pos = moveData.data.global;

    		if(pos.x > 0 && pos.y > 0 && pos.x < self.container.offsetWidth-1 && pos.y < self.container.offsetHeight-1) {
                var dx = pos.x - this.prevX;
                var dy = pos.y - this.prevY;

                self.camera.position.x += dx;
                self.camera.position.y += dy;

                this.prevX = pos.x;
                this.prevY = pos.y;
    		}
    		else {
    		    this.isDragging = false;
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


var Buttons = MapCollections.extend({

    init : function() {
    	this._super();
    }

});  


var ButtonUI = Sprite.extend({

    init : function(textDefault, textDown, textTrans) {
		this._super(textDefault);  
		this.default = textDefault;
		this.down    = textDown;
		this.trans   = textTrans;
		this.type    = null;
		this.isDown  = false;
		this.setInteractive(true);
		this.setButtonMode(true);
		this.setCursor(Cursor.pointer);
    },

    setType : function (type) {
        this.type = type;
    },


}); 

var ButtonsType = {
	life 	: "life",
	message : "message",
	percept : "percept",
	stop 	: "stop",
	delete 	: "delete",
	clear 	: "clear",
	play 	: "play",
	load 	: "loading"
}

var HUD = Class.extend({

    init : function(stage) {
		this.container = new PIXI.Container();
		this.buttons   = new MapCollections(); 
		stage.addChild(this.container); 
    },

    addButton : function (name, button) {
    	this.buttons.insert(name, button);
    	this.container.addChild(button.sprite);
    },

    addSprite : function (name, button) {
    	this.buttons.insert(name, button);
    	this.container.addChild(button);
    },

    getButton : function (name) {
    	return this.buttons.get(name);    
    }

}); 


var agentDataHTML = {
 
    food               : "numberOfFoodConsoleMap",
    redBase            : "numberOfBaseRed",
    blueBase           : "numberOfBaseBlue",
    redExplorer        : "numberOfExplorerRed",
    blueExplorer       : "numberOfExplorerBlue",
    redKamikaze        : "numberOfKamikazeRed",
    blueKamikaze       : "numberOfKamikazeBlue",
    redRocketLauncher  : "numberOfRocketLauncherRed",
    blueRocketLauncher : "numberOfRocketLauncherBlue",
    redTurret          : "numberOfTurretRed",
    blueTurret         : "numberOfTurretBlue",
    redEngineer        : "numberOfEngineerRed",
    blueEngineer       : "numberOfEngineerBlue",
    redWall            : "numberOfWallRed",
    blueWall           : "numberOfWallBlue"
};

var typeMessagesServer = {
    init    : "init",
    agent   : "agent",
    synchro : "synchro",
    end     : "end",
    ping    : "PingMessage"
}; 

var PartyStream = Stream.extend({

    /**
     * [init description]
     * @param  {[type]} cnt      [description]
     * @param  {[type]} color    [description]
     * @param  {[type]} appModel [description]
     * @param  {[type]} idParty  [description]
     * @return {[type]}          [description]
     */
    init : function(cnt, color, appModel, idParty) {
        this._super(cnt, color);
        this.minZoom       = 0.5;
        this.maxZoom       = 2;
        this.partyStarting = false;
        this.partyRunning  = false;
        this.playButtonUI  = null;
        this.appModel      = appModel;
        this.idParty       = idParty;
        this.counterAgent  = new CounterAgent();
        this.Teams         = new Teams();
        this.agents        = new Collections();
        this.map           = null;
        this.haveFollower  = false;
        this.follower      = null;
        this.buttons       = new Buttons();
        this.activeZoom    = true;
    },

    initStreaming : function () {
        // var gifLoad = 
        var play = new Sprite(gameTexture.getTexture("play"));
        play.setAnchs(0.5);
        play.setScales(0.8);
        play.setInteractive(true);
        play.setButtonMode(true);
        play.setCursor(Cursor.pointer);

        var self = this;

        play.sprite.mousedown = function(data) {
            if(!self.partyStarting) {
                self.appModel.launchParty(self.idParty,-1);
                self.partyStarting = true;
                play.setAlpha(-1);
                play.setInteractive(false);
                play.setVisible(false);
            }
        };

        this.buttons.insert("play", play);
        //this.hud.addChild(play.sprite);
        this.hud.addButton("play", play);

        var load0 = new Sprite(gameTexture.getTexture("loading0"));
        load0.setAnchs(0.5);
        load0.setScales(0.3);
        load0.setAlpha(1);
        load0.setVisible(false);
        
        this.buttons.insert("loading0", load0);
        //this.hud.addChild(load0.sprite);
        this.hud.addButton("loading0", load0);

        var load = new Sprite(gameTexture.getTexture("loading"));
        load.setAnchs(0.5);
        load.setScales(0.3);
        load.setAlpha(1);
        load.setVisible(false);
        
        this.buttons.insert("loading", load);
        //this.hud.addChild(load.sprite);
        this.hud.addButton("loading", load);

    },

    analyseMessageServer : function (message) {

        switch(message.header) {
            case typeMessagesServer.ping:
                //nothing
                break;
            case typeMessagesServer.init:
                this.messageServerInit(message.content);
                break;
            case typeMessagesServer.agent:
                //this.messageServerAgent(message.content);       
                break;
            case typeMessagesServer.end:
                this.messageServerEnd(message.content);
                break;                                                
            default:
                console.log("bug analyse message server"); 
        }        
    },

    messageServerInit : function (message) {

        console.log("INIT STREAM");

        this.Teams.add(message.teams[0]);
        this.Teams.add(message.teams[1]);
        this.Teams.add(message.teams[2]);

        this.createMapJson();

        console.log(message.agents.length);

        //for (i = 0; i < message.agents.length; i++)
        var i = 0;    
        while(i < message.agents.length) {    
            this.createAgentJson(message.agents[i]);
            i++;
        } 

        this.camera.children.sort(depthCompare);
    
        this.partyStarting = false;
        this.partyRunning  = true;
    },

    messageServerAgent : function (message) {
        if(typeof(message.state) != "undefined" && (message.state == 1)) {
            //this.createAgentJson(message);
        }
        else {

            var index = -1;

            for(i = 0; i < this.agents.size; i++) {
                if(this.agents.get(i).nameg== message.name) {
                    if(typeof(message.state) != "undefined") {
                        if(message.state == -1)
                            index = i;
                    }
                    else {
                        this.agentChangeValue(this.agents.get(i), message);
                    }
                }
            }

            if(index != -1) {
                this.counterAgent.updateData(this.agents.get(i));
                this.camera.removeChild(this.agents.get(i).life.sprite);
                this.camera.removeChild(this.agents.get(i).percept.sprite);
                this.camera.removeChild(this.agents.get(i).debug.sprite);
                this.camera.removeChild(this.agents.get(i).sprite);
                this.agents.remove(index);
            }
        }    
        
    },


    messageServerEnd : function (message) {
        this.counterAgent = new CounterAgent();

        // TODO reset HTML value
        
        for (i = 0; i < this.agents.size; i++) {
            this.counterAgent.updateData(this.agents.get(i));
            this.camera.removeChild(this.agents.get(i).life.sprite);
            this.camera.removeChild(this.agents.get(i).percept.sprite);
            this.camera.removeChild(this.agents.get(i).debug.sprite);
            this.camera.removeChild(this.agents.get(i).sprite);        }

        this.partyRunning = false;
        
        
    },


    createMapJson : function () {

        this.map = new Sprite(gameTexture.getTexture("map"));      
        this.map.setPosX(-14);
        this.map.setPosY(-14);
        this.map.zIndex = 1;
        //this.camera.addChild(this.map.sprite);


        this.Teams.nameTeamRed = new MessageText("Red : " + this.Teams.teamRed.name, "red");
        this.Teams.nameTeamRed.setPosX(30);
        this.Teams.nameTeamRed.setPosY(-50);
        this.camera.addChild(this.Teams.nameTeamRed.text);

        this.Teams.nameTeamBlue = new MessageText("Blue : " + this.Teams.teamRed.name, "blue");
        this.Teams.nameTeamBlue.setPosX(750);
        this.Teams.nameTeamBlue.setPosY(-50);
        this.camera.addChild(this.Teams.nameTeamBlue.text);
    },

    createAgentJson : function (json) {
        var team = this.Teams.getTeam(json.team);
        var isRed = this.Teams.isRedTeam(team);
        var texture = SpriteBlock.getAgent(json.type, isRed);
        var agent = new Agent(texture);
        //this.updateData(json.type, true, isRed);
        agent.setAnchs(0.5);
        agent.setName(json.name);
        agent.setTeam(team);
        agent.setType(json.type);
        agent.setPosX(json.x * this.zoom);
        agent.setPosY(json.y * this.zoom);
        agent.setAngle(json.angle);
        agent.setScales(0.05 * this.zoom);
        agent.zIndex = 10;
/*
        var message = "";

        if (typeof(json.messageDebug) != "undefined")
            message = json.messageDebug;

        var color = rgb2hex2(0, 0, 0);

        if (typeof(json.colorDebug) != "undefined")
            color = rgb2hex2(json.colorDebug.r, json.colorDebug.g, json.colorDebug.b);

        agent.debug = new MessageText(message, color);
        agent.debug.setPosX(agent.getX());
        agent.debug.setPosY(agent.getY());
        agent.debug.setAnchX(-0.1);
        agent.debug.setAnchY(0.5);
        agent.debug.multiplyFont(0.5);


        // TODO button

        // agent.debug.setAlpha(-1);

        agent.debug.setInteractive(true);
        agent.debug.setButtonMode(true);
        agent.debug.setCursor(Cursor.pointer);

        var lifeAgent = 100;
        if (typeof(json.lifeP) != "undefined")
            lifeAgent = json.lifeP

        agent.life = new Sprite(SpriteBlock.getLife(lifeAgent));
        agent.life.setAnchs(0.5);
        agent.life.setScales(0.5 * this.zoom);
        agent.life.setPosX(agent.getX());
        agent.life.setPosY(agent.getY()- Math.sqrt(agent.height * agent.height) * agent.scale.y);
        agent.setLife(lifeAgent);

        // TODO button

        // agent.life.setAlpha(-1);

        agent.percept = new Sprite(SpriteBlock.getPercept(agent.type));
        agent.percept.setPosX(agent.getX());
        agent.percept.setPosY(agent.getY());
        agent.percept.setScales(0.5 * this.zoom);

        // TODO button

        // agent.percept.setAlpha(-1);

        // TODO anchor percept
        // TODO position
        // TODO Percept < Sprite
        */
        this.agents.add(agent);
        this.camera.addChild(agent.sprite);
        //this.camera.addChild(toto);
        //this.camera.addChild(agent.debug.sprite);
        //this.camera.addChild(agent.life.sprite);
        //this.camera.addChild(agent.percept.sprite);

        var self = this;

        agent.mousedown = function(data) {
            if(self.haveFollower && self.follower.name == this.name) {
                self.haveFollower = false;
                self.follower = null;

                // TODO Update HTML

            }
            else { 
                self.haveFollower = true;
                self.follower = this;
                self.camera.position.x = (self.renderer.width / 2) - this.getX();
                self.camera.position.y = (self.renderer.width / 2) - this.getY();

                // TODO Update HTML
            }
        };


    },

    agentChangeValue : function (agent, agentJson) {
    
    
    },

    addButton : function (name, formDefault, formDown, formTrans, cX, cY, type) {
        
        var button = new ButtonUI(formDefault, formDown, formTrans);
        button.setPosX(cX);
        button.setPosY(cY);
        button.setType(type);
        button.setAnchs(0.5);

        this.buttons.insert(button.type, button);

        button.mouseover = function(data) {
            this.isOver = true;
            if (this.isdown)
                return;
            this.setTexture(this.default);
        };    

        button.mouseout = function(data) {
            this.isOver = false;
            if (this.isdown)
                return;
            this.setTexture(this.trans);
        };  


        // TODO mousedown


        //this.hud.addChild(button.sprite);      
        this.hud.addButton(name, button);
    },

    addWheelListenerPartyStream: function() {
        if(this.activeZoom) {
            if (this.container.addEventListener) {
                // IE9, Chrome, Safari, Opera
                this.container.addEventListener('onmousewheel', cameraZoomPartyStreaming);
                // Firefox
                this.container.addEventListener("DOMMouseScroll", cameraZoomPartyStreaming, false);
            }
            // IE 6/7/8
            else {
                this.container.addEventListener("onmousewheel", cameraZoomPartyStreaming);
            }    
        }
    }

}); 

var partyStreaming = null;

function cameraZoomPartyStreaming (e) {

    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    var x = e.clientX;
    var y = e.clientY;
    var isZoomIn = delta > 0;
    var direction = isZoomIn ? 1 : -1;
    var factor = (1 + direction * 0.1);


    if(/*partyStreaming.zoom * factor <= partyStreaming.maxZoom && partyStreaming.zoom * factor >= partyStreaming.minZoom &&*/ partyStreaming.partyRunning == true ) {
        partyStreaming.zoom *= factor;

        //partyStreaming.map.multiplyPosFactor(factor);
        //partyStreaming.map.multiplyScalesFactor(factor);

        partyStreaming.Teams.nameTeamRed.multiplyPos(factor);
        partyStreaming.Teams.nameTeamRed.multiplyFont(factor);
        partyStreaming.Teams.nameTeamBlue.multiplyPos(factor);
        partyStreaming.Teams.nameTeamBlue.multiplyFont(factor);

        for(i = 0; i < partyStreaming.agents.size; i++) {
            var agent = partyStreaming.agents.get(i);
            agent.multiplyScalesFactor(factor);
            agent.multiplyPosFactor(factor);
            

        }
    }
};


function animatePartyStream() {
	requestAnimationFrame( animatePartyStream );
	partyStreaming.resizeStream();
    partyStreaming.renderer.render(partyStreaming.stage);

    var playB  = partyStreaming.buttons.get("play");
    var load0B = partyStreaming.buttons.get("loading0");
    var loadB  = partyStreaming.buttons.get("loading");

    playB.setPosX(partyStreaming.coordCenterX / 2);
    playB.setPosY(partyStreaming.coordCenterY / 2);

    loadB.setPosX(partyStreaming.coordCenterX / 2);
    loadB.setPosY(partyStreaming.coordCenterY / 2);

    load0B.setPosX(partyStreaming.coordCenterX / 2);
    load0B.setPosY(partyStreaming.coordCenterY / 2);
    


    if(partyStreaming.partyStarting) {
        load0B.setAlpha(1);
        load0B.setVisible(true);
        loadB.incrementRotation(0.05);
        loadB.setAlpha(1);
        loadB.setVisible(true);
    }
    else {

        if(partyStreaming.partyRunning) {
            loadB.setAlpha(-1);
            load0B.setAlpha(-1);
            load0B.setVisible(false);
            loadB.setVisible(false);
        }    

        if(!partyStreaming.partyRunning) {
            playB.setAlpha(1); 
            playB.setInteractive(true);
        }
    }
}

function stopGame() {
    partyStreaming.appModel.stop();
}





var hexablockTexture = Class.extend({

    init : function() {
       
    }

});



var hexablockTextureFolders = {
	root     : "hexaBlocks",
	blocks 	 : "blocks"
}; 

var gameTextureFolders = {
	root 	 : "assetWarbot",
	blue 	 : "Team2",
	hud 	 : "HUD",
	info 	 : "InfoAgent",
	mother 	 : "MotherTeam",
	red 	 : "Team1"
}

var agentTexture = {
	base 			: "base",
	engineer 		: "engineer",
	explorer 		: "explorer",
	kamikaze 		: "kamikaze",
	rocketLauncher 	: "rocketLauncher",
	turret 			: "turret",
	wall 			: "wall"

}

var TextureFolder = {

	root : "resources",
	game : gameTextureFolders,
	bloc : hexablockTextureFolders 
}

var gameTextureFile = {
	hud : {play : "playButton", load : "loading", load0 : "load0"},
	mother 	 : {food : "food02", map : "map004", rocket : "rocket2"},
	agent : agentTexture
}

var TextureExtension = {

	png : "png",
	gif : "gif"
}

var WarbotTexture = MapCollections.extend({

    init : function() {
    	this._super();   
    },

    getTexture : function (key) {
    	var value = this.get(key);
    	if(value != null) {
    		var texture = PIXI.Texture.fromImage(value.getPath());
    		return texture;
    	}	
    	return null;
    }

}); 

var gameTexture = new WarbotTexture();

var mapTexture = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.mother], gameTextureFile.mother.map, TextureExtension.png);
gameTexture.insert("map", mapTexture);

var playTexture = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.hud], gameTextureFile.hud.play, TextureExtension.png);
gameTexture.insert("play", playTexture);

var loading = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.hud], gameTextureFile.hud.load, TextureExtension.png);
gameTexture.insert("loading", loading);

var loading0 = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.hud], gameTextureFile.hud.load0, TextureExtension.png);
gameTexture.insert("loading0", loading0);

var baseRed = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.red], gameTextureFile.agent.base,TextureExtension.png);
gameTexture.insert("baseRed", baseRed);
var baseBlue = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.blue], gameTextureFile.agent.base,TextureExtension.png);
gameTexture.insert("baseBlue", baseBlue);
var engineerRed = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.red], gameTextureFile.agent.engineer,TextureExtension.png); 
gameTexture.insert("engineerRed", engineerRed);
var engineerBlue = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.blue], gameTextureFile.agent.engineer,TextureExtension.png); 
gameTexture.insert("engineerBlue", engineerBlue);
var explorerRed = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.red], gameTextureFile.agent.explorer,TextureExtension.png); 
gameTexture.insert("explorerRed", explorerRed);
var explorerBlue = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.blue], gameTextureFile.agent.explorer,TextureExtension.png); 
gameTexture.insert("explorerBlue", explorerBlue);
var kamikazeRed = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.red], gameTextureFile.agent.kamikaze,TextureExtension.png); 
gameTexture.insert("kamikazeRed", kamikazeRed);
var kamikazeBlue = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.blue], gameTextureFile.agent.kamikaze,TextureExtension.png);
gameTexture.insert("kamikazeBlue", kamikazeBlue);
var rocketLauncherRed = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.red], gameTextureFile.agent.rocketLauncher,TextureExtension.png); 
gameTexture.insert("rocketLauncherRed", rocketLauncherRed);
var rocketLauncherBlue = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.blue], gameTextureFile.agent.rocketLauncher,TextureExtension.png); 
gameTexture.insert("rocketLauncherBlue", rocketLauncherBlue);
var turretRed = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.red], gameTextureFile.agent.turret,TextureExtension.png); 
gameTexture.insert("turretRed", turretRed);
var turretBlue = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.blue], gameTextureFile.agent.turret,TextureExtension.png);
gameTexture.insert("turretBlue", turretBlue);
var wallRed = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.red], gameTextureFile.agent.wall,TextureExtension.png);
gameTexture.insert("wallRed", wallRed);
var wallBlue = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.blue], gameTextureFile.agent.wall,TextureExtension.png);
gameTexture.insert("wallBlue", wallBlue);
var food = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.mother], gameTextureFile.mother.food,TextureExtension.png);
gameTexture.insert("food", food);
var rocket = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.mother], gameTextureFile.mother.rocket,TextureExtension.png);
gameTexture.insert("rocket", rocket);





var CounterAgent = Class.extend({

    init : function() {
	    this.food 				= 0;
		this.redBase 			= 0;
		this.blueBase 			= 0;
		this.redExplorer 		= 0;
		this.blueExplorer 		= 0;
		this.redKamikaze 		= 0;
		this.blueKamikaze 		= 0;
		this.redRocketLauncher 	= 0;
		this.blueRocketLauncher = 0;
		this.redTurret 			= 0;
		this.blueTurret 		= 0;
		this.redEngineer 		= 0;
		this.blueEngineer 		= 0;
		this.redWall 			= 0;
		this.blueWall 			= 0;
    },

    resetHtmlValue : function(name, value) {
    	document.getElementById(name).innerHTML = value;
    },

    updateData : function (agent, increment, redTeam) {
        switch(agent.type) {
            case agentType.food:
                if(increment)
                    this.food += 1;
                else
                    this.food -= 1;
                this.resetHtmlValue(agentDataHTML.food, this.food);
                break;
            case agentType.base:
                if(redTeam) {
                    if(increment)
                        this.redBase += 1;
                    else
                        this.redBase -= 1;
                    this.resetHtmlValue(agentDataHTML.redBase, this.redBase);
                }    
                else {
                    if(increment)
                        this.blueBase += 1;
                    else
                        this.blueBase -= 1;
                    this.resetHtmlValue(agentDataHTML.blueBase, this.blueBase);
                }    
                break;   
            case agentType.engineer:
                if(redTeam) {
                    if(increment)
                        this.redEngineer += 1;
                    else
                        this.redEngineer -= 1;
                    this.resetHtmlValue(agentDataHTML.redEngineer, this.redEngineer);
                }    
                else {
                    if(increment)
                        this.blueEngineer += 1;
                    else
                        this.blueEngineer -= 1;
                    this.resetHtmlValue(agentDataHTML.blueEngineer, this.blueEngineer);
                }    
                break;
            case agentType.explorer:
                if(redTeam) {
                    if(increment)
                        this.redExplorer += 1;
                    else
                        this.redExplorer -= 1;
                    this.resetHtmlValue(agentDataHTML.redExplorer, this.redExplorer);
                }    
                else {
                    if(increment)
                        this.blueExplorer += 1;
                    else
                        this.blueExplorer -= 1;
                    this.resetHtmlValue(agentDataHTML.blueExplorer, this.blueExplorer);
                }    
                break;                      
             case agentType.kamikaze:
                if(redTeam) {
                    if(increment)
                        this.redKamikaze += 1;
                    else
                        this.redKamikaze -= 1;
                    this.resetHtmlValue(agentDataHTML.redKamikaze, this.redKamikaze);
                }    
                else {
                    if(increment)
                        this.blueKamikaze += 1;
                    else
                        this.blueKamikaze -= 1;
                    this.resetHtmlValue(agentDataHTML.blueKamikaze, this.blueKamikaze);
                }    
                break; 
            case agentType.rocketLauncher:
                if(redTeam) {
                    if(increment)
                        this.redRocketLauncher += 1;
                    else
                        this.redRocketLauncher -= 1;
                    this.resetHtmlValue(agentDataHTML.redRocketLauncher, this.redRocketLauncher);
                }    
                else {
                    if(increment)
                        this.blueRocketLauncher += 1;
                    else
                        this.blueRocketLauncher -= 1;
                    this.resetHtmlValue(agentDataHTML.blueRocketLauncher, this.blueRocketLauncher);
                }    
                break;
            case agentType.turret:
                if(redTeam) {
                    if(increment)
                        this.redTurret += 1;
                    else
                        this.redTurret -= 1;
                    this.resetHtmlValue(agentDataHTML.redTurret, this.redTurret);
                }    
                else {
                    if(increment)
                        this.blueTurret += 1;
                    else
                        this.blueTurret -= 1;
                    this.resetHtmlValue(agentDataHTML.blueTurret, this.blueTurret);
                }    
                break;
            case agentType.wall:
                if(redTeam) {
                    if(increment)
                        this.redWall += 1;
                    else
                        this.redWall -= 1;
                    this.resetHtmlValue(agentDataHTML.redWall, this.redWall);
                }    
                else {
                    if(increment)
                        this.blueWall += 1;
                    else
                        this.blueWall -= 1;
                    this.resetHtmlValue(agentDataHTML.blueWall, this.blueWall);
                }    
                break;                                                                                    
            default:
                return;    
        }        
        
    
    },

    getNumberRedAgents : function () {
        return this.redBase + this.redEngineer + this.redExplorer + this.redKamikaze + this.redRocketLauncher + this.redTurret + this.redWall;
    },

    getNumberBlueAgents : function () {
        return this.blueBase + this.blueEngineer + this.blueExplorer + this.blueKamikaze + this.blueRocketLauncher + this.blueTurret + this.blueWall;
    },


}); 


var Agent = Sprite.extend({

    init : function(texture) {
        this._super(texture);
        this.angle   = 0;
        this.type    = null;
        this.name    = null;
        this.team    = null;
        this.debug   = null;
        this.life    = null;
        this.percept = null;
    },

    setAngle : function (angle) {
        this.angle = angle;
        this.setRotation(Math.PI * (angle / 180));
    },

    setType : function (type) {
        this.type = type;
    },

    setName : function (name) {
        this.name = name;
    },

    setTeam : function (team) {
        this.team = team;
    },

    setLife : function (life) {
        this.life.val = life;
    }
}); 

