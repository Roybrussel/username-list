import React from 'react';

import UserCard from '../UserCard/UserCard';
import './UserList.css';

const UserList = (props) => {
	return (
		<div className="list-container">
			<table className="user-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					{props.listOfUsers.map((user) => {
						return <UserCard user={user} />;
					})}
				</tbody>
			</table>
		</div>
	);
};

export default UserList;
