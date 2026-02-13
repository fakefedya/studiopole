import styles from './Lines.module.css'

interface Props {
	isVisible?: true | false
}

export const Lines = ({ isVisible = true }: Props) => {
	if (!isVisible) return

	return (
		<div className={styles.overlay}>
			<div className={styles.lines}></div>
		</div>
	)
}
