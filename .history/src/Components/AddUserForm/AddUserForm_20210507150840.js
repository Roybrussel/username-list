import React, { useState } from 'react';

import Button from '../Button/Button';
import './AddUserForm.css';

const AddUserForm = (props) => {
	const [
		enteredName,
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

		const userDetails = {
			name: enteredName,
			age: enteredAge
		};

		props.getNewUserDetails(userDetails);
		setEnteredUsername('');
		setEnteredAge(0);
	};

	return (
		<form className="add-user-form" onSubmit={submitHandler}>
			<div>
				<div className="add-user-form__username">
					<label>Name</label>
					<input type="text" value={enteredName} onChange={usernameHandler} />
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
