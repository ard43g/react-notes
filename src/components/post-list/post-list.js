import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css'
const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

	const elements = posts.map((item) => {
		const {id, ...itemProps} = item;
		return (
			<li key = {item.id} className = 'list-group-item'>
				<PostListItem 
				{...itemProps}
				/* label={item.label} 
				important= {item.important}  так как использовал spread и rest оператор и диструктуризацию*/
				onDelete= {() => onDelete(id)}
				onToggleImportant= {()=> onToggleImportant(id)}
				onToggleLionToggleLiked= {()=>onToggleLiked(id)}

				/>
			</li>
		)
	})

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default PostList;