import TextQueue from "./text-queue"
import TextRenderer from "./text-renderer"
import StateMachine from "./state-machine"

const main = async () => {
  const queue = new TextQueue()
  const renderer = new TextRenderer()
  const fsm = new StateMachine({
     initial: "menu",
     states: [
       {name: "play", from: "menu", to: "playing"}
       {name: "quit", from: "play", to: "menu"}
     ],
     methods: {
       onMenu() {
         console.log("in menu...")
       }

       onPlay() {
         console.log("playing game...")
       }

       onQuit() {
         console.log("quitting game...")
       }
     }
  })

  console.log(fsm)
}

document.addEventListener("DOMContentLoaded", () => {
  main()
})
