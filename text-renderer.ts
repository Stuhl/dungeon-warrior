class TextRenderer {
  text: string

  constructor() {
    this.text = ""
  }

  private remove(): void {
    this.text = ""
  }

  private prepare(text) {
    const paragraph = document.createElement("p")
    const textNode = document.createTextNode(text)

    paragraph.style.fontSize = "2em"
    paragraph.appendChild(textNode)
    return paragraph
  }

  add(text): void {
    this.text = text
  }

  render(): void {
    const node = this.prepare(this.text)
    this.remove()
    document.body.appendChild(node)
  }
}

export default TextRenderer
