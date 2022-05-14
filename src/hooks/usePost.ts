import { useParams } from 'react-router-dom';

import type * as PostAction from '../domains/post/post.action';

import { useGetPost } from '../domains/post/post.api';
import { useGetAccountInfo } from '../domains/account/account.api';

const usePost = (): { isEditable: boolean } => {
  const { id: postId } = useParams();
  const { data: post } = useGetPost(postId as unknown as PostAction.GetPostCriteria);
  const { data: userInfo } = useGetAccountInfo();

  return { isEditable: post?.writer.id === userInfo?.id };
};

export default usePost;
