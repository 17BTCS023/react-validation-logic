import React, { useState } from 'react';
import UserForm from './components/Users/UserForm';
import UserList from './components/Users/UserList';
/*
Steps to create this project
1. Form - that has a Username, Age and submit it - done
2. If the fields are empty get a error - Click Okay to make it disappear  - done
3. If the age is negative - error message -  Click Okay to make it disappear - done
4. Is successfully added a user 
  a. display them in a list below - done
  b. Reset the fields after the submit - done

*/

const DUMMY_USERS = [{ name: 'manisha', age: 23 , id: 'g1'}];

const App = () => {

  const [users, setUsers] = useState(DUMMY_USERS)

  const userAddedHandler = userInfo => {
    setUsers((prevState) => {
      return [userInfo, ...prevState];
    })
  }

return (
  <div>
    <UserForm onUserAdded={userAddedHandler} />
    <UserList userList={users} />
  </div>
);
}

export default App;
