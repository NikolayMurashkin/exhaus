import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Chart } from 'chart.js';

import { LineChart } from './widgets/chart/ui/LineChart';

import './App.css';

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		// setInterval(() => {}, 50000);
		let parsedData = [];
		const start = Date.now();
		Papa.RemoteChunkSize = 1000000;
		Papa.parse('/server/data.csv', {
			download: true,
			chunk: (result) => {
				parsedData = parsedData.concat(...[result.data]);
				console.log(parsedData);
			},
			skipEmptyLines: true,
			complete: () => {
				const end = Date.now();
				const time = end - start;
				console.log(new Date(time).getMilliseconds());
				setData(parsedData.slice(-100));
			},
		});

		// return () => {
		// 	second;
		// };
	}, []);
	if (data.length !== 0) {
		console.log(data);
	}
	if (data.length < 0) {
		return null;
	}
	if (data.length >= 100) {
		return (
			<div className='App'>
				{/* {data.map((item, i) => {
				if (i > 100) {
					return null;
				}
				return <span key={item[0]}>{item}</span>;
			})} */}
				<LineChart parsedData={data} />
			</div>
		);
	}
	return <div>Loading...</div>;
}

export default App;
