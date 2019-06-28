import { noteData } from './firebaseConnect';

var redux = require('redux');

const noteInitialState = {
    isEdit: false,
    editItem: {},
    isAdd: false,
    alertShow: false,
    AlertContent: '',
    AlertType:''
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem);
            console.log('Them du lieu ' + JSON.stringify(action.getItem) + 'thanh cong');
            return state

        case "CHANGE_EDIT_STATUS":
            return { ...state, isEdit: !state.isEdit }

        case "CHANGE_ADD_STATUS":
            return { ...state, isAdd: !state.isAdd }

        case "ALERT_ON":
            return { ...state, alertShow: true , AlertContent:action.alertContent, AlertType:action.alertType}

        case "ALERT_OFF":
            return { ...state, alertShow: false  }

        case "GET_EDIT_DATA":
            return { ...state, editItem: action.editObject }


        case "EDIT":
            noteData.child(action.getItem.id).update({
                title: action.getItem.title,
                content: action.getItem.content
            })
            console.log('da cap nhat du lieu ' + JSON.stringify(action.getItem));
            return { ...state, editItem: {} }

        case "DELETE":
            noteData.child(action.deleteId).remove();
            return state

        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function () {
    console.log(JSON.stringify(store.getState()));
})
export default store;