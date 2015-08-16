var Logger = Class.extend({

    init : function(activate, strict) {
        this.activate = activate;
        this.activateStrict = strict;
        this.strictMode = this.mode.BLACK;
        this.mode = {
            BLACK       : 0,
            GREEN       : 1,
            BLUE        : 2,
            PURPLE      : 3,
            YELLOW      : 4,
            ORANGE      : 5,
            PEARLESCENT : 6
        };
        this.currentMode = this.mode.WHITE;
    },

    activate : function() {
        this.activate = true;
    },

    deactivate : function() {
        this.activate = false;
    },

    setMode : function(mode) {
        this.currentMode = mode;
    },

    setStrictMode : function (mode) {
        this.strictMode = mode;
    },

    show : function (message) {
        if(this.activate) {
            if(this.activateStrict) {

            }
            else {

              if(message.mode <= this.currentMode ) {
                
              }
            }
        }
    }

});

var ConsoleMessage = Class.extend({

    init : function(message, mode) {
        this.message = message;
        this.mode = mode;
    },

    setMessage : function (message) {
        this.message = message;
    },

    setPriority : function (mode) {
      this.mode = mode;
    },

    setContent : function (message, mode) {
        this.setMessage(message);
        this.setPriority(mode);
    }

});

// console.log("Init %cHUD", "color: red; font-style: italic");
//
// console.log("This is the outer level");
// console.group();
// console.log("Level 2");
// console.group();
// console.log("Level 3");
// console.warn("%cMore of level 3", "color: red; font-style: italic");
// console.groupEnd();
// console.error("Back to level 2");
// console.groupEnd();
// console.debug("Back to the outer level");
