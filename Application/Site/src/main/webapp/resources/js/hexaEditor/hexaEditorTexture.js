

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

    {name : "create-engineer", index : 52, type : 1.43},
    {name : "create-explorer", index : 50, type : 1.44},
    {name : "create-kamikaze", index : 51, type : 1.45},
    {name : "create-rocketLauncher", index : 54, type : 1.46},
    {name : "create-turret", index : 53, type : 1.47},
    {name : "create-wall", index : 55, type : 1.48}
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

  {name : "create-engineer", index : 52, type : 1.43, father : "orange", neighbour : "aqua"},
  {name : "create-explorer", index : 50, type : 1.44, father : "orange", neighbour : "yellow"},
  {name : "create-kamikaze", index : 51, type : 1.45, father : "orange", neighbour : "orange"},
  {name : "create-rocketLauncher", index : 54, type : 1.46, father : "orange", neighbour : "red"},
  {name : "create-turret", index : 53, type : 1.47, father : "orange", neighbour : "green"},
  {name : "create-wall", index : 55, type : 1.48, father : "orange", neighbour : "purple"}


];

var blocksRegularTexture = new MapCollections();




//var blocksTruncatedTexture = new MapCollections();
