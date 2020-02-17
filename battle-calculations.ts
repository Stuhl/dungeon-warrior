import weapons from "./weapons"

interface Player {
  weapon: string,
  strength: number
}

interface Enemy {
  defense: number
}

const utility = {
  getWeapon(weapon: string) {
    for (let arrayWeapon of weapons) {
      if (arrayWeapon.name === weapon) {
        return arrayWeapon
      }
    }
  },

  variance(value: number): number {
    const dividedVal: number = value / 8
    return Math.floor((Math.random() * dividedVal * 2) - dividedVal)
  }
}

const battleCalculations = {
  calculateDamage(player: Player, enemy: Enemy): number {
    const weapon = utility.getWeapon(player.weapon)
    let totalStrength: number = weapon.power + player.strength
    const randomVal: number = utility.variance(weapon.power)

    if (weapon.isMagical) {
      totalStrength *= weapon.magicalPower
    }

    return ((totalStrength - (enemy.defense / 2)) / 2) + randomVal
  }
}

export default battleCalculations
