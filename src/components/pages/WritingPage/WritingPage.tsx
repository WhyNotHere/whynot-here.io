import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postWritingAsync } from '../../../apis/request';

import * as Styled from './WritingPage.styled';

// TODO: 이미지 임의로 넣어놓음
const initialValues = {
  title: '',
  content: '',
  postImg:
    'https://user-images.githubusercontent.com/40762111/162617063-06791489-73a0-4249-9c4d-a9b515449a2a.png',
  jobIds: [] as Array<number>,
};

const WritingPage = () => {
  const [values, setValues] = useState(initialValues);
  const [tempJobIds, setTempJobIds] = useState<Array<number>>([]);
  const navigate = useNavigate();

  const handleContents = useCallback(
    (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = event.target;

      setValues({ ...values, [name]: value });
    },
    [values],
  );

  const handleFilter = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!(event.target instanceof HTMLButtonElement)) {
        return;
      }

      const id = Number(event.target.dataset.id);

      if (tempJobIds.includes(id)) {
        setTempJobIds([...tempJobIds].filter((jobId) => jobId !== id).sort());
      } else {
        setTempJobIds([...tempJobIds, id].sort());
      }
    },
    [tempJobIds],
  );

  const handleWriting = useCallback(
    async (event: React.SyntheticEvent) => {
      event?.preventDefault();

      try {
        await postWritingAsync(values);
        navigate('/');
      } catch (error) {
        alert('다시 시도해 주세요.');
      }
    },
    [values, navigate],
  );

  /* eslint-disable */
  useEffect(() => setValues({ ...values, jobIds: tempJobIds }), [tempJobIds]);

  return (
    <Styled.Container>
      <input
        name="title"
        value={values.title}
        placeholder="제목을 입력해 주세요"
        onChange={handleContents}
      />
      <input type="file" />
      {/* TODO: 여기 아래를 컴포넌트로 분리 */}
      <Styled.FilterContainer>
        <Styled.Button
          $type={tempJobIds.includes(1) ? 'contained' : 'text'}
          data-id="1"
          onClick={handleFilter}
        >
          개발자
        </Styled.Button>
        <Styled.Button
          $type={tempJobIds.includes(2) ? 'contained' : 'text'}
          data-id="2"
          onClick={handleFilter}
        >
          디자이너
        </Styled.Button>
        <Styled.Button
          $type={tempJobIds.includes(3) ? 'contained' : 'text'}
          data-id="3"
          onClick={handleFilter}
        >
          기획자
        </Styled.Button>
        <Styled.Button
          $type={tempJobIds.includes(4) ? 'contained' : 'text'}
          data-id="4"
          onClick={handleFilter}
        >
          기타
        </Styled.Button>
      </Styled.FilterContainer>
      <Styled.TextArea name="content" value={values.content} onChange={handleContents} />
      <Styled.SubmitContainer onSubmit={handleWriting}>
        <Styled.Button $type="text">취소</Styled.Button>
        <Styled.Button $type="contained">등록</Styled.Button>
      </Styled.SubmitContainer>
    </Styled.Container>
  );
};

export default WritingPage;
