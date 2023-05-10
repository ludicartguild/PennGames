
// You can write more code here

/* START OF COMPILED CODE */

class geoText extends Phaser.GameObjects.Text {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0, "", {});

		this.setOrigin(0.5, 0.5);
		this.text = "New text";
		this.setStyle({ "align": "center", "backgroundColor": "#00000000", "fontFamily": "Baloo Bhaijaan, \"Comic Sans MS\",  \"Chalkboard SE\",  Sans-serif", "fontSize": "64px", "fontStyle": "bold", "stroke": "#000", "strokeThickness":6});
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		//this.scene.events.on
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	enText = "";
	/** @type {number} */
	enSize = 0;
	/** @type {string} */
	cnsText = "";
	/** @type {number} */
	cnsSize = 0;
	/** @type {string} */
	cntText = "";
	/** @type {number} */
	cntSize = 0;
	/** @type {string} */
	jaText = "";
	/** @type {number} */
	jaSize = 0;
	/** @type {string} */
	koText = "";
	/** @type {number} */
	koSize = 0;
	/** @type {string} */
	frText = "";
	/** @type {number} */
	frSize = 0;
	/** @type {string} */
	deText = "";
	/** @type {number} */
	deSize = 0;
	/** @type {string} */
	ptText = "";
	/** @type {number} */
	ptSize = 0;
	/** @type {string} */
	jsonData = "[]";

	/* START-USER-CODE */
	awake(){
		this.defaultSize = Number(this.style.fontSize.substring(0,2));
		//console.log(this.defaultSize);

		this.geoData = {
			"EN"   : { "text" : this.enText,  "size" : this.enSize,   "debugKey" : 'keydown-ONE'  },
			"ZH-CN": { "text" : this.cnsText, "size" : this.cnsSize,  "debugKey" : 'keydown-TWO'  }, 
			"ZH-TW": { "text" : this.cntText, "size" : this.cntSize,  "debugKey" : 'keydown-THREE'}, 
			"JA"   : { "text" : this.jaText,  "size" : this.jaSize,   "debugKey" : 'keydown-FOUR' },
			"KO"   : { "text" : this.koText,  "size" : this.koSize,   "debugKey" : 'keydown-FIVE' },
			"FR"   : { "text" : this.frText,  "size" : this.frSize,   "debugKey" : 'keydown-SIX'  },
			"DE"   : { "text" : this.deText,  "size" : this.deSize,   "debugKey" : 'keydown-SEVEN'},
			"PT"   : { "text" : this.ptText,  "size" : this.ptSize,   "debugKey" : 'keydown-EIGHT'},
		}    

		this.setLanguage();

		for(const geoCode in this.geoData){
			this.scene.input.keyboard.on(this.geoData[geoCode]["debugKey"],	()=> {Global.geoLang = geoCode, this.setLanguage()}, this, "test");
		}

	}

	// gets device lang from config and sets corresponding translation
	setLanguage() {	
		//console.log(this.jsonData);
		if(this.jsonData != "[]"){
			this.jsonInputDict = JSON.parse(this.jsonData);
			this.loadJSON();
		}

		// Pangle Geo's Override
		if(Global.isPangle) {
            if(Global.geoLang == "ZH-CN" || Global.geoLang == "EN"){
                this.lang = Global.geoLang;
            }else{
                this.lang = "ZH-CN"
            }
            this.text = this.geoData[this.lang]["text"]
            this.setSize(this.lang);
            return
        }

		this.lang = Global.geoLang;
		if(this.geoData[this.lang]["text"] == ""){
			this.text = this.text;
		}else{
			this.text = this.geoData[this.lang]["text"]
		}

		this.setSize(this.geoData[this.lang]);

    }

	setSize(){
		//checks dictionary for size value of current language
		var sizeValue = this.geoData[ this.lang ][ "size" ];

		if(sizeValue > 0){
			//if it is set greater than 0, change the size
			this.setFontSize(sizeValue);
		} else{
			this.setFontSize(this.defaultSize);
		}

	}

	loadJSON(){
		for (var jsonGeoInput in this.jsonInputDict) {
			var key = this.jsonInputDict[jsonGeoInput]["symbol"];
			key = key.toUpperCase();
			if(this.geoData[key]["text"] == ""){
				this.geoData[key]["text"] = this.jsonInputDict[jsonGeoInput]["text"];
			}
			//console.log(this.geoData[key]);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
