export interface Memo {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostMemoPayload {
  title: string;
  content: string;
}
