import './App.css';
import AddUserForm from '../src/Components/AddUserForm/AddUserForm';

function App() {
	const userDetails = (props) => {
		const newUser = [
			(username: props.username),
			(age: props.age)
		];
	};

	return (
		<div className="App">
			<AddUserForm />
		</div>
	);
}

export default App;
