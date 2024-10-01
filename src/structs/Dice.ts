import { Modifier } from "@interfaces/Modifier";
import { assert } from "@utils/assert";

export class Dice {
  sides: number
  quantity: number
  modifier: Modifier

  public constructor(sides: number, quantity: number, modifier: Modifier) {
    assert(
      sides >= 4,
      "'sides' is required and must be a positive integer greater than 3."
    )

    assert(
      quantity > 0,
      "'quantity' is required and must be a positive integer greater than 0."
    )

    this.sides = sides;
    this.quantity = quantity;
    this.modifier = modifier
  }

  /**
 * Rolls a single dice and returns its value with its modifiers
 * @param {number} sides - the number of sides the die has.
 * @param {Modifier} modifier - the number of sides the die has.
 * @returns {number} The result of the roll, including modifiers.
 */
  public getRoll(sides: number, modifier: Modifier) {
    const rollDice = () => Math.floor(Math.random() * sides)
    let modifiers = modifier.mods.reduce((n, m) => n + m)

    switch (modifier.advantage) {
      default:
        const result = rollDice()
        return result + modifiers;
      case 1:
        let advantages: number[] = []

        for (let i = 0; i < 2; ++i)
          advantages.push(rollDice())

        advantages.sort((a, b) => b - a)
        return advantages[0] + modifiers
      case 2:
        let disadvantages: number[] = []

        for (let i = 0; i < 2; ++i)
          disadvantages.push(rollDice())

        disadvantages.sort((a, b) => a - b)
        return disadvantages[0] + modifiers
    }
  }
}