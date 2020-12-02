import { LIST_USER, ADD_USER, EDIT_USER, DEL_USER } from '../actionTypes';

const initialState = {
    list: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case LIST_USER:
            // console.log(action.payload.list);
            // return {
            //     ...state,
            //     list: action.payload.list
            // }
            return Object.assign({}, state, {                 
                list: action.payload.list
            })
        case ADD_USER:
            return state;
        case EDIT_USER:
            return state;
        case DEL_USER:
            const id = action.payload.id;
            const list = state.list;
            console.log(id);

            const path = `http://localhost:5000/users/`;
            fetch(`${path}${id}`, {
                method: 'DELETE'
            })

            for(var index in list) {
                if(list[index].id === id) {
                    list.splice(index, 1)
                }
            }
            return {
                ...state,
                list: [...list]
            };
        default:
            return state;
    }
}