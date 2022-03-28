import React from "react";
import styled from "styled-components";
import { Memo } from "../../apis/Memo";

interface MemoItemProps {
  memo: Memo;
}

const StyledMemoItem = styled.div`
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #a0aec0;

  .memo {
    &__title {
      font-size: 14px;
      font-weight: bold;
    }

    &__content {
      font-size: 12px;
    }
  }
`;

function MemoItem({ memo }: MemoItemProps) {
  return (
    <StyledMemoItem>
      <div className="memo__title">{memo.title}</div>
      <div className="memo__content">{memo.content}</div>
    </StyledMemoItem>
  );
}

export default MemoItem;
