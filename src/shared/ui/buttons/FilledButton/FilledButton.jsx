import styles from './FilledButton.module.scss';

export const FilledButton = ({text}) => {
	return <button className={styles.button}>{text}</button>;
};
