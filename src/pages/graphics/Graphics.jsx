import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Link } from 'react-router-dom';

import { LineChart } from '../../widgets/chart/ui/LineChart';

export const Graphics = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		// setInterval(() => {}, 50000);

		const getData = async () => {
			let parsedData = [];
			const start = Date.now();
			Papa.RemoteChunkSize = 1000000;
			Papa.parse('data/data.csv', {
				download: true,
				chunk: (result) => {
					parsedData = parsedData.concat(...[result.data]);
				},
				skipEmptyLines: true,
				complete: () => {
					const end = Date.now();
					const time = end - start;
					console.log(new Date(time).getMilliseconds());
					setData(parsedData.slice(-100));
				},
			});
		};
		getData();
	}, []);
	if (data.length < 0) {
		return null;
	}
	if (data.length >= 100) {
		return (
			<div className='App'>
				<LineChart parsedData={data} />
				<Link to={'/'}>Назад</Link>
			</div>
		);
	}
	return <div>Loading...</div>;
};
