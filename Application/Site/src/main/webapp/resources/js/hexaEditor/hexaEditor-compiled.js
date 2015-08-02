var HexagonEditorMode = {
    MINIMIZED : "minimizedMode",
    NORMAL    : "normalMode",
    EXTENDED  : "extendedMode"    
};

var CONST_HEXA = {

};

var HexagonEditor = Stream.extend({

    init : function(cnt, color) {
        this._super(cnt, color);
		this.mode                    = HexagonEditorMode.NORMAL;
		this.nameNextHexagonToCreate = null;
		this.zoom                    = new Zoom();
		this.minDistanceBlock        = 25;
		this.masters                 = new MapCollections();
		this.nameActiveMaster        = null;
		this.nameLastActiveMaster    = null;
		this.idBlock                 = new SingletonInteger();
		//this.blockXml = new Collections();
    },

    initHudEditor : function () {
    
    
    }

}); 

var hexaEditor = null;

function animateHexaEditorComplete() {
        requestAnimationFrame( animateHexaEditorComplete );
        hexaEditor.resizeStream();
        hexaEditor.renderer.render(hexaEditor.stage);
}



