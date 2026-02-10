import styles from './Header.module.css'
import { Navigation } from './Navigation'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Navigation />
		</header>
	)
}
