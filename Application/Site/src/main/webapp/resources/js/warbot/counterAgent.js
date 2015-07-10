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
