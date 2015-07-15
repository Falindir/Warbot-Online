var Teams = Class.extend({
    
    init : function() {
        this.teamRed      = null;
        this.teamBlue     = null;
        this.teamMother   = null;
        this.typeRed      = 1;
        this.typeBlue     = 2;
        this.typeMother   = 0;
        this.colorRed     = new ColorRGB(149, 149, 149);
        this.colorBlue    = new ColorRGB(255, 98, 255);
        this.colorGreen   = new ColorRGB(0, 255, 0);
        this.nameTeamRed  = null;
        this.nameTeamBlue = null;
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