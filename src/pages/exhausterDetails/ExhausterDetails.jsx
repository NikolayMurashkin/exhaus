import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';

export const ExhausterDetails = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		// setInterval(() => {}, 50000);

		const getData = async () => {
			let parsedData = [];
			const start = Date.now();
			Papa.parse('data/exh3_alarm.csv', {
				download: true,
				skipEmptyLines: true,
				// encoding: 'ISO-8859-1',
				complete: (result) => {
					console.log(result);
					parsedData = parsedData.concat(...[result.data]);
					const end = Date.now();
					const time = end - start;
					console.log(new Date(time).getMilliseconds());

					const transformedData = result.data.map((item) => {
						const separatedData = item
							.join()
							.replaceAll("'", '')
							.replaceAll('[', '')
							.replaceAll(']', '')
							// .replaceAll(' ', '')
							.split(',');
						return separatedData;
					});
					setData(transformedData);
				},
			});
		};
		getData();
	}, []);
	console.log(data);
	if (data.length > 0) {
		return (
			<div>
				<p>ExhausterDetails</p>
				<div>
					<div>
						<span>Tag time: </span>
						{data[0][0]}
					</div>
					<div>
						<span>Vibr1_alarm: </span>
						{data[0][1]}
					</div>
					<div>
						<span>Vibr2_alarm: </span>
						{data[0][2]}
					</div>
					<div>
						<span>Temp1_alarm: </span>
						{data[0][3]}
					</div>
					<div>
						<span>Temp2_alarm: </span>
						{data[0][4]}
					</div>
					<div>
						<span>Time_alarm: </span>
						{data[0][5]}
					</div>
					<div>
						<span>Name_alarm: </span>
						{data[0][6]}
					</div>
					<div>
						<span>Количество дней до выхода из строя: </span>
						{data[0][7]}
					</div>
				</div>
				<Link to={'/exhausters'}>Назад</Link>
			</div>
		);
	}

	if (!data) {
		return <p>Loading...</p>;
	}
};
