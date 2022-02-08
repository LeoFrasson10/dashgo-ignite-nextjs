import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        colorScheme="pink"
        w="4"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: "default",
        }}
      >
        {number}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      bg="gray.700"
      w="4"
      _hover={{
        bg: "gr.500",
      }}
    >
      {number}
    </Button>
  );
}
