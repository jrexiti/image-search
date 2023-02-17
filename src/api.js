import axios from "axios";

const searchImages = async (searchTerm) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID -IdAMbXab2iNQp2Gu8v1edp-6Gox4Fo3gZjS19VLd7U",
    },
    params: {
      query: searchTerm,
    },
  });

  return response.data.results;
};
export default searchImages;
