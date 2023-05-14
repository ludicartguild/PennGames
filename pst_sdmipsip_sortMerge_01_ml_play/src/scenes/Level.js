
// You can write more code here
var game

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		this.add.image(569, 569, "background");

		// table
		const table = this.add.image(569, 569, "table");
		table.scaleX = 2;
		table.scaleY = 2;

		// gameplayGroup
		const gameplayGroup = this.add.container(0, 0);

		// command_1
		const command_1 = new geoText(this, 569, 332);
		command_1.scaleX = 0.55;
		command_1.scaleY = 0.55;
		command_1.angle = 0;
		command_1.alpha = 1;
		command_1.text = "Match to Clear the Board!";
		command_1.setStyle({ "align": "center", "backgroundColor": "#00000000", "color": "#fff", "fontFamily": "Baloo Bhaijaan, \"Comic Sans MS\"", "fontSize": "64px", "fontStyle": "bold", "stroke": "#000", "strokeThickness":6,"shadow.offsetX":0,"shadow.offsetY":3,"shadow.stroke":true,"shadow.fill":false});
		gameplayGroup.add(command_1);

		// command
		const command = new geoText(this, 569, 269);
		command.scaleX = 0.8;
		command.scaleY = 0.8;
		command.angle = 0;
		command.alpha = 1;
		command.text = "Match to\nClear the Board!";
		command.setStyle({ "align": "center", "backgroundColor": "#00000000", "color": "#fff", "fontFamily": "Baloo Bhaijaan, \"Comic Sans MS\"", "fontSize": "64px", "fontStyle": "bold", "stroke": "#000", "strokeThickness":6,"shadow.offsetX":0,"shadow.offsetY":3,"shadow.stroke":true,"shadow.fill":false});
		gameplayGroup.add(command);

		// dropArea
		const dropArea = this.add.image(569, 477, "board");
		dropArea.scaleX = 0.75;
		dropArea.scaleY = 0.75;
		gameplayGroup.add(dropArea);

		// hand
		const hand = this.add.sprite(455, -155, "hand");
		hand.setOrigin(0.3874111179516192, 0.04757527073099254);
		gameplayGroup.add(hand);

		// handMat_0
		const handMat_0 = this.add.image(369, 719, "handMat");
		handMat_0.scaleX = 0.7;
		handMat_0.scaleY = 0.7;
		handMat_0.visible = false;
		handMat_0.alpha = 0.2;
		handMat_0.alphaTopLeft = 0.2;
		handMat_0.alphaTopRight = 0.2;
		handMat_0.alphaBottomLeft = 0.2;
		handMat_0.alphaBottomRight = 0.2;
		handMat_0.tintTopLeft = 0;
		handMat_0.tintTopRight = 0;
		handMat_0.tintBottomLeft = 0;
		handMat_0.tintBottomRight = 0;
		gameplayGroup.add(handMat_0);

		// spawnPencil_2_0
		const spawnPencil_2_0 = this.add.image(412.3999938964844, 719, "basePencil");
		spawnPencil_2_0.scaleX = 0.7;
		spawnPencil_2_0.scaleY = 0.7;
		spawnPencil_2_0.visible = false;
		gameplayGroup.add(spawnPencil_2_0);

		// spawnPencil_1_0
		const spawnPencil_1_0 = this.add.image(369, 719, "basePencil");
		spawnPencil_1_0.scaleX = 0.7;
		spawnPencil_1_0.scaleY = 0.7;
		spawnPencil_1_0.visible = false;
		gameplayGroup.add(spawnPencil_1_0);

		// spawnPencil_0_0
		const spawnPencil_0_0 = this.add.image(325.6000061035156, 719, "basePencil");
		spawnPencil_0_0.scaleX = 0.7;
		spawnPencil_0_0.scaleY = 0.7;
		spawnPencil_0_0.visible = false;
		gameplayGroup.add(spawnPencil_0_0);

		// pencilColor_2_0
		const pencilColor_2_0 = this.add.image(412.3999938964844, 719, "pencilColor");
		pencilColor_2_0.scaleX = 0.7;
		pencilColor_2_0.scaleY = 0.7;
		pencilColor_2_0.visible = false;
		pencilColor_2_0.tintTopLeft = 16712194;
		pencilColor_2_0.tintTopRight = 16712194;
		pencilColor_2_0.tintBottomLeft = 16712194;
		pencilColor_2_0.tintBottomRight = 16712194;
		gameplayGroup.add(pencilColor_2_0);

		// pencilColor_1_0
		const pencilColor_1_0 = this.add.image(369, 719, "pencilColor");
		pencilColor_1_0.scaleX = 0.7;
		pencilColor_1_0.scaleY = 0.7;
		pencilColor_1_0.visible = false;
		pencilColor_1_0.tintTopLeft = 16712194;
		pencilColor_1_0.tintTopRight = 16712194;
		pencilColor_1_0.tintBottomLeft = 16712194;
		pencilColor_1_0.tintBottomRight = 16712194;
		gameplayGroup.add(pencilColor_1_0);

		// pencilColor_0_0
		const pencilColor_0_0 = this.add.image(325.6000061035156, 719, "pencilColor");
		pencilColor_0_0.scaleX = 0.7;
		pencilColor_0_0.scaleY = 0.7;
		pencilColor_0_0.visible = false;
		pencilColor_0_0.tintTopLeft = 16712194;
		pencilColor_0_0.tintTopRight = 16712194;
		pencilColor_0_0.tintBottomLeft = 16712194;
		pencilColor_0_0.tintBottomRight = 16712194;
		gameplayGroup.add(pencilColor_0_0);

		// handMat_1
		const handMat_1 = this.add.image(569, 719, "handMat");
		handMat_1.scaleX = 0.7;
		handMat_1.scaleY = 0.7;
		handMat_1.visible = false;
		handMat_1.alpha = 0.2;
		handMat_1.alphaTopLeft = 0.2;
		handMat_1.alphaTopRight = 0.2;
		handMat_1.alphaBottomLeft = 0.2;
		handMat_1.alphaBottomRight = 0.2;
		handMat_1.tintTopLeft = 0;
		handMat_1.tintTopRight = 0;
		handMat_1.tintBottomLeft = 0;
		handMat_1.tintBottomRight = 0;
		gameplayGroup.add(handMat_1);

		// spawnPencil_2_1
		const spawnPencil_2_1 = this.add.image(612.4000244140625, 719, "basePencil");
		spawnPencil_2_1.scaleX = 0.7;
		spawnPencil_2_1.scaleY = 0.7;
		spawnPencil_2_1.visible = false;
		gameplayGroup.add(spawnPencil_2_1);

		// spawnPencil_1_1
		const spawnPencil_1_1 = this.add.image(569, 719, "basePencil");
		spawnPencil_1_1.scaleX = 0.7;
		spawnPencil_1_1.scaleY = 0.7;
		spawnPencil_1_1.visible = false;
		gameplayGroup.add(spawnPencil_1_1);

		// spawnPencil_0_1
		const spawnPencil_0_1 = this.add.image(525.5999755859375, 719, "basePencil");
		spawnPencil_0_1.scaleX = 0.7;
		spawnPencil_0_1.scaleY = 0.7;
		spawnPencil_0_1.visible = false;
		gameplayGroup.add(spawnPencil_0_1);

		// pencilColor_2_1
		const pencilColor_2_1 = this.add.image(612.4000244140625, 719, "pencilColor");
		pencilColor_2_1.scaleX = 0.7;
		pencilColor_2_1.scaleY = 0.7;
		pencilColor_2_1.visible = false;
		pencilColor_2_1.tintTopLeft = 16712194;
		pencilColor_2_1.tintTopRight = 16712194;
		pencilColor_2_1.tintBottomLeft = 16712194;
		pencilColor_2_1.tintBottomRight = 16712194;
		gameplayGroup.add(pencilColor_2_1);

		// pencilColor_1_1
		const pencilColor_1_1 = this.add.image(569, 719, "pencilColor");
		pencilColor_1_1.scaleX = 0.7;
		pencilColor_1_1.scaleY = 0.7;
		pencilColor_1_1.visible = false;
		pencilColor_1_1.tintTopLeft = 16712194;
		pencilColor_1_1.tintTopRight = 16712194;
		pencilColor_1_1.tintBottomLeft = 16712194;
		pencilColor_1_1.tintBottomRight = 16712194;
		gameplayGroup.add(pencilColor_1_1);

		// pencilColor_0_1
		const pencilColor_0_1 = this.add.image(525.5999755859375, 719, "pencilColor");
		pencilColor_0_1.scaleX = 0.7;
		pencilColor_0_1.scaleY = 0.7;
		pencilColor_0_1.visible = false;
		pencilColor_0_1.tintTopLeft = 16712194;
		pencilColor_0_1.tintTopRight = 16712194;
		pencilColor_0_1.tintBottomLeft = 16712194;
		pencilColor_0_1.tintBottomRight = 16712194;
		gameplayGroup.add(pencilColor_0_1);

		// handMat_2
		const handMat_2 = this.add.image(769, 719, "handMat");
		handMat_2.scaleX = 0.7;
		handMat_2.scaleY = 0.7;
		handMat_2.visible = false;
		handMat_2.alpha = 0.2;
		handMat_2.alphaTopLeft = 0.2;
		handMat_2.alphaTopRight = 0.2;
		handMat_2.alphaBottomLeft = 0.2;
		handMat_2.alphaBottomRight = 0.2;
		handMat_2.tintTopLeft = 0;
		handMat_2.tintTopRight = 0;
		handMat_2.tintBottomLeft = 0;
		handMat_2.tintBottomRight = 0;
		gameplayGroup.add(handMat_2);

		// spawnPencil_2_2
		const spawnPencil_2_2 = this.add.image(812.4000244140625, 719, "basePencil");
		spawnPencil_2_2.scaleX = 0.7;
		spawnPencil_2_2.scaleY = 0.7;
		spawnPencil_2_2.visible = false;
		gameplayGroup.add(spawnPencil_2_2);

		// spawnPencil_1_2
		const spawnPencil_1_2 = this.add.image(769, 719, "basePencil");
		spawnPencil_1_2.scaleX = 0.7;
		spawnPencil_1_2.scaleY = 0.7;
		spawnPencil_1_2.visible = false;
		gameplayGroup.add(spawnPencil_1_2);

		// spawnPencil_0_2
		const spawnPencil_0_2 = this.add.image(725.5999755859375, 719, "basePencil");
		spawnPencil_0_2.scaleX = 0.7;
		spawnPencil_0_2.scaleY = 0.7;
		spawnPencil_0_2.visible = false;
		gameplayGroup.add(spawnPencil_0_2);

		// pencilColor_2_2
		const pencilColor_2_2 = this.add.image(812.4000244140625, 719, "pencilColor");
		pencilColor_2_2.scaleX = 0.7;
		pencilColor_2_2.scaleY = 0.7;
		pencilColor_2_2.visible = false;
		pencilColor_2_2.tintTopLeft = 16712194;
		pencilColor_2_2.tintTopRight = 16712194;
		pencilColor_2_2.tintBottomLeft = 16712194;
		pencilColor_2_2.tintBottomRight = 16712194;
		gameplayGroup.add(pencilColor_2_2);

		// pencilColor_1_2
		const pencilColor_1_2 = this.add.image(769, 719, "pencilColor");
		pencilColor_1_2.scaleX = 0.7;
		pencilColor_1_2.scaleY = 0.7;
		pencilColor_1_2.visible = false;
		pencilColor_1_2.tintTopLeft = 16712194;
		pencilColor_1_2.tintTopRight = 16712194;
		pencilColor_1_2.tintBottomLeft = 16712194;
		pencilColor_1_2.tintBottomRight = 16712194;
		gameplayGroup.add(pencilColor_1_2);

		// pencilColor_0_2
		const pencilColor_0_2 = this.add.image(725.5999755859375, 719, "pencilColor");
		pencilColor_0_2.scaleX = 0.7;
		pencilColor_0_2.scaleY = 0.7;
		pencilColor_0_2.visible = false;
		pencilColor_0_2.tintTopLeft = 16712194;
		pencilColor_0_2.tintTopRight = 16712194;
		pencilColor_0_2.tintBottomLeft = 16712194;
		pencilColor_0_2.tintBottomRight = 16712194;
		gameplayGroup.add(pencilColor_0_2);

		// dropPencil_0
		const dropPencil_0 = this.add.image(275, 476, "basePencil");
		dropPencil_0.scaleX = 0.7;
		dropPencil_0.scaleY = 0.7;
		dropPencil_0.visible = false;
		dropPencil_0.tintTopLeft = 15859712;
		dropPencil_0.tintTopRight = 15859712;
		dropPencil_0.tintBottomLeft = 15859712;
		dropPencil_0.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_0);

		// dropPencil_1
		const dropPencil_1 = this.add.image(311, 476, "basePencil");
		dropPencil_1.scaleX = 0.7;
		dropPencil_1.scaleY = 0.7;
		dropPencil_1.visible = false;
		dropPencil_1.tintTopLeft = 15859712;
		dropPencil_1.tintTopRight = 15859712;
		dropPencil_1.tintBottomLeft = 15859712;
		dropPencil_1.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_1);

		// dropPencil_2
		const dropPencil_2 = this.add.image(347, 476, "basePencil");
		dropPencil_2.scaleX = 0.7;
		dropPencil_2.scaleY = 0.7;
		dropPencil_2.visible = false;
		dropPencil_2.tintTopLeft = 15859712;
		dropPencil_2.tintTopRight = 15859712;
		dropPencil_2.tintBottomLeft = 15859712;
		dropPencil_2.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_2);

		// dropPencil_3
		const dropPencil_3 = this.add.image(383, 476, "basePencil");
		dropPencil_3.scaleX = 0.7;
		dropPencil_3.scaleY = 0.7;
		dropPencil_3.visible = false;
		dropPencil_3.tintTopLeft = 15859712;
		dropPencil_3.tintTopRight = 15859712;
		dropPencil_3.tintBottomLeft = 15859712;
		dropPencil_3.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_3);

		// dropPencil_4
		const dropPencil_4 = this.add.image(419, 476, "basePencil");
		dropPencil_4.scaleX = 0.7;
		dropPencil_4.scaleY = 0.7;
		dropPencil_4.visible = false;
		dropPencil_4.tintTopLeft = 15859712;
		dropPencil_4.tintTopRight = 15859712;
		dropPencil_4.tintBottomLeft = 15859712;
		dropPencil_4.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_4);

		// dropPencil_5
		const dropPencil_5 = this.add.image(457, 476, "basePencil");
		dropPencil_5.scaleX = 0.7;
		dropPencil_5.scaleY = 0.7;
		dropPencil_5.visible = false;
		dropPencil_5.tintTopLeft = 15859712;
		dropPencil_5.tintTopRight = 15859712;
		dropPencil_5.tintBottomLeft = 15859712;
		dropPencil_5.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_5);

		// dropPencil_6
		const dropPencil_6 = this.add.image(494, 476, "basePencil");
		dropPencil_6.scaleX = 0.7;
		dropPencil_6.scaleY = 0.7;
		dropPencil_6.visible = false;
		dropPencil_6.tintTopLeft = 15859712;
		dropPencil_6.tintTopRight = 15859712;
		dropPencil_6.tintBottomLeft = 15859712;
		dropPencil_6.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_6);

		// dropPencil_7
		const dropPencil_7 = this.add.image(531, 476, "basePencil");
		dropPencil_7.scaleX = 0.7;
		dropPencil_7.scaleY = 0.7;
		dropPencil_7.visible = false;
		dropPencil_7.tintTopLeft = 15859712;
		dropPencil_7.tintTopRight = 15859712;
		dropPencil_7.tintBottomLeft = 15859712;
		dropPencil_7.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_7);

		// dropPencil_8
		const dropPencil_8 = this.add.image(567, 476, "basePencil");
		dropPencil_8.scaleX = 0.7;
		dropPencil_8.scaleY = 0.7;
		dropPencil_8.visible = false;
		dropPencil_8.tintTopLeft = 15859712;
		dropPencil_8.tintTopRight = 15859712;
		dropPencil_8.tintBottomLeft = 15859712;
		dropPencil_8.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_8);

		// dropPencil_9
		const dropPencil_9 = this.add.image(609, 476, "basePencil");
		dropPencil_9.scaleX = 0.7;
		dropPencil_9.scaleY = 0.7;
		dropPencil_9.visible = false;
		dropPencil_9.tintTopLeft = 15859712;
		dropPencil_9.tintTopRight = 15859712;
		dropPencil_9.tintBottomLeft = 15859712;
		dropPencil_9.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_9);

		// dropPencil_10
		const dropPencil_10 = this.add.image(645, 476, "basePencil");
		dropPencil_10.scaleX = 0.7;
		dropPencil_10.scaleY = 0.7;
		dropPencil_10.visible = false;
		dropPencil_10.tintTopLeft = 15859712;
		dropPencil_10.tintTopRight = 15859712;
		dropPencil_10.tintBottomLeft = 15859712;
		dropPencil_10.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_10);

		// dropPencil_11
		const dropPencil_11 = this.add.image(683, 476, "basePencil");
		dropPencil_11.scaleX = 0.7;
		dropPencil_11.scaleY = 0.7;
		dropPencil_11.visible = false;
		dropPencil_11.tintTopLeft = 15859712;
		dropPencil_11.tintTopRight = 15859712;
		dropPencil_11.tintBottomLeft = 15859712;
		dropPencil_11.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_11);

		// dropPencil_12
		const dropPencil_12 = this.add.image(720, 476, "basePencil");
		dropPencil_12.scaleX = 0.7;
		dropPencil_12.scaleY = 0.7;
		dropPencil_12.visible = false;
		dropPencil_12.tintTopLeft = 15859712;
		dropPencil_12.tintTopRight = 15859712;
		dropPencil_12.tintBottomLeft = 15859712;
		dropPencil_12.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_12);

		// dropPencil_13
		const dropPencil_13 = this.add.image(757, 476, "basePencil");
		dropPencil_13.scaleX = 0.7;
		dropPencil_13.scaleY = 0.7;
		dropPencil_13.visible = false;
		dropPencil_13.tintTopLeft = 15859712;
		dropPencil_13.tintTopRight = 15859712;
		dropPencil_13.tintBottomLeft = 15859712;
		dropPencil_13.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_13);

		// dropPencil_14
		const dropPencil_14 = this.add.image(793, 476, "basePencil");
		dropPencil_14.scaleX = 0.7;
		dropPencil_14.scaleY = 0.7;
		dropPencil_14.visible = false;
		dropPencil_14.tintTopLeft = 15859712;
		dropPencil_14.tintTopRight = 15859712;
		dropPencil_14.tintBottomLeft = 15859712;
		dropPencil_14.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_14);

		// dropPencil_15
		const dropPencil_15 = this.add.image(831, 476, "basePencil");
		dropPencil_15.scaleX = 0.7;
		dropPencil_15.scaleY = 0.7;
		dropPencil_15.visible = false;
		dropPencil_15.tintTopLeft = 15859712;
		dropPencil_15.tintTopRight = 15859712;
		dropPencil_15.tintBottomLeft = 15859712;
		dropPencil_15.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_15);

		// dropPencil_16
		const dropPencil_16 = this.add.image(868, 476, "basePencil");
		dropPencil_16.scaleX = 0.7;
		dropPencil_16.scaleY = 0.7;
		dropPencil_16.visible = false;
		dropPencil_16.tintTopLeft = 15859712;
		dropPencil_16.tintTopRight = 15859712;
		dropPencil_16.tintBottomLeft = 15859712;
		dropPencil_16.tintBottomRight = 15859712;
		gameplayGroup.add(dropPencil_16);

		// guides
		const guides = this.add.sprite(569, 569, "guides");
		guides.scaleX = 2;
		guides.scaleY = 2;
		guides.visible = false;
		guides.alpha = 0.5;
		guides.alphaTopLeft = 0.5;
		guides.alphaTopRight = 0.5;
		guides.alphaBottomLeft = 0.5;
		guides.alphaBottomRight = 0.5;
		guides.tintFill = true;

		// cornerIcon
		const cornerIcon = this.add.image(252, 252, "icon");
		cornerIcon.scaleX = 0.5;
		cornerIcon.scaleY = 0.5;

		// endCard
		const endCard = this.add.container(569, 569);
		endCard.alpha = 0;

		// darkOverlay
		const darkOverlay = this.add.image(0, 0, "color");
		darkOverlay.scaleX = 1138;
		darkOverlay.scaleY = 1138;
		darkOverlay.alpha = 0.8;
		darkOverlay.alphaTopLeft = 0.8;
		darkOverlay.alphaTopRight = 0.8;
		darkOverlay.alphaBottomLeft = 0.8;
		darkOverlay.alphaBottomRight = 0.8;
		darkOverlay.tintTopLeft = 2039583;
		darkOverlay.tintTopRight = 2039583;
		darkOverlay.tintBottomLeft = 2039583;
		darkOverlay.tintBottomRight = 2039583;
		endCard.add(darkOverlay);

		// endIcon
		const endIcon = this.add.image(0, -103, "icon");
		endCard.add(endIcon);

		// playButtonGroup
		const playButtonGroup = this.add.container(0, 147);
		endCard.add(playButtonGroup);

		// playButton
		const playButton = this.add.sprite(0, 0, "button");
		playButton.tintTopLeft = 4783966;
		playButton.tintTopRight = 4783966;
		playButton.tintBottomLeft = 46102;
		playButton.tintBottomRight = 46102;
		playButtonGroup.add(playButton);

		// playNowText
		const playNowText = new geoText(this, 0, -5);
		playNowText.setStyle({ "fontFamily": "Baloo Bhaijaan, \"Comic Sans MS\"", "shadow.offsetX":0,"shadow.offsetY":3,"shadow.color": "#00000060", "shadow.blur":3,"shadow.stroke":true,"shadow.fill":false});
		playButtonGroup.add(playNowText);

		// lists
		const endCardHide = [cornerIcon, hand, command, gameplayGroup];
		const endCardShow = [endCard];
		const portraitList = [];
		const landscapeList = [];

		// command_1 (prefab fields)
		command_1.enText = "";
		command_1.enSize = 0;
		command_1.cnsText = "";
		command_1.cnsSize = 0;
		command_1.cntText = "";
		command_1.cntSize = 0;
		command_1.jaText = "";
		command_1.jaSize = 0;
		command_1.koText = "";
		command_1.koSize = 0;
		command_1.frText = "";
		command_1.frSize = 0;
		command_1.deText = "";
		command_1.deSize = 0;
		command_1.ptText = "";
		command_1.ptSize = 0;
		command_1.jsonData = "[{\"language\":\"English\",\"symbol\":\"en\",\"text\":\"Match to 6 to Clear the Board!\"},{\"language\":\"Chinese Simplified\",\"symbol\":\"zh-cn\",\"text\":\"匹配到 6 以清除棋盘！\"},{\"language\":\"French\",\"symbol\":\"fr\",\"text\":\"Associez-vous à 6 pour vider le plateau !\"},{\"language\":\"German\",\"symbol\":\"de\",\"text\":\"Kombiniere 6, um das Brett zu räumen!\"},{\"language\":\"Japanese\",\"symbol\":\"ja\",\"text\":\"ボードをクリアするために6に一致！\"},{\"language\":\"Korean\",\"symbol\":\"ko\",\"text\":\"6에 맞춰 보드를 클리어하세요!\"},{\"language\":\"Chinese Traditional\",\"symbol\":\"zh-tw\",\"text\":\"匹配到 6 以清除棋盤！\"},{\"language\":\"Portuguese\",\"symbol\":\"pt\",\"text\":\"Combine até 6 para limpar o tabuleiro!\"}]";

		// command (prefab fields)
		command.enText = "";
		command.enSize = 0;
		command.cnsText = "";
		command.cnsSize = 0;
		command.cntText = "";
		command.cntSize = 0;
		command.jaText = "";
		command.jaSize = 0;
		command.koText = "";
		command.koSize = 0;
		command.frText = "";
		command.frSize = 0;
		command.deText = "";
		command.deSize = 0;
		command.ptText = "";
		command.ptSize = 0;
		command.jsonData = "[{\"language\":\"English\",\"symbol\":\"en\",\"text\":\"Match to 6\\nto\\nClear the Board!\"},{\"language\":\"French\",\"symbol\":\"fr\",\"text\":\"Match à 6\\npour\\nVidez le tableau !\"},{\"language\":\"Chinese Simplified\",\"symbol\":\"zh-cn\",\"text\":\"匹配到 6\\n到\\n清除董事会！\"},{\"language\":\"German\",\"symbol\":\"de\",\"text\":\"Spiel bis 6\\nZu\\nLöschen Sie das Brett!\"},{\"language\":\"Japanese\",\"symbol\":\"ja\",\"text\":\"6に一致\\nに\\nボードをクリア！\"},{\"language\":\"Korean\",\"symbol\":\"ko\",\"text\":\"6에 일치\\n에게\\n보드를 클리어!\"},{\"language\":\"Portuguese\",\"symbol\":\"pt\",\"text\":\"Combine até 6\\npara\\nLimpe o tabuleiro!\"},{\"language\":\"Chinese Traditional\",\"symbol\":\"zh-tw\",\"text\":\"匹配到 6\\n到\\n清除董事會！\"}]";

		// cornerIcon (components)
		const cornerIconSimpleDuckAnchor = new SimpleDuckAnchor(cornerIcon);
		cornerIconSimpleDuckAnchor.anchorVertical = "Top";
		cornerIconSimpleDuckAnchor.anchorHorizontal = "Left";
		cornerIconSimpleDuckAnchor.offsetXLandscape = 10;
		cornerIconSimpleDuckAnchor.offsetXPortrait = 10;
		cornerIconSimpleDuckAnchor.offsetYLandscape = 10;
		cornerIconSimpleDuckAnchor.offsetYPortrait = 10;

		// playNowText (prefab fields)
		playNowText.enText = "Play Now";
		playNowText.enSize = 0;
		playNowText.cnsText = "下载游戏";
		playNowText.cnsSize = 0;
		playNowText.cntText = "下載遊戲";
		playNowText.cntSize = 0;
		playNowText.jaText = "今すぐプレイ";
		playNowText.jaSize = 50;
		playNowText.koText = "지금 플레이";
		playNowText.koSize = 50;
		playNowText.frText = "Installer";
		playNowText.frSize = 0;
		playNowText.deText = "Jetzt spielen!";
		playNowText.deSize = 45;
		playNowText.ptText = "Jogue agora!";
		playNowText.ptSize = 50;
		playNowText.jsonData = "[]";

		this.gameplayGroup = gameplayGroup;
		this.command_1 = command_1;
		this.command = command;
		this.dropArea = dropArea;
		this.hand = hand;
		this.handMat_0 = handMat_0;
		this.spawnPencil_2_0 = spawnPencil_2_0;
		this.spawnPencil_1_0 = spawnPencil_1_0;
		this.spawnPencil_0_0 = spawnPencil_0_0;
		this.pencilColor_2_0 = pencilColor_2_0;
		this.pencilColor_1_0 = pencilColor_1_0;
		this.pencilColor_0_0 = pencilColor_0_0;
		this.handMat_1 = handMat_1;
		this.spawnPencil_2_1 = spawnPencil_2_1;
		this.spawnPencil_1_1 = spawnPencil_1_1;
		this.spawnPencil_0_1 = spawnPencil_0_1;
		this.pencilColor_2_1 = pencilColor_2_1;
		this.pencilColor_1_1 = pencilColor_1_1;
		this.pencilColor_0_1 = pencilColor_0_1;
		this.handMat_2 = handMat_2;
		this.spawnPencil_2_2 = spawnPencil_2_2;
		this.spawnPencil_1_2 = spawnPencil_1_2;
		this.spawnPencil_0_2 = spawnPencil_0_2;
		this.pencilColor_2_2 = pencilColor_2_2;
		this.pencilColor_1_2 = pencilColor_1_2;
		this.pencilColor_0_2 = pencilColor_0_2;
		this.dropPencil_0 = dropPencil_0;
		this.dropPencil_1 = dropPencil_1;
		this.dropPencil_2 = dropPencil_2;
		this.dropPencil_3 = dropPencil_3;
		this.dropPencil_4 = dropPencil_4;
		this.dropPencil_5 = dropPencil_5;
		this.dropPencil_6 = dropPencil_6;
		this.dropPencil_7 = dropPencil_7;
		this.dropPencil_8 = dropPencil_8;
		this.dropPencil_9 = dropPencil_9;
		this.dropPencil_10 = dropPencil_10;
		this.dropPencil_11 = dropPencil_11;
		this.dropPencil_12 = dropPencil_12;
		this.dropPencil_13 = dropPencil_13;
		this.dropPencil_14 = dropPencil_14;
		this.dropPencil_15 = dropPencil_15;
		this.dropPencil_16 = dropPencil_16;
		this.cornerIcon = cornerIcon;
		this.endCard = endCard;
		this.playButtonGroup = playButtonGroup;
		this.playButton = playButton;
		this.endCardHide = endCardHide;
		this.endCardShow = endCardShow;
		this.portraitList = portraitList;
		this.landscapeList = landscapeList;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	gameplayGroup;
	/** @type {geoText} */
	command_1;
	/** @type {geoText} */
	command;
	/** @type {Phaser.GameObjects.Image} */
	dropArea;
	/** @type {Phaser.GameObjects.Sprite} */
	hand;
	/** @type {Phaser.GameObjects.Image} */
	handMat_0;
	/** @type {Phaser.GameObjects.Image} */
	spawnPencil_2_0;
	/** @type {Phaser.GameObjects.Image} */
	spawnPencil_1_0;
	/** @type {Phaser.GameObjects.Image} */
	spawnPencil_0_0;
	/** @type {Phaser.GameObjects.Image} */
	pencilColor_2_0;
	/** @type {Phaser.GameObjects.Image} */
	pencilColor_1_0;
	/** @type {Phaser.GameObjects.Image} */
	pencilColor_0_0;
	/** @type {Phaser.GameObjects.Image} */
	handMat_1;
	/** @type {Phaser.GameObjects.Image} */
	spawnPencil_2_1;
	/** @type {Phaser.GameObjects.Image} */
	spawnPencil_1_1;
	/** @type {Phaser.GameObjects.Image} */
	spawnPencil_0_1;
	/** @type {Phaser.GameObjects.Image} */
	pencilColor_2_1;
	/** @type {Phaser.GameObjects.Image} */
	pencilColor_1_1;
	/** @type {Phaser.GameObjects.Image} */
	pencilColor_0_1;
	/** @type {Phaser.GameObjects.Image} */
	handMat_2;
	/** @type {Phaser.GameObjects.Image} */
	spawnPencil_2_2;
	/** @type {Phaser.GameObjects.Image} */
	spawnPencil_1_2;
	/** @type {Phaser.GameObjects.Image} */
	spawnPencil_0_2;
	/** @type {Phaser.GameObjects.Image} */
	pencilColor_2_2;
	/** @type {Phaser.GameObjects.Image} */
	pencilColor_1_2;
	/** @type {Phaser.GameObjects.Image} */
	pencilColor_0_2;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_0;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_1;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_2;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_3;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_4;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_5;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_6;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_7;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_8;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_9;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_10;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_11;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_12;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_13;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_14;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_15;
	/** @type {Phaser.GameObjects.Image} */
	dropPencil_16;
	/** @type {Phaser.GameObjects.Image} */
	cornerIcon;
	/** @type {Phaser.GameObjects.Container} */
	endCard;
	/** @type {Phaser.GameObjects.Container} */
	playButtonGroup;
	/** @type {Phaser.GameObjects.Sprite} */
	playButton;
	/** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|geoText|Phaser.GameObjects.Container>} */
	endCardHide;
	/** @type {Phaser.GameObjects.Container[]} */
	endCardShow;
	/** @type {Array<any>} */
	portraitList;
	/** @type {Array<any>} */
	landscapeList;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		// game = this  // Makes the game variable (this) public so it can be accessed anywhere

		this.prevWidth = 0
		this.prevHeight = 0

		this.editorCreate()

		this.userInteracted = false
		this.input.on('pointerdown', () => this.userInteracted = true)

		// End Playable Handling
		sdEvents.on('end', this.showEndCard, this)
		if(Global.isSip) this.input.on('pointerdown', () => sdEvents.emit('end'))
		this.cornerIcon.setInteractive().on("pointerdown", () => { if (!Global.isPangle) sdEvents.emit('end') })

		// Audio Start and Stop events added for DAPI compliance
		sdEvents.on('startMusic',() => { this.sound.add("backgroundMusic").play({ volume: 0.5,  loop : true, delay : 0 }) })
		sdEvents.on('stopMusic',()  =>   this.sound.stopAll() )
		sdEvents.emit('startMusic');

		// == Start Code Here == 
		this.dropPencils = [];
		for(var i=0;i<17;i++){
			this.dropPencils.push(this["dropPencil_"+i]);
			this.dropPencils[i].currentPencil = null;
		}
		this.spawnableKeys = ["1_pencil"
												, "2_pencil"
												, "3_pencil"];
		this.board = new Array(17);
		this.boardInit = ["5_pencil"
										, "5_pencil"
										, ""];
		this.pencilPadding = 42;

		this.spawnNodes = [];
		for(var i=0; i<3;i++){
			var hand = {
				currentPencils: [],
				handMat: null
			};
			for(var k=0;k<3;k++){
				hand.currentPencils.push({
					spawnPencil: this["spawnPencil_"+k+"_"+i],
					pencilColor: this["pencilColor_"+k+"_"+i]
				});
			}
			hand.handMat = this["handMat_"+i];
			this.spawnNodes.push(hand);
		}
		this.spawnInitBoard(3)

		this.isEnding = false;
		this.isMatching = false;

		this.activeClusters = [];
		this.spawnPencils();

		this.tweens.add({
			targets     : this.command,
			scaleX: this.command.scaleX+0.15,
			scaleY: this.command.scaleY+0.15,
			ease        : Phaser.Math.Easing.Sine,
			duration    : 560,
			delay: 0,
			yoyo: true,
			repeat: -1,
		});
		this.tweens.add({
			targets     : this.command_1,
			scaleX: this.command_1.scaleX+0.125,
			scaleY: this.command_1.scaleY+0.125,
			ease        : Phaser.Math.Easing.Sine,
			duration    : 560,
			delay: 0,
			yoyo: true,
			repeat: -1,
		});
		this.input.on('dragstart', this.onDragStart, this);
		this.input.on('drag', this.onDrag, this);
		this.handsUsedCount = 0;
		this.input.on('dragend', this.onDragEnd, this);
	}
	onDragStart( pointer, gameObject ){
		for(var i=0;i<gameObject.cluster.length;i++){
			if(gameObject.cluster[i] != null){
				gameObject.cluster[i].parentContainer.bringToTop(gameObject.cluster[i]);
			}
		}
		this.sound.add("plop").play({ volume: 1,  loop : false, delay : 0 });
	}
	onDrag( pointer, gameObject, dragX, dragY ) {
		if(this.isMatching) return;
		if(this.isEnding) return;
		gameObject.x = dragX;
		gameObject.y = dragY;
	}
	onDragEnd( pointer, gameObject ) {
		if(this.checkOverlap(gameObject, this.dropArea)){
			// console.log("Overlapping");
			// this.activeClusters.splice(gameObject.activeIndex, 1);
			this.isMatching = true;
			this.handsUsedCount++;
			gameObject.destroy();
			//Place & Match Pencils
			this.sortPencils(gameObject.cluster);
			this.movePencils();
		}else{
			// console.log("NOT Overlapping");
			// Return to Hand Placement
		}
	}
	spawnInitBoard( amount ){
		for(var i=0; i<amount;i++){
			const obj = new Pencil(this, this.dropPencils[i].x, this.dropPencils[i].y);
			this.gameplayGroup.add(obj);
			this.dropPencils[i].currentPencil = obj;
		}
	}
	putOnBoardVFX( pencil, duration ){
		if(this.isEnding) return;
		if(!Global.gameActive) return;
		this.tweens.add({
			targets     : pencil,
			scaleX: pencil.scaleX+0.5,
			scaleY: pencil.scaleY+0.5,
			ease        : Phaser.Math.Easing.Sine,
			duration    : duration,
			delay: 0,
			yoyo: true,
			onComplete: function(){
				this.cameras.main.shake(100, 0.0025);
				this.sound.add("clang").play({ volume: 0.15,  loop : false, delay : 0 });
			}.bind(this)
		});
	}
	slideOnBoardVFX( pencil, duration ){
		if(this.isEnding) return;
		if(!Global.gameActive) return;
		this.cameras.main.shake(100, 0.00125);
		this.sound.add("ruffle").play({ volume: 0.25,  loop : false, delay : 0 });
		this.tweens.add({
			targets     : pencil,
			angle: -5,
			ease        : Phaser.Math.Easing.Sine,
			duration    : duration/2,
			delay: 0,
			yoyo: true
		});
	}
	matchPencils(){
		if(this.isEnding) return;
		if(!Global.gameActive) return;
		var currentNumber = 0;
		var allCurrentNumbers = {};
		for(var i=0; i<this.dropPencils.length; i++){
			if(this.dropPencils[i].currentPencil != null){
				if(currentNumber != this.dropPencils[i].currentPencil.currentNumber){
					currentNumber = this.dropPencils[i].currentPencil.currentNumber;
					allCurrentNumbers[currentNumber] = {
						initPencil: this.dropPencils[i],
						adjacentPencils: []
					};
				}else if(allCurrentNumbers[currentNumber].adjacentPencils.length < 3){
					this.dropPencils[i].currentPencil.nullIndex = i;
					allCurrentNumbers[currentNumber].adjacentPencils.push(this.dropPencils[i].currentPencil);
				}
			}
		}
		var numMatched = 0;
		for(const number in allCurrentNumbers){
			const initPencil = allCurrentNumbers[number].initPencil;
			const adjacentPencils = allCurrentNumbers[number].adjacentPencils;
			if(adjacentPencils.length >= 2){
				numMatched++;
				for(var i=1; i>=0; i--){
					const adjacentPencil = adjacentPencils[i];
					this.dropPencils[adjacentPencil.nullIndex].currentPencil = null;
					this.tweens.add({
						targets     : adjacentPencil,
						x: initPencil.x,
						y: initPencil.y,
						ease        : Phaser.Math.Easing.Sine,
						duration    : 100,
						delay: 0,
						onStart: this.onStartHandler,
						onComplete: function(tween, targets){
							// console.log(targets);
							targets[0].destroy();
							this.sound.add("bob").play({ volume: 0.35,  loop : false, delay : 0 });
						}.bind(this)
					});
				}
				window.setTimeout(function(){
					initPencil.currentPencil.incrementNumber();
					if(initPencil.currentPencil.currentNumber >= Global.matchWinCondition){
						this.sound.add("win").play({ volume: 0.5,  loop : false, delay : 0 });
						this.isEnding = true;
						this.tweens.add({
							targets     : initPencil.currentPencil,
							x: 569,
							y: 569,
							scaleX: 2,
							scaleY: 2,
							ease        : Phaser.Math.Easing.Sine,
							duration    : 300,
							delay: 0,
							onStart: function(tween, targets){
								targets[0].parentContainer.bringToTop(targets[0]);
								this.command.alpha = 0;
								this.command_1.alpha = 0;
							}.bind(this),
							onComplete: function(){
								window.setTimeout(function(){
									this.showEndCard()
								}.bind(this), 1000);
							}.bind(this)
						});
					}
				}.bind(this), 200);
			}
		}

		// console.log(numMatched);
		if(numMatched != 0){
			window.setTimeout(function(){
				// console.log("Adjusting Board");
				var onlyPencils = this.dropPencils.filter(n => n.currentPencil != null);
				for(var i=0;i<this.dropPencils.length;i++){
					if(i < onlyPencils.length){
						this.dropPencils[i].currentPencil = onlyPencils[i].currentPencil;
					}else{
						this.dropPencils[i].currentPencil = null;
					}
				}
				this.movePencils(true);
			}.bind(this), 500);
		}else{ // check for if need to match additional combos
			this.isMatching = false;
			// console.log("movement done");
		}
	}
	movePencils( recursive ){
		if(this.isEnding) return;
		if(!Global.gameActive) return;
		console.log(this.tweens)
		var moveTimeline = this.tweens.createTimeline();
		var duration = 75;
		for(var i=this.dropPencils.length-1;i>=0;i--){
			const pencil = this.dropPencils[i];
			const currentPencil = pencil.currentPencil;
			if(currentPencil != null){
				if(currentPencil.y != pencil.y){
					duration = 100;
					currentPencil.atBoardY = false;
					if(recursive) duration = 100;

				}else{
					duration = 100;
					currentPencil.atBoardY = true;
				}
				if(currentPencil.x != pencil.x){
					moveTimeline.add({
						targets     : currentPencil,
						x: pencil.x,
						y: pencil.y,
						ease        : Phaser.Math.Easing.Sine,
						duration    : duration,
						delay: 0,
						onStart: this.onStartHandler,
						onComplete: function(tween, targets){
							targets[0].y = 476;
							if(targets[0].atBoardY){
								targets[0].scene.slideOnBoardVFX(targets[0], 100);

							}

						}.bind(this)
					});
				}

			}
		}
		moveTimeline.setCallback('onComplete', ()=>{
			if(this.handsUsedCount == 3){
				this.spawnPencils();
				this.handsUsedCount = 0;
			}
			if(recursive){
				// console.log("Recursion");
				this.matchPencils();
				return;
			}
			this.matchPencils();
		});
		moveTimeline.play();

	}
	onStartHandler( tween, targets,gameObject ){
		targets[0].parentContainer.bringToTop(targets[0]);
		if(!targets[0].atBoardY){
			targets[0].scene.putOnBoardVFX(targets[0], 100);
		}
	}
	sortPencils( pencils ){
		if(this.isEnding) return;
		if(!Global.gameActive) return;
		var onlyPencils = pencils.filter(n => n);
		var prevBoard = [];
		var firstNullIndex = 0;
		for(var i=0;i<this.dropPencils.length;i++){
			if(this.dropPencils[i].currentPencil != null){
				prevBoard[i] = this.dropPencils[i].currentPencil;
			}else if(firstNullIndex == 0){
				prevBoard[i] = null;
				firstNullIndex = i;
				// break;
			}else{
				prevBoard[i] = null;
			}
		}
		var pencilIndex = 0;
		for(var i=firstNullIndex;i<prevBoard.length;i++){
			prevBoard[i] = onlyPencils[pencilIndex];
			pencilIndex++;
		}
		prevBoard.sort(function (a, b) {
			// nulls sort after anything else
			if (a === null) {
				return 1;
			}
			if (b === null) {
				return -1;
			}
			// equal items sort equally
			if (a.currentNumber === b.currentNumber) {
				return 0;
			}
			// otherwise, if we're ascending, lowest sorts first
			if (Global.ascending) {
				return a.currentNumber < b.currentNumber ? -1 : 1;
			}
			// if descending, highest sorts first
			return a.currentNumber < b.currentNumber ? 1 : -1;
		});
		for(var i=0;i<prevBoard.length;i++){
			this.dropPencils[i].currentPencil = prevBoard[i];
			if(this.dropPencils[i].currentPencil != null){
				this.dropPencils[i].currentPencil.clusterBound = false;
			}
		}
	}
	findLastNull(){
		var array = [];
		array.sort(function(a, b){return a-b});
	}
	getRandomInt( max ) {
		return Math.floor(Math.random() * max);
	}
	checkHandEmpty( hand ){
		var pos;
		var isEmpty = true;
		for(var i=0;i<hand.length; i++){
			pos = hand[i];
			if(pos != null){
				isEmpty = false;
				break;
			}
		}
		return isEmpty;
	}
	bindCluster( cluster ){
		var pencil;
		var clusterSprite = cluster.clusterSprite;
		for(var i=0;i<cluster.length;i++){
			pencil = cluster[i];
			if(pencil != null){
				if(pencil.clusterBound){
					pencil.x = clusterSprite.x + clusterSprite.pencilOffsets[i];
					pencil.y = clusterSprite.y;
				}
			}
		}
	}
	createPencil(){
		const obj = new Pencil(this, 569, 569);
		this.gameplayGroup.add(obj);
		obj.clusterBound = true;
		// console.log("pencil created");
		return obj;
	}
	createPencilCluster(){
		var cluster = [null, null, null];
		var randomInt;
		var nullCount = 0;
		var pencil;
		for(var i=0; i<cluster.length; i++){
			randomInt = this.getRandomInt(4);
			// console.log("randomInt: " + randomInt)
			if(randomInt != 3){
				//Create Pencil
				pencil = this.createPencil();
				cluster[i] = pencil;
			}else if(nullCount >= cluster.length-1){
				pencil = this.createPencil();
				cluster[i] = pencil;
				break;
			}else{
				nullCount++;
			}
		}
		// console.log(nullCount);
		cluster.sort(function (a, b) {
			// nulls sort after anything else
			if (a === null) {
				return 1;
			}
			if (b === null) {
				return -1;
			}
			// equal items sort equally
			if (a.currentNumber === b.currentNumber) {
				return 0;
			}
			// otherwise, if we're ascending, lowest sorts first
			if (Global.ascending) {
				return a.currentNumber < b.currentNumber ? -1 : 1;
			}
			// if descending, highest sorts first
			return a.currentNumber < b.currentNumber ? 1 : -1;
		});
		//create Cluster Sprite
		const clusterSprite = this.add.sprite(569, 1138, "handMat");
		clusterSprite.alpha = 0.001;
		clusterSprite.setScale(0.7, 0.7);
		clusterSprite.setInteractive();
		this.input.setDraggable(clusterSprite);
		clusterSprite.pencilOffsets = [null, null, null];
		switch(nullCount){
			case 0:
				//Padding & Offsets
				cluster[0].x -= this.pencilPadding;
				cluster[2].x += this.pencilPadding;
				clusterSprite.pencilOffsets = [-this.pencilPadding
											 , 0
											 , this.pencilPadding];
				break;
			case 1:
				//Padding & Offsets
				var sign = -1;
				var offset;
				for(var i=0; i<cluster.length;i++){
					if(cluster[i] != null){
						offset = sign * this.pencilPadding/2;
						cluster[i].x = cluster[i].x + offset;
						clusterSprite.pencilOffsets[i] = offset;
						sign *= -1;
					}else{
						clusterSprite.pencilOffsets[i] = 0;
					}
				}
				break;
			case 2:
				//Padding & Offsets
				clusterSprite.pencilOffsets = [0
											 , 0
											 , 0];
				break;
		}
		cluster.clusterSprite = clusterSprite;
		clusterSprite.cluster = cluster;
		this.activeClusters.push(cluster);
		cluster.clusterSprite.activeIndex = this.activeClusters.length-1;
		return cluster;
	}
	spawnPencils(){
		this.sound.add("falling_pieces").play({ volume: 0.5,  loop : false, delay : 0 });
		for(var i=0; i<this.spawnNodes.length; i++){
			const hand = this.spawnNodes[i];
			const cluster = this.createPencilCluster();
			const clusterSprite = cluster.clusterSprite;
			const handX = hand.handMat.x;
			const handY = hand.handMat.y;
			this.tweens.add({
				targets     : clusterSprite,
				x: handX,
				y: handY,
				ease        : 'Sine',
				duration    : 500,
				repeat: 0,
				yoyo: false
			});
		}
	}
	checkOverlap( source, target ){
		return Phaser.Geom.Intersects.RectangleToRectangle(source.getBounds(), target.getBounds());
	}
	update(){
		if(!Global.gameActive) return;
		for(var i=0; i<this.activeClusters.length; i++){
			if(this.activeClusters[i] != null){
				this.bindCluster(this.activeClusters[i]);
			}
		}
		this.handleOrientation();
	}
	showEndCard(){
		Global.gameActive = false
		this.game.sound.stopAll()


		this.endCardHide.forEach(element => element.alpha = 0)
		this.endCardShow.forEach(element => element.alpha = 1)

		this.tweens.add({targets: this.playButtonGroup,	scale: 1.05, duration: 900,	repeat : -1,yoyo : true,ease: 'Sine.easeInOut',	})

		// Port Specific End Card Handling
		if(Global.isMin) { window.gameEnd && window.gameEnd(); console.log("MIN gameEnd") }
		if(Global.isPangle || Global.isUnity){
			this.playButton.setInteractive().on('pointerdown', () => sdEvents.emit('redirect'))
		}else{
			sdEvents.emit('redirect')
			if(!Global.isSip) this.time.addEvent({ delay: 1, callback: () => {	this.input.on('pointerdown', () => sdEvents.emit("redirect")) }})
		} 
	}
	orientation_l(){
		this.command_1.alpha = 1;
		this.command.alpha = 0;
	}
	orientation_p(){
		this.command.alpha = 1;
		this.command_1.alpha = 0;
	}
	handleOrientation(){

		if(this.prevWidth == window.innerWidth && this.prevHeight == window.innerHeight) return

    	this.prevWidth = window.innerWidth
		this.prevHeight = window.innerHeight
		var aspectRatio = window.innerHeight / window.innerWidth

		Global.orientation = window.innerWidth > window.innerHeight ? "l" : "p"

        if(Global.orientation == "l"){ // Landscape
            this.scale.displaySize.resize(1138,Math.max(640, Math.min(1138*aspectRatio, 854)))
			this.scale.setGameSize(1138,Math.max(640, Math.min(1138*aspectRatio, 854)))
			this.orientation_l();

        } else if (Global.orientation == "p"){ // Portrait
            this.scale.displaySize.resize(Math.max(640, Math.min(1138/aspectRatio, 854)),1138)
			this.scale.setGameSize(Math.max(640, Math.min(1138/aspectRatio, 854)),1138)
			this.orientation_p();
        }

		// Baked in Bandaid solution to worldview variables not being updated the first time the handleOrientation function runs
		this.time.addEvent({ delay: .01, callback: () =>{

			if(Global.orientation == "l") this.scale.setGameSize(1138,Math.max(640, Math.min(1138*aspectRatio, 854)))
			if(Global.orientation == "p") this.scale.setGameSize(Math.max(640, Math.min(1138/aspectRatio, 854)),1138)

			sdEvents.emit('orientationChange');
		}})

		//TODO: Probably only do this when game is active? 
		this.portraitList .forEach(element => element.alpha = Global.orientation == "p" ? 1 : 0)
		this.landscapeList.forEach(element => element.alpha = Global.orientation == "l" ? 1 : 0)


        this.cameras.main.centerOn(569,569)


    } 

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */
