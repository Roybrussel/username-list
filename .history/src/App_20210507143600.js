import './App.css';

import AddUserForm from '../src/Components/AddUserForm/AddUserForm';
import UserList from '../src/Components/UserList';

function App() {
	const getNewUserDetails = (newUserDetails) => {
		const newUser = {
			username: newUserDetails.username,
			age: newUserDetails.age
		};
	};

	return (
		<div className="App">
			<AddUserForm getNewUserDetails={getNewUserDetails} />
			<UserList />
		</div>
	);
}

export default App;
