'use client'

import Image from 'next/image'
import { ReactCompareSlider } from 'react-compare-slider'

import { Text } from '@/components/ui/Text/Text'
import { cn } from '@/lib/cn'

import styles from './BeforeAfter.module.css'

interface Props {
	beforeSrc: string
	afterSrc: string
	beforeAlt?: string
	afterAlt?: string
	className?: string
}

export const BeforeAfter = ({
	beforeSrc,
	afterSrc,
	beforeAlt = 'Визуализация',
	afterAlt = 'Фотография',
	className,
}: Props) => {
	return (
		<div className={cn(styles.root, className)}>
			<ReactCompareSlider
				handle={
					<div className={styles.handle}>
						<div className={styles.line} />
						<div className={styles.button}>
							<svg
								width='15'
								height='15'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path d='M18 8L22 12L18 16' />
								<path d='M6 8L2 12L6 16' />
							</svg>
						</div>
					</div>
				}
				// Левая картинка (Before)
				itemOne={
					<div className={styles.imageWrapper}>
						{/* Используем Next.js Image для оптимизации */}
						<Image
							src={beforeSrc}
							alt={beforeAlt}
							fill
							className={styles.image}
							sizes='(max-width: 768px) 100vw, 50vw'
						/>
						<div className={cn(styles.label, styles.labelBefore)}>
							<Text size='sm' weight='medium'>
								Визуализация
							</Text>
						</div>
					</div>
				}
				// Правая картинка (After)
				itemTwo={
					<div className={styles.imageWrapper}>
						<Image
							src={afterSrc}
							alt={afterAlt}
							fill
							className={styles.image}
							sizes='(max-width: 768px) 100vw, 50vw'
						/>
						<div className={cn(styles.label, styles.labelAfter)}>
							<Text size='sm' weight='medium'>
								Фото
							</Text>
						</div>
					</div>
				}
				className={styles.slider}
			/>
		</div>
	)
}
