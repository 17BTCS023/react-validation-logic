import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './UserForm.module.css'

const UserForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState(); // initial value for the error is undefined so we leave it empty

    const onNameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const onAgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
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
        if (+enteredAge < 1) {
            setError({
                title: "Invalid Age!",
                message: "Hey, Please enter a valid age."
            });
            return;
        }
        props.onUserAdded(userInfo)
        setEnteredAge('');
        setEnteredName('');

    }

    const errorHandler = () =>{
        setError(null);
    }

    return (<div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm= {errorHandler}/>}
        <Card>
            <form onSubmit={onSubmitHandler} className={classes.input}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredName} onChange={onNameChangeHandler} />
                <label htmlFor="age">Age(Years)</label>
                <input is="age" type="number" value={enteredAge} onChange={onAgeChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    </div>);

}

export default UserForm;