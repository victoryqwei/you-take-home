import { Box, Button, HStack, Input } from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";
import { SearchContext, SearchContextType } from "../App";
import { Search, Site } from "../constants";
import { getSearchResults } from "../svc/search";

interface SearchBarProps {
  type: Site;
}

const SearchBar: React.FC<SearchBarProps> = ({ type }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setResults, searches, setSearches } = useContext(SearchContext) as SearchContextType;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = inputRef.current?.value;
    if (!query) return;

    setIsLoading(true);

    const search: Search = {
      ts: new Date().toISOString(),
      type,
      query,
    };

    const res = await getSearchResults(search);

    setResults({
      response: res,
      type,
    });

    setSearches([...searches, search]);

    console.log(res);

    setIsLoading(false);
  };

  return (
    <Box w="full">
      <form onSubmit={handleSubmit}>
        <HStack>
          <Input ref={inputRef} placeholder="Search..."></Input>
          <Button type="submit" isLoading={isLoading}>
            Submit
          </Button>
        </HStack>
      </form>
    </Box>
  );
};

export default SearchBar;
