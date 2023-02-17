import { useWeb3React } from '@web3-react/core';
import { Info } from '@/components/Info';
import { DecButton } from '@/components/DecButton';
import { IncButton } from '@/components/IncButton';
import { Count } from '@/components/Count';
import { HStack, VStack } from '@chakra-ui/react';

export default function Home() {
  const { active, chainId } = useWeb3React();

  return (
    <VStack minW="100vw" minH="100vh" justify="center" bg="gray.100">
      <VStack spacing="30px" p="30px" borderRadius="10px" bg="white" boxShadow="lg">
        <h1>Only works on Goerli Network (5)</h1>
        <Info />
        {active && chainId === 5 && (
          <VStack bg="gray.100" p="20px" borderRadius="10px" spacing="20px">
            <Count />
            <HStack>
              <IncButton />
              <DecButton />
            </HStack>
          </VStack>
        )}
      </VStack>
    </VStack>
  );
}
