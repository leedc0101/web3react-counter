import { HStack, Link, Spinner, Text, VStack } from '@chakra-ui/react';

export const getLoadingToast = (hash: string) => (
  <HStack bg="#3577c1" py="10px" px="20px" borderRadius="10px" color="white" justify="space-between">
    <VStack align="flex-start" spacing={1}>
      <Text fontSize="sm" fontWeight={600}>
        Transaction has been sent.
      </Text>
      <Link fontSize="xs" href={`https://goerli.etherscan.io/tx/${hash}`}>
        See on etherscan
      </Link>
    </VStack>
    <Spinner />
  </HStack>
);

export const getFinalizedToast = () => (
  <HStack bg="#469362" py="10px" px="20px" borderRadius="10px" color="white" justify="space-between">
    <VStack align="flex-start" spacing={1}>
      <Text fontSize="sm" fontWeight={600}>
        Transaction has been finalized.
      </Text>
    </VStack>
  </HStack>
);
