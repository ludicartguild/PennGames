function Global(){}

// Port Vars
Global.isSip         = false
Global.isAL          = false
Global.isMin         = false
Global.isUnity       = false
Global.isPangle      = false
Global.isIronSource  = false

Global.urlIOS        = "https://apps.apple.com/us/app/pencil-sort-3d/id1670195090"
Global.urlAndroid    = "https://play.google.com/store/apps/details?id=cc.lionstudios.pencilsort"

// GEOs var
Global.geoLang = ""

Global.build = false
Global.gameActive = true;
Global.orientation = "l"
Global.isMuted = false

// boot scene context to call level start from simpleDuck mraid functions
Global.bootSceneCtx = false;

Global.matchWinCondition = 6;
Global.spawnPencilIntMax = 3;
Global.pencilColors = {
    1: 0xf937f2,
    2: 0xfd377d,
    3: 0x584dff,
    4: 0x2394ff,
    5: 0x34d6f7,
    6: 0x1eeca7
}
Global.ascending = false;