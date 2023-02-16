import styles from './Header.module.scss';
import { BtnIcon } from '../../../public/icons/BtnIcon';
import { Logo } from '../../../public/icons/Logo';
import { ControlsIcon } from '../../../public/icons/Controls';
import { ArrowDownIcon } from '../../../public/icons/ArrowDownIcon';
import { FilledButton } from '../../shared/ui/buttons/FilledButton/FilledButton';

export const Header = () => {
	return (
		<header className={styles.header}>
			<BtnIcon />
			<Logo />
			<span className={styles.title}>
				Прогнозная аналитика эксгаустеров
			</span>
			<div className={styles.controls}>
				<FilledButton text={'Справочник'} />
				<ControlsIcon />
				<span className={styles.user}>DN</span>
				<ArrowDownIcon />
			</div>
		</header>
	);
};
