import { useRef } from 'react';

import styles from '../model/Sidebar.module.scss';

export const Sidebar = () => {
	const bearingsRef = useRef(null);
	const oneBearingRef = useRef(null);
	const threeBearingRef = useRef(null);
	const oilTankRef = useRef(null);
	const mainEngineRef = useRef(null);
	const coolerRef = useRef(null);

	const openDropdownHandler = (dropdownRef) => {
		if (dropdownRef.current !== null) {
			dropdownRef.current.classList.toggle(styles.opened);
		}
	};

	return (
		<section className={styles.wrapper}>
			<div className={styles.mainTitle}>
				<span className={styles.listHeaders}>Агрегат</span>
				<span className={styles.listHeaders}>Значение</span>
			</div>
			<ul className={styles.mainList}>
				<li ref={bearingsRef} className={styles.mainListItem}>
					<h4
						className={styles.title}
						onClick={() => openDropdownHandler(bearingsRef)}
					>
						Подпишпники
					</h4>
					<ul className={styles.secondaryList}>
						<li className={styles.mainListItem} ref={oneBearingRef}>
							<h5
								className={styles.title}
								onClick={() =>
									openDropdownHandler(oneBearingRef)
								}
							>
								1 ПС
							</h5>
							<ul className={styles.secondaryList}>
								<li className={styles.listItem}>
									<input type='checkbox' name='' id='' />
									<span>T, °C</span>
									<span className={styles.count}>0000</span>
								</li>
								<li className={styles.listItem}>
									<input type='checkbox' name='' id='' />
									<span>Верт, мм/с</span>
									<span className={styles.count}>0000</span>
								</li>
								<li className={styles.listItem}>
									<input type='checkbox' name='' id='' />
									<span>Гориз, мм/c</span>
									<span className={styles.count}>0000</span>
								</li>
								<li className={styles.listItem}>
									<input type='checkbox' name='' id='' />
									<span>Ось, мм/с</span>
									<span className={styles.count}>0000</span>
								</li>
							</ul>
						</li>
						<li
							className={styles.mainListItem}
							ref={threeBearingRef}
						>
							<h5
								className={styles.title}
								onClick={() =>
									openDropdownHandler(threeBearingRef)
								}
							>
								3 ПС
							</h5>
							<ul className={styles.secondaryList}>
								<li className={styles.listItem}>
									<input type='checkbox' name='' id='' />
									<span>T, °C</span>
									<span className={styles.count}>0000</span>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li className={styles.mainListItem} ref={oilTankRef}>
					<h4
						className={styles.title}
						onClick={() => openDropdownHandler(oilTankRef)}
					>
						Маслобак
					</h4>
					<ul className={styles.secondaryList}>
						<li className={styles.listItem}>
							<input type='checkbox' name='' id='' />
							<span>Уровень масла, %</span>
							<span className={styles.count}>0000</span>
						</li>
						<li className={styles.listItem}>
							<input type='checkbox' name='' id='' />
							<span>
								Давление масла, мт/см<sup>2</sup>
							</span>
							<span className={styles.count}>0000</span>
						</li>
					</ul>
				</li>
				<li className={styles.mainListItem} ref={mainEngineRef}>
					<h4
						className={styles.title}
						onClick={() => openDropdownHandler(mainEngineRef)}
					>
						Главный привод
					</h4>
					<ul className={styles.secondaryList}>
						<li className={styles.listItem}>
							<input type='checkbox' name='' id='' />
							<span>Ток, А</span>
							<span className={styles.count}>0000</span>
						</li>
						<li className={styles.listItem}>
							<input type='checkbox' name='' id='' />
							<span>Ток двигателя, А</span>
							<span className={styles.count}>0000</span>
						</li>
						<li className={styles.listItem}>
							<input type='checkbox' name='' id='' />
							<span>Напряжение ротора, кВт</span>
							<span className={styles.count}>0000</span>
						</li>
						<li className={styles.listItem}>
							<input type='checkbox' name='' id='' />
							<span>Напряжение статера, кВт</span>
							<span className={styles.count}>0000</span>
						</li>
					</ul>
				</li>
				<li className={styles.mainListItem} ref={coolerRef}>
					<h4
						className={styles.title}
						onClick={() => openDropdownHandler(coolerRef)}
					>
						Охладитель
					</h4>
					<ul className={styles.secondaryList}>
						<li className={styles.listItem}>
							<input type='checkbox' name='' id='' />
							<span>Т воды до, °C</span>
							<span className={styles.count}>0000</span>
						</li>
						<li className={styles.listItem}>
							<input type='checkbox' name='' id='' />
							<span>Т воды после, °C</span>
							<span className={styles.count}>0000</span>
						</li>
						<li className={styles.listItem}>
							<input type='checkbox' name='' id='' />
							<span>Т масла до, °C</span>
							<span className={styles.count}>0000</span>
						</li>
						<li className={styles.listItem}>
							<input type='checkbox' name='' id='' />
							<span>Т масла после, °C</span>
							<span className={styles.count}>0000</span>
						</li>
					</ul>
				</li>
			</ul>
		</section>
	);
};
