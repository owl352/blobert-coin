import { useDisconnect } from "@starknet-react/core";
import React from "react";
import ConnectModal from "./starknet/ConnectModal";
import { IHeader } from "../utils/interfaces";

export default function Header({ address, myTokenBalance }: IHeader) {
  const { disconnect } = useDisconnect();

  return (
    <div className="fixed top-0 left-0 right-0 justify-between  flex flex-row px-4 p-2">
      {address ? (
        <div
          className="cursor-pointer text-black"
          style={{ backgroundColor: "#FEF9AB", padding: "10px" }}
          onClick={() => disconnect()}
        >
          <span>Wallet</span>
          <div
            style={{
              height: "12px",
              width: "12px",
              backgroundColor: "green",
              borderRadius: "50%",
              border: "2px solid #FEF9AB",
              display: "inline-block",
              position: "relative",
              top: "-20px",
              left: "15px",
            }}
          ></div>
        </div>
      ) : (
        <ConnectModal />
      )}
      {address !== undefined ? (
        <div
          className="flex flex-row text-black"
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            backgroundColor: "#FEF9AB",
            padding: "10px",
          }}
        >
          {`Bloberts: ${myTokenBalance}`}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
