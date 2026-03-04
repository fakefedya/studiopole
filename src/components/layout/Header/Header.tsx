import Link from 'next/link'

import Logo from '@/components/icons/logo.svg'
import { SplitEffect } from '@/components/ui/SplitEffect/SplitEffect'
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
					<SplitEffect className={styles.splitWrapper}>
						<Logo className={styles.icon} />
					</SplitEffect>
				</Link>
				<Nav projectsCount={projectsCount} />
			</div>
		</header>
	)
}
