export const addNewHobbyAction = (hobby) => {
  // action nay return plain object (obj thuan thuy), chua su dung den middleware
  return {
    type: 'ADD_HOBBY',
    payload: hobby,
  };
};

export const setActiveHobbyAction = (hobby) => {
  // action nay return plain object (obj thuan thuy), chua su dung den middleware
  return {
    type: 'SET_ACTIVE_HOBBY',
    payload: hobby,
  };
};
