import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'

import { cn } from '@/lib/cn'

import styles from './CapsuleLink.module.css'

interface Props extends ComponentProps<typeof Link> {
	children: ReactNode
	className?: string
	isActive?: boolean
	isInverted?: boolean
}

export const CapsuleLink = ({
	children,
	className,
	isActive = false,
	isInverted = false,
	...props
}: Props) => {
	return (
		<Link
			className={cn(styles['capsule'], isActive && styles['active'], className)}
			{...props}
		>
			<div
				className={cn(styles['mask'], isInverted && styles['invertedMask'])}
			/>

			<div className={styles.wrapper}>{children}</div>
		</Link>
	)
}
