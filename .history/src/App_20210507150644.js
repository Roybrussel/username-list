import React, { useState } from 'react';

import './App.css';

import AddUserForm from '../src/Components/AddUserForm/AddUserForm';
import UserList from '../src/Components/UserList/UserList';

const DUMMY_USER = [
	{
		name: 'Roy-Arne',
		age: 28
	}
];

function App() {
	const [
		listOfUsers,
		setListOfUsers
	] = useState(DUMMY_USER);

	const getNewUserDetails = (newUserDetails) => {
		setListOfUsers((prevListOfUsers) => {
			return [
				newUserDetails,
				...prevListOfUsers
			];
		});
	};

	return (
		<div className="App">
			<AddUserForm getNewUserDetails={getNewUserDetails} />
			<UserList listOfUsers={listOfUsers} />
		</div>
	);
}

export default App;
