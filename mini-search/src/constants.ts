enum Site {
  STACKOVERFLOW = "Stack Overflow",
  GITHUB = "GitHub",
  GIPHY = "Giphy",
}

type SOQuestion = {
  title: string;
  link: string;
};

type GHRepo = {
  full_name: string;
  name: string;
  html_url: string;
};

type GPGif = {
  url: string;
  alt_text: string;
  title: string;
  images: {
    original: {
      url: string;
    };
    preview_gif: {
      url: string;
    };
  };
};

type Search = {
  ts: string;
  type: Site;
  query: string;
};

type ResultTypes = GHRepo | SOQuestion | GPGif;

const SO_ENDPOINT = "https://api.stackexchange.com/2.2/search";
const GH_ENDPOINT = "https://api.github.com/search/repositories";
const GP_ENDPOINT = "https://api.giphy.com/v1/gifs/search";

const GP_KEY = "PBA0gRkWxggWdx2WHpFXsSx1uYcUCXXF";

export { GH_ENDPOINT, GP_ENDPOINT, GP_KEY, SO_ENDPOINT, Site, type GHRepo, type SOQuestion, type Search, type GPGif, type ResultTypes };
