import noteData  from './firebaseConnect';

var redux = require('redux');

const noteInitialState = {
    testConnect:'test'
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log('da ket noi duoc voi addData, bien nhan vao la: ' + action.getItem);
            return state
            
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
export default store;