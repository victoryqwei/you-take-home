import axios from "axios";
import { GH_ENDPOINT, GP_ENDPOINT, GP_KEY, ResultTypes, SO_ENDPOINT, Search, Site } from "../constants";

export function getSearchResults(search: Search): Promise<ResultTypes[]> {
  if (search.type === Site.STACKOVERFLOW) {
    return getSOSearchResults(search.query);
  } else if (search.type === Site.GITHUB) {
    return getGHSearchResults(search.query);
  } else if (search.type === Site.GIPHY) {
    return getGiphyResults(search.query);
  } else {
    throw new Error("Invalid search type");
  }
}

export async function getSOSearchResults(query: string) {
  const res = await axios.get(SO_ENDPOINT, {
    params: {
      order: "desc",
      sort: "activity",
      intitle: query,
      site: "stackoverflow",
    },
  });
  return res.data.items;
}

export async function getGHSearchResults(query: string) {
  const res = await axios.get(GH_ENDPOINT, {
    params: {
      q: query,
    },
  });

  return res.data.items;
}

export async function getGiphyResults(query: string) {
  const res = await axios.get(GP_ENDPOINT, {
    params: {
      api_key: GP_KEY,
      q: query,
    },
  });

  return res.data.data;
}
