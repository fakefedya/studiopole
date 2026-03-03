'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { SplitText } from '@/components/ui/SplitText/SplitText'
import { Text } from '@/components/ui/Text/Text'
import { NAV_LINKS } from '@/lib/constants'

import styles from './Nav.module.css'

interface Props {
	projectsCount: number
}

export const Nav = ({ projectsCount }: Props) => {
	const pathname = usePathname()

	return (
		<nav className={styles.root}>
			<ul className={styles.list}>
				{NAV_LINKS.map((el) => {
					const isActive =
						pathname === el.href || pathname.startsWith(`${el.href}/`)

					return (
						<li key={el.key} className={styles.item}>
							<Link href={el.href} className={styles.link}>
								<SplitText isActive={isActive}>
									{el.label}
									{el.key === 'projects' && projectsCount > 0 && (
										<Text as={'span'}>{projectsCount}</Text>
									)}
								</SplitText>
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
