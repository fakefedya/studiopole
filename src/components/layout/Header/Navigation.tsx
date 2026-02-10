import Link from 'next/link'

import { Typography } from '@/components/ui/Typography/Typography'
import { NAV_LINKS } from '@/lib/constants'

import styles from './Header.module.css'

interface Props {
	projectsCount: number
}

export const Navigation = ({ projectsCount }: Props) => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				{NAV_LINKS.map((el) => (
					<li key={el.key} className={styles.navItem}>
						<Link href={el.href} className={styles.itemLink}>
							<div className={styles.linkMask} />
							<div className={styles.linkText}>
								<Typography tag={'span'} className={styles.text}>
									{el.label}
								</Typography>
								{el.key === 'projects' && projectsCount > 0 && (
									<span className={styles.countBadge}>{projectsCount}</span>
								)}
							</div>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
