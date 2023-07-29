import axios from "axios";
const serverURL = "http://localhost:5000";

const postDataImage = async (url, body) => {
  try {
    var response = await axios.post(`${serverURL}/${url}`, body, {
      headers: { "content-type": "multipart/form-data" },
    });
    var result = await response.data;
    return result;
  } catch (e) {
    return null;
  }
};
export { postDataImage, serverURL };
