import React, { useState } from "react";
import { Sign } from "./Sign";
import TokenSlider from "./Slider";
import { IView } from "../utils/interfaces";
import { starkscanContractURI } from "../utils/constants";
import { getImageUrl } from "../main";
import { Balance } from "./balance";
import { MintEffect } from "./ui/MintEffect";

export function View({
  myTokenBalance,
  myTokensData,
  myTokens,
  address,
  onClose,
}: IView) {
  const [minting, changeMintingState] = useState(false);
  return (
    <div>
      <Sign balance={myTokenBalance}></Sign>
      {address !== undefined ? <Balance address={address!} /> : <></>}
      {minting && address !== undefined ? MintEffect() : <></>}
      {address !== undefined ? (
        <div
          style={{
            color: "white",
            top: "15vw",
            left: "19vw",
            fontSize: "5vw",
            position: "absolute",
            zIndex: "10",
            display: "flex",
          }}
        >
          <div onClick={onClose} style={{ cursor: "pointer" }}>
            {"<"}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "1vw",
              justifyContent: "center",
            }}
          >
            <div>Wallet:</div>
            <a
              href={starkscanContractURI + address}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "0.9vw",
                paddingBottom: "0.5vw",
                color: "#74C9FE",
              }}
            >
              {address.slice(0, 6) +
                "..." +
                address.slice(address.length - 4, address.length)}
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div
        style={{
          height: "95vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: "3",
        }}
      >
        <div
          className=" flex flex-col items-center justify-center "
          style={{
            background: `url(${getImageUrl("library.png")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            width: "64vw",
            height: "38vw",
            top: "11vw",
            marginLeft: "2vw",
          }}
        >
          {myTokens.length != 0 && Object.keys(myTokensData).length != 0 ? (
            <div
              style={{
                top: "5vw",
                position: "relative",
                zIndex: 100,
                minWidth: "20vw",
              }}
            >
              <TokenSlider
                tokens={myTokens}
                tokensData={myTokensData}
                onStartTxn={() => changeMintingState(true)}
                onEndTxn={() => changeMintingState(false)}
              />
            </div>
          ) : (
            <div style={{ color: "white" }}>{"No Tokens :("}</div>
          )}
        </div>
      </div>
    </div>
  );
}
