import React from "react";

const UserList = (props) => {
    console.log(props.userList)
    return (
    <ul className="expenses-list">
        {props.userList.map((user) => {
            
            {<h2>Name : {user.name} </h2>}
            {<h2>Age : {user.age} </h2>}
        })}
    </ul>
    );
}

export default UserList;