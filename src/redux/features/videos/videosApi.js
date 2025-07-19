import axios from "../../../utils/axios.js";

export const getVideos = async ( tags, search ) => {
  let queryString = "";
  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (search !== undefined && search !== "") {
    queryString += `&q=${search}`;
  }

  console.log(`Query: videos/?${queryString}`);

  const response = await axios.get(`videos/?${queryString}`);

  return response?.data;
};
