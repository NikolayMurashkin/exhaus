import classNames from 'classnames/bind';

import { TempIcon } from '../../../../public/icons/TempIcon';
import { VibrationIcon } from '../../../../public/icons/VibrationIcon';
import { OilIcon } from '../../../../public/icons/OilIcon';
import styles from './DropdownItem.module.scss';

export const DropdownItem = ({ text, temp, vibr, oil }) => {
	const cx = classNames.bind(styles);

	return (
		<div className={styles.item}>
			<span className={styles.text}>{text}</span>
			{temp ? (
				<span
					className={cx('icon', {
						red: temp === '#E32112',
						orange: temp === '#F69112',
					})}
				>
					T
					<TempIcon color={temp} />
				</span>
			) : null}
			{vibr ? (
				<span
					className={cx('icon', {
						red: vibr === '#E32112',
						orange: vibr === '#F69112',
					})}
				>
					V
					<VibrationIcon color={vibr} />
				</span>
			) : null}
			{oil ? (
				<span
					className={cx('icon', {
						red: oil === '#E32112',
						orange: oil === '#F69112',
					})}
				>
					L
					<OilIcon color={oil} />
				</span>
			) : null}
		</div>
	);
};
