import React from 'react';

const PostStatusFilter = () => {
	return (
		<div className='btn-group'>
			<button type= 'button' className="btn btn-all">Все</button>
			<button type= 'button' className="btn btn-outline-secondary ">Понравились</button>
		</div>
	)
}

export default PostStatusFilter;