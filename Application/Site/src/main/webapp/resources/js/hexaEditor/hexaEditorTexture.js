

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

    {name : "when", index : 16, type : 1.11},

    {name : "and", index : 19, type : 1.121},
    {name : "or", index : 20, type : 1.122},
    {name : "not", index : 21, type : 1.123},

    {name : "redBase", index : 32, type : 1.131},
    {name : "blueBase", index : 40, type : 1.132},
    {name : "food", index : 39, type : 1.133},

    {name : "base-red", index : 32, type : 1.1311},
    {name : "engineer-red", index : 35, type : 1.1312},
    {name : "explorer-red", index : 33, type : 1.1313},
    {name : "kamikaze-red", index : 34, type : 1.1314},
    {name : "rocketLauncher-red", index : 37, type : 1.1315},
    {name : "turret-red", index : 36, type : 1.1316},
    {name : "wall-red", index : 38, type : 1.1317},

    {name : "base-blue", index : 40, type : 1.1321},
    {name : "engineer-blue", index : 43, type : 1.1322},
    {name : "explorer-blue", index : 41, type : 1.1323},
    {name : "kamikaze-blue", index : 42, type : 1.1324},
    {name : "rocketLauncher-blue", index : 45, type : 1.1325},
    {name : "turret-blue", index : 44, type : 1.1326},
    {name : "wall-blue", index : 46, type : 1.1327},

    {name : "create-engineer", index : 52, type : 1.143},
    {name : "create-explorer", index : 50, type : 1.144},
    {name : "create-kamikaze", index : 51, type : 1.145},
    {name : "create-rocketLauncher", index : 54, type : 1.146},
    {name : "create-turret", index : 53, type : 1.147},
    {name : "create-wall", index : 55, type : 1.148},

    {name : "eat", index : 59, type : 1.151},
    {name : "fire", index : 57, type : 1.152},
    {name : "idle", index : 61, type : 1.153},
    {name : "give", index : 62, type : 1.154},
    {name : "move", index : 58, type : 1.155},
    {name : "reload", index : 56, type : 1.156},
    {name : "take", index : 60, type : 1.157}

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

  {name : "when", index : 16, type : 1.11, father : "blue", neighbour : "blue"},

  {name : "and", index : 19, type : 1.121, father : "aqua", neighbour : "aqua"},
  {name : "or", index : 20, type : 1.122, father : "aqua", neighbour : "yellow"},
  {name : "not", index : 21, type : 1.123, father : "aqua", neighbour : "orange"},

  {name : "redBase", index : 32, type : 1.131, neighbour : "yellow", father : "yellow"},
  {name : "blueBase", index : 40, type : 1.132, neighbour : "orange", father : "yellow"},
  {name : "food", index : 39, type : 1.133, neighbour : "red", father : "yellow"},

  {name : "create-engineer", index : 52, type : 1.143, father : "orange", neighbour : "aqua"},
  {name : "create-explorer", index : 50, type : 1.144, father : "orange", neighbour : "yellow"},
  {name : "create-kamikaze", index : 51, type : 1.145, father : "orange", neighbour : "orange"},
  {name : "create-rocketLauncher", index : 54, type : 1.146, father : "orange", neighbour : "red"},
  {name : "create-turret", index : 53, type : 1.147, father : "orange", neighbour : "green"},
  {name : "create-wall", index : 55, type : 1.148, father : "orange", neighbour : "purple"},

  {name : "eat", index : 59, type : 1.151, father : "red", neighbour : "aqua"},
  {name : "fire", index : 57, type : 1.152, father : "red", neighbour : "yellow"},
  {name : "idle", index : 61, type : 1.153, father : "red", neighbour : "orange"},
  {name : "give", index : 62, type : 1.154, father : "red", neighbour : "red"},
  {name : "move", index : 58, type : 1.155, father : "red", neighbour : "green"},
  {name : "reload", index : 56, type : 1.156, father : "red", neighbour : "purple"},
  {name : "take", index : 60, type : 1.157, father : "red", neighbour : "magenta"},

  {name : "base-red", index : 32, type : 1.1311, neighbour : "when", father : "redBase"},
  {name : "engineer-red", index : 35, type : 1.1312, neighbour : "and", father : "redBase"},
  {name : "explorer-red", index : 33, type : 1.1313, neighbour : "or", father : "redBase"},
  {name : "kamikaze-red", index : 34, type : 1.1314, neighbour : "blueBase", father : "redBase"},
  {name : "rocketLauncher-red", index : 37, type : 1.1315, neighbour : "food", father : "redBase"},
  {name : "turret-red", index : 36, type : 1.1316, neighbour : "create-turret", father : "redBase"},
  {name : "wall-red", index : 38, type : 1.1317, neighbour : "create-wall", father : "redBase"},

  {name : "base-blue", index : 40, type : 1.1321, neighbour : "and", father : "blueBase"},
  {name : "engineer-blue", index : 43, type : 1.1322, neighbour : "or", father : "blueBase"},
  {name : "explorer-blue", index : 41, type : 1.1323, neighbour : "blueBase", father : "blueBase"},
  {name : "kamikaze-blue", index : 42, type : 1.1324, neighbour : "food", father : "blueBase"},
  {name : "rocketLauncher-blue", index : 45, type : 1.1325, neighbour : "create-turret", father : "blueBase"},
  {name : "turret-blue", index : 44, type : 1.1326, neighbour : "create-wall", father : "blueBase"},
  {name : "wall-blue", index : 46, type : 1.1327, neighbour : "take", father : "blueBase"}
];

var blocksRegularTexture = new MapCollections();




//var blocksTruncatedTexture = new MapCollections();
