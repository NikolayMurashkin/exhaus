import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setDetails } from '../../app/slices/exhausterDetailsSlice';
import { parseCsv } from '../../helpers/parseCsv';
import { FilledButton } from '../../shared/ui/buttons/FilledButton/FilledButton';
import { TextButton } from '../../shared/ui/buttons/textButton/TextButton';
import { FileIcon } from '../../../public/icons/FileIcon';
import styles from './ExhausterDetails.module.scss';
import { Bearing } from '../../shared/bearings/Bearing';
import { MainConstruct } from '../../../public/icons/MainConstruct';
import { Pipe } from '../../../public/icons/Pipe';
import { FromKbc } from '../../../public/icons/FromKbc';
import { ToSmokePipe } from '../../../public/icons/ToSmokePipe';

export const ExhausterDetails = () => {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	const newData = async () => {
	// 		const data = await parseCsv();
	// 		dispatch(
	// 			setDetails({
	// 				tagTime: data[data.length - 1][0],
	// 				vibr1Alarm: data[data.length - 1][1],
	// 				vibr2Alarm: data[data.length - 1][2],
	// 				temp1Alarm: data[data.length - 1][3],
	// 				temp2Alarm: data[data.length - 1][4],
	// 				timeAlarm: data[data.length - 1][5],
	// 				alarmName: data[data.length - 1][6],
	// 				daysToAlarm: data[data.length - 1][7],
	// 				allData: data,
	// 			})
	// 		);
	// 		return data;
	// 	};
	// 	newData();
	// 	setInterval(() => {
	// 		newData();
	// 	}, 60000);
	// }, []);
	const {
		tagTime,
		vibr1Alarm,
		vibr2Alarm,
		temp1Alarm,
		temp2Alarm,
		timeAlarm,
		alarmName,
		daysToAlarm,
		exhausterId,
	} = useSelector((state) => state.exhauster);

	if (tagTime) {
		return (
			<section className={styles.wrapper}>
				<div className={styles.scheme}>
					<FilledButton text={'Мнемосхема'} />
					<TextButton text={'График'} />
				</div>
				<div className={styles.exhauster}>
					<div className={styles.exhauster__title}>
						<FileIcon />
						{exhausterId}
					</div>
					<div className={styles.exhauster__content}>
						<div className={styles.bearings}>
							<div className={styles.nine}>
								<Bearing title={'9 ПС'} />
							</div>
							<div className={styles.eight}>
								<Bearing title={'8 ПС'} />
							</div>
							<div className={styles.seven}>
								<Bearing title={'7 ПС'} />
							</div>
							<div className={styles.six}>
								<Bearing title={'6 ПС'} />
							</div>
							<div className={styles.five}>
								<Bearing title={'5 ПС'} />
							</div>
							<div className={styles.four}>
								<Bearing title={'4 ПС'} />
							</div>
							<div className={styles.three}>
								<Bearing title={'3 ПС'} />
							</div>
							<div className={styles.two}>
								<Bearing title={'2 ПС'} />
							</div>
							<div className={styles.one}>
								<Bearing title={'1 ПС'} />
							</div>
						</div>
						<div className={styles.pipe}>
							<Pipe />
						</div>
						<div className={styles.fromKbc}>
							<div className={styles.fromKbc__data}>
								<div className={styles.fromKbc__data_top}>
									<div className={styles.numbers}>
										<span>0</span>
										<span>50</span>
										<span>100</span>
										<span>150</span>
										<span>200</span>
									</div>
									<div className={styles.scale}>
										<div
											className={styles.scale__scale}
										></div>
										<span className={styles.value}>45</span>
										<span className={styles.label}>
											Температура газа, °C
										</span>
									</div>
								</div>
								<div className={styles.bottom}>
									<div className={styles.bottom__item}>
										<span
											className={
												styles.bottom__item_label
											}
										>
											Разряжение, мм.в.ст
										</span>
										<span
											className={
												styles.bottom__item_value
											}
										>
											74,3
										</span>
									</div>
									<div className={styles.bottom__item}>
										<span
											className={
												styles.bottom__item_label
											}
										>
											Уровень пыли, мг/м3
										</span>
										<span
											className={
												styles.bottom__item_value
											}
										>
											15
										</span>
									</div>
								</div>
							</div>
							<FromKbc />
							<div className={styles.toSmokePipe}>
								<ToSmokePipe />
							</div>
						</div>
						<div className={styles.construct}>
							<MainConstruct />
						</div>
						<div className={styles.oil}>
							<span className={styles.oil__name}>Маслобак</span>
							<div className={styles.oil__content}>
								<div className={styles.numbers}>
									<span>0</span>
									<span>20</span>
									<span>40</span>
									<span>60</span>
									<span>80</span>
									<span>100</span>
								</div>
								<div className={styles.scale}>
									<div className={styles.scale__scale}></div>
									<span className={styles.value}>34,3</span>
									<span className={styles.label}>
										УРОВЕНЬ МАСЛА, %
									</span>
								</div>
							</div>
						</div>
						<div className={styles.engine}>
							<span className={styles.engine__title}>
								Главный привод
							</span>
							<div className={styles.engine__body}>
								<div className={styles.engine__body_item}>
									<span className={styles.engine__body_label}>
										Ток, А
									</span>
									<span className={styles.engine__body_value}>
										000
									</span>
								</div>
								<div className={styles.engine__body_item}>
									<span className={styles.engine__body_label}>
										Ток двигателя, А
									</span>
									<span className={styles.engine__body_value}>
										000
									</span>
								</div>
								<div className={styles.engine__body_item}>
									<span className={styles.engine__body_label}>
										Напряжение ротера, кВт
									</span>
									<span className={styles.engine__body_value}>
										000
									</span>
								</div>
								<div className={styles.engine__body_item}>
									<span className={styles.engine__body_label}>
										Напряжение статера, кВт
									</span>
									<span className={styles.engine__body_value}>
										000
									</span>
								</div>
							</div>
						</div>
						<div className={styles.pressure}>
							<div className={styles.numbers}>
								<span>0</span>
								<span>1</span>
								<span>2</span>
								<span>3</span>
								<span>4</span>
								<span>5</span>
								<span>6</span>
							</div>
							<div className={styles.scale}>
								<div className={styles.scale__scale}></div>
								<span className={styles.value}>2,5</span>
								<span className={styles.label}>
									Давление масла, кг/см2
								</span>
							</div>
						</div>
						<div className={styles.cooler}>
							<div className={styles.cooler__one}>-233 °С</div>
							<div className={styles.cooler__two}>-233 °С</div>
							<div className={styles.cooler__three}>-233 °С</div>
						</div>
						<div className={styles.legend}>
							<div className={styles.legend__item}>
								<span
									className={styles.legend__item_warning}
								></span>
								<span className={styles.legend__item_label}>
									Предупреждение
								</span>
							</div>
							<div className={styles.legend__item}>
								<span
									className={styles.legend__item_danger}
								></span>
								<span className={styles.legend__item_label}>
									Опасность
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

	if (!tagTime) {
		return <p>Loading...</p>;
	}
};
