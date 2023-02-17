import { useRef } from 'react';

import styles from '../model/Sidebar.module.scss';
import { ArrowRightIcon } from '../../../../public/icons/ArrowRightIcon';

export const Sidebar = () => {
	const bearingsRef = useRef(null);
	const oneBearingRef = useRef(null);
	const twoBearingRef = useRef(null);
	const sevenBearingRef = useRef(null);
	const eightBearingRef = useRef(null);
	const nineBearingRef = useRef(null);
	const threeBearingRef = useRef(null);
	const oilTankRef = useRef(null);
	const mainEngineRef = useRef(null);
	const coolerRef = useRef(null);
	const reducerRef = useRef(null);
	const gasRef = useRef(null);

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
					<div
						className={styles.title}
						onClick={() => openDropdownHandler(bearingsRef)}
					>
						<ArrowRightIcon />
						<h4 className={styles.label}>Подпишпники</h4>
					</div>
					<ul className={styles.secondaryList}>
						<li className={styles.mainListItem} ref={oneBearingRef}>
							<div
								className={styles.title}
								onClick={() =>
									openDropdownHandler(oneBearingRef)
								}
							>
								<ArrowRightIcon />
								<h5 className={styles.label}>1 ПС</h5>
							</div>
							<ul className={styles.secondaryList}>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>T, °C</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>Верт, мм/с</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>Гориз, мм/c</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>Ось, мм/с</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
							</ul>
						</li>
						<li className={styles.mainListItem} ref={twoBearingRef}>
							<div
								className={styles.title}
								onClick={() =>
									openDropdownHandler(twoBearingRef)
								}
							>
								<ArrowRightIcon />
								<h5 className={styles.label}>2 ПС</h5>
							</div>
							<ul className={styles.secondaryList}>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>T, °C</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>Верт, мм/с</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>Гориз, мм/c</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>Ось, мм/с</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
							</ul>
						</li>
						<li
							className={styles.mainListItem}
							ref={sevenBearingRef}
						>
							<div
								className={styles.title}
								onClick={() =>
									openDropdownHandler(sevenBearingRef)
								}
							>
								<ArrowRightIcon />
								<h5 className={styles.label}>7 ПС</h5>
							</div>
							<ul className={styles.secondaryList}>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>T, °C</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>Верт, мм/с</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>Гориз, мм/c</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>Ось, мм/с</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
							</ul>
						</li>
						<li
							className={styles.mainListItem}
							ref={eightBearingRef}
						>
							<div
								className={styles.title}
								onClick={() =>
									openDropdownHandler(eightBearingRef)
								}
							>
								<ArrowRightIcon />
								<h5 className={styles.label}>8 ПС</h5>
							</div>
							<ul className={styles.secondaryList}>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>T, °C</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>Верт, мм/с</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>Гориз, мм/c</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>Ось, мм/с</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
							</ul>
						</li>
						<li
							className={styles.mainListItem}
							ref={nineBearingRef}
						>
							<div
								className={styles.title}
								onClick={() =>
									openDropdownHandler(nineBearingRef)
								}
							>
								<ArrowRightIcon />
								<h5 className={styles.label}>9 ПС</h5>
							</div>
							<ul className={styles.secondaryList}>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>T, °C</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>Верт, мм/с</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>Гориз, мм/c</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
								<li>
									<label className={styles.listItem}>
										<input type='checkbox' />
										<span>Ось, мм/с</span>
										<span className={styles.count}>
											0000
										</span>
									</label>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li ref={reducerRef} className={styles.mainListItem}>
					<div
						className={styles.title}
						onClick={() => openDropdownHandler(reducerRef)}
					>
						<ArrowRightIcon />
						<h4 className={styles.label}>Редуктор</h4>
					</div>
					<ul className={styles.secondaryList}>
						<label className={styles.listItem}>
							<input type='checkbox' />
							<span>T на 3 ПС, °С</span>
							<span className={styles.count}>0000</span>
						</label>
						<label className={styles.listItem}>
							<input type='checkbox' />
							<span>T на 4 ПС, °С</span>
							<span className={styles.count}>0000</span>
						</label>
						<label className={styles.listItem}>
							<input type='checkbox' />
							<span>T на 5 ПС, °С</span>
							<span className={styles.count}>0000</span>
						</label>
						<label className={styles.listItem}>
							<input type='checkbox' />
							<span>T на 6 ПС, °С</span>
							<span className={styles.count}>0000</span>
						</label>
					</ul>
				</li>
				<li ref={gasRef} className={styles.mainListItem}>
					<div
						className={styles.title}
						onClick={() => openDropdownHandler(gasRef)}
					>
						<ArrowRightIcon />
						<h4 className={styles.label}>Газовый коллектор</h4>
					</div>
					<ul className={styles.secondaryList}>
						<label className={styles.listItem}>
							<input type='checkbox' />
							<span>T газа, °С</span>
							<span className={styles.count}>0000</span>
						</label>
						<label className={styles.listItem}>
							<input type='checkbox' />
							<span>Разряжение, мм.в.ст</span>
							<span className={styles.count}>0000</span>
						</label>
						<label className={styles.listItem}>
							<input type='checkbox' />
							<span>Уровень пыли, мг/м3</span>
							<span className={styles.count}>0000</span>
						</label>
					</ul>
				</li>
				<li className={styles.mainListItem} ref={oilTankRef}>
					<div
						className={styles.title}
						onClick={() => openDropdownHandler(oilTankRef)}
					>
						<ArrowRightIcon />
						<h5 className={styles.label}>Маслобак</h5>
					</div>
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
					<div
						className={styles.title}
						onClick={() => openDropdownHandler(mainEngineRef)}
					>
						<ArrowRightIcon />
						<h5 className={styles.label}>Главный привод</h5>
					</div>
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
					<div
						className={styles.title}
						onClick={() => openDropdownHandler(coolerRef)}
					>
						<ArrowRightIcon />
						<h5 className={styles.label}>Охладитель</h5>
					</div>
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
