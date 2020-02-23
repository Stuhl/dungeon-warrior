// import weapons from "./weapons"
// import battleCalculations from "./battle-calculations"
// import loop from "./loop"

import StateMachine from "./state-machine"

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

const fsm = new StateMachine(stateObj)

// console.log(fsm)

fsm.menu()

fsm.menu()

console.log(fsm.state)

// console.log(battleCalculations)

// const {calculateDamage} = battleCalculations
//
// const player = {
//   weapon: "Zweihander",
//   strength: 20
// }
//
// const enemy = {
//   defense: 5
// }
//
// const damage = calculateDamage(player, enemy)
// console.log(damage)
