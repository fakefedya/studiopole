import Logo from '@/components/icons/logo.svg'
import { getProjects } from '@/lib/projects'

import { Nav } from '../Nav/Nav'

import styles from './Header.module.css'

export const Header = async () => {
	const projects = await getProjects()
	const projectsCount = projects.length

	return (
		<header className={styles.root}>
			<div className={styles.container}>
				<Logo className={styles.logo} />
				<Nav projectsCount={projectsCount} />
			</div>
		</header>
	)
}
