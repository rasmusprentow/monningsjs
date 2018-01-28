/* globals __DEV__ */
import Phaser from 'phaser-ce'
import Monning from '../sprites/Monning'
import { ActionManager } from '../ToolMenu'
import { Actor } from '../sprites/Actor'
import ActorManager from '../ActorManager'

export default class extends Phaser.State {

  monnings: Monning[]

  init () {}

  preload () {

  }

  create () {
    // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    this.map = this.game.add.tilemap('demo1')

    // the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
    this.map.addTilesetImage('generic', 'tiles')

    // create layer
    this.backgroundlayer = this.map.createLayer('backgroundLayer')
    this.blockedLayer = this.map.createLayer('blockedLayer')

    // collision on blockedLayer
    this.map.setCollisionBetween(0, 10000, true, 'blockedLayer')

    // resizes the game world to match the layer dimensions
    this.backgroundlayer.resizeWorld()

    const startPos = findObjectsByType('startPosition', this.map, 'objectLayer')[0]
    // this.backgroundLayer.order
    console.log(startPos)
    // this.game.add.sprite(0, 0, 'sky')
    //
    // this.platforms = this.game.add.group()
    //
    // //  We will enable physics for any object that is created in this group
    // this.platforms.enableBody = true
    //
    // // Here we create the ground.
    // var ground = this.platforms.create(0, this.game.world.height - 64, 'ground')
    //
    // //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    // ground.scale.setTo(2, 2)
    //
    // //  This stops it from falling away when you jump on it
    // ground.body.immovable = true
    //
    // //  Now let's create two ledges
    // var ledge = this.platforms.create(790, this.world.height - 84, 'ground')
    // ledge.body.immovable = true
    // ledge = this.platforms.create(-30, this.game.world.height - 84, 'ground')
    // ledge.body.immovable = true
    // ledge = this.platforms.create(-150, 300, 'ground')
    // ledge.body.immovable = true
    const actions = new ActionManager(this.game)
    const menu = actions.menu

    this.game.add.existing(menu)
    this.monnings = []

    this.actorManager = new ActorManager(() => {
      const monning = new Monning(this.game, startPos.x, startPos.y, 'dude');
      monning.events.onInputDown.add((e: any) => {
        console.log(e)
          actions.activeAction.execute(monning)
        }
      )
      this.game.add.existing(monning)
      if (this.monnings.length === 0) {
        this.game.camera.follow(monning)
      }
      this.monnings.push(monning)
    }, 50, 100)

  }

  update() {
    this.monnings.forEach((monning) => {
      this.game.physics.arcade.collide(monning, this.blockedLayer)
    })
    this.actorManager.conditionallyGetMonning()
  }

  render () {
    if (__DEV__ && this.monnings.length > 0) {
     // this.game.debug.spriteInfo(this.monnings.first, 32, 32)
    }
  }
}

function findObjectsByType (type: String, map: Phaser.Tilemap, layer: String): any {
  const result = []
  map.objects[layer].forEach((element) => {
    if (element.properties && element.properties.type === type) {
      element.y -= map.tileHeight
      result.push(element)
    }
  })
  return result
}
