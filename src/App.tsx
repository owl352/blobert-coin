import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { useAccount, useContractRead } from "@starknet-react/core";
import { getBloberts } from "./utils/get-tokens";
import { TokenType } from "./utils/types";
// import { contractAddress } from "./utils/constants";
import { ABI } from "./utils/abi";
import { View } from "./components/View";
import { contractAddress } from "./utils/constants";
import { getImageUrl } from "./main";

function App({ withHeader }: { withHeader: boolean }) {
  const { address } = useAccount();
  const [myTokenBalance, setTokenBalance] = useState(0);
  const [myTokens, setTokens] = useState([] as Array<TokenType>);
  const [myTokensData, setTokensData] = useState(
    {} as { [key: string]: number }
  );

  useEffect(() => {
    getBloberts(address as string).then((v) => {
      if (v !== undefined) {
        setTokenBalance(v.length);
        setTokens(v);
      }
    });
  }, [address]);
  const data = useContractRead({
    abi: ABI,
    functionName: "get_status",
    address: contractAddress,
    args: [myTokens.map((v) => v.tokenId)],
  });
  useEffect(() => {
    console.log(data);
    if (data.isError) {
      data.refetch();
      return;
    }
    if (data.data !== undefined) {
      const tokens = myTokens.map((v) => v.tokenId);
      const out: { [key: string]: number } = {};
      tokens.forEach((v) => {
        out[v] = parseInt(
          (data.data as Array<bigint>)[tokens.indexOf(v)].toString()
        );
      });
      setTokensData(out);
    }
  }, [data.data]);
  return (
    <main
      style={{
        background: `linear-gradient(rgba(0, 56, 91, 1), rgba(0, 56, 91, 1))`,
        width: "100%",
      }}
    >
      {(() => {
        if (withHeader)
          return (
            <div style={{ zIndex: 11, position: "absolute" }}>
              <Header address={address} myTokenBalance={myTokenBalance} />
            </div>
          );
      }).call([])}
      <div>
        <img
          src={getImageUrl('frame.png')}
          style={{
            width: "90vw",
            position: "absolute",
            zIndex: "5",
            userSelect: "none",
            pointerEvents: "none",
            left: "4vw",
          }}
        />
        <View
          myTokenBalance={myTokenBalance}
          myTokens={myTokens}
          myTokensData={myTokensData}
          address={address}
          onClose={() => {}}
        />
      </div>
    </main>
  );
}

export default App;
