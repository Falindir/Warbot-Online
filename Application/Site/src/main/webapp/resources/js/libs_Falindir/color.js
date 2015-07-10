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

function rgb2hex2(r, g, b){
    return '#'+('0'+r.toString(16)).slice(-2)+('0'+g.toString(16)).slice(-2)+('0'+b.toString(16)).slice(-2);
}