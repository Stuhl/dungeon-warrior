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
  constructor(stateObj) {
    const {initial, states, methods} = stateObj
    this.state = initial
  }

  private generateStates(states) {
    for (let state of states) {
      const {name, from, to} = state
      

    }
  }
}
