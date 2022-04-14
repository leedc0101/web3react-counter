import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from '../connector';

function Account() {
  const { chainId, account, activate, active } = useWeb3React();

  const onClick = () => {
    activate(injectedConnector);
  };

  return (
    <div>
      <div> Chain Id : {chainId}</div>
      <div> Account : {account}</div>
      {active ? <p style={{ color: 'green' }}>Connected</p> : <button onClick={onClick}>Connect</button>}
      {active && chainId !== 42 && <p style={{ color: 'red' }}>Wrong Network! Switch to Kovan</p>}
    </div>
  );
}

export default Account;
