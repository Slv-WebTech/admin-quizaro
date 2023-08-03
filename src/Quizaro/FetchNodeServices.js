import axios from "axios";
const serverURL = "http://localhost:5000";

const getData = async (url) => {
  try {
    var response = await fetch(`${serverURL}/${url}`, { method: "GET", mode: "cors", headers: { "content-type": "application/json;charset-utf-8" } });
    var result = await response.json();
    return result;
  } catch (e) {
    return null;
  }
};
const postData = async (url, body) => {
  try {
    var response = await fetch(`${serverURL}/${url}`, {
      method: "POST",
      mode: "cors",
      headers: { "content-type": "application/json;charset=utf-8" },
      body: JSON.stringify(body),
    });
    var result = await response.json();
    return result;
  } catch (e) {
    return null;
  }
};
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
export { postDataImage, getData, postData, serverURL };
