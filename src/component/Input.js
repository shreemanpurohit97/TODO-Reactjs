import React, { Component } from 'react';

export default class Input extends Component {
	render() {
		const { handleChange, item, handleSubmit } = this.props;
		return (
			<div>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="add item" value={item} onChange={handleChange} />
					<button>Add</button>
				</form>
			</div>
		);
	}
}
