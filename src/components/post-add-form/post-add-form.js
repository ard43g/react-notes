import React, {Component} from 'react';

const PostAddForm = ({onAdd}) => {
	return (
		<div className="bottom-panel d-flex">
			<input
				type="text"
				placeholder="О чем вы думаете?"
				className="form-control new-post-label"
			/>
			<button
				type="submit"
				className="btn btn-outline-secondary"
				onClick = {() => onAdd('hello')}>
				Добавить</button>
		</div>
	)
}
export default PostAddForm;

/* export default class PostAddForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			value: "{body}",
		}
	}
	render() {
		const {onAdd} = this.props;
		const {value} = this.state;
		return (
			<form className="bottom-panel d-flex">
				<input
					type="text"
					placeholder="О чем вы думаете?"
					className="form-control new-post-label"
				/>
				<button
					type="submit"
					className="btn btn-outline-secondary"
					onClick= {() => onAdd('hello')}>
					Добавить</button>
			</form>
		)
	}

} */

