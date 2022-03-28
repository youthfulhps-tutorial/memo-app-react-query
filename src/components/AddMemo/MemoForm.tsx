import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface MemoFormProps {
  title: string;
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  content: string;
  onContentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
}

const StyledMemoForm = styled.form`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;

  input,
  textarea {
    font-size: 18px;
    padding: 4px;
    border: 1px solid black;
    width: 100%;
    outline: none;
    background-color: #fafafa;
    resize: none;
  }

  label {
    font-size: 12px;
  }

  button {
    padding: 8px;
  }

  & > * {
    margin-bottom: 4px;
  }
`;

function MemoForm({
  title,
  onTitleChange,
  content,
  onContentChange,
  onSubmit,
}: MemoFormProps) {
  return (
    <StyledMemoForm onSubmit={onSubmit}>
      <label>
        제목
        <input type="text" value={title} onChange={onTitleChange} />
      </label>
      <label>
        내용
        <textarea value={content} onChange={onContentChange} />
      </label>
      <button type="submit">추가하기</button>
    </StyledMemoForm>
  );
}

export default MemoForm;
