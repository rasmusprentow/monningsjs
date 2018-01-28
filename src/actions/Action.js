import Phaser from 'phaser-ce'
import { Actor } from '../sprites/Actor'

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