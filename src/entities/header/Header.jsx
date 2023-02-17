import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';
import { BtnIcon } from '../../../public/icons/BtnIcon';
import { Logo } from '../../../public/icons/Logo';
import { ControlsIcon } from '../../../public/icons/Controls';
import { ArrowDownIcon } from '../../../public/icons/ArrowDownIcon';
import { FilledButton } from '../../shared/ui/buttons/FilledButton/FilledButton';

export const Header = () => {
	let location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (
			location.pathname === '/1' ||
			location.pathname === '/2' ||
			location.pathname === '/3' ||
			location.pathname === '/4' ||
			location.pathname === '/5' ||
			location.pathname === '/6'
		) {
		}
	}, [location]);

	const { exhausterId } = useSelector((state) => state.exhauster);

	const hanldeNavigateHome = () => {
		navigate('/');
	};

	return (
		<header className={styles.header}>
			<BtnIcon />
			<Logo onClick={hanldeNavigateHome} />
			{location.pathname === '/' && (
				<span className={styles.title_black}>
					Прогнозная аналитика эксгаустеров
				</span>
			)}
			{location.pathname !== '/' && (
				<div>
					<span
						className={styles.title_gray}
						onClick={hanldeNavigateHome}
					>
						/ Прогнозная аналитика эксгаустера
					</span>
					<span className={styles.title_black}>
						/ Состояние {exhausterId}
					</span>
				</div>
			)}
			<div className={styles.controls}>
				<FilledButton text={'Справочник'} />
				<ControlsIcon />
				<span className={styles.user}>DN</span>
				<ArrowDownIcon />
			</div>
		</header>
	);
};
