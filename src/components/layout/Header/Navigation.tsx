import Link from 'next/link'

import { NAV_LINKS } from '@/lib/constants'

import styles from './Header.module.css'

export const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				{NAV_LINKS.map((el) => (
					<div key={el.href} className={styles.navItem}>
						<Link href={el.href} className={styles.itemLink}>
							{el.label}
						</Link>
					</div>
				))}
			</ul>
		</nav>
	)
}
