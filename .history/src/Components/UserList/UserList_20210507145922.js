import React from 'react';

import UserCard from '../UserCard/UserCard';
import './UserList.css';

const UserList = (props) => {
	return (
		<div className="list-container">
			<div className="header">
				<h3>List of users</h3>
			</div>
			<div className="user-list">
				{props.listOfUsers.map((user) => {
					return <UserCard user={user} />;
				})}
			</div>
		</div>
	);
};

export default UserList;
