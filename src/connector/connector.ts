import { InjectedConnector } from '@web3-react/injected-connector';

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    // 1, // Mainet
    5, // Goerli
    // 11155111, // sepolia
  ],
});
