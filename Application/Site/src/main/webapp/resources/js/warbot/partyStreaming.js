
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

var typeMessagesServer = {
    init    : "init",
    agent   : "agent",
    synchro : "synchro",
    end     : "end"
}; 



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
    },

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
        this.haveFollower  = false;
        this.follower      = null;
        this.buttons       = new Buttons();
    },

    initStreaming : function () {
        // var gifLoad = 
        var play = new Sprite(gameTexture.getTexture("play"));
        play.setAnchs(0.5);
        play.setScales(0.8);
        play.setInteractive(true);
        play.setButtonMode(true);
        play.setCursor(Cursor.pointer);

        var self = this;

        play.sprite.mousedown = function(data) {

            console.log(self.partyStarting);

            if(!self.partyStarting) {
                //self.appModel.launchParty(self.idParty,-1);
                self.partyStarting = true;
                play.setAlpha(-1);
                play.setInteractive(false);
                play.setVisible(false);
            }
        };

        this.buttons.insert("play", play);
        this.hud.addChild(play.sprite);

        var load0 = new Sprite(gameTexture.getTexture("loading0"));
        load0.setAnchs(0.5);
        load0.setScales(0.3);
        load0.setAlpha(1);
        load0.setVisible(false);
        
        this.buttons.insert("loading0", load0);
        this.hud.addChild(load0.sprite);

        var load = new Sprite(gameTexture.getTexture("loading"));
        load.setAnchs(0.5);
        load.setScales(0.3);
        load.setAlpha(1);
        load.setVisible(false);
        
        this.buttons.insert("loading", load);
        this.hud.addChild(load.sprite);


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
                this.camera.removeChild(this.agents.get(i).life.sprite);
                this.camera.removeChild(this.agents.get(i).percept.sprite);
                this.camera.removeChild(this.agents.get(i).debug.sprite);
                this.camera.removeChild(this.agents.get(i).sprite);
                this.agents.remove(index);
            }
        }    
        
    },


    messageServerEnd : function (message) {
        this.counterAgent = new CounterAgent();

        // TODO reset HTML value
        
        for (i = 0; i < this.agents.size; i++) {
            this.counterAgent.updateData(this.agents.get(i));
            this.camera.removeChild(this.agents.get(i).life.sprite);
            this.camera.removeChild(this.agents.get(i).percept.sprite);
            this.camera.removeChild(this.agents.get(i).debug.sprite);
            this.camera.removeChild(this.agents.get(i).sprite);        }

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

        var message = "";

        if (typeof(json.messageDebug) != "undefined")
            message = json.messageDebug;

        var color = rgb2hex2(0, 0, 0);

        if (typeof(json.colorDebug) != "undefined")
            color = rgb2hex2(json.colorDebug.r, json.colorDebug.g, json.colorDebug.b);

        agent.debug = new MessageText(message, color);
        agent.debug.setPosX(agent.getX());
        agent.debug.setPosY(agent.getY());
        agent.debug.setAnchX(-0.1);
        agent.debug.setAnchY(0.5);


        // TODO button

        // agent.debug.setAlpha(-1);

        agent.debug.setInteractive(true);
        agent.debug.setButtonMode(true);
        agent.debug.setCursor(Cursor.pointer);

        var lifeAgent = 100;
        if (typeof(json.lifeP) != "undefined")
            lifeAgent = json.lifeP

        agent.life = new Sprite(SpriteBlock.getLife(lifeAgent));
        agent.life.setAnchs(0.5);
        agent.life.setScales(0.5 * this.zoom);
        agent.life.setPosX(agent.getX());
        agent.life.setPosY(agent.getY()- Math.sqrt(agent.height * agent.height) * agent.scale.y);
        agent.setLife(lifeAgent);

        // TODO button

        // agent.life.setAlpha(-1);

        agent.percept = new Sprite(SpriteBlock.getPercept(agent.type));
        agent.percept.setPosX(agent.getX());
        agent.percept.setPosY(agent.getY());
        agent.percept.setScales(0.5 * this.zoom);

        // TODO button

        // agent.percept.setAlpha(-1);

        // TODO anchor percept
        // TODO position
        // TODO Percept < Sprite
        
        this.agents.add(agent);
        this.camera.addChild(agent.sprite);
        this.camera.addChild(agent.debug.sprite);
        this.camera.addChild(agent.life.sprite);
        this.camera.addChild(agent.percept.sprite);

        var self = this;

        agent.mousedown = function(data) {
            if(self.haveFollower && self.follower.name == this.name) {
                self.haveFollower = false;
                self.follower = null;

                // TODO Update HTML

            }
            else { 
                self.haveFollower = true;
                self.follower = this;
                self.camera.position.x = (self.renderer.width / 2) - this.getX();
                self.camera.position.y = (self.renderer.width / 2) - this.getY();

                // TODO Update HTML
            }
        };


    },

    agentChangeValue : function (agent, agentJson) {
    
    
    },

    addButton : function (formDefault, formDown, formTrans, cX, cY, type) {
        
        var button = new ButtonUI(formDefault, formDown, formTrans);
        button.setPosX(cX);
        button.setPosY(cY);
        button.setType(type);
        button.setAnchs(0.5);

        this.buttons.insert(button.type, button);

        button.mouseover = function(data) {
            this.isOver = true;
            if (this.isdown)
                return;
            this.setTexture(this.default);
        };    

        button.mouseout = function(data) {
            this.isOver = false;
            if (this.isdown)
                return;
            this.setTexture(this.trans);
        };  


        // TODO mousedown


        this.hud.addChild(button.sprite);      

    }

}); 

var partyStreaming = null;

function animatePartyStream() {
	requestAnimationFrame( animatePartyStream );
	partyStreaming.resizeStream();
    partyStreaming.renderer.render(partyStreaming.stage);

    partyStreaming.buttons.get("play").setPosX(partyStreaming.coordCenterX / 2);
    partyStreaming.buttons.get("play").setPosY(partyStreaming.coordCenterY / 2);

    partyStreaming.buttons.get("loading").setPosX(partyStreaming.coordCenterX / 2);
    partyStreaming.buttons.get("loading").setPosY(partyStreaming.coordCenterY / 2);

    partyStreaming.buttons.get("loading0").setPosX(partyStreaming.coordCenterX / 2);
    partyStreaming.buttons.get("loading0").setPosY(partyStreaming.coordCenterY / 2);

    console.log(partyStreaming.partyStarting);
    
    if(partyStreaming.partyStarting) {
        partyStreaming.buttons.get("loading0").setAlpha(1);
        partyStreaming.buttons.get("loading0").setVisible(true);
        partyStreaming.buttons.get("loading").incrementRotation(0.05);
        partyStreaming.buttons.get("loading").setAlpha(1);
        partyStreaming.buttons.get("loading").setVisible(true);
    }
    else {
        partyStreaming.buttons.get("loading").setAlpha(-1);
        if(!partyStreaming.partyRunning) {
            partyStreaming.buttons.get("play").setAlpha(1); 
            partyStreaming.buttons.get("play").setInteractive(true);
        }
    }
}

function stopGame() {
    partyStreaming.appModel.stop();
}

