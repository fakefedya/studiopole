import { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

import styles from './SplitEffect.module.css'

interface Props extends HTMLAttributes<HTMLElement> {
	children: ReactNode
	className?: string
	isActive?: boolean
}

export const SplitEffect = ({
	className,
	children,
	isActive = false,
	...props
}: Props) => {
	return (
		<div
			className={cn(className, styles.root, isActive && styles.active)}
			{...props}
		>
			<div className={cn(styles.line, styles.normal)}>{children}</div>
			<div className={cn(styles.line, styles.hover)}>{children}</div>
		</div>
	)
}
