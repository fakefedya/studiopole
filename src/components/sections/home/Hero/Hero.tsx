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
							src={'/images/hero-background-1.jpg'}
							alt={'opiuj'}
							width={3492}
							height={4652}
						/>
					</div>{' '}
					<div className={styles.imageWrapper}>
						<Image
							className={styles.image}
							src={'/images/hero-background-2.jpg'}
							alt={'opiuj'}
							width={3755}
							height={5007}
						/>
					</div>
				</div>
				<div className={styles.heading}>
					<Text
						className={styles.letter}
						as={'h1'}
						size={'5xl'}
						weight={'medium'}
					>
						P
					</Text>
					<Text
						className={styles.letter}
						as={'h1'}
						size={'5xl'}
						weight={'medium'}
					>
						O
					</Text>
					<Text
						className={styles.letter}
						as={'h1'}
						size={'5xl'}
						weight={'medium'}
					>
						L
					</Text>
					<Text
						className={styles.letter}
						as={'h1'}
						size={'5xl'}
						weight={'medium'}
					>
						E
					</Text>
				</div>
			</div>
		</Section>
	)
}
