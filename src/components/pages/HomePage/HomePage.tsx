import Contents from '../../organisms/Contents';
// TODO: Filter 얘 organisms로 위치 변경될 수도 있어
import Filter from '../../molecules/Filter';

// TODO: 구조를 이렇게 잡고 가는 게 맞는건가
// HomePage에서는 큰 틀 잡고 들어가는데, DetailPage에서는 바로 로직 시작돼서
const HomePage = () => (
  <>
    <Filter />
    <Contents />
  </>
);

export default HomePage;
