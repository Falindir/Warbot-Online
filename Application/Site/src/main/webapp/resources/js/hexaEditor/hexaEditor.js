var HexagonEditorMode = {
    MINIMIZED : "minimizedMode",
    NORMAL    : "normalMode",
    EXTENDED  : "extendedMode"    
};

var HexagonEditor = Stream.extend({

    init : function(cnt, color) {
        this._super(cnt, color);

        this.mode = HexagonEditorMode.NORMAL;
    }

}); 


//================================================================================//
//                                      MAIN                                      //
//================================================================================//

var hexaEditor = new HexagonEditorStream('#blocks', 0x777777);
hexaEditor.initStream();

hexaEditor.cameraMove();