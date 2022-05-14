import Modal from '../../Modal';

type RevisionModalProps = {
  onHide: () => void;
};

const RevisionModal = (props: RevisionModalProps) => {
  const { onHide } = props;
  // const { id } = useParams<Record<string, string | undefined>>();

  return (
    <Modal title="글쓰기" submitTitle="저장" onHide={onHide}>
      <div>revision Modal</div>
    </Modal>
  );
};

export default RevisionModal;
