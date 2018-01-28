import { Action, HasteAction, JumpAction } from './Action'
import ActionMenu from './ActionMenu'

export default class {

  _activeAction: Action

  _menu: ActionMenu

  constructor (game: Phaser.Game) {
    this._menu = new ActionMenu(game)


    const action1 = new JumpAction(game)
    // Should read actions from config
    this._addButton('jump-button', action1)
    this._addButton('jump-button', new HasteAction(game))

    this._menu.setActive(action1.key)
    this._activeAction = action1
  }

  _addButton(assetKey, action: Action) {
    this._menu.addButton(action.key, assetKey, () => this.setAction(action))
  }

  get menu (): ActionMenu {
    return this._menu
  }

  get activeAction (): Action { return this._activeAction }

  setAction (action: Action) {
    this._menu.setActive(action.key)
    this._activeAction = action
  }
}
