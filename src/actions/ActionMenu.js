import Button from './Button'
export default class extends Phaser.Group {
  _buttons: Map<string, Button>

  spacing: number;

  constructor (game: Phaser.Game) {
    super(game, null, 'ToolMenu')
    this._buttonOffset = 50
    this._buttons = new Map()
    this.fixedToCamera = true
    this.cameraOffset.setTo(0, 0)
  }

  addButton (key: string, assetKey, callback: Function) {
    const x = this._buttonOffset * this._buttons.size
    const button = new Button(this.game, x, 0, assetKey, callback)
    this._buttons.set(key, button)
    this.add(button)
  }

  setActive(key: string) {
    for (const btn of this._buttons.values()) {
      btn.setActive(false)
    }

    const btn = this._buttons.get(key)
    if(btn) {
      btn.setActive(true)
    }
  }

  activateFirst() {
    this.setActive(this._buttons.keys().first)
  }
}
