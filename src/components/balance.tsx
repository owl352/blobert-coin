import React, { useEffect, useState } from "react";
import { contractAddress, decimals } from "../utils/constants";
import { ABI } from "../utils/abi";
import { useContractRead } from "@starknet-react/core";
import { getPublicUrl } from "../main";

export function Balance({ address }: { address: string }) {
  const [balance, changeBalance] = useState("0");
  const data = useContractRead({
    abi: ABI,
    functionName: "balance_of",
    address: contractAddress,
    args: [address],
  });

  useEffect(() => {
    if (data.data !== undefined) {
      changeBalance(data.data!.toString().replaceAll(" ", ""));
    }
  }, [data.data]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        position: "absolute",
        left: "64vw",
        top: "18.2vw",
        zIndex: "20",
      }}
    >
      <img
        src={getPublicUrl("blobert-coin.svg")}
        style={{ width: "2vw", marginRight: "1vw" }}
      />
      <div style={{ fontSize: "0.85vw", color: "white" }}>
        {balance != "0"
          ? parseInt(balance.slice(0, balance.length - decimals))
              .toLocaleString()
              .replaceAll(new RegExp(/[\s\S]0\d/g), ",00")
          : "0.00"}
      </div>
    </div>
  );
}
