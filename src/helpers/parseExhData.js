import Papa from 'papaparse';

export const parseExhData = async (path) => {
	let parsedData = () => {
		return new Promise((resolve) => {
			Papa.parse(path, {
				download: true,
				skipEmptyLines: true,
				complete: (result) => {
					const dataArr = result.data;
					const transformedData = dataArr.map((item) => {
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
