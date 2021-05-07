import React from 'react';

import './UserCard.css';

const UserCard = (props) => {
	return (
		<tr>
			<td className="user-name">
				<p>{props.user.name}</p>
			</td>
			<td className="user-age">
				<p>{props.user.age} years old</p>
			</td>
		</tr>
	);
};

export default UserCard;
