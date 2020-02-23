const wait = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

class TextQueue {
  texts: string[]

  constructor() {
    this.texts = []
  }

  async dequeue() {
    wait(500)
    this.texts.shift()
  }

  push(text: string): void {
    this.texts.push(text)
  }
}

export default TextQueue
