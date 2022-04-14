import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import Account from './components/Account';
import Count from './components/Count';
import IncButton from './components/IncButton';
import DecButton from './components/DecButton';
import { ethers } from 'ethers';
import { COUNTER_ABI } from './constant';
import './App.css';

function App() {
  const { active, chainId, library } = useWeb3React();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getNum = async () => {
      const counterContract = new ethers.Contract('0x9acDeC484dFD452ce56bb666A432916702fB2F0E', COUNTER_ABI, library);
      const result = await counterContract.get();

      setCount(result.toNumber());
    };

    getNum();
  }, [library]);

  return (
    <>
      <h1>Only works on Kovan Network (42)</h1>
      <Account />
      {active && chainId === 42 && (
        <div className="counter">
          <Count count={count} setCount={setCount} />
          <div className="buttons">
            <IncButton setCount={setCount} />
            <DecButton setCount={setCount} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
