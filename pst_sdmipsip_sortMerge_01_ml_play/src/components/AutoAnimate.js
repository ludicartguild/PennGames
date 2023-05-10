
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class AutoAnimate extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__AutoAnimate"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {AutoAnimate} */
	static getComponent(gameObject) {
		return gameObject["__AutoAnimate"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;
	/** @type {string} */
	startAnim = "";

	/* START-USER-CODE */

	start(){

		//gets anim from component field and plays it
		this.gameObject.anims.play(this.startAnim);

	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
