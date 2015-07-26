


var hexablockTextureFolders = {

	root      : "resources",
	hexablock : "hexaBlocks",
	blocks 	  : "blocks"

}; 

var hexablockTextureName = {
	base : "base",
	engineer : "engineer"

}

var HexablockTexture = MapCollections.extend({

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
// TODO factory for texture 

var editorTexture = new HexablockTexture();

var when = new Texture(["resources", "hexaBlocks", "blocks", "condition"], "when", "png");
editorTexture.insert("when", when);
