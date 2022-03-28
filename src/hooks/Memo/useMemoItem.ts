import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { postMemo, PostMemoPayload } from "../../apis/Memo";

const useMemo = () => {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const memoMutation = useMutation(
    (newMemo: PostMemoPayload) => postMemo(newMemo),
    {
      onError: (error, variable, context) => {
        console.log(error);
      },
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries("memos");
        setTitle("");
        setContent("");
      },
    }
  );

  const submitMemo = () => {
    memoMutation.mutate({ title, content });
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    submitMemo,
  };
};

export default useMemo;
