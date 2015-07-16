
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
    end     : "end",
    ping    : "PingMessage"
}; 

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
        this.activeZoom    = true;
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
            if(!self.partyStarting) {
                self.appModel.launchParty(self.idParty,-1);
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
            case typeMessagesServer.ping:
                //nothing
                break;
            case typeMessagesServer.init:
                this.messageServerInit(message.content);
                break;
            case typeMessagesServer.agent:
                //this.messageServerAgent(message.content);       
                break;
            case typeMessagesServer.end:
                this.messageServerEnd(message.content);
                break;                                                
            default:
                console.log("bug analyse message server"); 
        }        
    },

    messageServerInit : function (message) {

        console.log("INIT STREAM");

        this.Teams.add(message.teams[0]);
        this.Teams.add(message.teams[1]);
        this.Teams.add(message.teams[2]);

        this.createMapJson();

        console.log(message.agents.length);

        //for (i = 0; i < message.agents.length; i++)
        var i = 0;    
        while(i < message.agents.length) {    
            if(message.agents[i].type == "WarBase") {
                this.createAgentJson(message.agents[i]);
            }
            i++;
        } 

        this.camera.children.sort(depthCompare);
    
        this.partyStarting = false;
        this.partyRunning  = true;
    },

    messageServerAgent : function (message) {
        if(typeof(message.state) != "undefined" && (message.state == 1)) {
            //this.createAgentJson(message);
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

        this.partyRunning = false;
        
        
    },


    createMapJson : function () {

        this.map = new Sprite(gameTexture.getTexture("map"));      
        this.map.setPosX(-14);
        this.map.setPosY(-14);
        this.map.zIndex = 1;
        this.camera.addChild(this.map.sprite);


        this.Teams.nameTeamRed = new MessageText("Red : " + this.Teams.teamRed.name, "red");
        this.Teams.nameTeamRed.setPosX(30);
        this.Teams.nameTeamRed.setPosY(-50);
        this.camera.addChild(this.Teams.nameTeamRed.text);

        this.Teams.nameTeamBlue = new MessageText("Blue : " + this.Teams.teamRed.name, "blue");
        this.Teams.nameTeamBlue.setPosX(750);
        this.Teams.nameTeamBlue.setPosY(-50);
        this.camera.addChild(this.Teams.nameTeamBlue.text);
    },

    createAgentJson : function (json) {
        var team = this.Teams.getTeam(json.team);
        var isRed = this.Teams.isRedTeam(team);
        var texture = SpriteBlock.getAgent(json.type, isRed);
        console.log(texture);
        var agent = new Agent(texture);
        
        //this.updateData(json.type, true, isRed);

        agent.setAnchs(0.5);
        agent.setName(json.name);
        agent.setTeam(team);
        agent.setType(json.type);
        agent.setPosX(json.x * this.zoom);
        agent.setPosY(json.y * this.zoom);
        agent.setAngle(json.angle);
        agent.setScales(0.05 * this.zoom);
        agent.zIndex = 10;
/*
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
        agent.debug.multiplyFont(0.5);


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
        */
        this.agents.add(agent);
        this.camera.addChild(agent.sprite);
        //this.camera.addChild(agent.debug.sprite);
        //this.camera.addChild(agent.life.sprite);
        //this.camera.addChild(agent.percept.sprite);

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

    },

    addWheelListenerPartyStream: function() {
        if(this.activeZoom) {
            if (this.container.addEventListener) {
                // IE9, Chrome, Safari, Opera
                this.container.addEventListener('onmousewheel', cameraZoomPartyStreaming);
                // Firefox
                this.container.addEventListener("DOMMouseScroll", cameraZoomPartyStreaming, false);
            }
            // IE 6/7/8
            else {
                this.container.addEventListener("onmousewheel", cameraZoomPartyStreaming);
            }    
        }
    }

}); 

var partyStreaming = null;

function cameraZoomPartyStreaming (e) {

    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    var x = e.clientX;
    var y = e.clientY;
    var isZoomIn = delta > 0;
    var direction = isZoomIn ? 1 : -1;
    var factor = (1 + direction * 0.1);


    if(/*partyStreaming.zoom * factor <= partyStreaming.maxZoom && partyStreaming.zoom * factor >= partyStreaming.minZoom &&*/ partyStreaming.partyRunning == true ) {
        partyStreaming.zoom *= factor;

        partyStreaming.map.multiplyPosFactor(factor);
        partyStreaming.map.multiplyScalesFactor(factor);

        partyStreaming.Teams.nameTeamRed.multiplyPos(factor);
        partyStreaming.Teams.nameTeamRed.multiplyFont(factor);
        partyStreaming.Teams.nameTeamBlue.multiplyPos(factor);
        partyStreaming.Teams.nameTeamBlue.multiplyFont(factor);
    }
};


function animatePartyStream() {
	requestAnimationFrame( animatePartyStream );
	partyStreaming.resizeStream();
    partyStreaming.renderer.render(partyStreaming.stage);

    var playB  = partyStreaming.buttons.get("play");
    var load0B = partyStreaming.buttons.get("loading0");
    var loadB  = partyStreaming.buttons.get("loading");

    playB.setPosX(partyStreaming.coordCenterX / 2);
    playB.setPosY(partyStreaming.coordCenterY / 2);

    loadB.setPosX(partyStreaming.coordCenterX / 2);
    loadB.setPosY(partyStreaming.coordCenterY / 2);

    load0B.setPosX(partyStreaming.coordCenterX / 2);
    load0B.setPosY(partyStreaming.coordCenterY / 2);
    
    if(partyStreaming.partyStarting) {
        load0B.setAlpha(1);
        load0B.setVisible(true);
        loadB.incrementRotation(0.05);
        loadB.setAlpha(1);
        loadB.setVisible(true);
    }
    else {

        if(partyStreaming.partyRunning) {
            loadB.setAlpha(-1);
            load0B.setAlpha(-1);
            load0B.setVisible(false);
            loadB.setVisible(false);
        }    

        if(!partyStreaming.partyRunning) {
            playB.setAlpha(1); 
            playB.setInteractive(true);
        }
    }
}

function stopGame() {
    partyStreaming.appModel.stop();
}

