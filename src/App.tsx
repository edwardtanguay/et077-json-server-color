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
			console.log(_techStatuses);
		})();
	}, []);

	const handleMarkHtmlBox = () => {
		const htmlStatusItem = techStatuses.find((m) => m.id === 'html-box');
		if (htmlStatusItem.status === 'green') {
			htmlStatusItem.status = 'red';
		} else {
			htmlStatusItem.status = 'green';
		}
		const _techStatuses = [...techStatuses];
		setTechStatuses(_techStatuses);

		//save it to the database
		(async () => {
			const response = await axios.put(`${url}`, _techStatuses);
		})();
	};

	return (
		<div>
			<button onClick={() => handleMarkHtmlBox()}>Mark HTML</button>
			<div>There are {techStatuses.length} statuses.</div>
			<RoadmapSvg techStatuses={techStatuses} />
		</div>
	);
}

export default App;
