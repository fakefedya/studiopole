import styles from './Noise.module.css'

interface Props {
	isVisible?: boolean
}

export const Noise = ({ isVisible = true }: Props) => {
	if (!isVisible) return null

	return (
		<div className={styles.noise}>
			<div className={styles.overlay}>
				<div className={styles.effect}></div>
			</div>
		</div>
	)
}
