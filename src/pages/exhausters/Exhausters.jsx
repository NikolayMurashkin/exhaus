import { Exhauster } from '../../entities';
import styles from './Exhausters.module.scss';
import { FileIcon } from '../../../public/icons/FileIcon';
import { TempIcon } from '../../../public/icons/TempIcon';
import { VibrationIcon } from '../../../public/icons/VibrationIcon';
import { OilIcon } from '../../../public/icons/OilIcon';

export const Exhausters = () => {

	
	return (
		<section className={styles.wrapper}>
			<div className={styles.header}>
				<FileIcon />
				<h2 className={styles.title}>Главный экран</h2>
			</div>
			<div className={styles.legend}>
				<div className={styles.legend__item}>
					<span className={styles.legend__item_icon}>
						T <TempIcon color={'#000000'} />
					</span>
					<span className={styles.legend__item_title}>
						Температура
					</span>
				</div>
				<div className={styles.legend__item}>
					<span className={styles.legend__item_icon}>
						V <VibrationIcon color={'#000000'} />
					</span>
					<span className={styles.legend__item_title}>Вибрация</span>
				</div>
				<div className={styles.legend__item}>
					<span className={styles.legend__item_icon}>
						L <OilIcon color={'#000000'} />
					</span>
					<span className={styles.legend__item_title}>
						Уровень масла
					</span>
				</div>
				<div className={styles.legend__item}>
					<span className={styles.legend__item_warning}></span>
					<span className={styles.legend__item_title}>
						Предупреждение
					</span>
				</div>
				<div className={styles.legend__item}>
					<span className={styles.legend__item_danger}></span>
					<span className={styles.legend__item_title}>Опасность</span>
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.body__item}>
					<h2 className={styles.body__item_title}>агломашина №1</h2>
					<div className={styles.exhausters}>
						<Exhauster
							id={1}
							exhausterName={'Эксгаустер У-171'}
							rotorName={'Ротор № 35к'}
						/>
						<Exhauster
							id={2}
							exhausterName={'Эксгаустер У-172'}
							rotorName={'Ротор № 47'}
						/>
					</div>
				</div>
				<div className={styles.body__item}>
					<h2 className={styles.body__item_title}>агломашина №2</h2>
					<div className={styles.exhausters}>
						<Exhauster
							id={3}
							exhausterName={'Эксгаустер Ф-171'}
							rotorName={'Ротор № 37'}
						/>
						<Exhauster
							id={4}
							exhausterName={'Эксгаустер Ф-172'}
							rotorName={'Ротор № 32'}
						/>
					</div>
				</div>
				<div className={styles.body__item}>
					<h2 className={styles.body__item_title}>агломашина №3</h2>
					<div className={styles.exhausters}>
						<Exhauster
							id={5}
							exhausterName={'Эксгаустер Х-171'}
							rotorName={'Ротор № 24'}
						/>
						<Exhauster
							id={6}
							exhausterName={'Эксгаустер Х-172'}
							rotorName={'Ротор № 22к'}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
