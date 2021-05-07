import React, { useState } from 'react';

import Button from '../Button/Button';
import './AddUserForm.css';

const AddUserForm = (props) => {
	const [
		isValid,
		setIsValid
	] = useState(true);

	const [
		enteredName,
		setEnteredUsername
	] = useState('');

	const [
		enteredAge,
		setEnteredAge
	] = useState(0);

	const usernameHandler = (event) => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
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

		if (enteredName.trim().length === 0) {
			setIsValid(false);
			return;
		}

		props.getNewUserDetails(userDetails);
		setEnteredUsername('');
		setEnteredAge(0);
	};

	return (
		<form className="add-user-form" onSubmit={submitHandler}>
			<div>
				<div className={`add-user-form__username ${!isValid ? 'invalid' : ''}`}>
					<label>{!isValid ? 'Name is required' : 'Name'}</label>
					<input type="text" className="" value={enteredName} onChange={usernameHandler} />
				</div>
				<div className="add-user-form__age">
					<label>Age</label>
					<input type="number" min={0} value={enteredAge} onChange={ageHandler} />
				</div>
				<div className="add-user-form__button">
					<Button />
				</div>
			</div>
		</form>
	);
};

export default AddUserForm;
