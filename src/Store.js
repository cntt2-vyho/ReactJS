
import numReducer from './reducers/numReducer';
import editStatusReducer from './reducers/editStatusReducer';

var redux = require('redux');

var oldSatate = {
    num: ["man hinh", "chuot", "ban phim"],
    editStatus: true
}
var reducer1 = (state = oldSatate, action) => {
    switch (action.type) {
        case "CHANGE_EDIT_STATUS":
            return { ...state, editStatus: !state.editStatus };

        case "ADD_NEW":
            return { ...state, num: [...state.num, action.newItem] };

        case "DELETE":
            return { ...state, num: state.num.filter((value, i) => i !== action.index) };

        default:
            return state;
    }

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