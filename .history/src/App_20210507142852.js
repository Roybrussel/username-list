import './App.css';
import AddUserForm from '../src/Components/AddUserForm/AddUserForm';

function App() {
	const getNewUserDetails = (newUserDetails) => {
		console.log(newUserDetails.username + newUserDetails.age);
	};

	return (
		<div className="App">
			<AddUserForm getNewUserDetails={getNewUserDetails} />
		</div>
	);
}

export default App;
