import Filter from './components/molecules/Filter';
import Contents from './components/organisms/Contents';

// TODO: 구조를 이렇게 잡고 가는 게 맞는건가
// MainPage에서는 큰 틀 잡고 들어가는데, DetailPage에서는 바로 로직 시작돼서
const MainPage = () => (
  <>
    <Filter />
    <Contents />
  </>
);

export default MainPage;
