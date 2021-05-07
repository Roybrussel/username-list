import React, { useState } from 'react';

const AddUserForm = () => {
	const [
		enteredUsername,
		setEnteredUsername
	] = useState('');
	const [
		enteredAge,
		setEnteredAge
	] = useState(0);

	const usernameHandler = (event) => {
		setEnteredUsername(event.target.valu);
	};

	const ageHandler = (event) => {
		setEnteredAge(event.target.valu);
	};

	return (
		<form>
			<div>
				<div>
					<label>Username</label>
					<input type="text" value={enteredUsername} onChange={usernameHandler} />
				</div>
				<div>
					<label>Age</label>
					<input type="number" value={enteredAge} onChange={ageHandler} />
				</div>
			</div>
		</form>
	);
};

export default AddUserForm;
