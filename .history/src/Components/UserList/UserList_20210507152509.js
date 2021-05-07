import React from 'react';

import UserCard from '../UserCard/UserCard';
import './UserList.css';

const UserList = (props) => {
	return (
		<div className="list-container">
			<div className="header">
				<h3>List of users</h3>
			</div>
			<table className="user-table">
				<tr>
					<th>Name</th>
					<th>Age</th>
				</tr>
				{props.listOfUsers.map((user) => {
					return (
						<tr>
							<UserCard user={user} />
						</tr>
					);
				})}
			</table>
		</div>
	);
};

export default UserList;
