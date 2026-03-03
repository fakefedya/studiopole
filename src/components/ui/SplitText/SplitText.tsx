import { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

import { Text } from '../Text/Text'

import styles from './SplitText.module.css'

interface Props extends HTMLAttributes<HTMLElement> {
	children: ReactNode
	className?: string
	isActive?: boolean
}

export const SplitText = ({
	children,
	className,
	isActive = false,
	...props
}: Props) => {
	return (
		<div className={cn(styles.root, isActive && styles.active)} {...props}>
			<Text as={'span'} className={cn(styles.line, styles.normal, className)}>
				{children}
			</Text>
			<Text as={'span'} className={cn(styles.line, styles.hover, className)}>
				{children}
			</Text>
		</div>
	)
}
