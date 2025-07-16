import axios from "../../../utils/axios.js";

export const getVideos = async () => {
  const response = await axios.get("videos");

  return response?.data;
};
