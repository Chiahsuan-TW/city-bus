import axios from "axios";
import jsSHA from "jssha";

const API = axios.create({
  baseURL: "https://ptx.transportdata.tw/MOTC/v2/Tourism",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    config.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...getAuthorizationHeader(),
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function getAuthorizationHeader() {
  let AppID = "12efae2e62544e008e3edb1edfc82542";
  let AppKey = "SLIpweeVUHAwlA3-4jmwbHH0ryg";

  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return { Authorization: Authorization, "X-Date": GMTString };
}


