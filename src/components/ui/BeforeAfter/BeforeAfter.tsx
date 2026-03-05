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
								xmlns='http://www.w3.org/2000/svg'
								width={24}
								height={24}
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth={2}
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M8 9l4 -4l4 4' />
								<path d='M16 15l-4 4l-4 -4' />
							</svg>
						</div>
					</div>
				}
				itemOne={
					<div className={styles.imageWrapper}>
						<Image
							src={beforeSrc}
							alt={beforeAlt}
							fill
							className={styles.image}
							sizes='(max-width: 768px) 100vw, 50vw'
						/>
						<div className={cn(styles.label, styles.labelBefore)}>
							<Text size='lg' weight='medium'>
								Визуализация
							</Text>
						</div>
					</div>
				}
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
							<Text size='lg' weight='medium'>
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
