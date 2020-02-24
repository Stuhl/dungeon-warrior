class TextQueue {
  texts: string[]

  constructor() {
    this.texts = []
  }

  dequeue() {
    return this.texts.shift()
  }

  push(text: string): void {
    this.texts.push(text)
  }
}

export default TextQueue
