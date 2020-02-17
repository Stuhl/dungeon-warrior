// ------------
// BASE CLASSES
// ------------

class BaseProperties {
  name: string
  strength: number
  agility: number
  defense: number
  health: number

  constructor(name: string, strength: number, agility: number, defense: number, health: number) {
    this.name = name
    this.strength = strength
    this.agility = agility
    this.defense = defense
    this.health = health
  }
}

interface entity {
  name: string
  strength: number
  agility: number
  defense: number
  health: number
  level: number
  currentExp: number
  maxExp: number
}

class BasePropertiesEnhancer {
  constructor() {

  }

  private static getPropertiesData() {
    const warrior = {
      strength: 2,
      agility: 1.5,
      defense: 1.3,
      health: 8
    }

    return warrior
  }

  private static randomRange(): number {
    return Math.random() * 4
  }

  private static computeValue(key: string, value: number): number {
    const randomNumber: number = BasePropertiesEnhancer.randomRange()
    const data = BasePropertiesEnhancer.getPropertiesData()

    return Math.floor(value + (randomNumber * data[key]))
  }

  levelUpProperties(obj: entity): void {
    const {computeValue} = BasePropertiesEnhancer

    obj.strength = computeValue("strength", obj.strength)
    obj.agility = computeValue("agility", obj.agility)
    obj.defense = computeValue("defense", obj.defense)
    obj.health = computeValue("health", obj.health)
  }
}

class Experience {
  level: number
  currentExp: number
  maxExp: number

  constructor(level: number) {
    this.level = level
    this.currentExp = 0
    this.maxExp = Experience.getLevelData(level)
  }

  private static getLevelData(level: number): number {
    const list = {
      1: 100,
      2: 150,
      3: 220,
      4: 400,
      5: 1000
    }
    return list[level]
  }

  private static isNextLevelReached(obj: entity): boolean {
    return obj.currentExp >= obj.maxExp
  }

  static levelUp(obj: entity): void {
    if (Experience.isNextLevelReached(obj)) {

      obj.level++
      obj.currentExp = 0
      obj.maxExp = Experience.getLevelData(obj.level)
    }
  }
}
