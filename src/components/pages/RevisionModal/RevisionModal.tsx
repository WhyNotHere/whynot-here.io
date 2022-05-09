import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostAsync } from '../../../apis/request';
import Modal from '../../Modal';

type RevisionModalProps = {
  onHide: () => void;
};

const RevisionModal = (props: RevisionModalProps) => {
  const { onHide } = props;
  const { id } = useParams<Record<string, string | undefined>>();

  // TODO: 분리
  const updateInitialValues = useCallback(async (id: string | undefined) => {
    try {
      const postInfo = await getPostAsync(id);

      console.log(postInfo);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    updateInitialValues(id);
  }, [updateInitialValues, id]);

  return (
    <Modal title="글쓰기" submitTitle="저장" onHide={onHide}>
      <div>revision Modal</div>
    </Modal>
  );
};

export default RevisionModal;
