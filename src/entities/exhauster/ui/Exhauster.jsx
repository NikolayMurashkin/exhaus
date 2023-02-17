import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setExhauster } from '../../../app/slices/exhausterDetailsSlice';
import styles from '../model/Exhauster.module.scss';
import { ArrowRightIcon } from '../../../../public/icons/ArrowRightIcon';
import { Scheme } from '../../../../public/icons/Scheme';
import { DropdownItem } from '../../../shared/ui/dropdownItem/DropdownItem';

export const Exhauster = ({ id, exhausterName, rotorName }) => {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const handleClick = (path) => {
		dispatch(setExhauster({ exhausterName, id }));
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
	return (
		<section className={styles.exhauster}>
			<div className={styles.title}>
				<span className={styles.circle}></span>
				<h4 className={styles.name}>{exhausterName}</h4>
				<button
					className={styles.btn}
					onClick={() => handleClick(`/${id}`)}
				>
					<ArrowRightIcon />
				</button>
			</div>
			<div className={styles.body}>
				<div className={styles.info}>
					<span className={styles.number}>{rotorName}</span>
					<div className={styles.date}>
						<span>{new Date(tagTime).toLocaleDateString()}</span>
					</div>
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
					<Scheme />
				</div>
				<div className={styles.bearingsInfo}>
					<div className={styles.attention}>
						<DropdownItem
							text={'№1 п-к'}
							temp={'#868686'}
							vibr={'#E32112'}
						/>
						<DropdownItem
							text={'№3 п-к'}
							temp={'#F69112'}
							vibr={'#E32112'}
						/>
					</div>
					<div className={styles.dropdown} ref={warningRef}>
						<div
							onClick={() => openDropdownHandler(warningRef)}
							className={styles.dropdown__title}
						>
							<span className={styles.icon}>
								<ArrowRightIcon />
							</span>
							Предупреждение
						</div>
						<DropdownItem
							text={'№7 п-к'}
							temp={'#868686'}
							vibr={'#F69112'}
						/>
					</div>
					<div className={styles.dropdown} ref={allBearingsRef}>
						<div
							onClick={() => openDropdownHandler(allBearingsRef)}
							className={styles.dropdown__title}
						>
							<span className={styles.icon}>
								<ArrowRightIcon />
							</span>
							Все подшипники
						</div>
						<DropdownItem
							text={'№2 п-к'}
							temp={'#868686'}
							vibr={'#868686'}
						/>
						<DropdownItem
							text={'№4 п-к'}
							temp={'#868686'}
							vibr={'#868686'}
						/>
						<DropdownItem
							text={'№5 п-к'}
							temp={'#868686'}
							vibr={'#868686'}
						/>
						<DropdownItem
							text={'№6 п-к'}
							temp={'#868686'}
							vibr={'#868686'}
						/>
						<DropdownItem
							text={'№8 п-к'}
							temp={'#868686'}
							vibr={'#868686'}
						/>
						<DropdownItem
							text={'№9 п-к'}
							temp={'#868686'}
							vibr={'#868686'}
						/>
						<DropdownItem text={'Уровень масла'} oil={'#868686'} />
					</div>
				</div>
			</div>
		</section>
	);
};
