import { ReactNode } from 'react'

import { Text } from '@/components/ui/Text/Text'
import { cn } from '@/lib/cn'

import styles from './AccordionItem.module.css'

interface Props {
	num: string
	title: string
	children: ReactNode
	isOpen: boolean
	onClick: () => void
}

export const AccordionItem = ({
	num,
	title,
	children,
	isOpen,
	onClick,
}: Props) => {
	return (
		<div className={cn(styles.root, isOpen && styles.open)}>
			<button
				className={styles.trigger}
				onClick={onClick}
				aria-expanded={isOpen}
			>
				<div className={styles.headerTitle}>
					<div className={styles.titleWrapper}>
						<Text as='span' size={'lg'} className={styles.num}>
							{num}
						</Text>
						<Text as='h3' size='3xl' weight='medium'>
							{title}
						</Text>
					</div>
					<div className={styles.icon}>
						<div className={styles.lineHorizontal} />
						<div className={styles.lineVertical} />
					</div>
				</div>

				<div className={styles.contentGrid}>
					<div className={styles.contentWrapper}>
						<div className={styles.contentInner}>
							<Text size={'lg'}>{children}</Text>
						</div>
					</div>
				</div>
			</button>
		</div>
	)
}
