

var blocksRegularSpriteSheet = new SpriteSheet('/resources/hexaBlocks/regular.png', 2750, 4000, 250, 250);
blocksRegularSpriteSheet.cut();

var blocksTruncatedSpriteSheet = new SpriteSheet('/resources/hexaBlocks/truncated.png', 2750, 4000, 250, 250);
blocksTruncatedSpriteSheet.cut();

var buttonHUDSpriteSheet = new SpriteSheet('/resources/hexaBlocks/buttonHUD.png', 1000, 600, 200, 200);
buttonHUDSpriteSheet.cut();

var buttonHUDListAgent = new SpriteSheet('/resources/hexaBlocks/listAgent.png', 160, 563, 160, 563);
buttonHUDListAgent.cut();

var agentsHUDSpriteSheet = new SpriteSheet('/resources/hexaBlocks/agents.png', 780, 260, 130, 130);
agentsHUDSpriteSheet.cut();

var nameAgentHUDSpriteSheet = new SpriteSheet('/resources/hexaBlocks/nameAgentHUD.png', 600, 423, 100, 423);
nameAgentHUDSpriteSheet.cut();

var masterAgent = new SpriteSheet('/resources/hexaBlocks/master.png', 840, 500, 140, 500);
masterAgent.cut();

var listActionHUD = new SpriteSheet('/resources/hexaBlocks/blocks/other/listAction.png', 1000, 50, 1000, 50);
listActionHUD.cut();

var blockRegularTab = [
    {name : "nothing", index : 0, type : 0},

    {name : "when", index : 16, type : 1.1},

    {name : "and", index : 19, type : 1.21},
    {name : "or", index : 20, type : 1.22},
    {name : "not", index : 21, type : 1.23},

    {name : "redBase", index : 32, type : 1.31},
    {name : "blueBase", index : 40, type : 1.32},
    {name : "food", index : 39, type : 1.33},

    {name : "base-red", index : 32, type : 1.311},
    {name : "engineer-red", index : 35, type : 1.312},
    {name : "explorer-red", index : 33, type : 1.313},
    {name : "kamikaze-red", index : 34, type : 1.314},
    {name : "rocketLauncher-red", index : 37, type : 1.315},
    {name : "turret-red", index : 36, type : 1.316},
    {name : "wall-red", index : 38, type : 1.317},

    {name : "base-blue", index : 40, type : 1.321},
    {name : "engineer-blue", index : 43, type : 1.322},
    {name : "explorer-blue", index : 41, type : 1.323},
    {name : "kamikaze-blue", index : 42, type : 1.324},
    {name : "rocketLauncher-blue", index : 45, type : 1.325},
    {name : "turret-blue", index : 44, type : 1.326},
    {name : "wall-blue", index : 46, type : 1.327},

    {name : "create-engineer", index : 52, type : 1.43},
    {name : "create-explorer", index : 50, type : 1.44},
    {name : "create-kamikaze", index : 51, type : 1.45},
    {name : "create-rocketLauncher", index : 54, type : 1.46},
    {name : "create-turret", index : 53, type : 1.47},
    {name : "create-wall", index : 55, type : 1.48},

    {name : "eat", index : 59, type : 1.51},
    {name : "fire", index : 57, type : 1.52},
    {name : "idle", index : 61, type : 1.53},
    {name : "give", index : 62, type : 1.54},
    {name : "move", index : 58, type : 1.55},
    {name : "reload", index : 56, type : 1.56},
    {name : "take", index : 60, type : 1.57}
];

var blockTruncatedTab = [
  {name : "blue", index : 1, type : 1, father : null, neighbour : null},
  {name : "aqua", index : 2, type : 1, father : null, neighbour : null},
  {name : "yellow", index : 3, type : 1, father : null, neighbour : null},
  {name : "orange", index : 4, type : 1, father : null, neighbour : null},
  {name : "red", index : 5, type : 1, father : null, neighbour : null},
  {name : "green", index : 6, type : 1, father : null, neighbour : null},
  {name : "purple", index : 7, type : 1, father : null, neighbour : null},
  {name : "magenta", index : 8, type : 1, father : null, neighbour : null},
  {name : "pink", index : 9, type : 1, father : null, neighbour : null},
  {name : "lemon", index : 10, type : 1, father : null, neighbour : null},
  {name : "brun", index : 11, type : 1, father : null, neighbour : null},
  {name : "light-green", index : 12, type : 1, father : null, neighbour : null},
  {name : "light-red", index : 13, type : 1, father : null, neighbour : null},
  {name : "slime", index : 14, type : 1, father : null, neighbour : null},
  {name : "white", index : 15, type : 1, father : null, neighbour : null},

  {name : "when", index : 16, type : 1.1, father : "blue", neighbour : "blue"},

  {name : "and", index : 19, type : 1.21, father : "aqua", neighbour : "aqua"},
  {name : "or", index : 20, type : 1.22, father : "aqua", neighbour : "yellow"},
  {name : "not", index : 21, type : 1.23, father : "aqua", neighbour : "orange"},

  {name : "redBase", index : 32, type : 1.31, neighbour : "yellow", father : "yellow"},
  {name : "blueBase", index : 40, type : 1.32, neighbour : "orange", father : "yellow"},
  {name : "food", index : 39, type : 1.33, neighbour : "red", father : "yellow"},

  {name : "create-engineer", index : 52, type : 1.43, father : "orange", neighbour : "aqua"},
  {name : "create-explorer", index : 50, type : 1.44, father : "orange", neighbour : "yellow"},
  {name : "create-kamikaze", index : 51, type : 1.45, father : "orange", neighbour : "orange"},
  {name : "create-rocketLauncher", index : 54, type : 1.46, father : "orange", neighbour : "red"},
  {name : "create-turret", index : 53, type : 1.47, father : "orange", neighbour : "green"},
  {name : "create-wall", index : 55, type : 1.48, father : "orange", neighbour : "purple"},

  {name : "eat", index : 59, type : 1.51, father : "red", neighbour : "aqua"},
  {name : "fire", index : 57, type : 1.52, father : "red", neighbour : "yellow"},
  {name : "idle", index : 61, type : 1.53, father : "red", neighbour : "orange"},
  {name : "give", index : 62, type : 1.54, father : "red", neighbour : "red"},
  {name : "move", index : 58, type : 1.55, father : "red", neighbour : "green"},
  {name : "reload", index : 56, type : 1.56, father : "red", neighbour : "purple"},
  {name : "take", index : 60, type : 1.57, father : "red", neighbour : "magenta"},

  {name : "base-red", index : 32, type : 1.311, neighbour : "when", father : "redBase"},
  {name : "engineer-red", index : 35, type : 1.312, neighbour : "and", father : "redBase"},
  {name : "explorer-red", index : 33, type : 1.313, neighbour : "or", father : "redBase"},
  {name : "kamikaze-red", index : 34, type : 1.314, neighbour : "blueBase", father : "redBase"},
  {name : "rocketLauncher-red", index : 37, type : 1.315, neighbour : "food", father : "redBase"},
  {name : "turret-red", index : 36, type : 1.316, neighbour : "create-turret", father : "redBase"},
  {name : "wall-red", index : 38, type : 1.317, neighbour : "create-wall", father : "redBase"},

  {name : "base-blue", index : 40, type : 1.321, neighbour : "and", father : "blueBase"},
  {name : "engineer-blue", index : 43, type : 1.322, neighbour : "or", father : "blueBase"},
  {name : "explorer-blue", index : 41, type : 1.323, neighbour : "blueBase", father : "blueBase"},
  {name : "kamikaze-blue", index : 42, type : 1.324, neighbour : "food", father : "blueBase"},
  {name : "rocketLauncher-blue", index : 45, type : 1.325, neighbour : "create-turret", father : "blueBase"},
  {name : "turret-blue", index : 44, type : 1.326, neighbour : "create-wall", father : "blueBase"},
  {name : "wall-blue", index : 46, type : 1.327, neighbour : "take", father : "blueBase"}
];

var blocksRegularTexture = new MapCollections();




//var blocksTruncatedTexture = new MapCollections();
