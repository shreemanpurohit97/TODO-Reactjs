import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class InputItem extends Component {
	render() {
		const { title, handledelete, handleEdit } = this.props;
		return (
			<div>
				<h6>{title}</h6>
				<DeleteIcon onClick={handledelete} />
				<EditIcon onClick={handleEdit} />
			</div>
		);
	}
}
