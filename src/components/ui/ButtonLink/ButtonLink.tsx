import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'

import { cn } from '@/lib/cn'

import styles from './ButtonLink.module.css' // Твои стили

type LinkSize = 'sm' | 'base'

interface Props extends ComponentProps<typeof Link> {
	children: ReactNode
	size?: LinkSize
	className?: string
}

export const ButtonLink = ({
	children,
	size = 'base',
	className,
	...props
}: Props) => {
	return (
		<Link className={cn(styles.root, styles[`${size}`], className)} {...props}>
			{children}
		</Link>
	)
}
