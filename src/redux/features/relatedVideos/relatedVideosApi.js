import axios from "../../../utils/axios.js";

export const getRelatedVideos = async ({ tags, id }) => {
  const limit = 5;
  let queryString = "";

  if (tags?.length > 0) {
    const tagQuery = tags?.map((tag) => `tags_like=${tag}`).join("&");
    queryString = `${tagQuery}&id_ne=${id}&_limit=${limit}`;
  } else {
    queryString = `id_ne=${id}&_limit=${limit}`;
  }
  const response = await axios.get(`videos?${queryString}`)

  return response?.data;
};