import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const url = 'http://localhost:4701/techStatuses';

function App() {
	const [techStatuses, setTechStatuses] = useState([]);

	useEffect(() => {
		(async () => {
      const response = await axios.get(url);
      const _techStatuses = response.data;
      setTechStatuses(_techStatuses);

		})();
	}, []);

	return (
		<div>
			<div>There are {techStatuses.length} statuses.</div>
		</div>
	);
}

export default App;
