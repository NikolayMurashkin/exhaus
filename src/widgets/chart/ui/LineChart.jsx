import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJs,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

import styles from '../model/LineChart.module.scss';

ChartJs.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
	Legend
);

export const LineChart = ({ parsedData }) => {
	const [dates, setDates] = useState([]);
	const [values, setValues] = useState([]);

	const transformData = () => {
		const transformedData = parsedData.map((item) => {
			const separatedData = item[0]
				.replaceAll("'", '')
				.replaceAll('[', '')
				.replaceAll(']', '')
				.split(',');
			const date = separatedData[0];
			// setDates((prevState) => [...prevState, transformedData[0]]);
			const value = separatedData[1];
			// console.log(JSON.parse(item));
			// const date = item.split(',');
			return { date, value };
		});
		const datesArr = transformedData.map((item) => item.date);
		const valuesArr = transformedData.map((item) => item.value);
		return { datesArr, valuesArr };
	};

	useEffect(() => {
		const { datesArr } = transformData();
		const { valuesArr } = transformData();
		setDates(datesArr);
		setValues(valuesArr);
	}, []);

	const data = {
		// labels: ['Mon', 'Tue', 'Wed'],
		labels: dates,
		datasets: [
			{
				label: 'Легенда индикатора №1',
				// data: [0.15, 0.12, 0.23],
				data: values,
				backgroundColor: 'red',
				borderColor: 'gold',
				pointBorderColor: 'yellow',
				fill: true,
				tension: 0.1,
			},
		],
	};

	const options = {
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Название таблицы',
			},
		},
		scales: {
			y: {
				min: 0,
				max: 0.2,
			},
		},
	};

	return (
		<div className={styles.wrapper}>
			<Line data={data} options={options}></Line>
		</div>
	);
};
