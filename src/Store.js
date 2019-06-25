
import numReducer from './reducers/numReducer';
import editStatusReducer from './reducers/editStatusReducer';

var redux = require('redux');

var oldSatate = {
    num: ["man hinh", "chuot", "ban phim"],
    editStatus: true
}


const allReducer = redux.combineReducers({
    num : numReducer,
    editStatus : editStatusReducer
})

var store1 = redux.createStore(allReducer);
store1.subscribe(() => {
    console.log(JSON.stringify(store1.getState()));
})

store1.dispatch({ type: "CHANGE_EDIT_STATUS" });
store1.dispatch({ type: "ADD_NEW", newItem: "CPU" })
store1.dispatch({ type: "DELETE", index: 1 });

export default store1;