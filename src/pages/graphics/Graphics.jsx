import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DateRangePicker } from 'rsuite';
import { useDispatch, useSelector } from 'react-redux';

import { LineCharts, Sidebar } from '../../widgets/';
import styles from './Graphics.module.scss';
import { FilledButton } from '../../shared/ui/buttons/FilledButton/FilledButton';
import { TextButton } from '../../shared/ui/buttons/textButton/TextButton';
import { FileIcon } from '../../../public/icons/FileIcon';
import { parseExhData } from '../../helpers/parseExhData';
import { setExhausterThree } from '../../app/slices/allExhaustersSlice';

export const Graphics = () => {
	const [period, setPeriod] = useState('');
	const [dateTime, setDateTime] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { allData, exhauster } = useSelector((state) => state.exhauster);
	const [exhausterThree] = useSelector((state) => state.allExhausters);
	useEffect(() => {
		const parsedExhData = async () => {
			const data = await parseExhData('../../data/Exh3_Temp7.csv');
			dispatch(
				setExhausterThree({
					time: data.map((item) => item[0]),
					temp: data.map((item) => item[1]),
				})
			);
			return data;
		};
		console.log(exhausterThree);
		parsedExhData();
	}, []);

	const navigateToSchemeHandle = () => {
		navigate(`/${exhauster.id}`);
	};
	// console.log(period);
	// console.log(dateTime);

	if (allData.length < 0) {
		return <p>Загрузка...</p>;
	}
	if (allData.length > 0) {
		return (
			<section className={styles.wrapper}>
				<div className={styles.header}>
					<div className={styles.dateTime}>
						<select
							className={styles.period}
							onChange={(e) => setPeriod(e.target.value)}
							defaultValue={'default'}
						>
							<option value='default' disabled>
								Временной диапазон
							</option>
							<option value='1'>1 мин</option>
							<option value='10'>10 мин</option>
							<option value='30'>30 мин</option>
							<option value='60'>60 мин</option>
						</select>
						<DateRangePicker
							placeholder={'Выберите диапазон дат'}
							className={styles.calendar}
							onChange={setDateTime}
						/>
					</div>
					<div className={styles.scheme}>
						<span
							onClick={navigateToSchemeHandle}
							className={styles.toGraphicBtn}
						>
							<TextButton text={'Мнемосхема'} />
						</span>
						<FilledButton text={'График'} />
					</div>
				</div>
				<div className={styles.content}>
					<div className={styles.content__header}>
						<div className={styles.content__header_label}>
							<FileIcon />
							{exhauster.label}
						</div>
						<button className={styles.content__header_button}>
							Сохранить в Excel
						</button>
					</div>
					<div className={styles.content__body}>
						<Sidebar />
						<div className={styles.chart}>
							<LineCharts />
						</div>
					</div>
				</div>
			</section>
		);
	}
	return <div>Loading...</div>;
};
