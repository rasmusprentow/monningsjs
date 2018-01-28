// @flow
import Phaser from 'phaser-ce'
import { Actor } from './sprites/Actor'

export class Action {

  key: string
  game: Phaser.Game


  constructor (game: Phaser.Game, key: string) {
    this.game = game
    this.key = key
  }

  execute (actor: Actor): void {
    throw Error('Not implemented: execute')
  };
}

export class JumpAction extends Action {

  constructor (game: Phaser.Game) { super(game, 'jump')}

  execute (actor: Actor): void {
    actor.body.velocity.y = -200
  }
}

export class HasteAction extends Action {

  constructor (game: Phaser.Game) { super(game, 'haste')}

  execute (actor: Actor){
    actor.currentSpeed = actor.hasteSpeed
    setTimeout(() => {
      actor.currentSpeed = actor.walkingSpeed
    }, 1000)
  }
}

export class ActionManager {

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

export class ActionMenu extends Phaser.Group {
  _buttons: Map<string, Phaser.Button>

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
      console.log(btn);
      btn.setActive(false)
    }

    const btn = this._buttons.get(key)
    console.log(btn)
    if(btn) {
      btn.setActive(true)
    }
  }

  activateFirst() {
    this.setActive(this._buttons.keys().first)
  }
}


class Button extends Phaser.Button {
  constructor (game: Phaser.Game,
               x?: number,
               y?: number,
               key?: string,
               callback?: Function, callbackContext?: any, overFrame?: string | number, outFrame?: string | number, downFrame?: string | number, upFrame?: string | number) {
    super(game,
      x, y, key, callback, callbackContext, 0,1,2
    )
  }

  setActive(val: bool) {
    if(val) {
      this.setFrames(2, 2, 2)
    } else {
      this.setFrames(1, 0, 2)
    }
  }
}


