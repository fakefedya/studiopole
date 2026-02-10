import styles from './LinesOverlay.module.css'

interface Props {
	isVisible?: true | false
}

export const LinesOverlay = ({ isVisible = true }: Props) => {
	if (!isVisible) return

	return (
		<div className={styles.overlay}>
			<div className={styles.lines}></div>
		</div>
	)
}
