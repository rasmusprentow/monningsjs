
import * as Phaser from "phaser"


export default class  extends Phaser.Sprite {

   
    direction = 1; // 1 = right, -1 = left;
    walkingSpeed = 150;

    constructor(game: Phaser.Game, x:number, y: number, asset) {
        super(game, x, y, asset)
        
        //  We need to enable physics on the player
        game.physics.arcade.enable(this);

        //  Player physics properties. Give the little guy a slight bounce.
        this.body.bounce.y = 0.2;
        this.body.gravity.y = 300;
        this.body.collideWorldBounds = true;
        this.animations.add('left', [0, 1, 2, 3], 20, true);
        this.animations.add('right', [5, 6, 7, 8], 10, true);
        this.inputEnabled = true;
       // this.events.onInputDown(this.onInputDown);
       
    }

    create() {

    }

    onInputDown()
    {
        if(this.body.touching.down) {
            this.body.velocity.y = -200
        }
    }

    update() {
        var body: Phaser.Physics.Arcade.Body = this.body;
      
        if(body.touching.left) { 
           this.direction = 1
        } 
        if(body.touching.right) {
            this.direction = -1;
        }

        body.velocity.x = this.direction * this.walkingSpeed;
        if(this.direction === 1) {
            this.animations.play('right')
        }   else if(this.direction === -1) {
            this.animations.play('left')
        }  else {
            this.animations.stop();
        }
        
    }

    
}
