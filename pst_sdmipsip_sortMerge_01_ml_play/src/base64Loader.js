class base64loader extends Phaser.Scene {

    async loadBase64(){

        // Vars to make sure all files are loaded before scene starts
        this.filesToLoad = 0
        this.filesLoaded = 0

        var audioCtx = new (AudioContext || webkitAudioContext)();

        for (let file of assetPackBase64){

            if(file["type"] == "image"){
                this.filesToLoad ++
                this.textures.addBase64(file["key"],file["base64Data"])
                

            }else if(file["type"] == "atlas"){
                this.filesToLoad++

                const imageElement = new Image();

                // Subscribe function to load atlas after image gets a source manually put in
                // Workaround since atlas doesn't natively support base64
                imageElement.onload = () => {

                    this.textures.addAtlas(file["key"], imageElement, file["jsonData"]);
                    this.b64load.checkFilesLoaded.call(this)     
                };

                imageElement.src = file["base64Data"]

            }else if(file["type"] == "audio"){
                this.filesToLoad ++

                // Convert the base64 audio from the assetPack json to an array buffer, then convert that into an audio buffer, then add that as a sound element with the correct key
                fetch(file["base64Data"][0])
                    .then(b => b.arrayBuffer())
                    .then(buff =>{

                        audioCtx.decodeAudioData(new Int8Array(buff).buffer, (buffer) => {
                            this.cache.audio.add(file["key"], buffer);

                            this.b64load.checkFilesLoaded.call(this)

                        }, (e) => { console.log("Error with decoding audio data" + e.err); });
                    })

            }else if(file["type"] == "animation"){

                // load animations after all image files are loaded. 
                // Loading moved into "checkFilesLoaded" function

            }else{
                console.log("⚠️ Base64 Loader - Unsupported File Type ⚠️\n  - key : " + file["key"] + "\n  - type : " + file["type"])
                // console.log(file)

            }
        }

        // console.log("Num of Files to load : " + this.filesToLoad)
        this.textures.on('onload', () => this.b64load.checkFilesLoaded.call(this))
    }

    checkFilesLoaded () {
        this.filesLoaded++

        // console.log(this.filesToLoad + " file to Load\n" + this.filesLoaded + " files loaded")


        // All base files loaded, load any animations then start the playable
        if(this.filesLoaded == this.filesToLoad){
            console.log("🦆 Loaded All Files 🦆")

            // Only work on the animations object in the asset pack
            for(let animJson of assetPackBase64 ){

                if(animJson["type"] != "animation") continue 

                // Loop through all animations in the animation object from the asset pack and manually add all those animations in
                for(let animIndex in animJson["jsonData"]["anims"]){
                    var animToAdd = animJson["jsonData"]["anims"][animIndex]
                    
                    this.anims.create(animToAdd)
                }
                console.log("🦆 Animations Added 🦆")
            }

            // Start playable after all animations are loaded
            SimpleDuck.startPlayable.call(this)
        }
    }
}