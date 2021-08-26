import { useDispatch, useSelector } from 'react-redux';
import {
  addNewHobbyAction,
  setActiveHobbyAction,
} from '../actions/hobbyAction';
import HobbyList from '../components/HobbyList';

const randomId = () => {
  // random mot so co 4 chu so
  return Math.trunc(Math.random() * 10000);
};

const HomePage = () => {
  // Lay cai list trong hobbyReducer su dung useSelector
  const hobbyList = useSelector((state) => state.hobby.list);
  // lay activeId trong hobbyReducer
  const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();

  console.log('hobby list: ', hobbyList);

  const handleAddHobbyClick = () => {
    // Random a hobby object: id + title
    const newId = randomId();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    };

    // Dispatch action to add a new hobby to redux store
    dispatch(addNewHobbyAction(newHobby));
  };

  // Dispatch action to change color clicked hobby
  const handleHobbyClick = (hobby) => {
    dispatch(setActiveHobbyAction(hobby));
  };

  return (
    <div className="home-page">
      <h1>Redux</h1>

      <button onClick={handleAddHobbyClick}>Random hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
};

export default HomePage;
