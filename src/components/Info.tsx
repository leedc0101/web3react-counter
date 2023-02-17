import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from '@/connector/connector';
import { Button, Text, VStack } from '@chakra-ui/react';

export const Info = () => {
  const { chainId, account, activate, active } = useWeb3React();

  const onClick = () => {
    activate(injectedConnector);
  };

  return (
    <VStack>
      <Text> Chain Id : {chainId}</Text>
      <Text> Account : {account}</Text>
      {active ? (
        <Text color="green.400" fontWeight={600}>
          Connected
        </Text>
      ) : (
        <Button onClick={onClick}>Connect</Button>
      )}
      {active && chainId !== 5 && (
        <Text color="red.400" fontWeight={600}>
          Wrong Network! Switch to Goerli
        </Text>
      )}
    </VStack>
  );
};
