import { Image, VStack, Text, Box } from "@chakra-ui/react";
import { GPGif } from "../constants";

const GiphyResult: React.FC<{
  result: GPGif;
}> = ({ result }) => {
  return (
    <Box border="1px solid lightgray" p="1em" mb="1em" borderRadius="md" w="auto">
      <VStack>
        <Image src={result.images.preview_gif.url} h="200px" />
        <Text>
          <strong>{result.title}</strong>
        </Text>
      </VStack>
    </Box>
  );
};

export default GiphyResult;
