import { API } from "../base";

export const getMemos = () => {
  return API.get("/memos");
};
