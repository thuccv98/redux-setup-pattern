import { useSelector } from 'react-redux';
import HobbyList from '../components/HobbyList';

const HomePage = (props) => {
  // Lay cai list trong hobbyReducer su dung useSelector
  const hobbyList = useSelector((state) => state.hobby.list);
  console.log('hobby list: ', hobbyList);

  return (
    <div className="home-page">
      <h1>Redux</h1>
      <HobbyList hobbyList={hobbyList}></HobbyList>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
