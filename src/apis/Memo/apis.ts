import { PostMemoPayload } from ".";
import { API } from "../base";

export const getMemos = () => {
  return API.get("/memos");
};

export const postMemo = ({ title, content }: PostMemoPayload) => {
  return API.post("/memos", { title, content });
};
