import { useEffect, useState } from 'react';

import { getAccountInfoAsync, getPostAsync } from '../apis/request';

type useAuthProps = {
  postId: string | undefined;
};

const useAuth = (props: useAuthProps): { isEditable: boolean } => {
  const { postId } = props;
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    compareWriterIdUserId();
  }, []);

  if (postId === undefined) {
    return { isEditable: false };
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

    setIsEditable(writerId === userId);
  };

  return { isEditable };
};

export default useAuth;
