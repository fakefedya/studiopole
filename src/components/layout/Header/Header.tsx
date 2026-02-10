import { getProjects } from '@/lib/projects'

import styles from './Header.module.css'
import { Navigation } from './Navigation'

export const Header = async () => {
	const projects = await getProjects()
	const projectsCount = projects.length

	return (
		<header className={styles.header}>
			<Navigation projectsCount={projectsCount} />
		</header>
	)
}
