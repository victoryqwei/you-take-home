import { Box, Text } from "@chakra-ui/react";
import { GHRepo } from "../constants";

const GHResult: React.FC<{
  result: GHRepo;
}> = ({ result }) => {
  return (
    <Box
      border="1px solid lightgray"
      p="1em"
      mb="1em"
      borderRadius="md"
      _hover={{
        cursor: "pointer",
        backgroundColor: "gray.400",
      }}
      w="auto"
      onClick={() => window.open(result.html_url, "_blank")}
      textAlign="left"
      textOverflow="ellipsis">
      <Text>{result.full_name}</Text>
    </Box>
  );
};

export default GHResult;
