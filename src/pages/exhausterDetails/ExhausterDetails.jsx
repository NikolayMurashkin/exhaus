import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setDetails } from '../../app/slices/exhausterDetailsSlice';
import { parseCsv } from '../../helpers/parseCsv';

export const ExhausterDetails = ({ id }) => {
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
	const {
		tagTime,
		vibr1Alarm,
		vibr2Alarm,
		temp1Alarm,
		temp2Alarm,
		timeAlarm,
		alarmName,
		daysToAlarm,
	} = useSelector((state) => state.exhauster);

	if (tagTime) {
		return (
			<div>
				<p>Инрмация об эксгаустере №{id}</p>
				<div>
					<div>
						<span>Tag time: </span>
						{tagTime}
					</div>
					<div>
						<span>Vibr1_alarm: </span>
						{vibr1Alarm}
					</div>
					<div>
						<span>Vibr2_alarm: </span>
						{vibr2Alarm}
					</div>
					<div>
						<span>Temp1_alarm: </span>
						{temp1Alarm}
					</div>
					<div>
						<span>Temp2_alarm: </span>
						{temp2Alarm}
					</div>
					<div>
						<span>Time_alarm: </span>
						{timeAlarm}
					</div>
					<div>
						<span>Name_alarm: </span>
						{alarmName}
					</div>
					<div>
						<span>Количество дней до выхода из строя: </span>
						{daysToAlarm}
					</div>
				</div>
				<Link to={'/exhausters'}>Назад</Link>
			</div>
		);
	}

	if (!tagTime) {
		return <p>Loading...</p>;
	}
};
