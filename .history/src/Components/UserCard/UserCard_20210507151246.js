import React from 'react';

import './UserCard.css';

const UserCard = (props) => {
	return (
		<div className="user-card">
			<div className="user-name">
				<h5>{props.user.name}</h5>
			</div>
			<div className="user-age">
				<h5>{props.user.age} years old</h5>
			</div>
		</div>
	);
};

export default UserCard;
