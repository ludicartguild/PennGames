const utils = {}

utils.sFX = function sFX( key, volume, loop, delay, context ) {

  return context.sound.add( key ).play({ 
    volume  : volume,  
    loop    : loop, 
    delay   : delay 
  });
}