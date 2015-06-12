
var HexaEditorStream = Stream.extend({

    initializeEditor : function() {
        this.nextHexagonToCreate = null;
        this.nextHexagonToCreateObject = null;
        this.minZoom = 0.5;
        this.maxZoom = 2;
        this.activeZoom = false;
        this.nameActiveMasterAgent = null;
        this.lastIndexActiveMasterTab = null;
        this.agentsMasterTab = [];
    },

    initMasterTab : function () {
        var tab1 = [];
        tab1.nameMaster = "WarBase";

        var tab2 = [];
        tab2.nameMaster = "WarEngineer";

        var tab3 = [];
        tab3.nameMaster = "WarExplorer";

        var tab4 = [];
        tab4.nameMaster = "WarKamikaze";

        var tab5 = [];
        tab5.nameMaster = "WarRocketLauncher";

        var tab6 = [];
        tab6.nameMaster = "WarTurret";

        this.agentsMasterTab.push(tab1);
        this.agentsMasterTab.push(tab2);
        this.agentsMasterTab.push(tab3);
        this.agentsMasterTab.push(tab4);
        this.agentsMasterTab.push(tab5);
        this.agentsMasterTab.push(tab6);

        this.createBlock(this.camera, this.getSpriteMaster(tab1.nameMaster), 90, 35, 1, 0);
        this.createBlock(this.camera, this.getSpriteMaster(tab2.nameMaster), 90, 35, 1, 1);
        this.createBlock(this.camera, this.getSpriteMaster(tab3.nameMaster), 90, 35, 1, 2);
        this.createBlock(this.camera, this.getSpriteMaster(tab4.nameMaster), 90, 35, 1, 3);
        this.createBlock(this.camera, this.getSpriteMaster(tab5.nameMaster), 90, 35, 1, 4);
        this.createBlock(this.camera, this.getSpriteMaster(tab6.nameMaster), 90, 35, 1, 5);

        this.createBlock(this.camera, listAction, 90, 200, 0, 0);
        this.createBlock(this.camera, listAction, 90, 200, 0, 1);
        this.createBlock(this.camera, listAction, 90, 200, 0, 2);
        this.createBlock(this.camera, listAction, 90, 200, 0, 3);
        this.createBlock(this.camera, listAction, 90, 200, 0, 4);
        this.createBlock(this.camera, listAction, 90, 200, 0, 5);


        this.camera.children.sort(depthCompare);

    },

    loadMasterAgent : function () {
        if(this.nameActiveMasterAgent != null) {
            var indexTab = this.getGoodIndexMasterTab();

            if(this.lastIndexActiveMasterTab != null) {
                for (i = 0; i < this.agentsMasterTab[this.lastIndexActiveMasterTab].length; i++) {
                    this.agentsMasterTab[this.lastIndexActiveMasterTab][i].alpha = -1;
                }
            }

            for (i = 0; i < this.agentsMasterTab[indexTab].length; i++) {
                this.agentsMasterTab[indexTab][i].alpha = 1;
            }

            this.lastIndexActiveMasterTab = indexTab;

            this.camera.position.x = 0;
            this.camera.position.y = 0;
        }
    },

    getGoodIndexMasterTab : function () {
        if(this.nameActiveMasterAgent) {
            for (i = 0; i < this.agentsMasterTab.length; i++) {
                if(this.agentsMasterTab[i].nameMaster == this.nameActiveMasterAgent)
                    return i;
            }
        }
    },

    getSpriteMaster : function (name) {

        if(name != null) {
            switch(name) {
                case "WarBase":
                    return masterBase;
                    break;
                case "WarEngineer":
                    return masterEngineer;
                    break;
                case "WarExplorer":
                    return masterExplorer;
                    break;
                case "WarKamikaze":
                    return masterKamikaze;
                    break;
                case "WarRocketLauncher":
                    return masterRocketLauncher;
                    break;
                case "WarTurret":
                    return masterTurret;
                    break;
                default:
                  return null;
            }
        }
        return null;
    },

    createBlock : function(scene, form, cX, cY, type, indexTab) {

        var block = new PIXI.Sprite(form);

        block.position.x = cX;
        block.position.y = cY;

        block.anchor.x = 0.5;
        block.anchor.y = 0.5;

        block.scale.x = 0.3;
        block.scale.y = 0.3;

        if(type != 2) {
             block.interactive = false;
             block.buttonMode = false;

             if(type == 0) {
                block.zIndex = 10;
             }
             else if (type == 1) {
                block.zIndex = 50;
             }
        }
        else {
             block.interactive = true;
             block.buttonMode = true;
             block.defaultCursor = "pointer";
             block.zIndex = 100;
        }

       block.type = type;

       block.alpha = -1;

       this.agentsMasterTab[indexTab].push(block);

       scene.addChild(block);

    },

    createTempBlock : function(scene, form, cX, cY) {

        var block = new PIXI.Sprite(form);
        var self = this;

        block.position.x = cX;
        block.position.y = cY;

        block.anchor.x = 0.5;
        block.anchor.y = 0.5;

        block.scale.x = 0.3;
        block.scale.y = 0.3;

        block.interactive = true;
        block.buttonMode = true;
        block.defaultCursor = "pointer";

        block.alpha = 1;
        block.isdown = false;

        scene.addChild(block);

        block.mousedown = function(data) {
            //self.createBlock(self.camera, self.nextHexagonToCreate, block.position.x, block.position.y, self.blockTab, 2);
        };

        this.nextHexagonToCreateObject = block;

    },

    addWheelListenerHexaEditorStream : function() {
        if(this.activeZoom) {

            if (this.container.addEventListener) {
                // IE9, Chrome, Safari, Opera
                this.container.addEventListener('onmousewheel', cameraZoomHexaEditorStream);
                // Firefox
                this.container.addEventListener("DOMMouseScroll", cameraZoomHexaEditorStream, false);
            }
            // IE 6/7/8
            else container.addEventListener("onmousewheel", cameraZoomHexaEditorStream);
        }
    },

    moveWhenNotDragging : function (moveData) {
        if(this.nextHexagonToCreate != null) {
            var pos = moveData.data.global;

            if(pos.x < 0 || pos.y < 0 || pos.x > this.container.offsetWidth-1 || pos.y > this.container.offsetHeight-1) {
                this.camera.removeChild(this.nextHexagonToCreateObject);
                this.nextHexagonToCreateObject = null;
            }
            else {
                if(this.nextHexagonToCreateObject == null)
                    this.createTempBlock(this.camera, this.nextHexagonToCreate, 0, 0);
                else {

                    this.nextHexagonToCreateObject.position.x = pos.x - this.camera.position.x;
                    this.nextHexagonToCreateObject.position.y = pos.y - this.camera.position.y;
                }
            }


        }
        else {
            if(this.nextHexagonToCreateObject != null) {
                this.camera.removeChild(this.nextHexagonToCreateObject);
                this.nextHexagonToCreateObject = null;
            }
        }
    }

});

function animateHexaEditor() {
        requestAnimationFrame( animateHexaEditor );
        hexaEditor.resizeStream();
        hexaEditor.renderStream();
}

function cameraZoomHexaEditorStream (e) {

    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    var x = e.clientX;
    var y = e.clientY;
    var isZoomIn = delta > 0;
    var direction = isZoomIn ? 1 : -1;
    var factor = (1 + direction * 0.1);

    if(hexaEditor.zoom * factor <= hexaEditor.maxZoom && hexaEditor.zoom * factor >= hexaEditor.minZoom) {
        hexaEditor.zoom *= factor;
/*
        for (i = 0; i < hexaEditor.blockTab.length; i++) {
            hexaEditor.blockTab[i].scale.x *= factor;
            hexaEditor.blockTab[i].scale.y *= factor;
            hexaEditor.blockTab[i].position.x *= factor;
            hexaEditor.blockTab[i].position.y *= factor;
        }*/
    }
};




var hexaEditor = new HexaEditorStream('#blocks', 0x777777);
hexaEditor.initializeEditor();
hexaEditor.initStream();
hexaEditor.initMasterTab();
hexaEditor.addWheelListenerHexaEditorStream();
hexaEditor.cameraMove();

//hexaEditor.createBlock(hexaEditor.camera, redHexagon, 250, 250, hexaEditor.blockTab, 2);
//hexaEditor.createBlock(hexaEditor.camera, redHexagon, 200, 200, hexaEditor.blockTab, 2);

animateHexaEditor();

/*var containerEditor = $('#blocks')[0];
var stageEditor = new PIXI.Container();
var rendererEditor = new PIXI.autoDetectRenderer(container.offsetWidth,container.offsetHeight,{backgroundColor : 0x777777});
var cameraEditor = new PIXI.Container();
var hudEditor = new PIXI.Container();

var nextHexagonToCreate = null;

requestAnimationFrame( animateEditor );
initEditor();
cameraEditorMove(stageEditor, cameraEditor);
addWheelListerEditor();

function animateEditor () {

    requestAnimationFrame( animateEditor );

    rendererEditor.resize(containerEditor.offsetWidth-1, containerEditor.offsetHeight-1);

    var coordCenterX = containerEditor.offsetWidth-1 / 2;
    var coordCenterY = containerEditor.offsetHeight-1 / 2;

    rendererEditor.render(stageEditor);


}

function initEditor() {
	stageEditor.interactive = true;
	rendererEditor.view.style.display = "block";
    containerEditor.appendChild(rendererEditor.view);
    cameraEditor.zoom = 1;
    stageEditor.addChild(cameraEditor);
    stageEditor.addChild(hudEditor);


    //test

    createBlock(cameraEditor, listAction, null, null, 400, 400, null, 0);

    createBlock(cameraEditor, masterRocketLauncher, null, null, 400, 400, null, 1);

    createBlock(cameraEditor, redHexagon, null, null, 165, 250, null, 2);

    createBlock(cameraEditor, redHexagon, null, null, 250, 250, null, 2);




}

function cameraEditorMove(stg, cam) {

    var isDragging = false;
	var prevX;
	var prevY;

	stg.mousedown = function (moveData) {
		var pos = moveData.global;
		prevX = pos.x;
		prevY = pos.y;
		isDragging = true;
	};

	stg.mouseup = function (moveDate) {
		isDragging = false;
	};


	stg.mousemove = function (moveData) {
		if (!isDragging) {
			return;
		}

		var pos = moveData.global;
		var dx = pos.x - prevX;
		var dy = pos.y - prevY;

		cam.position.x += dx;
		cam.position.y += dy;

		prevX = pos.x;
		prevY = pos.y;
	};

	 stg.mouseover = function(moveData) {

	 	var pos = moveData.global;

	 	alert(nextHexagonToCreate);

        if(nextHexagonToCreate != null) {
            createBlock(cam, nextHexagonToCreate, null, null, pos.x - cam.position.x, pos.y - cam.position.y, null, 0);
        }

     };
}

function addWheelListerEditor() {


}

function createBlock (scene, form, formDown, formTrans, cX, cY, tab, type) {

    var block = new PIXI.Sprite(form);

    block.position.x = cX;
    block.position.y = cY;

   	block.anchor.x = 0.5;
    block.anchor.y = 0.5;

    block.scale.x = 0.5;
    block.scale.y = 0.5;

    block.interactive = true;
    block.buttonMode = true;
    block.defaultCursor = "pointer";
    block.type = type;

    block.alpha = 1;
    block.isdown = false;

    scene.addChild(block);

    // not working
    //block.draggable();
}


*/