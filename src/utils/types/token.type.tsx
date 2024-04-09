import { ImageType } from "./image.type";

export type TokenType = {
  tokenId: string;
  spec: string;
  properties: Array<unknown>;
  name: string;
  imageUrls: ImageType;
  contractAddress: string;
  collectionId: string;
};
