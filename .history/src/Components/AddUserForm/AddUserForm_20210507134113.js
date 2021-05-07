import React from 'react';

const AddUserForm = () => {
	return (
		<form>
			<div>
				<div>
					<label>Username</label>
					<input type="text" value={enteredUsername} />
				</div>
				<div>
					<label>Age</label>
					<input type="number" value={enteredAge} />
				</div>
			</div>
		</form>
	);
};

export default AddUserForm;
