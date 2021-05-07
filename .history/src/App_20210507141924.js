import './App.css';
import AddUserForm from '../src/Components/AddUserForm/AddUserForm';

function App() {
	const userDetails = (props) => {
		const newUser = [
			(username: props.username),
			(age: props)
		];
	};

	return (
		<div className="App">
			<AddUserForm />
		</div>
	);
}

export default App;
