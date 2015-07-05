
var agentDataHTML = {
 
    food               : "numberOfFoodConsoleMap",
    redBase            : "numberOfBaseRed",
    blueBase           : "numberOfBaseBlue",
    redExplorer        : "numberOfExplorerRed",
    blueExplorer       : "numberOfExplorerBlue",
    redKamikaze        : "numberOfKamikazeRed",
    blueKamikaze       : "numberOfKamikazeBlue",
    redRocketLauncher  : "numberOfRocketLauncherRed",
    blueRocketLauncher : "numberOfRocketLauncherBlue",
    redTurret          : "numberOfTurretRed",
    blueTurret         : "numberOfTurretBlue",
    redEngineer        : "numberOfEngineerRed",
    blueEngineer       : "numberOfEngineerBlue",
    redWall            : "numberOfWallRed",
    blueWall           : "numberOfWallBlue"
};

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
    },

    updateData : function (agent, increment, redTeam) {
        switch(agent.type) {
            case agentType.food:
                if(increment)
                    this.food += 1;
                else
                    this.food -= 1;
                this.resetHtmlValue(agentDataHTML.food, this.food);
                break;
            case agentType.base:
                if(redTeam) {
                    if(increment)
                        this.redBase += 1;
                    else
                        this.redBase -= 1;
                    this.resetHtmlValue(agentDataHTML.redBase, this.redBase);
                }    
                else {
                    if(increment)
                        this.blueBase += 1;
                    else
                        this.blueBase -= 1;
                    this.resetHtmlValue(agentDataHTML.blueBase, this.blueBase);
                }    
                break;   
            case agentType.engineer:
                if(redTeam) {
                    if(increment)
                        this.redEngineer += 1;
                    else
                        this.redEngineer -= 1;
                    this.resetHtmlValue(agentDataHTML.redEngineer, this.redEngineer);
                }    
                else {
                    if(increment)
                        this.blueEngineer += 1;
                    else
                        this.blueEngineer -= 1;
                    this.resetHtmlValue(agentDataHTML.blueEngineer, this.blueEngineer);
                }    
                break;
            case agentType.explorer:
                if(redTeam) {
                    if(increment)
                        this.redExplorer += 1;
                    else
                        this.redExplorer -= 1;
                    this.resetHtmlValue(agentDataHTML.redExplorer, this.redExplorer);
                }    
                else {
                    if(increment)
                        this.blueExplorer += 1;
                    else
                        this.blueExplorer -= 1;
                    this.resetHtmlValue(agentDataHTML.blueExplorer, this.blueExplorer);
                }    
                break;                      
             case agentType.kamikaze:
                if(redTeam) {
                    if(increment)
                        this.redKamikaze += 1;
                    else
                        this.redKamikaze -= 1;
                    this.resetHtmlValue(agentDataHTML.redKamikaze, this.redKamikaze);
                }    
                else {
                    if(increment)
                        this.blueKamikaze += 1;
                    else
                        this.blueKamikaze -= 1;
                    this.resetHtmlValue(agentDataHTML.blueKamikaze, this.blueKamikaze);
                }    
                break; 
            case agentType.rocketLauncher:
                if(redTeam) {
                    if(increment)
                        this.redRocketLauncher += 1;
                    else
                        this.redRocketLauncher -= 1;
                    this.resetHtmlValue(agentDataHTML.redRocketLauncher, this.redRocketLauncher);
                }    
                else {
                    if(increment)
                        this.blueRocketLauncher += 1;
                    else
                        this.blueRocketLauncher -= 1;
                    this.resetHtmlValue(agentDataHTML.blueRocketLauncher, this.blueRocketLauncher);
                }    
                break;
            case agentType.turret:
                if(redTeam) {
                    if(increment)
                        this.redTurret += 1;
                    else
                        this.redTurret -= 1;
                    this.resetHtmlValue(agentDataHTML.redTurret, this.redTurret);
                }    
                else {
                    if(increment)
                        this.blueTurret += 1;
                    else
                        this.blueTurret -= 1;
                    this.resetHtmlValue(agentDataHTML.blueTurret, this.blueTurret);
                }    
                break;
            case agentType.wall:
                if(redTeam) {
                    if(increment)
                        this.redWall += 1;
                    else
                        this.redWall -= 1;
                    this.resetHtmlValue(agentDataHTML.redWall, this.redWall);
                }    
                else {
                    if(increment)
                        this.blueWall += 1;
                    else
                        this.blueWall -= 1;
                    this.resetHtmlValue(agentDataHTML.blueWall, this.blueWall);
                }    
                break;                                                                                    
            default:
                return;    
        }        
        
    
    },

    getNumberRedAgents : function () {
    
    
    },

    getNumberBlueAgents : function () {
    
    
    },


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

    get : function (index) {
        return this.collections[index];    
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
                messageServerInit(message.content);
                break;
            case typeMessagesServer.agent:
                messageServerAgent(message.content);       
                break;
            case typeMessagesServer.end:
                messageServerEnd(message.content);
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

        for (i = 0; i < message.agents.length; i++)
            this.createAgentJson(message.agents[i]);
    
        this.partyStarting = false;
        this.partyRunning = true;
    },

    messageServerAgent : function (message) {
        if(typeof(message.state) != "undefined" && (message.state == 1)) {
            this.createAgentJson(message);
        }
        else {

            var index = -1;

            for(i = 0; i < this.agents.size(); i++) {
                if(this.agents.get(i).nameg== message.name) {
                    if(typeof(message.state) != "undefined") {
                        if(message.state == -1)
                            index = i;
                    }
                    else {
                        this.agentChangeValue(this.agents.get(i), message);
                    }
                }
            }

            if(index != -1) {
                this.counterAgent.updateData(this.agents.get(i));
                this.camera.removeChild(this.agents.get(i).SpriteLife);
                this.camera.removeChild(this.agents.get(i).SpritePercept);
                this.camera.removeChild(this.agents.get(i));
                this.agents.remove(index);
            }
        }    
        
    },


    messageServerEnd : function (message) {
        this.counterAgent = new CounterAgent(); 

        // TODO reset HTML value
        
        for (i = 0; i < this.agents.size(); i++) {
            camera.removeChild(this.agents.get(i).SpritePercept);
            camera.removeChild(this.agents.get(i).SpriteLife);
            camera.removeChild(this.agents.get(i).debug);
            camera.removeChild(this.agents.get(i));
        }

        // TODO HUD
        
        
    },


    createMapJson : function () {
    
    
    },

    createAgentJson : function (agentJson) {
    
    
    },

    agentChangeValue : function (agent, agentJson) {
    
    
    }

}); 

function animatePartyStream() {
	requestAnimationFrame( animatePartyStream );
	partyStream.resizeStream();
    partyStream.renderer.render(partyStream.stage);
}

