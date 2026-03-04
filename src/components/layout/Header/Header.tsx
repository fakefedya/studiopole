import Link from 'next/link'

import Logo from '@/components/icons/logo.svg'
import { SplitText } from '@/components/ui/SplitText/SplitText'
import { getProjects } from '@/lib/projects'

import { Nav } from '../Nav/Nav'

import styles from './Header.module.css'

export const Header = async () => {
	const projects = await getProjects()
	const projectsCount = projects.length

	return (
		<header className={styles.root}>
			<div className={styles.container}>
				<Link href={'/'} className={styles.logo}>
					<SplitText className={styles.splitWrapper}>
						<Logo className={styles.icon} />
					</SplitText>
				</Link>
				<Nav projectsCount={projectsCount} />
			</div>
		</header>
	)
}
