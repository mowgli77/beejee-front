import {
    CHANGE_STATUS,
    GET_AUTH,
    GET_TODOS,
    HIDE_ALERT,
    IS_AUTH,
    SHOW_ALERT,
    SORT_EMAILS_BY_ABC,
    SORT_EMAILS_BY_ZYX,
    SORT_NAMES_BY_ABC,
    SORT_NAMES_BY_ZYX,
    SORT_TODOS_BY_ABC,
    SORT_TODOS_BY_ZYX,
    TODOS_COUNT
} from "./types";
import {
    addToDoAPI,
    adminChangedAPI,
    changeStatusAPI,
    confirmAuthAPI,
    deleteToDoAPI,
    getAuthAPI,
    getToDoAPI,
    getToDosCountAPI,
    loginAPI
} from "../API/api";

const getToDos = (payload) => ({type: GET_TODOS, payload})
const getAuth = (payload) => ({type: GET_AUTH, payload})
const getToDosCount = (payload) => ({type: TODOS_COUNT, payload})
const changeStatus = (status, id) => ({type: CHANGE_STATUS, status, id})
export const isAuthAction = (payload) => ({type: IS_AUTH, payload})
export const sortNamesByABC = () => ({type: SORT_NAMES_BY_ABC})
export const sortEmailsByABC = () => ({type: SORT_EMAILS_BY_ABC})
export const sortToDosByABC = () => ({type: SORT_TODOS_BY_ABC})
export const sortNamesByZYX = () => ({type: SORT_NAMES_BY_ZYX})
export const sortEmailsByZYX = () => ({type: SORT_EMAILS_BY_ZYX})
export const sortToDosByZYX = () => ({type: SORT_TODOS_BY_ZYX})

export const showAlert = (text) => dispatch => {
    dispatch({
        type: SHOW_ALERT,
        payload: text
    })
    setTimeout(() => dispatch({
        type: HIDE_ALERT
    }), 2500)
}

export const getToDosThunk = () => async (dispatch) => {
    const response = await getToDoAPI()
    dispatch(getToDos(response.data))
}

export const getToDosCountThunk = () => async (dispatch) => {
    const response = await getToDosCountAPI()
    dispatch(getToDosCount(response.data))
}

export const addNewToDoThunk = (body) => async (dispatch) => {
    const response = await addToDoAPI(body)
    dispatch(showAlert(response.data))
}
export const deleteToDoThunk = (id) => async (dispatch) => {
    const response = await deleteToDoAPI(id)
    dispatch(getToDosThunk())
    dispatch(showAlert(response.data))
}
export const getAuthThunk = () => async (dispatch) => {
    const response = await getAuthAPI()
    dispatch(isAuthAction(response.data.auth))
}
export const confirmAuthThunk = (authStatus) => async (dispatch) => {
    const response = await confirmAuthAPI(authStatus)
}

export const loginThunk = (body) => async (dispatch) => {
        const response = await loginAPI(body)
    if (response.data) {
        dispatch(getAuth(response.data))
        dispatch(isAuthAction(1))
        dispatch(confirmAuthThunk(1))
    } else {
        dispatch(showAlert('Invalid login or password!'))
    }
}
export const changeStatusThunk = (status, id) => async (dispatch) => {
    const response = await changeStatusAPI(status, id)
    dispatch(changeStatus(status, id))
}
export const adminChangedThunk = (id, todo, changed, isAuth) => async (dispatch) => {
    const res = await getAuthAPI()
    if (res.data.auth === 1) {
        const response = await adminChangedAPI(id, todo, changed, isAuth)
        dispatch(getToDosThunk())
    } else {
        dispatch(showAlert('You are not autorized'))
    }
}