import React from 'react';

import UserCard from '../UserCard/UserCard';
import './UserList.css';

const UserList = () => {
	return (
		<div className="list-container">
			<div className="header">
				<h3>List of users</h3>
			</div>
			<div className="user-list">
				<UserCard />
			</div>
		</div>
	);
};

export default UserList;
