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

    reset : function() {
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

var Party = Class.extend({

    init : function(teamRed, teamBlue) {
       this.nameTeamRed = teamRed;
       this.nameTeamBlue = teamBlue;
    }

}); 

var PartyStream = Stream.extend({

    init : function(cnt, color, appModel, idParty) {
        this._super(cnt, color);

        this.minZoom = 0.5;
        this.maxZoom = 2;
        this.partyStarting = false;
        this.partyRunning = false;
        this.playButtonUI = null;
        this.appModel = appModel;
        this.idParty = idParty;
        this.counterAgent = new CounterAgent();

    }

}); 