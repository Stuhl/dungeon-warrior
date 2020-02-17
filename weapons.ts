// ------------
// BASE CLASSES
// ------------

// SWORDS
class BaseProperties {
  name: string
  power: number
  value: number

  constructor(name: string, power: number, value: number) {
    this.name = name
    this.power = power
    this.value = value
  }
}

class Magical {
  magicalPower: number
  isMagical: boolean

  constructor(magicalPower: number) {
    this.magicalPower = magicalPower
    this.isMagical = true
  }
}

class Raw {
  rawPower: number
  rawMeter: number
  isRaw: boolean

  constructor(rawPower: number, rawMeter: number) {
    this.rawPower = rawPower
    this.rawMeter = rawMeter
    this.isRaw = true
  }
}

interface RawEnhancerProps {
  isRawEngaged: boolean
  currentRounds: number
  maxRounds: number
}

class RawEnhancer {
  isRawEngaged: boolean
  currentRounds: number
  maxRounds: number

  constructor() {
    this.isRawEngaged = false
    this.currentRounds = 0
    this.maxRounds = 3
  }

  static engage(obj: RawEnhancerProps): void {
    obj.isRawEngaged = true
    this.count(obj)
  }

  static count(obj: RawEnhancerProps): void {
    obj.currentRounds++
    this.maximumReached(obj)
  }

  static maximumReached(obj: RawEnhancerProps): void {
    if (obj.currentRounds >= obj.maxRounds) {
      this.reset(obj)
    }
  }

  static reset(obj: RawEnhancerProps): void {
    obj.isRawEngaged = false
    obj.currentRounds = 0
  }
}

// COMPOSITIONS (SWORDS)

// NORMAL
const sword = Object.assign({}, new BaseProperties("Sword", 10, 100))
const longsword = Object.assign({}, new BaseProperties("Longsword", 12, 120))
const broadsword = Object.assign({}, new BaseProperties("Broadsword", 15, 150))
const heavysword = Object.assign({}, new BaseProperties("Heavysword", 20, 200))
const zweihander = Object.assign({}, new BaseProperties("Zweihander", 25, 250))

// MAGICAL
const magicSword = Object.assign({},
  new BaseProperties("Magicsword", 10, 150),
  new Magical(5)
)
const magicalHeavysword = Object.assign({},
  new BaseProperties("Magical-Heavysword", 15, 250),
  new Magical(8)
)
const magicalZweihander = Object.assign({},
  new BaseProperties("Magical-Zweihander", 20, 400),
  new Magical(10)
)

// RAW
const bruteForce = Object.assign({},
  new BaseProperties("bruteForce", 10, 150),
  new Raw(10, 50),
  new RawEnhancer()
)
const maniac = Object.assign({},
  new BaseProperties("Maniac", 15, 300),
  new Raw(20, 50),
  new RawEnhancer()
)

interface sword {
  name: string
  power: number
  value: number,
  isMagical?: boolean
  magicalPower?: number
}

const weapons: sword[] = [
  sword,
  longsword,
  broadsword,
  heavysword,
  zweihander,
  magicSword,
  magicalHeavysword,
  magicalZweihander,
  bruteForce,
  maniac
]

export default weapons
