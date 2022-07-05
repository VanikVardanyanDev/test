import axios from "axios";

localStorage.setItem(
  "token",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE2NTY0ODY1MTUsImV4cCI6MTY1NzA5MTMxNX0.Y2amEVLRJ92QRXd-ZCk7TNbcVFlTDCiBYekNuAF5rwk"
);

const setAuth = () => {
  const token = localStorage.getItem("token") || "";
  axios.defaults.headers.common["Authorization"] = token;
  axios.defaults.headers.post["Content-Type"] = "application/json";
};

const request = async (url, method, body = {}, headers = null) => {
  setAuth();
  if (headers) {
    Object.keys(headers).forEach((key) => {
      axios.defaults.headers.post[key] = headers[key];
    });
  }
  axios.defaults.baseURL = "http://135.181.35.61:2112";
  const req = {
    method,
    url,
  };
  if (method === "GET") {
    let getUrl = url + "?";
    Object.keys(body).forEach((key) => {
      getUrl = getUrl + key + "=" + body[key] + "&";
    });
    req.url = getUrl;
  } else {
    req.data = body;
  }
  return axios(req);
};

export default request;
