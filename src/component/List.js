import React, { Component } from 'react';
import InputItem from './InputItem';

export default class List extends Component {
	render() {
		const { items, deletelist, handledelete, handleEdit } = this.props;
		return (
			<div>
				<h3>List</h3>
				{items.map((item) => {
					return (
						<InputItem
							key={item.id}
							title={item.title}
							handledelete={() => handledelete(item.id)}
							handleEdit={() => handleEdit(item.id)}
						/>
					);
				})}
				<button onClick={deletelist}>Clear List</button>
			</div>
		);
	}
}
