import Phaser from 'phaser-ce'

export default class extends Phaser.Button {
  constructor (
    game: Phaser.Game,
    x?: number,
    y?: number,
    key?: string,
    callback?: Function,
    callbackContext?: any,
    overFrame?: string | number,
    outFrame?: string | number,
    downFrame?: string | number,
    upFrame?: string | number
  ) {
    super(game, x, y, key, callback, callbackContext, 0, 1, 2)
  }

  setActive(val: boolean) {
    if (val) {
      this.setFrames(2, 2, 2)
    } else {
      this.setFrames(1, 0, 2)
    }
  }
}
