export interface ISlideBottom {
  tokenId: string;
  name: string;
  tokensData: { [key: string]: number };
  onStartTxn?: () => unknown | undefined;
  onEndTxn?: () => unknown | undefined;
}
