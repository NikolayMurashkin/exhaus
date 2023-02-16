import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import styles from '../model/Exhauster.module.scss';

export const Exhauster = ({ id }) => {
	const navigate = useNavigate();
	const handleClick = (path) => {
		navigate(path);
	};

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

	const warningRef = useRef(null);
	const allBearingsRef = useRef(null);
	const openDropdownHandler = (dropdownRef) => {
		if (dropdownRef.current !== null) {
			dropdownRef.current.classList.toggle(styles.opened);
		}
	};

	const details = useSelector((state) => state.exhauster);
	console.log(details);
	return (
		<section className={styles.exhauster}>
			<div className={styles.title}>
				<span className={styles.name}>Эксгаустер У-171</span>
				<button
					className={styles.btn}
					onClick={() => handleClick(`/${id}`)}
				>
					{'>'}
				</button>
			</div>
			<div className={styles.body}>
				<div className={styles.info}>
					<span className={styles.number}>Ротор № 35к</span>
					<span className={styles.date}>
						{new Date(tagTime).toLocaleDateString()}
					</span>
					<button className={styles.change}>Изменить</button>
				</div>
				<div className={styles.main}>
					<span className={styles.last}>Последняя замена ротера</span>
					<div className={styles.predict}>
						<span className={styles.amount}>6 сут</span>
						<div className={styles.predict__amount}>
							<span>Прогноз</span>
							<span>{parseInt(daysToAlarm)} сут</span>
						</div>
					</div>
					<img src='/images/exhaust_mini.png' alt='Эксгаустер' />
				</div>
				<div className={styles.dropdown} ref={warningRef}>
					<span
						onClick={() => openDropdownHandler(warningRef)}
						className={styles.dropdown__title}
					>
						{'>'} Предупреждение
					</span>
					<div>
						<span>№7 п-к</span>
						<img src='/icons/temp.png' alt='Температура' />
						<img src='/icons/vibr.png' alt='Вибрация' />
					</div>
				</div>
				<div className={styles.dropdown} ref={allBearingsRef}>
					<span
						onClick={() => openDropdownHandler(allBearingsRef)}
						className={styles.dropdown__title}
					>
						{'>'} Все подшипники
					</span>
					<div>
						<div>
							<span>№1 п-к</span>
							<img src='/icons/temp.png' alt='Температура' />
							<img src='/icons/vibr.png' alt='Вибрация' />
						</div>
						<div>
							<span>№2 п-к</span>
							<img src='/icons/temp.png' alt='Температура' />
							<img src='/icons/vibr.png' alt='Вибрация' />
						</div>
						<div>
							<span>№3 п-к</span>
							<img src='/icons/temp.png' alt='Температура' />
							<img src='/icons/vibr.png' alt='Вибрация' />
						</div>
						<div>
							<span>№4 п-к</span>
							<img src='/icons/temp.png' alt='Температура' />
							<img src='/icons/vibr.png' alt='Вибрация' />
						</div>
						<div>
							<span>№5 п-к</span>
							<img src='/icons/temp.png' alt='Температура' />
							<img src='/icons/vibr.png' alt='Вибрация' />
						</div>
						<div>
							<span>Уровень масла</span>
							<img src='/icons/temp.png' alt='Температура' />
							<img src='/icons/oil.png' alt='Вибрация' />
						</div>
					</div>
				</div>
				<button className={styles.sendMsgBtn}>
					Оправить сообщение в SAP
				</button>
			</div>
		</section>
	);
};
