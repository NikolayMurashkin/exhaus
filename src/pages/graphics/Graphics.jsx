import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Link } from 'react-router-dom';

import { LineChart, Sidebar } from '../../widgets/';
import { useSelector } from 'react-redux';
import styles from './Graphics.module.scss';

export const Graphics = () => {
	const [data, setData] = useState([]);
	const { allData } = useSelector((state) => state.exhauster);

	useEffect(() => {
		console.log(allData);
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
			<div className={styles.wrapper}>
				<Sidebar />
				<div className={styles.chart}>
					<LineChart parsedData={data} />
					<Link to={'/home'}>Назад</Link>
				</div>
			</div>
		);
	}
	return <div>Loading...</div>;
};
