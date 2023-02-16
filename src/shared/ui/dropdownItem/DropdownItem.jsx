import { TempIcon } from '../../../../public/icons/TempIcon';
import { VibrationIcon } from '../../../../public/icons/VibrationIcon';
import { OilIcon } from '../../../../public/icons/OilIcon';
import styles from './DropdownItem.module.scss';

export const DropdownItem = ({ text, temp, vibr, oil }) => {
	return (
		<div className={styles.item}>
			<span className={styles.text}>{text}</span>
			{temp ? (
				<span className={styles.icon}>
					T
					<TempIcon color={temp} />
				</span>
			) : null}
			{vibr ? (
				<span className={styles.icon}>
					V
					<VibrationIcon color={vibr} />
				</span>
			) : null}
			{oil ? (
				<span className={styles.icon}>
					L
					<OilIcon color={oil} />
				</span>
			) : null}
		</div>
	);
};
