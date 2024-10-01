import { Advantage } from "@enums/advantage"

export interface Modifier {
  advantage: Advantage // 0 for neutral, 1 for advantage, 2 for disavantage
  mods: number[]// any roll could have n values to sum or remove
}