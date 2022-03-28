import { useQuery } from "react-query";
import { getMemos, Memo } from "../../apis/Memo";
import { AxiosError, AxiosResponse } from "axios";

const useMemo = () => {
  const { isLoading, isError, data, error } = useQuery<
    AxiosResponse<Memo[]>,
    AxiosError
  >("memos", getMemos);

  return { isLoading, isError, memos: data && data.data, error };
};

export default useMemo;
