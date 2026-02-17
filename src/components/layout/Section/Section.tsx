import { ReactNode } from 'react'

import { cn } from '@/lib/cn'

import styles from './Section.module.css'

interface Props {
	children: ReactNode
	className?: 'wide'
}

export const Section = ({ children, className }: Props) => {
	return (
		<section className={cn(styles.section, className && styles[className])}>
			{children}
		</section>
	)
}
