import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import ToDo from "./ToDo";
import {
    adminChangedThunk,
    changeStatusThunk,
    confirmAuthThunk,
    deleteToDoThunk,
    getToDosCountThunk,
    getToDosThunk, showAlert,
    sortEmailsByABC,
    sortEmailsByZYX,
    sortNamesByABC,
    sortNamesByZYX,
    sortToDosByABC,
    sortToDosByZYX
} from "../redux/actions";
import ToDoTitle from "./ToDoTitle";
import Pagination from "./Pagination";


const ToDoList = ({todos, getToDosThunk, deleteToDoThunk, getToDosCountThunk, pageSize, toDosCount, sortNamesByABC, isAuth, showAlert,
                      sortNamesByZYX, sortEmailsByABC, sortToDosByABC, sortEmailsByZYX, sortToDosByZYX, alert, changeStatusThunk, adminChangedThunk}) => {

    const [todosPage, setTodosPage] = useState([...todos].splice(0, 3))

    useEffect(() => {
        getToDosThunk()
        getToDosCountThunk()
    }, [])

    useEffect(() => {
        setTodosPage([...todos].splice(0, 3))
    }, [todos])

    const onChangedPage = (currentPage) => {
        setTodosPage([...todos].splice(currentPage * 3, 3))
    }

    return (
        <div>
            {alert && <div className="alert alert-danger mt-5 mb-n4" role="alert">
                {alert}
            </div>}
            <table className="table table-striped align-middle table-hover mt-5 mb-5 ">
                <thead className={"thead-dark"}>
                <ToDoTitle sortNamesByABC={sortNamesByABC}
                           sortNamesByZYX={sortNamesByZYX}
                           sortEmailsByABC={sortEmailsByABC}
                           sortToDosByABC={sortToDosByABC}
                           sortEmailsByZYX={sortEmailsByZYX}
                           sortToDosByZYX={sortToDosByZYX}
                           isAuth={isAuth}
                />
                </thead>
                <tbody>
                {todosPage.map(t => <ToDo todoItem={t}
                                          key={t.id}
                                          deleteToDoThunk={deleteToDoThunk}
                                          changeStatusThunk={changeStatusThunk}
                                          adminChangedThunk={adminChangedThunk}
                                          isAuth={isAuth}
                                          showAlert={showAlert}
                />)}
                </tbody>
            </table>
            {todosPage.length == 0 && <h1 style={{textAlign: 'center'}}>You don`t have tasks</h1>}
            <Pagination toDosCount={toDosCount}
                        pageSize={pageSize}
                        onChangedPage={onChangedPage}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.toDoDatas.todos,
    toDosCount: state.toDoDatas.toDosCount,
    pageSize: state.toDoDatas.pageSize,
    alert: state.toDoDatas.alert,
    auth: state.toDoDatas.auth,
    isAuth: state.toDoDatas.isAuth
})
export default connect(mapStateToProps, {getToDosThunk,
    deleteToDoThunk,
    getToDosCountThunk,
    confirmAuthThunk,
    sortNamesByABC,
    sortNamesByZYX,
    sortEmailsByABC,
    sortToDosByABC,
    sortEmailsByZYX,
    sortToDosByZYX,
    changeStatusThunk,
    adminChangedThunk,
    showAlert
})(ToDoList)
