// import weapons from "./weapons"
// import battleCalculations from "./battle-calculations"
// import loop from "./loop"

import StateMachine from "./state-machine"

const stateObj = {
  initial: "booting",
  states: [
    {name: "menu", from: "booting", to: "menu"},
    {name: "play", from: "menu", to: "playing"},
    {name: "death", from: "playing", to: "menu"}
  ],
  methods: {
    onMenu() {
      console.log("Menu loaded.")
    },
    onPlay() {
      console.log("Starting the game.")
    },
    onDeath() {
      console.log("Player dead. going back to menu.")
    }
  }
}

const globalFSM = new StateMachine(stateObj)

globalFSM.menu()
globalFSM.play()
globalFSM.death()
console.log(globalFSM.state)

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
