function getSpriteMaster (name) {
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
};

function getSpriteOfAgent (nameHexagon) {

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
             case "nothing" :
                 hexagon.sprite = nothing;
                 hexagon.typeOfType = 134;
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