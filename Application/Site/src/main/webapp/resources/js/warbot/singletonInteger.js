var SingletonInteger = Class.extend({

    init : function() {
    	this.value = 0;   
    },

    getNextValue : function () {
    	this.value += 1;
    	return this.value;    
    }

}); 