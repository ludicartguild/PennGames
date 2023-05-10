
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class ClickHandler extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__ClickHandler"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {ClickHandler} */
	static getComponent(gameObject) {
		return gameObject["__ClickHandler"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {string} */
	eventKey = "";
	/** @type {Array} */
	eventArguments = [];
	/** @type {boolean} */
	tweenOnPress = true;
	/** @type {string} */
	soundKey = "";
	/** @type {boolean} */
	debug = false;
	/** @type {boolean} */
	disableInputOnEnd = true;

	/* START-USER-CODE */

	awake() {
		if (this.soundKey != "") {
			this.pressSound = this.scene.sound.add(this.soundKey);
		}
		this.skipEvent = false;

		this.gameObject.setInteractive();

		if(this.disableInputOnEnd){
			sdEvents.on('end', () => {
				this.gameObject.disableInteractive();
			}, this);
		}


		this.gameObject.on("pointerdown", () => {

			if (this.eventKey != "") {
				if (this.eventArguments.length > 0) {
					var argString = "";
					this.eventArguments.forEach((arg) => {
						if (typeof arg != "string") {
							var str = arg.toString() + ",";

						} else {
							var str = '"' + arg + '",';
						}
						argString += str;

					}, this);

					var eventString = 'sdEvents.emit(' + '"' + this.eventKey + '"' + ',' + argString + ')'
					new Function(eventString)();
				} else {
					sdEvents.emit(this.eventKey);
				}

			}

			if (this.tweenOnPress) {
				this.gameObject.disableInteractive();
				var tween = this.scene.add.tween({
					targets: this.gameObject,
					scaleX: this.gameObject.scaleX - .1,
					scaleY: this.gameObject.scaleY - .1,
					duration: 100,
					yoyo: true,
				});
				tween.on('complete', () => {
					if (Global.gameActive) {
						this.gameObject.setInteractive()
					}
				});
			}

			if (this.soundKey != "") {
				this.pressSound.play();
			}

			if (this.debug) { console.log(this.gameObject) };


		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
