import React from 'react';

import './UserCard.css';

const UserCard = (props) => {
	return (
		<tr>
			<td className="user-name">
				<h5>{props.user.name}</h5>
			</td>
			<td className="user-age">
				<h5>{props.user.age} years old</h5>
			</td>
		</tr>
	);
};

export default UserCard;
