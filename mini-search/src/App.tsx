import { ChakraProvider, HStack } from "@chakra-ui/react";
import { createContext, useState } from "react";
import NavPanel from "./NavPanel";
import SearchPanel from "./SearchPanel";
import { ResultTypes, Search, Site } from "./constants";
import { useLocalStorage } from "./svc/hooks";

type ResultsType = {
  response: ResultTypes[];
  type: Site;
};

export interface SearchContextType {
  searches: Search[];
  setSearches: (searches: Search[]) => void;
  results: ResultsType | null;
  setResults: (data: ResultsType) => void;
}

export const SearchContext = createContext<SearchContextType | null>(null);

const useSearchContext = () => {
  const [searches, setSearches] = useLocalStorage<Search[]>("searches", []);
  const [results, setResults] = useState<ResultsType | null>(null);

  return { results, setResults, searches, setSearches };
};

function App() {
  const searchContext = useSearchContext();

  return (
    <ChakraProvider>
      <SearchContext.Provider value={searchContext}>
        <HStack h="100%" gap={0}>
          <NavPanel />
          <SearchPanel />
        </HStack>
      </SearchContext.Provider>
    </ChakraProvider>
  );
}

export default App;
