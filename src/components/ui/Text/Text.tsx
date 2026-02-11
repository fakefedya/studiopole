// src/components/ui/Text/Text.tsx
import { ElementType, ReactNode, HTMLAttributes } from 'react'

import { cn } from '@/lib/cn'

import styles from './Text.module.css'

type TextSize =
	| 'xs'
	| 'sm'
	| 'base'
	| 'lg'
	| 'xl'
	| 'xxl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold'

interface TextProps extends HTMLAttributes<HTMLElement> {
	as?: ElementType
	size?: TextSize
	weight?: TextWeight
	children: ReactNode
	className?: string
}

export const Text = ({
	as: Tag = 'p',
	size = 'base',
	weight,
	children,
	className,
	...props
}: TextProps) => {
	return (
		<Tag
			className={cn(
				styles.root,
				styles[`size-${size}`],
				weight && styles[`weight-${weight}`],
				className,
			)}
			{...props}
		>
			{children}
		</Tag>
	)
}
