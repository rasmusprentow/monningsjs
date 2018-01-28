import Phaser from 'phaser-ce'
import {Actor} from './actor'



const Direction = {
  left: -1,
  right: 1
}

export default class extends Actor {
  constructor (game: Phaser.Game, x: number, y: number, asset) {
    super(game, x, y, asset)
    this.direction = Direction.right
    this.walkingSpeed = 150
    //  We need to enable physics on the player
    game.physics.arcade.enable(this)

    //  Player physics properties. Give the little guy a slight bounce.
    this.body.bounce.y = 0.2
    this.body.gravity.y = 300
    this.body.collideWorldBounds = true
    this.animations.add('left', [0, 1, 2, 3], 10, true)
    this.animations.add('right', [5, 6, 7, 8], 10, true)
    this.inputEnabled = true

  }

  create () {

  }

  update () {
    const contact = this.body.blocked

    if (contact.left) {
      this.direction = 1
    }
    if (contact.right) {
      this.direction = -1
    }

    this.body.velocity.x = this.direction * this.walkingSpeed
    if (this.direction === 1) {
      this.animations.play('right')
    } else if (this.direction === -1) {
      this.animations.play('left')
    } else {
      this.animations.stop()
    }
  }
}
