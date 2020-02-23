const stateObj = {
  initial: "booting",
  states: [
    {
      name: "menu",
      from: "booting",
      to: "menu"
    },
    {
      name: "play",
      from: "menu",
      to: "playing"
    }
  ],
  methods: {
    onMenu() {
      console.log("menu transition")
    },
    onPlay() {
      console.log("playing transition")
    }
  }
}

class StateMachine {
  state: string
  private methods: object

  constructor(stateObj) {
    const {initial, states, methods} = stateObj
    this.state = initial
    this.methods = methods
  }

  private generateStates(states) {
    for (let state of states) {
      this.generateFunction(state)
    }
  }

  private formatName(name): string {
    const firstLetter = name[0]
    const rest = name.slice(1)

    return "on" + firstLetter.toUpperCase() + rest
  }

  private getMethod(name) {
    return this.methods[this.formatName(name)]
  }

  private generateFunction(state) {
    const {name, from, to} = state

    this[name] = (): void => {
      if (this.state === from) {
        this.state = to

      }
    }
  }
}
