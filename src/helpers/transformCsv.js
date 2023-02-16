export const transformData = (parsedData) => {
	const transformedData = parsedData.map((item) => {
		const separatedData = item
			.replaceAll("'", '')
			.replaceAll('[', '')
			.replaceAll(']', '')
			.split(',');
		return { date, value };
	});
	const datesArr = transformedData.map((item) => item.date);
	const valuesArr = transformedData.map((item) => item.value);
	return { datesArr, valuesArr };
};
