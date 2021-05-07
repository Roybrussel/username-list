import React from 'react';

const AddUserForm = () => {
	return (
		<form>
			<div>
				<div>
					<label>Username</label>
					<input type="text" />
				</div>
				<div>
					<label>Age</label>
					<input type="number" />
				</div>
			</div>
		</form>
	);
};

export default AddUserForm;
