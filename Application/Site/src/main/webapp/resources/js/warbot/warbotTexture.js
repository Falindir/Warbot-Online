

var hexablockTexture = Class.extend({

    init : function() {
       
    }

});

var TextureFolder = {

	root : "resources",
	game : gameTextureFolders,
	bloc : hexablockTextureFolders 
}

var hexablockTextureFolders = {
	root     : "hexaBlocks",
	blocks 	 : "blocks"
}; 

var gameTextureFolders = {
	root 	 : "assetWarbot",
	blue 	 : "BlueTeam",
	hud 	 : "HUD",
	info 	 : "InfoAgent",
	mother 	 : "MotherTeam",
	red 	 : "RedTeam"
}

var gameTextureFile = {
	hud 	 : ,
	info 	 : ,
	mother 	 : {food : "food02", map : "map004", rocket : "rocket2"}
}

var map = new Texture([TextureFolder.root, TextureFolder.game.root, TextureFolder.game.mother], gameTextureFile.mother.map, TextureExtension.png);


var gameTexture = {
	
}
