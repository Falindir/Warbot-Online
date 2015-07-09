
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
        return this.redBase + this.redEngineer + this.redExplorer + this.redKamikaze + this.redRocketLauncher + this.redTurret + this.redWall;
    },

    getNumberBlueAgents : function () {
        return this.blueBase + this.blueEngineer + this.blueExplorer + this.blueKamikaze + this.blueRocketLauncher + this.blueTurret + this.blueWall;
    },


}); 

var Cursor = {
    defaultC : 'default',
    pointer  : 'pointer'
}

var typeMessagesServer = {
    init    : "init",
    agent   : "agent",
    synchro : "synchro",
    end     : "end"
}; 

var Agent = Sprite.extend({

    init : function(texture) {
        this._super(texture);
        this.angle = 0;
        this.type  = null;
        this.name  = null;
        this.team  = null;
        this.life  = 100;
        this.debug = null;
    },

    setAngle : function (angle) {
        this.angle = angle;
        this.setRotation(Math.PI * (angle / 180));
    },

    setType : function (type) {
        this.type = type;
    },

    setName : function (name) {
        this.name = name;
    },

    setTeam : function (team) {
        this.team = team;
    },

    setLife : function (life) {
        this.life = life;
    }
}); 

var Teams = Class.extend({
    
    init : function() {
        this.teamRed    = null;
        this.teamBlue   = null;
        this.teamMother = null;
        this.typeRed    = 1;
        this.typeBlue   = 2;
        this.typeMother = 0;
        this.colorRed   = new ColorRGB(149, 149, 149);
        this.colorBlue  = new ColorRGB(255, 98, 255);
        this.colorGreen = new ColorRGB(0, 255, 0);
    },

    add : function (team) {
        var color = new ColorRGB(team.color.r, team.color.g, team.color.b);

        if(color.isSame(this.colorRed))
            this.teamRed = team;
        else if(color.isSame(this.colorBlue))
            this.teamBlue = team;
        else if(color.isSame(this.colorGreen))
            this.teamMother = team;
        else
            console.log("Error : team color not supported");   
    }

    getTeam : function (name) {
        var team = null;

        if(name == this.teamRed.name) {
            team = this.teamRed;
            team.teamType = this.typeRed;
        }
        else if (name == this.teamBlue.name) {
            team = this.teamBlue;
            team.teamType = this.typeBlue;
        }
        else if (name == this.teamMother.name) {
            team = this.teamMother;
            team.teamType = this.typeRed;
        }
        else 
            console.log("Error : team name not supported");

        return team;      
    },

    isRedTeam : function (team) {
        if(this.typeRed == team.teamType)
            return true;
        return false;    
    }


}); 


var MessageText = Class.extend({

    init : function(text, color) {
        this.text             = new PIXI.Text(agent.messageDebug, {font:"12px Arial", fill:agent.colorDebug});
        this.text.messageText = text;
        this.text.colorText   = color;
        this.text.font        = "12px Arial";
        this.text.position.x  = 0;
        this.text.position.y  = 0;
        this.text.anchor.x    = 0;
        this.text.anchor.y    = 0;
    }

    // TODO setter

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
        this.map           = null;
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

            for(i = 0; i < this.agents.size; i++) {
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
        
        for (i = 0; i < this.agents.size; i++) {
            this.camera.removeChild(this.agents.get(i).SpritePercept);
            this.camera.removeChild(this.agents.get(i).SpriteLife);
            this.camera.removeChild(this.agents.get(i).debug);
            this.camera.removeChild(this.agents.get(i));
        }

        // TODO HUD
        
        
    },


    createMapJson : function () {

        this.map = new Sprite(map);      
        this.map.setPosX(-14);
        this.map.setPosY(-14);
        this.camera.addChild(this.map);


    
    },

    createAgentJson : function (agentJson) {
        var team = this.Teams.getTeam(agentJson.team);
        var isRed = this.Teams.isRedTeam(team);
        var texture = null; // TODO SpriteBlock.getDefaultAgent(name, red);
        var agent = new Agent(texture.get());
        
        this.updateData(agentJson.type, true, isRed);

        agent.setAnchs(0.5);
        agent.setName(json.name);
        agent.setTeam(team);
        agent.setType(json.type);
        agent.setPosX(json.x * this.zoom);
        agent.setPosY(json.y * this.zoom);
        agent.setAngle(json.angle);
        agent.setScales(0.05 * this.zoom);

        if (typeof(json.lifeP) != "undefined")
            agent.setLife(json.lifeP);


    },

    agentChangeValue : function (agent, agentJson) {
    
    
    }

}); 

function animatePartyStream() {
	requestAnimationFrame( animatePartyStream );
	partyStream.resizeStream();
    partyStream.renderer.render(partyStream.stage);
}

