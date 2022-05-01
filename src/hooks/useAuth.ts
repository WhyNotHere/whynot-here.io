import { useEffect, useState } from 'react';

import { getAccountInfoAsync, getPostAsync } from '../apis/request';

type useAuthProps = {
  postId: string | undefined;
};

const useAuth = (props: useAuthProps): { isDeletable: boolean } => {
  const { postId } = props;
  const [isDeletable, setIsDeletable] = useState(false);

  useEffect(() => {
    compareWriterIdUserId();
  }, []);

  if (postId === undefined) {
    return { isDeletable: false };
  }

  const getWriterId = async (postId: string) => {
    try {
      const post = await getPostAsync(postId);

      return post.writer.id;
    } catch (error) {
      console.error(error);
    }
  };

  const getUserId = async () => {
    try {
      const { id: userId } = await getAccountInfoAsync();

      return userId;
    } catch (error) {
      console.error(error);
    }
  };

  const compareWriterIdUserId = async () => {
    const userId = await getUserId();
    const writerId = await getWriterId(postId);

    setIsDeletable(writerId === userId);
  };

  return { isDeletable };
};

export default useAuth;
