import { CloseButton, Divider, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { FaGithub, FaImage, FaStackOverflow } from "react-icons/fa";
import { SearchContext, SearchContextType } from "./App";
import { Search, Site } from "./constants";
import { getSearchResults } from "./svc/search";

const NavPanel: React.FC = () => {
  const { setResults, searches, setSearches } = useContext(SearchContext) as SearchContextType;

  const handleSearchClick = async (search: Search) => {
    const res = await getSearchResults(search);
    setResults({
      response: res,
      type: search.type,
    });
  };

  return (
    <VStack backgroundColor="#323232" w="xs" h="100vh" p="1em" color="white">
      <Heading fontSize="xl" color="white" mb="0.5em">
        Mini Search
      </Heading>
      <Divider />

      {searches.length === 0 && <Text color="white">No searches yet</Text>}

      {searches.map((search, index) => (
        <HStack
          key={index}
          border="1px solid lightgray"
          p="0.5em"
          borderRadius="md"
          _hover={{
            cursor: "pointer",
            backgroundColor: "gray.400",
          }}
          w="full"
          onClick={() => handleSearchClick(search)}
          justifyContent="space-between">
          <HStack>
            {search.type === Site.STACKOVERFLOW && <FaStackOverflow />}
            {search.type === Site.GITHUB && <FaGithub />}
            {search.type === Site.GIPHY && <FaImage />}
            <Text fontSize="sm">{search.query}</Text>
          </HStack>
          <CloseButton
            onClick={(e) => {
              e.stopPropagation();
              setSearches(searches.filter((s) => s.ts !== search.ts));
            }}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default NavPanel;
