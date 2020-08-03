import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:4000/api'
})

export const getToDoAPI = () => {
    return instance.get('/todos')
}
export const addToDoAPI = (body) => {
    return instance.post('/addtodo', body)
}
export const deleteToDoAPI = (id) => {
    return instance.delete(`/delete/${id}`)
}
export const getToDosCountAPI = () => {
    return instance.get(`/count`)
}
export const loginAPI = (body) => {
    return instance.post(`/auth`, body)
}
export const getAuthAPI = (body) => {
    return instance.get(`/getauth`, body)
}
export const confirmAuthAPI = (authStatus) => {
    return instance.post(`/authstatus`, {auth: authStatus})
}
export const changeStatusAPI = (status, id) => {
    return instance.post(`/updatestatus`, {status, id})
}
export const adminChangedAPI = (id, todo, changed, isAuth) => {
    return instance.post(`/changed`, {id, todo, changed, isAuth})
}
