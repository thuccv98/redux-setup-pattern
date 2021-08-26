# Các bước setup Redux trong ReactJS

1. Cài đặt package react-redux và redux

```
yarn add redux react-redux
```

2. Setup reducers và rootReducer

```
// reducers/hobbyReducer.js
const initialState = {
 list: ['Listening to music'],
 selectedId: null,
}
const hobbyReducer = (state = initialState, action) => {
 switch (action.type) {
    case 'ADD_HOBBY': {
        const newList = [...state.list];
        newList.push(action.payload);

        return {
            ...state,
            list: newList,
        }
    }
    default:
        return state;
 }
};
export default hobbyReducer;
```

```
// reducers/rootReducer.js (ROOT)
const rootReducer = combineReducers({
 hobby: hobbyReducer,
 // chẳng hạn có nhiều reducer khác nữa
 one: oneReducer
 two: twoReducer
})
export default rootReducer;
```

3. Setup redux store

```
// src/store.js
const store = createStore(rootReducer);
export default store;
```

4. Setup redux provider cho toàn app: src/index.js

```
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
```

5. Connect vào redux strore từ component

- Với class component: dùng HOC connect()
- Với functional component: dùng hooks useSelector() và useDispatch()

```
function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const dispatch = useDispatch();

    const handleAddHobbyClick = () => {
        const newHobby = 'Coding';
        dispatch({
            type: 'ADD_HOBBY',
            payload: newHobby,
        });
    }

    return (
        <div className="home-page">
            <HobbyList data={hobbyList} />
            <button onClick={handleAddHobbyClick}>Add new hobby</button>
        </div>
    );
}
export default HomePage;
```
