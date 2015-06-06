var contenerTools = document.getElementById('tools');
var colorToolsOff = 0x777777;
var stageTools = new PIXI.Stage(colorToolsOff);
var rendererTools = new PIXI.autoDetectRenderer(0 , 0);
var cameraTools = new PIXI.DisplayObjectContainer();
var hudTools = new PIXI.DisplayObjectContainer();

requestAnimFrame( animateTools );
initTools();
cameraToolsMove(stageTools, cameraTools);
addWheelListerTools();

function animateTools () {

    requestAnimFrame( animateTools );

    rendererTools.resize(contenerTools.offsetWidth-1, contenerTools.offsetHeight-1);

    var coordCenterX = contenerTools.offsetWidth-1 / 2;
    var coordCenterY = contenerTools.offsetHeight-1 / 2;

    rendererTools.render(stageTools);
}

function initTools() {
	stageTools.interactive = true;
	rendererTools.view.style.display = "block";
    contenerTools.appendChild(rendererTools.view);
    cameraTools.zoom = 1;
    stageTools.addChild(cameraTools);
    stageTools.addChild(hudTools);

    //test

    createBlock(cameraTools, redHexagon, null, null, 165, 250, null, 0);

    createBlock(cameraTools, redHexagon, null, null, 250, 250, null, 0);
}

function cameraToolsMove(stg, cam) {

}

function addWheelListerTools() {


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
}