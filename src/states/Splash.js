import Phaser from 'phaser-ce'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    this.load.tilemap('demo1', 'assets/levels/demo1.json', null, Phaser.Tilemap.TILED_JSON)
    this.load.image('tiles', 'assets/images/tiles.png')
    this.load.image('sky', 'assets/sky.png')
    this.load.image('ground', 'assets/platform.png')
    this.load.image('star', 'assets/star.png')
    this.load.spritesheet('jump-button', 'assets/images/jump-button.png', 32, 32);
    this.load.spritesheet('dude', 'assets/dude.png', 32, 48)
  }

  create () {
    this.state.start('Game')
  }
}
