import weapons from "./weapons"
import battleCalculations from "./battle-calculations"

console.log(battleCalculations)

const {calculateDamage} = battleCalculations

const player = {
  weapon: "Zweihander",
  strength: 20
}

const enemy = {
  defense: 5
}

const damage = calculateDamage(player, enemy)
console.log(damage)