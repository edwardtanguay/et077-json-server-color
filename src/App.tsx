import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import RoadmapSvg from './components/RoadmapSvg';
import { ITechStatus } from './interfaces';

const url = 'http://localhost:4701/techStatuses';

function App() {
	const [techStatuses, setTechStatuses] = useState<ITechStatus[]>([]);

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
      <RoadmapSvg techStatuses={techStatuses} />
		</div>
	);
}

export default App;
