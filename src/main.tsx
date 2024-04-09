import { devnet, goerli, mainnet } from "@starknet-react/chains";
import {
  StarknetConfig,
  argent,
  braavos,
  jsonRpcProvider,
  useInjectedConnectors,
} from "@starknet-react/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./globals.css";
import { rpc } from "./utils/rpc";

function TV({
  children,
  withProvider,
}: {
  children: React.ReactNode;
  withProvider: boolean;
}) {
  if (withProvider) {
    const chains = [goerli, mainnet, devnet];
    const provider = jsonRpcProvider({ rpc }); //publicProvider();
    const { connectors } = useInjectedConnectors({
      // Show these connectors if the user has no connector installed.
      recommended: [argent(), braavos()],
      // Randomize the order of the connectors.
      order: "random",
    });

    return (
      <StarknetConfig
        autoConnect
        chains={chains}
        provider={provider}
        connectors={connectors}
      >
        {children}
      </StarknetConfig>
    );
  }
  return <div>{children}</div>;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TV withProvider={true}>
      <App withHeader={true} />
    </TV>
  </React.StrictMode>
);
