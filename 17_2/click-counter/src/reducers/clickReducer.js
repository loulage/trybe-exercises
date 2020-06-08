import {ADD_CLICK} from '../actions/addClick';

const Initial_State = {
    counter: 0,
};

export function clickReducer(state = Initial_State, action) {
    switch (action.type) {
        case ADD_CLICK:
            return { counter: state.counter + 1 };
        default:
            return state;
    }
}