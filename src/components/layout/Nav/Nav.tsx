'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { SplitEffect } from '@/components/ui/SplitEffect/SplitEffect'
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
			<div className={styles.list}>
				{NAV_LINKS.map((el) => {
					const isActive =
						pathname === el.href || pathname.startsWith(`${el.href}/`)

					return (
						<Link key={el.key} href={el.href} className={styles.item}>
							<SplitEffect className={styles.split} isActive={isActive}>
								<Text as={'span'} size={'lg'} weight={'medium'}>
									{el.label}
								</Text>
								{el.key === 'projects' && projectsCount > 0 && (
									<Text
										className={styles.projectsCount}
										as={'span'}
										size={'sm'}
										weight={'medium'}
									>
										{projectsCount}
									</Text>
								)}
							</SplitEffect>
						</Link>
					)
				})}
			</div>
		</nav>
	)
}
