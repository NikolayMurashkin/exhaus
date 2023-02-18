import classNames from 'classnames/bind';

import styles from './Bearing.module.scss';

export const Bearing = ({
	title,
	data = { temp: '220', vibr: '23', time: '42' },
}) => {
	const cx = classNames.bind(styles);
	// console.log(+data.temp);

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>{title}</div>
			<ul className={styles.params}>
				<li
					className={cx('params__item', {
						warning: data.temp >= 50,
						danger: data.temp >= 75,
					})}
				>
					<span className={styles.params__item_key}>T, °С</span>
					<span className={styles.params__item_value}>
						{data.temp}
					</span>
				</li>
				{title === '8 ПС' ||
				title === '7 ПС' ||
				title === '2 ПС' ||
				title === '1 ПС' ? (
					<>
						<li
							className={cx('params__item', {
								warning: data.vibr >= 7.09,
								danger: data.vibr >= 3,
							})}
						>
							<span className={styles.params__item_key}>
								В, мм/с
							</span>
							<span className={styles.params__item_value}>
								{data.vibr}
							</span>
						</li>
						<li className={styles.params__item}>
							<span className={styles.params__item_key}>
								Г, мм/с
							</span>
							<span className={styles.params__item_value}>
								00
							</span>
						</li>
						<li className={styles.params__item}>
							<span className={styles.params__item_key}>
								О, мм/с
							</span>
							<span className={styles.params__item_value}>
								00
							</span>
						</li>
					</>
				) : null}
			</ul>
		</div>
	);
};
