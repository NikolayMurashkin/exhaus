import { Link } from 'react-router-dom';

import { Exhauster } from '../../entities';

export const Exhausters = () => {
	return (
		<section>
			<p>Exhausters</p>
			<div>
				<h2>Алгомашина №1</h2>
				<Exhauster id={1} />
			</div>
			<Link to={'/'}>Назад</Link>
		</section>
	);
};
