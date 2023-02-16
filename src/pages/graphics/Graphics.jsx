import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Link } from 'react-router-dom';

import { LineChart, Sidebar } from '../../widgets/';
import { useSelector } from 'react-redux';
import styles from './Graphics.module.scss';

export const Graphics = () => {
	// const [data, setData] = useState([]);
	const { allData } = useSelector((state) => state.exhauster);

	if (allData.length < 0) {
		return <p>Загрузка...</p>;
	}
	if (allData.length > 0) {
		return (
			<div className={styles.wrapper}>
				<Sidebar />
				<div className={styles.chart}>
					<LineChart parsedData={allData} />
					<Link to={'/home'}>Назад</Link>
				</div>
			</div>
		);
	}
	return <div>Loading...</div>;
};
