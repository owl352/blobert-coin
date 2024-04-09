import React from "react";

export function Sign({ balance }: { balance: number }) {
  return (
    <div
      style={{
        width: "66vw",
        left: "16.5vw",
        top: "10vw",
        zIndex: "4",
        position: "absolute",
      }}
    >
      <img src="images/sign-exchange.png" />
      <div
        style={{
          position: "absolute",
          color: "white",
          fontSize: "1.5vw",
          zIndex: 2,
          left: balance.toString().length>1?"25vw":"25.75vw",
          top:"8vw"
        }}
      >
        {`Bloberts: ${balance}`}
      </div>
    </div>
  );
}
