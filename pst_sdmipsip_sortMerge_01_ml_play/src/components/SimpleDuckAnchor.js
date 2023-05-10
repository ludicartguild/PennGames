// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class SimpleDuckAnchor extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__SimpleDuckAnchor"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {SimpleDuckAnchor} */
	static getComponent(gameObject) {
		return gameObject["__SimpleDuckAnchor"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {"Top"|"Middle"|"Bottom"|"None"} */
	anchorVertical = "None";
	/** @type {"Left"|"Center"|"Right"|"None"} */
	anchorHorizontal = "None";
	/** @type {boolean} */
	useObjectBounds = true;
	/** @type {number} */
	offsetXLandscape = 0;
	/** @type {number} */
	offsetXPortrait = 0;
	/** @type {number} */
	offsetYLandscape = 0;
	/** @type {number} */
	offsetYPortrait = 0;
	/** @type {"No Scaling"|"Dynamic Scale"} */
	dynamicScale = "No Scaling";
	/** @type {boolean} */
	scaleLandscapeUseSceneScale = true;
	/** @type {number} */
	scaleLandscapeBase = 0;
	/** @type {boolean} */
	scaleLandscapeUseMax = false;
	/** @type {number} */
	scaleLandscapeMax = 0;
	/** @type {boolean} */
	scalePortraitUseSceneScale = true;
	/** @type {number} */
	scalePortraitBase = 0;
	/** @type {boolean} */
	scalePortraitUseMax = false;
	/** @type {number} */
	scalePortraitMax = 0;

	/* START-USER-CODE */
	awake() {
		this.originalSceneScale = this.gameObject.scale

		sdEvents.on("orientationChange", this.handleOrientation, this);
	}

	handleOrientation() {

		//TODO: Add proprtional x and y properties that sets their orientation from a ratio


		//TODO: Add portrait and landscape specific options 

		//camera has world view left,right,top, and bottom properties that keep track of the position values of the worldview bounds
		this.sideOfScreenDict = {
			"Top"    : this.scene.cameras.main.worldView.top,
			"Middle" : this.scene.cameras.main.worldView.centerY,
			"Bottom" : this.scene.cameras.main.worldView.bottom,
			"Left"   : this.scene.cameras.main.worldView.left,
			"Center" : this.scene.cameras.main.worldView.centerX,
			"Right"  : this.scene.cameras.main.worldView.right,
		}

		//TODO: Add scaling options from Wordle playable

		// Scale 
		if(this.dynamicScale == "Dynamic Scale"){

			// Gets dynamic axis of screen to use as a ratio and scale base from component settings
			if(Global.orientation == "l"){
				var screenDynamicSize = this.scene.cameras.main.worldView.bottom - this.scene.cameras.main.worldView.top
				var scaleBase = this.scaleLandscapeUseSceneScale ? this.originalSceneScale : this.scaleLandscapeBase
				var useMaxScale = this.scaleLandscapeUseMax
				var maxScaleValue = this.scaleLandscapeMax
			} 
			if(Global.orientation == "p"){
				var screenDynamicSize = this.scene.cameras.main.worldView.right - this.scene.cameras.main.worldView.left
				var scaleBase = this.scalePortraitUseSceneScale ? this.originalSceneScale : this.scalePortraitBase
				var useMaxScale = this.scalePortraitUseMax
				var maxScaleValue = this.scalePortraitMax

			} 

			// 640 is a counterpart to 1138, lowest dimension the screen can be
			var newScale = screenDynamicSize / 640 * scaleBase
			if(useMaxScale)	newScale = Math.min(newScale, maxScaleValue)

			this.gameObject.setScale(newScale)

		}


		//parent offset is calculated by finding half of the width or height of the bounding rectangle and all its children
		var parentOffsetX = 0
		var parentOffsetY = 0

		if(this.useObjectBounds){

			// Used for right / bottom / center where the offset from the center of the group origin needs to be flipped or zero'd out
			var xMod = this.anchorHorizontal == "Right" ? -1 : this.anchorHorizontal == "Center" ? 0 : 1
			var yMod = this.anchorVertical == "Bottom"  ? -1 : this.anchorVertical   == "Middle" ? 0 : 1 

			parentOffsetX = this.gameObject.getBounds().width / 2  * xMod
			parentOffsetY = this.gameObject.getBounds().height / 2 * yMod
		}

		var offsetX = Global.orientation == "l" ? this.offsetXLandscape : this.offsetXPortrait
		var offsetY = Global.orientation == "l" ? this.offsetYLandscape : this.offsetYPortrait

		// Only overwrites the x / y position if that axis is anchored
		if(this.anchorHorizontal != "None") this.gameObject.x = this.sideOfScreenDict[this.anchorHorizontal] + offsetX + parentOffsetX 
		if(this.anchorVertical   != "None") this.gameObject.y = this.sideOfScreenDict[this.anchorVertical]   + offsetY + parentOffsetY

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
