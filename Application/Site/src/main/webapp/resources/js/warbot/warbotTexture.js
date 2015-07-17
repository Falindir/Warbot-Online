

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



