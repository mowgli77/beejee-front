import React, {useState} from 'react';

const ToDoTitle = ({sortNamesByABC, sortNamesByZYX,  sortEmailsByABC, sortToDosByABC, sortEmailsByZYX, sortToDosByZYX, isAuth}) => {
    const [isNamesSorted, setIsNamesSorted] = useState(null)
    const [isEmailSorted, setIsEmailSorted] = useState(null)
    const [isToDoSorted, setIsToDoSorted] = useState(null)
    const sortNames = () => {
        setIsEmailSorted(null)
        setIsToDoSorted(null)
        if (!isNamesSorted) {
        sortNamesByABC()
            setIsNamesSorted(1)
        } else if (isNamesSorted === 1) {
            sortNamesByZYX()
            setIsNamesSorted(0)
        }
    }
    const sortEmails = () => {
        setIsNamesSorted(null)
        setIsToDoSorted(null)
        if (!isEmailSorted) {
            sortEmailsByABC()
            setIsEmailSorted(1)
        } else if (isEmailSorted === 1) {
            sortEmailsByZYX()
            setIsEmailSorted(0)
        }
    }
    const sortToDos = () => {
        setIsNamesSorted(null)
        setIsEmailSorted(null)
        if (!isToDoSorted) {
            sortToDosByABC()
            setIsToDoSorted(1)
        } else if (isToDoSorted === 1) {
            sortToDosByZYX()
            setIsToDoSorted(0)
        }
    }

    return (
        <tr>
            <th scope="col" className={"align-middle "}><button onClick={sortNames} type={"button"} className={"btn btn-dark"}>Name
                {isNamesSorted === 0 ? <i className="large material-icons">expand_more</i> : isNamesSorted === 1 ? <i className="large material-icons">expand_less</i> : null }
            </button></th>
            <th scope="col" className={"align-middle "}><button onClick={sortEmails} type={"button"} className={"btn btn-dark"}>Email
                {isEmailSorted === 0 ? <i className="large material-icons">expand_more</i> : isEmailSorted === 1 ? <i className="large material-icons">expand_less</i> : null }
            </button></th>
            <th scope="col" width={400} className={"align-middle "}><button onClick={sortToDos} type={"button"} className={"btn btn-dark"}>ToDo Description
                {isToDoSorted === 0 ? <i className="large material-icons">expand_more</i> : isToDoSorted === 1 ? <i className="large material-icons">expand_less</i> : null }
            </button></th>
            <th scope="col" width={100} className={"align-middle text-center"}>Status</th>
            <th scope="col" width={100} className={"align-middle text-center"}>Changed by Administrator</th>
            {isAuth == true && <th scope="col" width={150} className={"align-middle "}>Delete Todo</th>}
        </tr>
    );
}

export default ToDoTitle