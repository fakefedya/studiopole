'use client'

import { usePathname } from 'next/navigation'

import { SplitLink } from '@/components/ui/SplitLink/SplitLink'
import { Text } from '@/components/ui/Text/Text'
import { cn } from '@/lib/cn'
import { NAV_LINKS } from '@/lib/constants'

import styles from './Header.module.css'

interface Props {
	projectsCount: number
}

export const Navigation = ({ projectsCount }: Props) => {
	const pathname = usePathname()

	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				{NAV_LINKS.map((el) => {
					const isActive =
						pathname === el.href || pathname.startsWith(`${el.href}/`)

					return (
						<li key={el.key} className={styles.navItem}>
							<SplitLink isActive={isActive} href={el.href}>
								<Text
									as='span'
									size='xxl'
									weight='medium'
									className={cn(styles['line'], styles['normal'])}
								>
									{el.label}
								</Text>

								{el.key === 'projects' && projectsCount > 0 && (
									<Text
										as='span'
										size='sm'
										weight='semibold'
										className={styles.projectsCount}
									>
										{projectsCount}
									</Text>
								)}
							</SplitLink>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
