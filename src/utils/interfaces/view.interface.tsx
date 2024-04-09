import { MouseEventHandler } from "react";
import { TokenType } from "../types";

export interface IView {
  myTokenBalance: number;
  myTokensData: { [key: string]: number };
  myTokens: Array<TokenType>;
  address: string | undefined;
  onClose?: MouseEventHandler<HTMLDivElement> | undefined;
}
