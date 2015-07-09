var ColorRGB = Class.extend({

    init : function(red, green, blue) {
		this.red   = red;
		this.green = green;
		this.blue  = blue;
    },

    isSame : function (color) {
    	if(this.red == color.red)
    		if(this.green == color.green)
    			if(this.blue == color.blue)
    				return true;
    	return false;		
    }

}); 