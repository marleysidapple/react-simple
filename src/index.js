import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBwRtMv0WN-3VJyCbzBd2AAtK-t3HBxJ10';


const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App/>, document.querySelector('.container'));