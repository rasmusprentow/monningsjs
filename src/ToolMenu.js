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

  _menu: ToolMenu

  constructor (game: Phaser.Game) {
    this._menu = new ToolMenu(game)
    const action = new HasteAction(game)
    this._menu.addButton(action.key, new JumpButton(game, () => this.setAction(action)))
    //this._menu.addButton('test', new JumpButton(game, () => this.setAction(action)))
  }

  get menu (): ToolMenu {
    return this._menu
  }

  get activeAction (): Action { return this._activeAction }

  setAction (action: Action) {
    this._menu.setActive(action.key)
    this._activeAction = action
  }
}

export class ToolMenu extends Phaser.Group {
  _buttons: Map<string, Phaser.Button>

  spacing: number;


  constructor (game: Phaser.Game) {
    super(game, null, 'ToolMenu')

    this._buttons = new Map()
    this.fixedToCamera = true
    this.cameraOffset.setTo(0, 0)
  }

  addButton (key: string, button: Button) {
    this._buttons.set(key, button)
    this.add(button)
  }

  setActive(key: string) {

    for (const btn of this._buttons.values()) {
      console.log(btn);
      btn.setActive(false)
    }

    const btn = this._buttons.get(key)
    if(btn) {
      btn.setActive(true)
    }
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
      this.setFrames(1, 2, 0)
    } else {
      this.setFrames(1, 0, 2)
    }
  }
}

export class JumpButton extends Button {
  constructor (game: Phaser.Game, callback: Function) {
    super(game, 50, 50, 'jump-button', callback, game)
  }
}
