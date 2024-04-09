// import { tokenAddress } from "./constants";
import { TokenType } from "./types";

export async function getBloberts(address: string): Promise<Array<TokenType>> {
  if (address !== undefined) {
    const myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "ru");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "cross-site");
    myHeaders.append(
      "user-agent",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
    );
    const nulls = address.length < 66 ? "0".repeat(66 - address.length) : "";
    //TODO: address
    const resp = await fetch(
      `https://cloud.argent-api.com/v1/pandora/starknet/mainnet/profile/${"0x3CA99165D3b71CaC950b2C5383aA30Ee6e94dB616d5420Eaa2eBdb1FFdEC11"
        .replace("x", "x" + nulls)
        .toLowerCase()}/nfts?page=0&size=4844`,
      {
        method: "GET",
        headers: myHeaders,
      }
    );
    const tokens: Array<TokenType> = (await resp.json())
      .content as Array<TokenType>;
    const blobberts = [];
    for (let i = 0; i < tokens.length; i++) {
      //TODO: === tokenAddress
      if (
        tokens[i].contractAddress ===
        "0x00539f522b29ae9251dbf7443c7a950cf260372e69efab3710a11bf17a9599f1"
      ) {
        blobberts.push(tokens[i]);
      }
    }
    return blobberts;
  } else {
    return [];
  }
}
