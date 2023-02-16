import Papa from 'papaparse';

export const parseCsv = async () => {
	let parsedData = () => {
		return new Promise((resolve) => {
			Papa.parse('../data/alarm.csv', {
				download: true,
				skipEmptyLines: true,
				complete: (result) => {
					// parsedData = parsedData.concat(...[result.data]);
					// const end = Date.now();
					// const time = end - start;
					// console.log(new Date(time).getMilliseconds());

					const transformedData = result.data.map((item) => {
						const separatedData = item
							.join()
							.replaceAll("'", '')
							.replaceAll('"', '')
							.replaceAll('[', '')
							.replaceAll(']', '')
							.trim()
							.split(',');
						return separatedData;
					});
					resolve(transformedData);
					return transformedData;
				},
			});
		});
	};
	const newData = await parsedData();
	return newData;
};
