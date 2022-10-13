import axios from "axios";
import { API_KEY } from "./API_KEY";

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: `KakaoAK ${API_KEY}`,
  },
});

// search image api
export const foodSearch = (params) => {
  return Kakao.get("/v2/search/image", { params });
};
