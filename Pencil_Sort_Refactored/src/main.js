var global = new Global();

window.addEventListener( 'load', () => {

	var game = new Phaser.Game( global.game );

	game.scene.add( "Level", Level );

	game.scene.add( "Boot", Boot, true );
});

class Boot extends Phaser.Scene {

	init(){
		
		fontsLoader.init();
	}
	
	preload() {

		this.load.pack( "pack", "assets/asset-pack.json" );

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.create());

		fontsLoader.create();
	}

	create() {

		this.scene.start( "Level" );
	}
}