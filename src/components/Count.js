import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { COUNTER_ABI } from '../constant';

function Count(props) {
  const { library } = useWeb3React();

  const onClick = async () => {
    const counterContract = new ethers.Contract('0x9acDeC484dFD452ce56bb666A432916702fB2F0E', COUNTER_ABI, library);

    const result = await counterContract.get();
    props.setCount(result.toNumber());
  };

  return (
    <div className="count">
      <button onClick={onClick}>Get Count</button>
      <div>{props.count}</div>
    </div>
  );
}

export default Count;
