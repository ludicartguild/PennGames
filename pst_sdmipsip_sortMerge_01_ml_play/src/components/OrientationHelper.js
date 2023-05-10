
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class OrientationHelper extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__OrientationHelper"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {OrientationHelper} */
	static getComponent(gameObject) {
		return gameObject["__OrientationHelper"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {number} */
	lx = 0;
	/** @type {number} */
	ly = 0;
	/** @type {number} */
	lxScale = 0;
	/** @type {number} */
	lyScale = 0;
	/** @type {number} */
	lAngle = 0;
	/** @type {number} */
	px = 0;
	/** @type {number} */
	py = 0;
	/** @type {number} */
	pxScale = 0;
	/** @type {number} */
	pyScale = 0;
	/** @type {number} */
	pAngle = 0;

	/* START-USER-CODE */

	awake(){
		//console.log("hey");
	}

	start(){
		//console.log("hey");
		sdEvents.on('orientationChange',this.changeOrientation,this);
	}

	update(){

	}

	changeOrientation(){
		//console.log(Global.orientation);
		if(Global.orientation == "p"){
			this.gameObject.setPosition(this.px,this.py);
			if(this.pxScale > 0 && this.pyScale > 0){
				this.gameObject.setScale(this.pxScale,this.pyScale);
			}

			this.gameObject.setAngle(this.pAngle);
		} else {
			//console.log("fuck");
			this.gameObject.setPosition(this.lx,this.ly);
			if(this.lxScale > 0 && this.lyScale > 0){
				this.gameObject.setScale(this.lxScale,this.lyScale);
			}
			this.gameObject.setAngle(this.lAngle);
		}
	}


	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
