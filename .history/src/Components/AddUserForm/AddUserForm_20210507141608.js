import React, { useState } from 'react';

import Button from '../Button/Button';
import './AddUserForm.css';

const AddUserForm = (props) => {
	const [
		enteredUsername,
		setEnteredUsername
	] = useState('');
	const [
		enteredAge,
		setEnteredAge
	] = useState(0);

	const usernameHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
	};

	return (
		<form className="add-user-form" onSubmit={submitHandler}>
			<div>
				<div className="add-user-form__username">
					<label>Username</label>
					<input type="text" value={enteredUsername} onChange={usernameHandler} />
				</div>
				<div className="add-user-form__age">
					<label>Age</label>
					<input type="number" value={enteredAge} onChange={ageHandler} />
				</div>
				<div className="add-user-form__button">
					<Button />
				</div>
			</div>
		</form>
	);
};

export default AddUserForm;
