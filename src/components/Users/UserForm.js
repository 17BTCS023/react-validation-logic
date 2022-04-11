import React, { useState, Fragment, useRef , useContext, useReducer, useEffect } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './UserForm.module.css'

const UserForm = (props) => {
    const enteredNameRef = useRef();
    const enteredAgeRef = useRef();
    const [error, setError] = useState(); // initial value for the error is undefined so we leave it empty

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const enteredAge = enteredAgeRef.current.value ;
        const enteredName = enteredNameRef.current.value;
        const userInfo = {
            name: enteredName,
            age: enteredAge,
            id: Math.random().toString()
        }

        if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Hey, Please enter a valid age name and age"
            });
            return;
        }
        if (+enteredAgeRef < 1) {
            setError({
                title: "Invalid Age!",
                message: "Hey, Please enter a valid age."
            });
            return;
        }
        props.onUserAdded(userInfo)
        enteredAgeRef.current.value = '';
        enteredNameRef.current.value = '';

    }

    const errorHandler = () => {
        setError(null);
    }

    return (<Fragment>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card>
            <form onSubmit={onSubmitHandler} className={classes.input}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    ref = {enteredNameRef} />
                <label htmlFor="age">Age(Years)</label>
                <input
                    id="age"
                    type="number"
                    ref = {enteredAgeRef} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    </Fragment>);

}

export default UserForm;