import utility from "./utility"

class TextQueue {
  texts: string[]
  timer: number

  constructor() {
    this.texts = []
  }

  async wait(ms: number): Promise<void> {
    await utility.wait(ms)
    return Promise.resolve()
  }

  async dequeue(ms: number = 500) {
    await this.wait(ms)
    return this.texts.shift()
  }

  async dequeueAll(ms: number = 500) {
    while (this.texts.length > 0) {
      const val = await this.dequeue(ms)
      console.log(val)
    }
  }

  add(text: string): void {
    this.texts.push(text)
  }
}

export default TextQueue
