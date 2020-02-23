interface state {
  name: string
  from: string
  to: string
}

interface stateObject {
  initial: string
  states: state[]
  methods: object
}

class StateMachine {
  state: string
  private methods: object

  constructor(stateObj: stateObject) {
    const {initial, states, methods} = stateObj
    this.state = initial
    this.methods = methods
    this.generateStates(states)
  }

  private generateStates(states: state[]) {
    for (let state of states) {
      this.generateFunction(state)
    }
  }

  private formatName(name: string): string {
    const firstLetter = name[0]
    const rest = name.slice(1)

    return "on" + firstLetter.toUpperCase() + rest
  }

  private getMethod(name: string) {
    return this.methods[this.formatName(name)]
  }

  private generateFunction(state: state) {
    const {name, from, to} = state

    this[name] = (): void => {
      if (this.state === from) {
        this.state = to
        const method = this.getMethod(name)
        method()
      } else {
        console.warn("Invalid state transition. Cannot transition from " + from + " to " + to + ".")
      }
    }
  }
}

export default StateMachine
