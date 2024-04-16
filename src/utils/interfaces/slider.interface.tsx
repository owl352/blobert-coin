import { TokenType } from "../types";

export interface ISlider {
  tokens: Array<TokenType>;
  tokensData: { [key: string]: number };
  onStartTxn?: () => unknown | undefined;
  onEndTxn?: () => unknown | undefined;
}
