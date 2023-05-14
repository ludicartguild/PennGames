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
var lagEvents

class Boot extends Phaser.Scene {
	init(){
		fontsLoader.init();
	}
	preload() {
		lagEvents = new Phaser.Events.EventEmitter();
		this.load.pack("pack", "assets/asset-pack.json");
		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.create());
		fontsLoader.create();
	}

	create() {

		this.scene.start("Level");
	}
}