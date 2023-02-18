import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { DateRangePicker } from 'rsuite';

import { LineChart, Sidebar } from '../../widgets/';
import { useSelector } from 'react-redux';
import styles from './Graphics.module.scss';
import { FilledButton } from '../../shared/ui/buttons/FilledButton/FilledButton';
import { TextButton } from '../../shared/ui/buttons/textButton/TextButton';

export const Graphics = () => {
	const [period, setPeriod] = useState('');
	const [dateTime, setDateTime] = useState('');

	const { allData, exhauster } = useSelector((state) => state.exhauster);

	const navigate = useNavigate();
	const navigateToSchemeHandle = () => {
		navigate(`/${exhauster.id}`);
	};
	console.log(period);
	console.log(dateTime);

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
					<Sidebar />
					<div className={styles.chart}>
						<LineChart parsedData={allData} />
					</div>
				</div>
			</section>
		);
	}
	return <div>Loading...</div>;
};
