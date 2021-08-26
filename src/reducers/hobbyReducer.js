const initialState = {
  list: [],
  activeId: null,
};

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HOBBY': {
      // Mỗi lần muốn thay đổi state liên quan tới obj/array phải clone ra một obj mới để tránh trường hợp bị tham chiếu
      const newList = [...state.list];
      newList.push(action.payload);

      return {
        ...state,
        list: newList,
      };
    }

    case 'SET_ACTIVE_HOBBY': {
      return {
        ...state,
        activeId: action.payload.id,
      };
    }

    default:
      return state;
  }
};

export default hobbyReducer;
