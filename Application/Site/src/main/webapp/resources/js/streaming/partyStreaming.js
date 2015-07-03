var CounterAgent = Class.extend({

    init : function() {
	    this.food 				= 0;
		this.redBase 			= 0;
		this.blueBase 			= 0;
		this.redExplorer 		= 0;
		this.blueExplorer 		= 0;
		this.redKamikaze 		= 0;
		this.blueKamikaze 		= 0;
		this.redRocketLauncher 	= 0;
		this.blueRocketLauncher = 0;
		this.redTurret 			= 0;
		this.blueTurret 		= 0;
		this.redEngineer 		= 0;
		this.blueEngineer 		= 0;
		this.redWall 			= 0;
		this.blueWall 			= 0;
    },

    resetHtmlValue : function(name, value) {
    	document.getElementById(name).innerHTML = value;
    }

}); 

var typeMessagesServer = {
    init    : "init",
    agent   : "agent",
    synchro : "synchro",
    end     : "end"
}; 

var Collections = Class.extend({

    init : function() {
       this.collections = [];
    },

    size : function () {
        return this.collections.length;
    },

    clear : function () {
        this.collections = [];
    },

    add : function (value) {
        this.collections.push(value);
    },

    set : function (index, value) {
        this.collections[index] = value;
    },

    remove : function (index) {
        this.collections.splice(index, 1);
    }

}); 

var Teams = Collections.extend({
    
    init : function() {
        this._super();
        this.nameTeamRed  = "";
        this.nameTeamBlue = "";
    }

}); 

var PartyStream = Stream.extend({

    /**
     * [init description]
     * @param  {[type]} cnt      [description]
     * @param  {[type]} color    [description]
     * @param  {[type]} appModel [description]
     * @param  {[type]} idParty  [description]
     * @return {[type]}          [description]
     */
    init : function(cnt, color, appModel, idParty) {
        this._super(cnt, color);

        this.minZoom       = 0.5;
        this.maxZoom       = 2;
        this.partyStarting = false;
        this.partyRunning  = false;
        this.playButtonUI  = null;
        this.appModel      = appModel;
        this.idParty       = idParty;
        this.counterAgent  = new CounterAgent();
        this.Teams         = new Teams();
        this.agents        = new Collections();
    },

    analyseMessageServer : function (message) {

        switch(message.header) {
            case typeMessagesServer.init:
        
                break;
            case typeMessagesServer.agent:
        
                break;
            case typeMessagesServer.synchro:
        
                break;
            case typeMessagesServer.end:
        
                break;                                                
            default:
                console.log("bug analyse message server"); 
        }        
    },

    messageServerInit : function (message) {

        this.Teams.add(message.teams[0]);
        this.Teams.add(message.teams[1]);
        this.Teams.add(message.teams[2]);

        this.createMapJson();

        // TODO create agent Json
        
        this.partyStarting = false;
        this.partyRunning = true;
    },

    createMapJson : function () {
    
    
    },

    createAgentJson : function () {
    
    
    }

}); 

function animatePartyStream() {
	requestAnimationFrame( animatePartyStream );
	partyStream.resizeStream();
    partyStream.renderer.render(partyStream.stage);
}

