
// Gets font family names from @font-faces in fonts.css and ensures they are loaded
// @font-faces with base64 must be added to fonts.css
function fontsLoader(){}
fontsLoader.init = function(){
    this.debugFonts = false; // If true, console.logs font family names when loaded

    this.fontFamiliesArray = [];
    // Get all fonts from the styleSheet css rules
    let fontFaces = document.styleSheets[0].cssRules;
    
    for(let i=0; i < fontFaces.length; i++){
        // convert @font-face object to string
        let fontString = fontFaces[i].cssText.toString();
        // Get font family name
        let fontFamily = fontString.split('font-family: ')[1].split(';',1)[0];
        // Remove extra double quotes ""
        fontFamily = fontFamily.replace(/['"]+/g, '');
        // Add font family name to an array to be loaded
        this.fontFamiliesArray.push(fontFamily);  
    }
}

fontsLoader.create = function(){
    if(this.debugFonts) this.fontFamiliesArray.forEach(f => console.log(f + " loaded."))

    WebFont.load({
        custom: { families: this.fontFamiliesArray }, 
    });
}