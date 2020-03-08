// import weapons from "./weapons"
// import battleCalculations from "./battle-calculations"
// import loop from "./loop"

// import StateMachine from "./state-machine"
//
// const stateObj = {
//   initial: "booting",
//   states: [
//     {name: "menu", from: "booting", to: "menu"},
//     {name: "play", from: "menu", to: "playing"},
//     {name: "death", from: "playing", to: "menu"}
//   ],
//   methods: {
//     onMenu() {
//       console.log("Menu loaded.")
//     },
//     onPlay() {
//       console.log("Starting the game.")
//     },
//     onDeath() {
//       console.log("Player dead. going back to menu.")
//     }
//   }
// }
//
// const globalFSM = new StateMachine(stateObj)
//
// globalFSM.menu()
// globalFSM.play()
// globalFSM.death()
// console.log(globalFSM.state)


// import TextQueue from "./text-queue"
// import utility from "./utility"
//
// const textQueue = new TextQueue()
//
// textQueue.add("Hello")
// textQueue.add("Welcome to Dungeon Warrior!")
// textQueue.add("This is just a test")
// textQueue.add("You got this amigo!")
//
// console.log(textQueue)
//
// textQueue.texts.forEach(async () => {
//   await utility.wait(1000)
//   const text = textQueue.dequeue()
//   console.log(text)
// })

import TextQueue from "./text-queue"

const main = async () => {
  const queue = new TextQueue()

  queue.add("Hello")
  queue.add("Welcome to Dungeon Warrior!")
  queue.add("This is just a test")
  queue.add("You got this amigo!")

  queue.dequeueAll(1000)
}

main()

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
