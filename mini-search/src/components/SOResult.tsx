import { Box, Text } from "@chakra-ui/react";
import { decode } from "html-entities";
import { SOQuestion } from "../constants";

const SOResult: React.FC<{
  result: SOQuestion;
}> = ({ result }) => {
  const title = decode(result.title);

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
      onClick={() => window.open(result.link, "_blank")}
      textAlign="left"
      textOverflow="ellipsis">
      <Text>{title}</Text>
    </Box>
  );
};

export default SOResult;
