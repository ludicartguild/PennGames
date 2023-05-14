// Gets font family names from @font-faces in fonts.css and ensures they are loaded
// @font-faces with base64 must be added to fonts.css
function fontsLoader(){}
fontsLoader.init = function(){
    this.debugFonts = false;
    
    // Get all fonts from the styleSheet css rules
    let fontFaces = Object.entries(document.styleSheets[0].cssRules);
    this.fontFamiliesArray = Object.entries(fontFaces).map((fontString) => {
        // convert @font-face object to string
        // Get font family name
        // Remove extra double quotes ""
        // Add font family name to an array to be loaded 
        return fontString[1][1].cssText.toString().split('font-family: ')[1].split(';',1)[0].replace(/['"]+/g, '');
    });
}

fontsLoader.create = function(){
    if(this.debugFonts) this.fontFamiliesArray.forEach(f => console.log(f + " loaded."))

    WebFont.load({
        custom: { families: this.fontFamiliesArray }, 
    });
}