import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './Loader';

export default function App() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('https://randomuser.me/api/?results=10&nat=us');
				const users = await response.json();
				setData(users.results);
				setIsLoading(false);
			} catch (error) {
				setError(error.message);
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	const renderUser = () => {
		if (isLoading) return <Loader />;
		if (error) return <div className='error'>{error}</div>;

		return (
			<div>
				{data.map(user => (
					<div key={user.login.uuid}>
						<img src={user.picture.large} alt='avatar' />
						<h2>
							{user.name.first} {user.name.last}
						</h2>
					</div>
				))}
			</div>
		);
	};

	return <div className='App'>{renderUser()}</div>;
}
