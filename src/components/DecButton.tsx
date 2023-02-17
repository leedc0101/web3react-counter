import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { COUNTER_ABI, COUNTER_ADDRESS } from '@/constant/constant';
import { useQueryClient } from 'react-query';
import { Button, useToast } from '@chakra-ui/react';
import { getFinalizedToast, getLoadingToast } from './toast';

export const DecButton = () => {
  const { account, library } = useWeb3React();
  const queryClient = useQueryClient();
  const toast = useToast({ position: 'bottom-right' });

  const signer = library?.getSigner(account).connectUnchecked();

  const onClick = async () => {
    try {
      const counterContract = new ethers.Contract(COUNTER_ADDRESS, COUNTER_ABI, signer);

      const tx = await counterContract.dec();
      const toastId = toast({
        status: 'info',
        render: () => getLoadingToast(tx.hash),
        duration: null,
      });

      // TODO: Why tx.wait() doesn't work??
      let receipt = null;

      while (receipt === null) {
        try {
          receipt = await library.getTransactionReceipt(tx.hash);

          if (receipt === null) continue;

          toast.update(toastId, {
            status: 'success',
            duration: 5000,
            render: () => getFinalizedToast(),
          });
        } catch (e) {
          toast.update(toastId, { status: 'error', duration: 5000, description: 'Transaction has been failed' });
          break;
        }

        queryClient.refetchQueries('counterNum');
      }
    } catch (e: any) {
      toast({ status: 'error', duration: 5000, description: e.message });
    }
  };

  return <Button onClick={onClick}>Decrease</Button>;
};
