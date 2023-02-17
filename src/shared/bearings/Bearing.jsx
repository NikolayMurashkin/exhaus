import styles from './Bearing.module.scss';

export const Bearing = ({ title }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>{title}</div>
			<ul className={styles.params}>
				<li className={styles.params__item}>
					<span className={styles.params__item_key}>T, °С</span>
					<span className={styles.params__item_value}>220</span>
				</li>
				{title === '8 ПС' ||
				title === '7 ПС' ||
				title === '2 ПС' ||
				title === '1 ПС' ? (
					<>
						<li className={styles.params__item}>
							<span className={styles.params__item_key}>
								В, мм/с
							</span>
							<span className={styles.params__item_value}>8</span>
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
