function Global () {

    this.game = {
        width: 1138,
        height: 1138,
        type: Phaser.AUTO,
        backgroundColor: "#242424",
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        }
    }

    this.gameActive = true;

    this.orientation = "l";

    this.matchWinCondition = 6;

    this.spawnPencilIntMax = 3;

    this.pencilColors = {
        1: 0xf937f2,
        2: 0xfd377d,
        3: 0x584dff,
        4: 0x2394ff,
        5: 0x34d6f7,
        6: 0x1eeca7
    }

    this.ascending = false;

    this.gameInitAmount = 0;
}