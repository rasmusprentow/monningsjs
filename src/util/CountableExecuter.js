/**
 * Executed the input every nth time it is called.
 */
export default class CountableExecutor {

  total: number
  delay: number

  onScreen: number

  constructor(func: Function, totalExecutions, delay = 10) {
    this.game = game
    this.total = totalExecutions
    this.delay = delay
    this.onScreen = 0
    this.executions = 0
    this.frameCount = 0
    this.func = func
  }



  execute() {
    if (this.total > this.onScreen && (this.frameCount > this.executions + this.delay || this.frameCount === 0)) {
      this.executions = this.frameCount
      this.onScreen++
      this.func()
    }
    this.frameCount++
  }


}