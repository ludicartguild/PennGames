
// You can write more code here

/* START OF COMPILED CODE */

class Pencil extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.scaleX = 0.7;
		this.scaleY = 0.7;

		// basePencil
		const basePencil = scene.add.image(0, 0, "basePencil");
		this.add(basePencil);

		// pencilColor
		const pencilColor = scene.add.image(0, 0, "pencilColor");
		this.add(pencilColor);

		// numberText
		const numberText = scene.add.text(0, 90, "", {});
		numberText.scaleX = 0.5;
		numberText.scaleY = 0.5;
		numberText.setOrigin(0.5, 0.5);
		numberText.text = "1";
		numberText.setStyle({ "align": "center", "fontFamily": "Baloo Bhaijaan, \"Comic Sans MS\",  \"Chalkboard SE\",  Sans-serif", "fontSize": "64px", "fontStyle": "bold" });
		numberText.setPadding({"top":5});
		this.add(numberText);

		this.basePencil = basePencil;
		this.pencilColor = pencilColor;
		this.numberText = numberText;
		// awake handler
		// this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		this.awake();
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	basePencil;
	/** @type {Phaser.GameObjects.Image} */
	pencilColor;
	/** @type {Phaser.GameObjects.Text} */
	numberText;

	/* START-USER-CODE */
	awake(){
		this.setNumber();
		this.setColor();
	}
	setNumber(){
		const number = this.getRandomInt(Global.spawnPencilIntMax);
		this.numberText.text = number;
		this.currentNumber = number;
	}
	setColor(){
		var color = 0xffffff;
		color = Global.pencilColors[parseInt(this.numberText.text)];
		this.pencilColor.setTint(color);
	}
	getRandomInt(max) {
		return Math.floor(Math.random() * max) + 1;
	}
	incrementNumber(){
		this.currentNumber += 1;
		this.numberText.text = this.currentNumber + '';
		this.pencilColor.setTint(Global.pencilColors[this.currentNumber]);
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
