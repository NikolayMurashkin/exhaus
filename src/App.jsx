import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setDetails } from './app/slices/exhausterDetailsSlice';
import { parseCsv } from './helpers/parseCsv';
import './App.css';

export default function App() {
	const navigate = useNavigate();
	const handleClick = (path) => {
		navigate(path);
	};

	const dispatch = useDispatch();
	useEffect(() => {
		// setInterval(() => {}, 50000);
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
	}, []);

	return (
		<div>
			<h1>Главная страница</h1>
			<ul>
				<li>
					<button onClick={() => handleClick('/graphics')}>
						Графики
					</button>
				</li>
				<li>
					<button onClick={() => handleClick('/exhausters')}>
						Эксгаустеры
					</button>
				</li>
				<li>
					<button onClick={() => handleClick('/exhauster-details')}>
						Информация об одном эксгаустере
					</button>
				</li>
			</ul>
		</div>
	);
}
