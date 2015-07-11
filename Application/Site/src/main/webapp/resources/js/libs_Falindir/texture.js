var Texture = Class.extend({

    init : function(folders, name, extension) {
    	this.path = new Collections();   	
    	this.name = name;
    	this.extension = extension;	
    	for (i = 0; i < folders.length; i++)
    		this.path.add(folders[i]);
    },

    // get : function () {
    // 	return PIXI.Texture.fromImage(this.getPath());
    // },	

    getPath : function () {
    	var pathTexture = "/";
    	for (i = 0; i < this.path.size; i++)
    		pathTexture += this.path.get(i) + "/";
    	pathTexture+= this.name + "." + this.extension;
        return pathTexture; 	
    }

}); 