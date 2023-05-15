
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

		// dropArea
		const dropArea = this.add.image(569, 477, "board");
		dropArea.scaleX = 0.75;
		dropArea.scaleY = 0.75;
		gameplayGroup.add(dropArea);

		// hand
		const hand = this.add.sprite(455, -155, "hand");
		hand.setOrigin(0.3874111179516192, 0.04757527073099254);
		gameplayGroup.add(hand);

		// allHandMats
		const allHandMats = this.add.container(0, 0);
		gameplayGroup.add(allHandMats);

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
		allHandMats.add(handMat_0);

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
		allHandMats.add(handMat_1);

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
		allHandMats.add(handMat_2);

		// spawnPencil_2_0
		const spawnPencil_2_0 = this.add.image(412.3999938964844, 719, "basePencil");
		spawnPencil_2_0.scaleX = 0.7;
		spawnPencil_2_0.scaleY = 0.7;
		spawnPencil_2_0.visible = false;
		gameplayGroup.add(spawnPencil_2_0);

		// spawnPencil_1_0
		const spawnPencil_1_0 = this.add.image(369, 718, "basePencil");
		spawnPencil_1_0.scaleX = 0.7;
		spawnPencil_1_0.scaleY = 0.7;
		spawnPencil_1_0.visible = false;
		gameplayGroup.add(spawnPencil_1_0);

		// spawnPencil_0_0
		const spawnPencil_0_0 = this.add.image(325.6000061035156, 718, "basePencil");
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

		// allDropPencils
		const allDropPencils = this.add.container(0, 0);
		gameplayGroup.add(allDropPencils);

		// dropPencil_0
		const dropPencil_0 = this.add.image(275, 476, "basePencil");
		dropPencil_0.scaleX = 0.7;
		dropPencil_0.scaleY = 0.7;
		dropPencil_0.visible = false;
		dropPencil_0.tintTopLeft = 15859712;
		dropPencil_0.tintTopRight = 15859712;
		dropPencil_0.tintBottomLeft = 15859712;
		dropPencil_0.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_0);

		// dropPencil_1
		const dropPencil_1 = this.add.image(311, 476, "basePencil");
		dropPencil_1.scaleX = 0.7;
		dropPencil_1.scaleY = 0.7;
		dropPencil_1.visible = false;
		dropPencil_1.tintTopLeft = 15859712;
		dropPencil_1.tintTopRight = 15859712;
		dropPencil_1.tintBottomLeft = 15859712;
		dropPencil_1.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_1);

		// dropPencil_2
		const dropPencil_2 = this.add.image(347, 476, "basePencil");
		dropPencil_2.scaleX = 0.7;
		dropPencil_2.scaleY = 0.7;
		dropPencil_2.visible = false;
		dropPencil_2.tintTopLeft = 15859712;
		dropPencil_2.tintTopRight = 15859712;
		dropPencil_2.tintBottomLeft = 15859712;
		dropPencil_2.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_2);

		// dropPencil_3
		const dropPencil_3 = this.add.image(383, 476, "basePencil");
		dropPencil_3.scaleX = 0.7;
		dropPencil_3.scaleY = 0.7;
		dropPencil_3.visible = false;
		dropPencil_3.tintTopLeft = 15859712;
		dropPencil_3.tintTopRight = 15859712;
		dropPencil_3.tintBottomLeft = 15859712;
		dropPencil_3.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_3);

		// dropPencil_4
		const dropPencil_4 = this.add.image(419, 476, "basePencil");
		dropPencil_4.scaleX = 0.7;
		dropPencil_4.scaleY = 0.7;
		dropPencil_4.visible = false;
		dropPencil_4.tintTopLeft = 15859712;
		dropPencil_4.tintTopRight = 15859712;
		dropPencil_4.tintBottomLeft = 15859712;
		dropPencil_4.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_4);

		// dropPencil_5
		const dropPencil_5 = this.add.image(457, 476, "basePencil");
		dropPencil_5.scaleX = 0.7;
		dropPencil_5.scaleY = 0.7;
		dropPencil_5.visible = false;
		dropPencil_5.tintTopLeft = 15859712;
		dropPencil_5.tintTopRight = 15859712;
		dropPencil_5.tintBottomLeft = 15859712;
		dropPencil_5.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_5);

		// dropPencil_6
		const dropPencil_6 = this.add.image(494, 476, "basePencil");
		dropPencil_6.scaleX = 0.7;
		dropPencil_6.scaleY = 0.7;
		dropPencil_6.visible = false;
		dropPencil_6.tintTopLeft = 15859712;
		dropPencil_6.tintTopRight = 15859712;
		dropPencil_6.tintBottomLeft = 15859712;
		dropPencil_6.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_6);

		// dropPencil_7
		const dropPencil_7 = this.add.image(531, 476, "basePencil");
		dropPencil_7.scaleX = 0.7;
		dropPencil_7.scaleY = 0.7;
		dropPencil_7.visible = false;
		dropPencil_7.tintTopLeft = 15859712;
		dropPencil_7.tintTopRight = 15859712;
		dropPencil_7.tintBottomLeft = 15859712;
		dropPencil_7.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_7);

		// dropPencil_8
		const dropPencil_8 = this.add.image(567, 476, "basePencil");
		dropPencil_8.scaleX = 0.7;
		dropPencil_8.scaleY = 0.7;
		dropPencil_8.visible = false;
		dropPencil_8.tintTopLeft = 15859712;
		dropPencil_8.tintTopRight = 15859712;
		dropPencil_8.tintBottomLeft = 15859712;
		dropPencil_8.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_8);

		// dropPencil_9
		const dropPencil_9 = this.add.image(609, 476, "basePencil");
		dropPencil_9.scaleX = 0.7;
		dropPencil_9.scaleY = 0.7;
		dropPencil_9.visible = false;
		dropPencil_9.tintTopLeft = 15859712;
		dropPencil_9.tintTopRight = 15859712;
		dropPencil_9.tintBottomLeft = 15859712;
		dropPencil_9.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_9);

		// dropPencil_10
		const dropPencil_10 = this.add.image(645, 476, "basePencil");
		dropPencil_10.scaleX = 0.7;
		dropPencil_10.scaleY = 0.7;
		dropPencil_10.visible = false;
		dropPencil_10.tintTopLeft = 15859712;
		dropPencil_10.tintTopRight = 15859712;
		dropPencil_10.tintBottomLeft = 15859712;
		dropPencil_10.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_10);

		// dropPencil_11
		const dropPencil_11 = this.add.image(683, 476, "basePencil");
		dropPencil_11.scaleX = 0.7;
		dropPencil_11.scaleY = 0.7;
		dropPencil_11.visible = false;
		dropPencil_11.tintTopLeft = 15859712;
		dropPencil_11.tintTopRight = 15859712;
		dropPencil_11.tintBottomLeft = 15859712;
		dropPencil_11.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_11);

		// dropPencil_12
		const dropPencil_12 = this.add.image(720, 476, "basePencil");
		dropPencil_12.scaleX = 0.7;
		dropPencil_12.scaleY = 0.7;
		dropPencil_12.visible = false;
		dropPencil_12.tintTopLeft = 15859712;
		dropPencil_12.tintTopRight = 15859712;
		dropPencil_12.tintBottomLeft = 15859712;
		dropPencil_12.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_12);

		// dropPencil_13
		const dropPencil_13 = this.add.image(757, 476, "basePencil");
		dropPencil_13.scaleX = 0.7;
		dropPencil_13.scaleY = 0.7;
		dropPencil_13.visible = false;
		dropPencil_13.tintTopLeft = 15859712;
		dropPencil_13.tintTopRight = 15859712;
		dropPencil_13.tintBottomLeft = 15859712;
		dropPencil_13.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_13);

		// dropPencil_14
		const dropPencil_14 = this.add.image(793, 476, "basePencil");
		dropPencil_14.scaleX = 0.7;
		dropPencil_14.scaleY = 0.7;
		dropPencil_14.visible = false;
		dropPencil_14.tintTopLeft = 15859712;
		dropPencil_14.tintTopRight = 15859712;
		dropPencil_14.tintBottomLeft = 15859712;
		dropPencil_14.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_14);

		// dropPencil_15
		const dropPencil_15 = this.add.image(831, 476, "basePencil");
		dropPencil_15.scaleX = 0.7;
		dropPencil_15.scaleY = 0.7;
		dropPencil_15.visible = false;
		dropPencil_15.tintTopLeft = 15859712;
		dropPencil_15.tintTopRight = 15859712;
		dropPencil_15.tintBottomLeft = 15859712;
		dropPencil_15.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_15);

		// dropPencil_16
		const dropPencil_16 = this.add.image(868, 476, "basePencil");
		dropPencil_16.scaleX = 0.7;
		dropPencil_16.scaleY = 0.7;
		dropPencil_16.visible = false;
		dropPencil_16.tintTopLeft = 15859712;
		dropPencil_16.tintTopRight = 15859712;
		dropPencil_16.tintBottomLeft = 15859712;
		dropPencil_16.tintBottomRight = 15859712;
		allDropPencils.add(dropPencil_16);

		// lists
		const endCardHide = [hand, gameplayGroup];
		const endCardShow = [];
		const portraitList = [];
		const landscapeList = [];

		this.dropArea = dropArea;
		this.hand = hand;
		this.handMat_0 = handMat_0;
		this.handMat_1 = handMat_1;
		this.handMat_2 = handMat_2;
		this.allHandMats = allHandMats;
		this.spawnPencil_2_0 = spawnPencil_2_0;
		this.spawnPencil_1_0 = spawnPencil_1_0;
		this.spawnPencil_0_0 = spawnPencil_0_0;
		this.pencilColor_2_0 = pencilColor_2_0;
		this.pencilColor_1_0 = pencilColor_1_0;
		this.pencilColor_0_0 = pencilColor_0_0;
		this.spawnPencil_2_1 = spawnPencil_2_1;
		this.spawnPencil_1_1 = spawnPencil_1_1;
		this.spawnPencil_0_1 = spawnPencil_0_1;
		this.pencilColor_2_1 = pencilColor_2_1;
		this.pencilColor_1_1 = pencilColor_1_1;
		this.pencilColor_0_1 = pencilColor_0_1;
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
		this.allDropPencils = allDropPencils;
		this.gameplayGroup = gameplayGroup;
		this.endCardHide = endCardHide;
		this.endCardShow = endCardShow;
		this.portraitList = portraitList;
		this.landscapeList = landscapeList;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	dropArea;
	/** @type {Phaser.GameObjects.Sprite} */
	hand;
	/** @type {Phaser.GameObjects.Image} */
	handMat_0;
	/** @type {Phaser.GameObjects.Image} */
	handMat_1;
	/** @type {Phaser.GameObjects.Image} */
	handMat_2;
	/** @type {Phaser.GameObjects.Container} */
	allHandMats;
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
	/** @type {Phaser.GameObjects.Container} */
	allDropPencils;
	/** @type {Phaser.GameObjects.Container} */
	gameplayGroup;
	/** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
	endCardHide;
	/** @type {Array<any>} */
	endCardShow;
	/** @type {Array<any>} */
	portraitList;
	/** @type {Array<any>} */
	landscapeList;

	/* START-USER-CODE */

	create() {
		// Call on Generated Editor Function
		this.editorCreate();

		// Board Setup
		this.initLevelProps();

		this.setupBoard();

		this.spawnPencils();

		// Input Functions for Dragging
		this.input.on('dragstart', this.onDragStart, this);

		this.input.on('drag', this.onDrag, this);

		this.input.on('dragend', this.onDragEnd, this);
	}

	update() {

		if(!global.gameActive) return;

		this.activeClusters.forEach(( cluster )=>{

			if(cluster == null) return;

			this.bindCluster(cluster);
		});
		
		this.handleOrientation();
	}

	initLevelProps() {
		// Level.js Scoped Variables
		this.board = new Array(17);

		this.activeClusters = [];

		this.isMatching = false;

		this.handsUsedCount = 0;

		this.pencilPadding = 42;

		this.isEnding = false;

		this.spawnNodes = [];

		this.prevHeight = 0;

		this.prevWidth = 0;
	}

	setupBoard() {
		// Setup Spawning Pencils, Mats, and Colors
		this.dropPencils = this.allDropPencils.list;
		
		this.dropPencils.map(( pencil ) => {

			pencil.currentPencil = null;

			return pencil;
		});

		const Hand = function Hand() {

			this.currentPencils = new Array( 3 );

			this.handMat = null
		}

		for( var i=0; i<this.allHandMats.length; i++ ){

			var hand = new Hand();

			for( var k=0; k<hand.currentPencils; k++ ){

				hand.currentPencils.push({

					spawnPencil: this["spawnPencil_"+k+"_"+i],

					pencilColor: this["pencilColor_"+k+"_"+i]
				});
			}

			hand.handMat = this["handMat_"+i];

			this.spawnNodes.push( hand );
		}
	}

	spawnPencils() {

		if( this.isEnding || !global.gameActive ) return;

		utils.sFX( "falling_pieces", 0.25, false, 0, this );

		this.spawnNodes.forEach(( hand )=>{

			const clusterSprite = this.createPencilCluster().clusterSprite;

			this.tweens.add({
				targets 	: clusterSprite,
				x					: hand.handMat.x,
				y					: hand.handMat.y,
				ease    	: 'Sine',
				duration	: 500,
				repeat		: 0,
				yoyo			: false
			});
		});
	}

	onDragStart( pointer, gameObject ) {

		if( this.isEnding || !global.gameActive ) return;

		utils.sFX( "plop", 1, false, 0, this );

		gameObject.cluster.forEach(( pencil )=>{

			if( pencil != null ){

				const parentContainer = pencil.parentContainer;

				parentContainer.bringToTop( pencil );
			}
		});
	}

	onDrag( pointer, gameObject, dragX, dragY ) {

		if( this.isEnding || !global.gameActive ) return;

		gameObject.x = dragX;
		gameObject.y = dragY;
	}

	onDragEnd( pointer, gameObject ) {
		
		if( this.isEnding || !global.gameActive ) return;

		const overlapping = this.checkOverlap( gameObject, this.dropArea );

		if( overlapping ){

			this.isMatching = true;

			this.handsUsedCount++;

			gameObject.destroy();

			//Place & Match Pencils
			this.sortPencils( gameObject.cluster );

			this.movePencils();
		}else{
			// Return to Hand Placement
		}
	}

	putOnBoardVFX( pencil, duration ) {

		if( this.isEnding || !global.gameActive ) return;

		this.tweens.add({
			targets   	: pencil,
			scaleX			: pencil.scaleX+0.5,
			scaleY			: pencil.scaleY+0.5,
			ease      	: Phaser.Math.Easing.Sine,
			duration  	: duration,
			delay				: 0,
			yoyo				: true,
			onComplete	: ()=>{

				utils.sFX("clang", 0.10, false, 0, this);
			}
		});
	}

	slideOnBoardVFX( pencil, duration ) {

		if( this.isEnding || !global.gameActive ) return;

		utils.sFX( "ruffle", 0.10, false, 0, this );

		this.cameras.main.shake( 100, 0.00125 );
		
		this.tweens.add({
			targets     : pencil,
			angle				: -5,
			ease        : Phaser.Math.Easing.Sine,
			duration    : duration/2,
			delay				: 0,
			yoyo				: true
		});
	}

	matchPencils() {

		if( this.isEnding || !global.gameActive ) return;

		var currentNumber = 0;
		var allCurrentNumbers = [];
		var numMatched = 0;

		this.dropPencils.forEach(( dropPencil, i ) => {

			const currentPencil = dropPencil.currentPencil;

			if( currentPencil == null ) return;

			if( currentNumber != currentPencil.currentNumber ){

				currentNumber = currentPencil.currentNumber;

				allCurrentNumbers[currentNumber] = {
					initPencil: dropPencil,
					adjacentPencils: []
				};
			}else if( allCurrentNumbers[currentNumber].adjacentPencils.length < 3 ){

				currentPencil.nullIndex = i;

				allCurrentNumbers[currentNumber].adjacentPencils.push( currentPencil );
			}
		});
		
		allCurrentNumbers.forEach(( number )=>{
			
			if( number.adjacentPencils.length < 2 ) return;

			const adjacentPencils = number.adjacentPencils;
			const initPencil = number.initPencil;

			numMatched++;

			for( var i=1; i>=0; i-- ){

				const adjacentPencil = adjacentPencils[i];

				this.dropPencils[adjacentPencil.nullIndex].currentPencil = null;

				this.tweens.add({
					targets     : adjacentPencil,
					x						: initPencil.x,
					y						: initPencil.y,
					ease        : Phaser.Math.Easing.Sine,
					duration    : 100,
					delay				: 0,
					onStart			: this.onStartHandler,
					onComplete	: ( tween, targets ) => {

						targets[0].destroy();

						utils.sFX( "bob", 0.15, false, 0, this );
					}
				});
			}
			window.setTimeout(function(){

				initPencil.currentPencil.incrementNumber();

				if( initPencil.currentPencil.currentNumber >= global.matchWinCondition ){

					utils.sFX( "win", 0.45, false, 0, this );

					this.isEnding = true;

					this.tweens.add({
						targets     : initPencil.currentPencil,
						x						: 569,
						y						: 569,
						scaleX			: 2,
						scaleY			: 2,
						ease        : Phaser.Math.Easing.Sine,
						duration    : 300,
						delay				: 0,
						onStart			: (tween, targets) => {

							targets[0].parentContainer.bringToTop( targets[0] );
						},
						onComplete	: () => {

							window.setTimeout(() => this.scene.start("Level"), 500 );
						}
					});
				}
			}.bind(this), 200);
			
		});

		if(numMatched != 0){

			window.setTimeout(function(){

				var onlyPencils = this.dropPencils.filter( n => n.currentPencil != null );

				this.dropPencils.forEach(( dropPencil, i ) => {
					if( i < onlyPencils.length ){

						dropPencil.currentPencil = onlyPencils[i].currentPencil;
					}else{

						dropPencil.currentPencil = null;
					}
				});

				this.movePencils(true);
			}.bind(this), 500);
		}else{

			this.isMatching = false;
		}
	}

	movePencils( recursive ) {

		if( this.isEnding || !global.gameActive ) return;

		var moveTimeline = this.tweens.createTimeline();

		var duration = 75;

		for( var i = this.dropPencils.length-1; i >= 0; i-- ){

			const pencil = this.dropPencils[i];
			const currentPencil = pencil.currentPencil;

			if( currentPencil == null ) continue;

			if( currentPencil.y != pencil.y ){

				duration = 100;

				currentPencil.atBoardY = false;

				if( recursive ) duration = 100;
			}else{

				duration = 100;

				currentPencil.atBoardY = true;
			}

			if( currentPencil.x != pencil.x ){

				moveTimeline.add({
					targets     : currentPencil,
					x						: pencil.x,
					y						: pencil.y,
					ease        : Phaser.Math.Easing.Sine,
					duration    : duration,
					delay				: 0,
					onStart			: this.onStartHandler,
					onComplete	: ( tween, targets ) => {

						targets[0].y = 476;

						if( targets[0].atBoardY ){

							targets[0].scene.slideOnBoardVFX( targets[0], 100 );
						}
					}
				});
			}
		}

		moveTimeline.setCallback('onComplete', ()=>{

			if( this.handsUsedCount == 3 ){

				this.spawnPencils();

				this.handsUsedCount = 0;
			}
			if( recursive ){

				this.matchPencils();

				return;
			}

			this.matchPencils();
		});

		moveTimeline.play();
	}

	onStartHandler( tween, targets, gameObject ) { 

		targets[0].parentContainer.bringToTop( targets[0] );

		if( !targets[0].atBoardY ){

			targets[0].scene.putOnBoardVFX( targets[0], 100 );
		}
	}

	sortPencils( pencils ) {

		if( this.isEnding || !global.gameActive ) return;

		var onlyPencils = pencils.filter( n => n );
		
		var prevBoard = [];

		var firstNullIndex = 0;

		this.dropPencils.forEach(( dropPencil, i ) => {

			if( dropPencil.currentPencil != null ){

				prevBoard[i] = dropPencil.currentPencil;
			}else if( firstNullIndex == 0 ){

				prevBoard[i] = null;

				firstNullIndex = i;
			}else{
				prevBoard[i] = null;
			}
		});

		var pencilIndex = 0;

		for( var i=firstNullIndex; i < prevBoard.length; i++ ){

			prevBoard[i] = onlyPencils[pencilIndex];

			pencilIndex++;
		}
		prevBoard.sort(( a, b ) => {
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
			if (global.ascending) {
				return a.currentNumber < b.currentNumber ? -1 : 1;
			}
			// if descending, highest sorts first
			return a.currentNumber < b.currentNumber ? 1 : -1;
		});

		prevBoard.forEach(( pencil, i ) => {

			this.dropPencils[i].currentPencil = pencil;

			if( this.dropPencils[i].currentPencil == null ) return;

			this.dropPencils[i].currentPencil.clusterBound = false;
		});
	}

	getRandomInt( max ) {
		return Math.floor(Math.random() * max);
	}

	bindCluster( cluster ) {

		var clusterSprite = cluster.clusterSprite;

		cluster.forEach(( pencil, i )=>{

			if( pencil != null ){

				if( pencil.clusterBound ){

					pencil.x = clusterSprite.x + clusterSprite.pencilOffsets[i];

					pencil.y = clusterSprite.y;
				}
			}
		});
	}

	createPencil() {

		const obj = new Pencil( this, 569, 569 );

		this.gameplayGroup.add( obj );

		obj.clusterBound = true;

		return obj;
	}

	createPencilCluster() {

		var cluster = [null, null, null];

		var randomInt;

		var nullCount = 0;

		for( var i=0; i < cluster.length; i++ ){

			randomInt = this.getRandomInt(4);

			if(randomInt != 3){

				cluster[i] = this.createPencil();
			}else if(nullCount >= cluster.length-1){

				cluster[i] = this.createPencil();
				break;
			}else{

				nullCount++;
			}
		}

		cluster.sort(function (a, b) {

			// nulls sort after anything else
			if ( a === null ) {

				return 1;
			}

			if ( b === null ) {

				return -1;
			}

			// equal items sort equally
			if ( a.currentNumber === b.currentNumber ) {

				return 0;
			}

			// otherwise, if we're ascending, lowest sorts first
			if ( global.ascending ) {

				return a.currentNumber < b.currentNumber ? -1 : 1;
			}

			// if descending, highest sorts first
			return a.currentNumber < b.currentNumber ? 1 : -1;
		});

		//create Cluster Sprite
		const clusterSprite = this.add.sprite( 569, 1138, "handMat" );

		clusterSprite.alpha = 0.001;

		clusterSprite.setScale( 0.7, 0.7 );

		clusterSprite.setInteractive();

		this.input.setDraggable(clusterSprite);

		clusterSprite.pencilOffsets = [
			null, 
			null, 
			null
		];

		switch( nullCount ){
			case 0:

				cluster[0].x -= this.pencilPadding;

				cluster[2].x += this.pencilPadding;

				clusterSprite.pencilOffsets = [
					-this.pencilPadding,
					0,
					this.pencilPadding
				];
				break;
			case 1:

				var sign = -1;

				var offset;

				cluster.forEach(( pencil, i ) => {

					if( cluster[i] == null ){

						clusterSprite.pencilOffsets[i] = 0;
					}else{

						offset = sign * this.pencilPadding/2;
						pencil.x += offset;
						clusterSprite.pencilOffsets[i] = offset;
						sign *= -1;
					}
				});
				break;
			case 2:

				clusterSprite.pencilOffsets = [	
					0,
					0,
					0
				];
				break;
		}

		cluster.clusterSprite = clusterSprite;

		clusterSprite.cluster = cluster;

		this.activeClusters.push(cluster);

		cluster.clusterSprite.activeIndex = this.activeClusters.length-1;

		return cluster;
	}

	checkOverlap( source, target ) {

		return Phaser.Geom.Intersects.RectangleToRectangle(source.getBounds(), target.getBounds());
	}

	handleOrientation() {

		if( this.prevWidth == window.innerWidth 
			&& this.prevHeight == window.innerHeight ){
				return;
		}

		this.prevWidth = window.innerWidth;

		this.prevHeight = window.innerHeight;

		var aspectRatio = window.innerHeight / window.innerWidth;

		global.orientation = window.innerWidth > window.innerHeight ? "l" : "p";

		
		if( global.orientation == "l" ){ 

			// Landscape
			this.scale.displaySize.resize(1138,Math.max(640, Math.min(1138*aspectRatio, 854)));

			this.scale.setGameSize(1138,Math.max(640, Math.min(1138*aspectRatio, 854)));
		}else if( global.orientation == "p" ){

 			// Portrait
			this.scale.displaySize.resize(Math.max(640, Math.min(1138/aspectRatio, 854)),1138);

			this.scale.setGameSize(Math.max(640, Math.min(1138/aspectRatio, 854)),1138);
		}

		// Baked in Bandaid solution to worldview variables not being updated the first time the handleOrientation function runs
		this.time.addEvent({ delay: .01, callback: () =>{

			if(global.orientation == "l"){

				// Landscape
				this.scale.setGameSize(1138,Math.max(640, Math.min(1138*aspectRatio, 854)));
			}else if(global.orientation == "p"){

				// Portrait
				this.scale.setGameSize(Math.max(640, Math.min(1138/aspectRatio, 854)),1138);
			} 
		}});

		this.cameras.main.centerOn(569,569);
  } 
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
