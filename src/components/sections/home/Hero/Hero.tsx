import Image from 'next/image'

import { Section } from '@/components/layout/Section/Section'
import { Text } from '@/components/ui/Text/Text'

import styles from './Hero.module.css'

export const Hero = () => {
	return (
		<Section className={'wide'}>
			<div className={styles.root}>
				<div className={styles.wrapper}>
					<div className={styles.imageWrapper}>
						<Image
							className={styles.image}
							src={'/images/hero-background_1.jpg'}
							alt={'opiuj'}
							width={2584}
							height={2530}
						/>
					</div>{' '}
					<div className={styles.imageWrapper}>
						<Image
							className={styles.image}
							src={'/images/hero-background_2.jpg'}
							alt={'opiuj'}
							width={2532}
							height={2530}
						/>
					</div>
				</div>
				<div className={styles.heading}>
					<div className={styles.letterWrapper}>
						<Text
							className={styles.letter}
							as={'h1'}
							size={'5xl'}
							weight={'medium'}
						>
							POLE
						</Text>
					</div>
					<div className={styles.letterWrapper}></div>
				</div>
			</div>
		</Section>
	)
}
