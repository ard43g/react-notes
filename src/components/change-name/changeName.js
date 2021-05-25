import React from 'react';

const ChangeName = ({change}) =>{
	
	return (
		<button 
		type='submit'
		onClick={change}
		className='btn btn-outline-danger'>Сменить имя</button>
	)
}

export default ChangeName;