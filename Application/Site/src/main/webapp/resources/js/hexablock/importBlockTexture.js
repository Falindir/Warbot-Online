var masterBase = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/master/base.png");
var masterEngineer = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/master/engineer.png");
var masterExplorer = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/master/explorer.png");
var masterKamikaze = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/master/kamikaze.png");
var masterRocketLauncher = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/master/rocketLauncher.png");
var masterTurret = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/master/turret.png");

var listAction = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/other/listAction.png");

var emptyBlock = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/other/empty.png");

var actionWhen = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/condition/when.png");
var actionDo = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/condition/do.png");

var operatorAnd = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/operator/and.png");
var operatorOr = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/operator/or.png");
var operatorNot = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/operator/not.png");

var agentBaseTeam1 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/agent/team1/base.png");
var agentBaseTeam2 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/agent/team2/base.png");
var agentEngineerTeam1 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/agent/team1/engineer.png");
var agentEngineerTeam2 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/agent/team2/engineer.png");
var agentExplorerTeam1 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/agent/team1/explorer.png");
var agentExplorerTeam2 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/agent/team2/explorer.png");
var agentKamikazeTeam1 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/agent/team1/kamikaze.png");
var agentKamikazeTeam2 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/agent/team2/kamikaze.png");
var agentRocketLauncherTeam1 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/agent/team1/rocketLauncher.png");
var agentRocketLauncherTeam2 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/agent/team2/rocketLauncher.png");
var agentTurretTeam1 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/agent/team1/turret.png");
var agentTurretTeam2 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/agent/team2/turret.png");
var agentWallTeam1 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/agent/team1/wall.png");
var agentWallTeam2 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/agent/team2/wall.png");
var agentFood = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/agent/mother/food.png");

var viewAgent = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/view/agent.png");
var viewBaseTeam1 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/view/team1/base.png");
var viewBaseTeam2 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/view/team2/base.png");
var viewEngineerTeam1 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/view/team1/engineer.png");
var viewEngineerTeam2 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/view/team2/engineer.png");
var viewExplorerTeam1 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/view/team1/explorer.png");
var viewExplorerTeam2 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/view/team2/explorer.png");
var viewKamikazeTeam1 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/view/team1/kamikaze.png");
var viewKamikazeTeam2 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/view/team2/kamikaze.png");
var viewRocketLauncherTeam1 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/view/team1/rocketLauncher.png");
var viewRocketLauncherTeam2 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/view/team2/rocketLauncher.png");
var viewTurretTeam1 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/view/team1/turret.png");
var viewTurretTeam2 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/view/team2/turret.png");
var viewWallTeam1 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/view/team1/wall.png");
var viewWallTeam2 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/view/team2/wall.png");
var viewFood = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/view/mother/food.png");

var actionEat = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/action/eat.png");
var actionFire = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/action/fire.png");
var actionGive = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/action/give.png");
var actionIdle = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/action/idle.png");
var actionMove = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/action/move.png");
var actionReload = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/action/reload.png");
var actionTake = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/action/take.png");

var bag00 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/bag/0.png");
var bag10 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/bag/10.png");
var bag20 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/bag/20.png");
var bag25 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/bag/25.png");
var bag30 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/bag/30.png");
var bag40 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/bag/40.png");
var bag50 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/bag/50.png");
var bag60 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/bag/60.png");
var bag70 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/bag/70.png");
var bag75 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/bag/75.png");
var bag80 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/bag/80.png");
var bag90 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/bag/90.png");
var bag100 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/bag/100.png");

var life00 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/life/0.png");
var life10 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/life/10.png");
var life20 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/life/20.png");
var life25 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/life/25.png");
var life30 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/life/30.png");
var life40 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/life/40.png");
var life50 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/life/50.png");
var life60 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/life/60.png");
var life70 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/life/70.png");
var life75 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/life/75.png");
var life80 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/life/80.png");
var life90 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/life/90.png");
var life100 = PIXI.Texture.fromImage("/resources/hexaBlocks/blocks/life/100.png");
