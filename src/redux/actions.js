import { LIST_USER, ADD_USER, EDIT_USER, DEL_USER } from './actionTypes';

export const listUser = (list) => {
    return {
        type: LIST_USER,
        payload: {
            list: list
        }
    }
}

export const addUser = (itemAdd) => {
    return {
        type: ADD_USER,
        payload: {
            item: itemAdd
        }
    }
}

export const editUser = (list) => {
    return {
        type: EDIT_USER,
        payload: {
            list: [...list]
        }
    }
}

export const delUser = (itemID) => {
    return {
        type: DEL_USER,
        payload: {
            id: itemID
        }
    }
}