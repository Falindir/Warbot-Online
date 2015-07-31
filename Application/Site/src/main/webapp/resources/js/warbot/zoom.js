var Zoom = Class.extend({

    init : function() {
		this.value  = 1;
		this.min    = 0;
		this.max    = 10000;
		this.active = true;   
    },

    multiply : function (factor) {
    	if(this.zoomable(factor))
    		this.value *= factor;
    },

    zoomable : function (factor) {
    	var tempVal = this.value * factor;
    	return tempVal >= this.min && tempVal <= this.max;
    }

}); 