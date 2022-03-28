import React from "react";
import Memo from "./MemoItem";
import styled from "styled-components";
import useMemo from "../../hooks/Memo/useMemo";

const StyledMemoList = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`;

function MemoList() {
  const { isError, isLoading, memos } = useMemo();

  if (isLoading) return <div>로딩중</div>;
  if (isError) return <div>에러</div>;
  if (!memos) return <div>메모 비어있음</div>;

  return (
    <StyledMemoList>
      {memos.map((memo) => (
        <Memo key={memo.id} memo={memo} />
      ))}
    </StyledMemoList>
  );
}

export default MemoList;
