import { TokenType } from "../types";

export interface ISlider {
  tokens: Array<TokenType>;
  tokensData: { [key: string]: number };
}
