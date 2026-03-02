import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'

import { cn } from '@/lib/cn'

import styles from './SplitLink.module.css'

interface Props extends ComponentProps<typeof Link> {
	children: ReactNode
	className?: string
	isActive?: boolean
}

// Сделать не ссылку компонентом, а SPLIT

export const SplitLink = ({
	children,
	className,
	isActive = false,
	...props
}: Props) => {
	return (
		<Link
			className={cn(
				styles['splitLink'],
				isActive && styles['active'],
				className,
			)}
			{...props}
		>
			<div className={styles.split}>
				{/* <Text as={'span'} className={cn(styles.line, styles.normal)}>
					{children}
				</Text>
				<Text as={'span'} className={cn(styles.line, styles.hover)}>
					{children}
				</Text> */}
				{children}
			</div>
		</Link>
	)
}
