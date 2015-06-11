var contenerEditor = document.getElementById('blocks');
var colorEditorOff = 0x777777;
var stageEditor = new PIXI.Stage(colorEditorOff);
var rendererEditor = new PIXI.autoDetectRenderer(0 , 0);
var cameraEditor = new PIXI.DisplayObjectContainer();
var hudEditor = new PIXI.DisplayObjectContainer();

var nextHexagonToCreate = null;

requestAnimFrame( animateEditor );
initEditor();
cameraEditorMove(stageEditor, cameraEditor);
addWheelListerEditor();

function animateEditor () {

    requestAnimFrame( animateEditor );

    rendererEditor.resize(contenerEditor.offsetWidth-1, contenerEditor.offsetHeight-1);

    var coordCenterX = contenerEditor.offsetWidth-1 / 2;
    var coordCenterY = contenerEditor.offsetHeight-1 / 2;

    rendererEditor.render(stageEditor);


}

function initEditor() {
	stageEditor.interactive = true;
	rendererEditor.view.style.display = "block";
    contenerEditor.appendChild(rendererEditor.view);
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


    block.draggable();
}