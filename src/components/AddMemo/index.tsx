import React, { ChangeEvent } from "react";
import useMemoItem from "../../hooks/Memo/useMemoItem";
import MemoForm from "./MemoForm";

function AddMemo() {
  const { title, content, setTitle, setContent, submitMemo } = useMemoItem();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  return (
    <MemoForm
      title={title}
      onTitleChange={handleTitleChange}
      content={content}
      onContentChange={handleContentChange}
      onSubmit={submitMemo}
    />
  );
}

export default AddMemo;
