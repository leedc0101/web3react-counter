import { COUNTER_ABI, COUNTER_ADDRESS } from '@/constant/constant';
import { useQuery } from 'react-query';
import { ethers } from 'ethers';

const queryCounterNum = async (library: any) => {
  if (!library) return;

  const counterContract = new ethers.Contract(COUNTER_ADDRESS, COUNTER_ABI, library);
  const result = await counterContract.get();

  return result;
};

export const useCounterNum = (library: any) => {
  return useQuery('counterNum', () => queryCounterNum(library));
};
