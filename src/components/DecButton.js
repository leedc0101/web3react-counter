import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { COUNTER_ABI } from '../constant';

function DecButton(props) {
  const { account, library } = useWeb3React();
  const signer = library?.getSigner(account).connectUnchecked();

  const onClick = async () => {
    const counterContract = new ethers.Contract('0x9acDeC484dFD452ce56bb666A432916702fB2F0E', COUNTER_ABI, signer);

    const response = await counterContract.dec();
    await response.wait();

    const result = await counterContract.get();
    props.setCount(result.toNumber());
  };

  return (
    <button style={{ width: 'fit-content' }} onClick={onClick}>
      Decrease
    </button>
  );
}

export default DecButton;
