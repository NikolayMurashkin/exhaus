import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setExhauster } from '../../../app/slices/exhausterDetailsSlice';
import styles from '../model/Exhauster.module.scss';
import { ArrowRightIcon } from '../../../../public/icons/ArrowRightIcon';
import { Scheme } from '../../../../public/icons/Scheme';
import { DropdownItem } from '../../../shared/ui/dropdownItem/DropdownItem';

export const Exhauster = ({ id, exhausterName, rotorName, data }) => {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const handleClick = (path) => {
		dispatch(setExhauster({ exhausterName, id }));
		navigate(path);
	};

	const { tagTime, daysToAlarm } = useSelector((state) => state.exhauster);

	const warningRef = useRef(null);
	const allBearingsRef = useRef(null);

	const openDropdownHandler = (dropdownRef) => {
		if (dropdownRef.current !== null) {
			dropdownRef.current.classList.toggle(styles.opened);
		}
	};
	if (data) {
		const normalBearings = data.filter((bearing) => {
			return bearing.temp < 30 && bearing.vibr < 3;
		});
		const dangerBearings = data.filter(
			(bearing) => bearing.temp >= 75 || bearing.vibr >= 7.09
		);
		const warningBearings = data.filter((bearing) => {
			return (
				!dangerBearings.some((item) => bearing.temp === item.temp) &&
				((bearing.temp >= 30 && bearing.temp < 75) ||
					(bearing.vibr >= 3 && bearing.vibr < 7.09))
			);
		});
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
							<span>
								{new Date(tagTime).toLocaleDateString()}
							</span>
						</div>
						<button className={styles.change}>Изменить</button>
					</div>
					<div className={styles.main}>
						<span className={styles.last}>
							Последняя замена ротера
						</span>
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
							{dangerBearings.map((bearing) => {
								return (
									<DropdownItem
										key={bearing.name}
										text={`№${bearing.name} п-к`}
										temp={
											bearing.temp >= 75
												? '#eb5835'
												: bearing.temp >= 30
												? '#f69112'
												: '#868686'
										}
										vibr={
											bearing.vibr >= 7.09
												? '#eb5835'
												: bearing.vibr >= 3
												? '#f69112'
												: '#868686'
										}
									/>
								);
							})}
							{warningBearings.map((bearing) => {
								return (
									<DropdownItem
										key={bearing.name}
										text={`№${bearing.name} п-к`}
										temp={
											bearing.temp >= 75
												? '#868686'
												: bearing.temp >= 30
												? '#f69112'
												: '#868686'
										}
										vibr={
											bearing.vibr >= 7.09
												? '#868686'
												: bearing.vibr >= 3
												? '#f69112'
												: '#868686'
										}
									/>
								);
							})}
						</div>
						<div className={styles.dropdown} ref={allBearingsRef}>
							<div
								onClick={() =>
									openDropdownHandler(allBearingsRef)
								}
								className={styles.dropdown__title}
							>
								<span className={styles.icon}>
									<ArrowRightIcon />
								</span>
								Все подшипники
							</div>
							{normalBearings.map((bearing) => {
								return (
									<DropdownItem
										key={bearing.name}
										text={`№${bearing.name} п-к`}
										temp={
											bearing.temp >= 75
												? '#868686'
												: bearing.temp >= 30
												? '#f69112'
												: '#868686'
										}
										vibr={
											bearing.vibr >= 7.09
												? '#868686'
												: bearing.vibr >= 3
												? '#f69112'
												: '#868686'
										}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		);
	}
};
