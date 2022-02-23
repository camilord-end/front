
const store = Redux.createStore(
    (state = 5) => state
);
const currentState = store.getState();
// Define an action here:
let action = {
    type: 'LOGIN'
}
// Action Creator
function actionCreator(){
    return action;
}