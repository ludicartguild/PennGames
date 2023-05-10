/* Util container for helpful snippits of code
 - not loaded into html so it won't run / cause issues
*/


//Generic Emitter, create emitter event and subscribe function to it. 
// sdEvents is a global emitter object so you can subscribe events to it across scripts / objects
var emitter = new Phaser.Events.EventEmitter();
emitter.on('flag', this.testFunc, this);
emitter.emit('flag');
testFunc(){
    console.log("real test func")
}

// Can also be onelined with an anonymous function
emitter.on('flag', () => console.log("log on event") )



