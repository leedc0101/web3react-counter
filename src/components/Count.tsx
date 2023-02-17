import { useWeb3React } from '@web3-react/core';
import { useCounterNum } from '@/hooks/useCount';
import { Spinner, Text } from '@chakra-ui/react';

export const Count = () => {
  const { library } = useWeb3React();
  const { data } = useCounterNum(library);

  if (!data) return <Spinner />;

  // Since it's bigint, we have to convert to number
  const num = Number(data);

  return (
    <Text fontSize="lg" fontWeight={600}>
      {Number(num) ?? 0}
    </Text>
  );
};
