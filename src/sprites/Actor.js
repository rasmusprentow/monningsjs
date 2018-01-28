import Phaser from 'phaser-ce'

export class Actor extends Phaser.Sprite {
  currentSpeed: number
  constructor (game: Phaser.Game, x: number, y: number, asset) {
    super(game, x, y, asset)
  }
}
