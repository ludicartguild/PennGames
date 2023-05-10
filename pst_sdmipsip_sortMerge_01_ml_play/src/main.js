window.addEventListener('load', function () {
	var game = new Phaser.Game({
		width: 1138,
		height: 1138,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT, // default NONE
			autoCenter: Phaser.Scale.CENTER_BOTH // default NO_CENTER
		}
	});
	
	game.scene.add("Level", Level);
	game.scene.add("Boot", Boot, true);
});

/** @type {Phaser.Events.EventEmitter} */
var sdEvents

class Boot extends Phaser.Scene {
	init () {
		fontsLoader.init();
	}
	preload() {

		sdEvents = new Phaser.Events.EventEmitter();
		Global.bootSceneCtx = this;
		SimpleDuck.setup()

		if(Global.build){
			// Build : Loads pack objects as base 64
			this.b64load = new base64loader(this)
			this.b64load.loadBase64.call(this)

		}else{
			// Loads the asset pack normally for editor work
			this.load.pack("pack", "assets/asset-pack.json");
			this.load.on(Phaser.Loader.Events.COMPLETE, () => SimpleDuck.startPlayable.call(this));
		}

		this.detectLanguage();
		fontsLoader.create();
	}

	detectLanguage(){
		this.language = navigator.language.toUpperCase(); 
		if(this.language == "ZH-TW" || this.language == "ZH-HK" ){ Global.geoLang= "ZH-TW"; }
		else if(this.language.substring(0,2) == "ZH"){ Global.geoLang = "ZH-CN"; }
		else{ Global.geoLang = this.language.substring(0,2); }
		console.log(Global.geoLang)
	}

}

// Required Mintegral port functions
function gameStart() {};
function gameClose() {};

// This function block is replaced with all the dapi functions required for Ironsource
function IronsourceFunctions(){}