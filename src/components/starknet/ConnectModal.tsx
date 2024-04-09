"use client";
import { Connector, useConnect } from "@starknet-react/core";
import React from "react";
import Dialog from "../ui/Dialog";

export default function ConnectModal() {
  const { connect, connectors } = useConnect();

  return (
    <Dialog title="">
      <div className="flex flex-col gap-2">
        {connectors.map((connector: Connector) => {
          return (
            <button
              key={connector.id}
              onClick={async () =>
                connector.available() ? connect({ connector }) : null
              }
              disabled={!connector.available()}
              className="flex flex-row items-center justify-start "
            >
              {connector.icon.light && (
                <img src={connector.icon.dark} className="w-10 h-10"  style={{paddingRight:"5px"}}/>
              )}
              <p className="" style={{paddingRight:"5px"}}>{connector.name}</p>
            </button>
          );
        })}
      </div>
    </Dialog>
  );
}
