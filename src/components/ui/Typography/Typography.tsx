import { ElementType, ReactNode } from 'react'

import { cn } from '@/lib/cn'

import styles from './Typography.module.css'

type Variant = 'h1' | 'h2' | 'h3' | 'body' | 'caption'

interface Props extends React.HTMLAttributes<HTMLElement> {
	tag?: ElementType
	variant?: Variant
	children: ReactNode
	className?: string
}

export const Typography = ({
	tag: Tag = 'p',
	variant = 'body',
	children,
	className,
	...props
}: Props) => {
	return (
		<Tag className={cn(styles[variant], className)} {...props}>
			{children}
		</Tag>
	)
}
