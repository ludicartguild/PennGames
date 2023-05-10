// Skeleton mraid functions so that the UN port can be tested 
window.MRAID_ENV = {};
var mraid = {
    listeners: [],
    getVersion: function(){
        return 3;
    },
    addEventListener: function(eventName, handler){
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push(handler);
        if(eventName === "exposureChange") {
            setTimeout(runExposureChangeTests(), 1000);
        }
    },
    getState: function(){
        return "default";
    },
    emit: function(eventName){
        var handlers = this.listeners[eventName];
        if (!handlers) return;
        var args = Array.from(arguments);
        args.shift();
        handlers.forEach(function(handler){
            handler.apply(null,args);
        });
    },
    isViewable: function(){
        return true;
    }
};