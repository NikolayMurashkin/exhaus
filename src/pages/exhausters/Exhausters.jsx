import { Link } from 'react-router-dom';

import { Exhauster } from '../../entities';
import styles from './Exhausters.module.scss';
import { FileIcon } from '../../../public/icons/FileIcon';

export const Exhausters = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.header}>
				<FileIcon />
				<h2 className={styles.title}>Главный экран</h2>
			</div>
			<div className={styles.body}>
				<div className={styles.body__item}>
					<h2 className={styles.body__item_title}>агломашина №1</h2>
					<div className={styles.exhausters}>
						<Exhauster id={1} />
						<Exhauster id={2} />
					</div>
				</div>
				<div className={styles.body__item}>
					<h2 className={styles.body__item_title}>агломашина №2</h2>
					<div className={styles.exhausters}>
						<Exhauster id={3} />
						<Exhauster id={4} />
					</div>
				</div>
				<div className={styles.body__item}>
					<h2 className={styles.body__item_title}>агломашина №3</h2>
					<div className={styles.exhausters}>
						<Exhauster id={5} />
						<Exhauster id={6} />
					</div>
				</div>
			</div>
		</section>
	);
};
