

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
	blue 	 : "BlueTeam",
	hud 	 : "HUD",
	info 	 : "InfoAgent",
	mother 	 : "MotherTeam",
	red 	 : "RedTeam"
}

var TextureFolder = {

	root : "resources",
	game : gameTextureFolders,
	bloc : hexablockTextureFolders 
}

var gameTextureFile = {
	hud : {play : "playButton", load : "loading", load0 : "load0"},
	mother 	 : {food : "food02", map : "map004", rocket : "rocket2"}
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