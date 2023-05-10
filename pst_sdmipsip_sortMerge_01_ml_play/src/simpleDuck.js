function SimpleDuck(){}

SimpleDuck.setup = function(){
    sdEvents.on('redirect',SimpleDuck.redirect)
    if(document.readyState == "loading") {
        console.log("setup document loading");
        document.addEventListener("DOMContentLoaded", (function (e) {
            SimpleDuck.initMRAID();
        }))
    } else {
        SimpleDuck.initMRAID();
    }

    if (Global.isUnity) {
        if(mraid.getState() == "loading") {
            mraid.addEventListener("ready", SimpleDuck.onSdkReady);
        } else {
            SimpleDuck.onSdkReady();
        }
        mraid.addEventListener('viewableChange', SimpleDuck.viewableChangeHandler);
    }
}

SimpleDuck.initMRAID = function(){
    if(mraid.getState() == "loading"){
        mraid.addEventListener("ready",SimpleDuck.onSdkReady);
    } else {  SimpleDuck.onSdkReady(); }
}

SimpleDuck.onSdkReady = function(){
    mraid.addEventListener("viewableChange", SimpleDuck.viewableChangeHandler);
}

SimpleDuck.viewableChangeHandler = function(viewable){
    if(viewable) {
        console.log("viewableChangeHandler true"); // If the ad is viewable, show the ad:
        SimpleDuck.startPlayable();
    } else {
        console.log("viewableChangeHandler false"); // If not, pause the ad.
    }
}

// Called when loading is finished with normal asset loading and the base64 custom loader
SimpleDuck.startPlayable = function(){
    console.log("🦆 Starting Playable 🦆")
    if (Global.isMin) {window.gameReady && window.gameReady(); console.log("MIN gameReady"); }
    Global.bootSceneCtx.scene.start("Level");
}

// Called when 'redirect' event is emitted on the sdEvents object
SimpleDuck.redirect = function(){
    console.log("🦆 Simple Duck Redirect 🦆")
    if(Global.isAL)     { console.log("AL redirect"); mraid.open(); }
    if(Global.isIronSource) { console.log("IS redirect"); dapi.openStoreUrl() }
    if(Global.isMin)    { console.log("Min redirect"); window.install && window.install();  } 
    if(Global.isPangle) { console.log("Pangle redirect"); window.playableSDK.openAppStore(); }
    if(Global.isUnity)  { console.log("Unity redirect"); (/android/i.test(navigator.userAgent || navigator.vendor)) ? mraid.open(Global.urlAndroid) : mraid.open(Global.urlIOS); }
}
