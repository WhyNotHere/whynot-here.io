import { Dispatch, SetStateAction } from 'react';

import { SearchFilter } from './Filter.type';

export const setFilter = (
  filter: string,
  searchFilter: Array<SearchFilter>,
  setSearchFilter: Dispatch<SetStateAction<SearchFilter[]>>,
) => {
  if (filter === 'all') {
    setSearchFilter(['all']);
  } else {
    if (JSON.stringify(searchFilter) === JSON.stringify(['all'])) {
      setSearchFilter([filter] as Array<SearchFilter>);
    } else if (
      JSON.stringify(Array.from(new Set([...searchFilter, filter])).sort()) ===
      JSON.stringify(['developer', 'designer', 'planner', 'etc'].sort())
    ) {
      setSearchFilter(['all']);
    } else {
      if (searchFilter.includes(filter as SearchFilter)) {
        const tempSearchFilter = searchFilter.filter((searchF) => searchF !== filter);
        setSearchFilter(tempSearchFilter.length === 0 ? ['all'] : tempSearchFilter);
      } else {
        const tmpSearchFilter = Array.from(
          new Set([...searchFilter, filter]),
        ) as Array<SearchFilter>;
        setSearchFilter(tmpSearchFilter.sort());
      }
    }
  }
};
