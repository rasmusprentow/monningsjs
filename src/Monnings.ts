

/// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />
import * as Phaser from "phaser"

class MonningsGame {

    private game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: this.preload, create: this.create, update: this.update });
    }

    preload() {

    }

    create() {

    }

    update() {

    }



}

