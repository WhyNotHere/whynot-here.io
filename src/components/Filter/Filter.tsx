// 이후에 넣을 컴포넌트에 따라서 molecules가 아닐 수도 있음

import React, { Dispatch, SetStateAction, useCallback } from 'react';

import { SearchFilter } from './Filter.type';

import * as Styled from './Filter.styled';
import * as Utils from './Filter.utils';

type FilterProps = {
  searchFilter: Array<SearchFilter>;
  setSearchFilter: Dispatch<SetStateAction<SearchFilter[]>>;
};

const Filter = (props: FilterProps) => {
  const { searchFilter, setSearchFilter } = props;

  const handleSearchFilter = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!(event.target instanceof HTMLButtonElement)) {
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const filter = event.target.dataset.filter!;

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      Utils.setFilter(filter!, searchFilter, setSearchFilter);
    },
    [searchFilter, setSearchFilter],
  );

  return (
    <Styled.Container>
      <Styled.Button
        selected={!!searchFilter.includes('all')}
        data-filter="all"
        onClick={handleSearchFilter}
      >
        전체
      </Styled.Button>
      <Styled.Button
        selected={!!searchFilter.includes('developer')}
        data-filter="developer"
        onClick={handleSearchFilter}
      >
        개발자
      </Styled.Button>
      <Styled.Button
        selected={!!searchFilter.includes('designer')}
        data-filter="designer"
        onClick={handleSearchFilter}
      >
        디자이너
      </Styled.Button>
      <Styled.Button
        selected={!!searchFilter.includes('planner')}
        data-filter="planner"
        onClick={handleSearchFilter}
      >
        기획자
      </Styled.Button>
      <Styled.Button
        selected={!!searchFilter.includes('etc')}
        data-filter="etc"
        onClick={handleSearchFilter}
      >
        기타
      </Styled.Button>
    </Styled.Container>
  );
};

export default Filter;
