import styles from './TexButton.module.scss'

export const TextButton = ({text}) => {
  return (
	<button className={styles.button}>{text}</button>
  )
}
