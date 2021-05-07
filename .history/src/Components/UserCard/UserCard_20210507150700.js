import React from 'react';

import './UserCard.css';

const UserCard = (props) => {
	return (
		<div className="user-card">
			<h5>{props.user.name}</h5>
			<h5>{props.user.age} years old</h5>
		</div>
	);
};

export default UserCard;
