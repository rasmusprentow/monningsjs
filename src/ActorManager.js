


export default class ActorManager {

  total: number
  delay: number

  onScreen: number

  constructor(creator: Function, total, delay = 10) {
    this.game = game
    this.total = total
    this.delay = delay
    this.onScreen = 0
    this.countOnLastEntrance = 0
    this.frameCount = 0
    this.creator = creator
  }



  conditionallyGetMonning() {
    console.log(this.total, this.onScreen)
    if (this.total > this.onScreen && (this.frameCount > this.countOnLastEntrance + this.delay || this.frameCount ==0)) {
      this.countOnLastEntrance = this.frameCount
      this.onScreen++
      this.creator()
    }
    this.frameCount++
  }


}