import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setDetails } from '../../app/slices/exhausterDetailsSlice';
import { parseCsv } from '../../helpers/parseCsv';

import { Exhauster } from '../../entities';
import styles from './Exhausters.module.scss';

export const Exhausters = () => {
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
		setInterval(() => {
			newData();
		}, 60000);
	}, []);
	return (
		<section className={styles.wrapper}>
			<p>Exhausters</p>
			<div>
				<h2>Алгомашина №1</h2>
				<Exhauster id={1} />
			</div>
			<Link to={'/home'}>Назад</Link>
		</section>
	);
};
