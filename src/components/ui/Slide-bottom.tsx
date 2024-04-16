import React, { useEffect, useMemo, useState } from "react";
import { contractAddress, starkscanNFTURI } from "../../utils/constants";
import { ISlideBottom } from "../../utils/interfaces";
import "../css/mint-hover.css";
import { ABI } from "../../utils/abi";
import {
  useContract,
  useContractWrite,
  useWaitForTransaction,
} from "@starknet-react/core";

export function SlideBottom({
  tokenId,
  name,
  tokensData,
  onStartTxn,
  onEndTxn,
}: ISlideBottom) {
  const [invertState, setInvert] = useState(0);

  const { contract } = useContract({ abi: ABI, address: contractAddress });
  const calls = useMemo(() => {
    if (!contract) return [];
    return contract.populateTransaction["exchange_tokens"]!(parseInt(tokenId));
  }, [contract]);
  const { write, data: tx } = useContractWrite({
    calls,
  });

  const { data: receipt } = useWaitForTransaction({
    hash: tx?.transaction_hash,
    watch: true,
    retry: true,
    refetchInterval: 2000,
  });

  useEffect(() => {
    if (receipt) {
      setInvert(1);
      if (onEndTxn) {
        onEndTxn();
      }
    }
  }, [receipt]);

  return (
    <div
      style={{
        width: "17vw",
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <a
        style={{
          zIndex: "5",
          fontFamily: "chill-pixels",
          letterSpacing: "-4%",
          padding: "3px",
          fontSize: "1.5vw",
          color: "#74C9FE",
          cursor: "pointer",
        }}
        href={starkscanNFTURI + tokenId}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
      {tokensData[tokenId] + invertState < 1 ? (
        <div className="mint-btn" style={{ cursor: "pointer" }}>
          <img
            src="/btn-mint.svg"
            onClick={() => {
              write();
              if (onStartTxn) {
                onStartTxn();
              }
            }}
          />
        </div>
      ) : (
        <div style={{ cursor: "default" }}>
          <img src="/btn-minted.svg" />
        </div>
      )}
    </div>
  );
}
