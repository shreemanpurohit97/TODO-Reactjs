import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './component/List';
import Input from './component/Input';

class App extends React.Component {
	state = {
		items: [],
		id: Math.random(),
		item: '',
		editItems: false,
	};

	handleChange = (e) => {
		this.setState({
			item: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const newItem = {
			id: this.state.id,
			title: this.state.item,
		};
		console.log(newItem);
		const updateditem = [...this.state.items, newItem];

		this.setState({
			items: updateditem,
			item: '',
			id: Math.random(),
			editItems: false,
		});
	};
	deletelist = () => {
		this.setState({
			items: [],
		});
	};

	handleDelete = (id) => {
		const filteritem = this.state.items.filter((item) => item.id !== id);
		this.setState({
			items: filteritem,
		});
	};
	handleEdit = (id) => {
		const filteritem = this.state.items.filter((item) => item.id !== id);
		const Selecteditem = this.state.items.find((item) => item.id === id);
		this.setState({
			items: filteritem,
			item: Selecteditem.title,
			editItems: true,
			id: id,
		});
	};
	render() {
		return (
			<div className="App">
				Input
				<Input item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
				<List
					items={this.state.items}
					deletelist={this.deletelist}
					handledelete={this.handleDelete}
					handleEdit={this.handleEdit}
				/>
			</div>
		);
	}
}
export default App;
