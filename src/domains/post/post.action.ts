export type GetPostCriteria = {
  postId: string | undefined;
};

export type CreatePostCommand = {
  title: string;
  content: string;
  postImg: string;
  jobIds: Array<number>;
};

export type DeletePostCommand = {
  postId: number;
};
