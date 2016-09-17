

/// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />
import Phaser = require("phaser")
import { Monning} from "./Monning"


class MonningsGame {

    private game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: this.preload, create: this.create, update: this.update });
    }

    preload() {
         this.game.load.image('sky', 'assets/sky.png');
         this.game.load.image('ground', 'assets/platform.png');
         this.game.load.image('star', 'assets/star.png');
         this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    }

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //  A simple background for our game
        this.game.add.sprite(0, 0, 'sky');
         new Monning();
    }

    update() {

    }
 


}

export {MonningsGame} 