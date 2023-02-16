import { Link } from 'react-router-dom';

import { Exhauster } from '../../entities';
import styles from './Exhausters.module.scss'

export const Exhausters = () => {
	return (
		<section className={styles.wrapper}>
			<p>Exhausters</p>
			<div>
				<h2>Алгомашина №1</h2>
				<Exhauster id={1} />
			</div>
			<Link to={'/home'}>Назад</Link>
		</section>
	);
};
