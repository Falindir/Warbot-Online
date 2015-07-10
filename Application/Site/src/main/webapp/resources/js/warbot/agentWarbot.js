var Agent = Sprite.extend({

    init : function(texture) {
        this._super(texture);
        this.angle   = 0;
        this.type    = null;
        this.name    = null;
        this.team    = null;
        this.debug   = null;
        this.life    = null;
        this.percept = null;
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
        this.life.val = life;
    }
}); 