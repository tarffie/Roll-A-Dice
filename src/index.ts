import { Advantage } from "@enums/advantage";
import { Dice } from "@structs/Dice";
import { log } from "console";


// tests and stuff
const diceNeutral = new Dice(20, 1, { advantage: Advantage.NEUTRAL, mods: [0] })
const diceAdvantage = new Dice(20, 1, { advantage: Advantage.ADVANTAGE, mods: [0] })
const diceDisadvantage = new Dice(20, 1, { advantage: Advantage.DISAVANTAGE, mods: [0] })

log(`advantage roll: ${diceAdvantage.getRoll(diceAdvantage.sides, diceAdvantage.modifier)}`);
log(`disavantage roll: ${diceDisadvantage.getRoll(diceDisadvantage.sides, diceDisadvantage.modifier)}`);
log(`neutral roll: ${diceNeutral.getRoll(diceNeutral.sides, diceNeutral.modifier)}`);