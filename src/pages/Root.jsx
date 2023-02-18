import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setDetails } from '../app/slices/exhausterDetailsSlice';
import { parseCsv } from '../helpers/parseCsv';
import { parseExhData } from '../helpers/parseExhData';
import { setBearingSeven } from '../app/slices/exhThreeSlice';
import styles from './Root.module.scss';
import { Header } from '../entities/header/Header';

export const Root = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const newData = async () => {
			const data = await parseCsv();
			dispatch(
				setDetails({
					tagTime: data[data.length - 1][0],
					vibr1Alarm: data[data.length - 1][1],
					vibr2Alarm: data[data.length - 1][2],
					temp1Alarm: data[data.length - 1][3],
					temp2Alarm: data[data.length - 1][4],
					timeAlarm: data[data.length - 1][5],
					alarmName: data[data.length - 1][6],
					daysToAlarm: data[data.length - 1][7],
					allData: data,
				})
			);
			return data;
		};
		newData();
		const parsedExhData = async () => {
			const data = await parseExhData('../data/Exh3_Temp7.csv');
			dispatch(
				setBearingSeven({
					time: data[data.length - 1][0],
					temp: data[data.length - 1][1],
					vibr: '23.42',
				})
			);
			return data;
		};
		parsedExhData();
		const interval = setInterval(() => {
			console.log('Обновление данных');
			parsedExhData();
		}, 6000);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<div className={styles.root}>
			<Header />
			<Outlet />
		</div>
	);
};
