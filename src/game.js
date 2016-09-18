
    requirejs.config({
        baseUrl: "src",
        
        paths: {
            //  Edit the below path to point to where-ever you have placed the phaser.min.js file
            phaser: 'libs/phaser.min'
            
        },

        shim: {
            'phaser': {
                exports: 'Phaser'
            }
        }
    });
 
    requirejs(['phaser','Monnings'], function (Phaser, Monnings) {
      
     
      var game = new Monnings.MonningsGame();
        
    });

