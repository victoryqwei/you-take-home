import { Box, Center, HStack, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { SearchContext, SearchContextType } from "./App";
import GHResult from "./components/GHResult";
import SOResult from "./components/SOResult";
import SearchBar from "./components/SearchBar";
import SiteSelect from "./components/SiteSelect";
import { GHRepo, GPGif, SOQuestion, Site } from "./constants";
import GiphyResult from "./components/GiphyResult";

const SearchResults: React.FC = () => {
  const { results } = useContext(SearchContext) as SearchContextType;

  if (!results) return null;

  return (
    <Box p="1em" overflowY="auto" w="3xl" margin="auto">
      {results.response.length === 0 && <Center>No Results Found :(</Center>}

      {results.response.map((result, index) => {
        if (results.type === Site.STACKOVERFLOW) {
          return <SOResult key={index} result={result as SOQuestion} />;
        } else if (results.type === Site.GITHUB) {
          return <GHResult key={index} result={result as GHRepo} />;
        } else if (results.type === Site.GIPHY) {
          return <GiphyResult key={index} result={result as GPGif} />;
        }
      })}
    </Box>
  );
};

const SearchPanel: React.FC = () => {
  const [type, setType] = useState<Site>(Site.STACKOVERFLOW);

  return (
    <Box w="full" h="100vh" justifyContent="space-between" display="flex" flexDirection="column" backgroundColor="#484848" color="white">
      <HStack p="1em">
        <Text>Search for:</Text>
        <SiteSelect setType={setType} />
      </HStack>

      <SearchResults />

      <HStack bottom={0} w="full" p="1em">
        <SearchBar type={type} />
      </HStack>
    </Box>
  );
};

export default SearchPanel;
