import React from 'react';
import './Loader.css';

export default function Loader() {
	return (
		<div className='container'>
			<div className='loader'>
				<div className='ball ball-1' />
				<div className='ball ball-2' />
				<div className='ball ball-3' />
			</div>
		</div>
	);
}
