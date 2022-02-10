import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange,
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
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
}
