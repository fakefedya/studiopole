import Image from 'next/image'

import { Section } from '@/components/layout/Section/Section'
import { Text } from '@/components/ui/Text/Text'

import styles from './Hero.module.css'

export const Hero = () => {
	return (
		<Section className={'wide'}>
			<div className={styles.root}>
				<div className={styles.background}>
					<div className={styles.backgroundWrapper}>
						<Image
							className={styles.image}
							src={'/images/hero-background_1.jpg'}
							alt={'opiuj'}
							width={2584}
							height={2530}
						/>
					</div>{' '}
					<div className={styles.backgroundWrapper}>
						<Image
							className={styles.image}
							src={'/images/hero-background_2.jpg'}
							alt={'opiuj'}
							width={2532}
							height={2530}
						/>
					</div>
				</div>
				<div className={styles.text}>
					<div className={styles.title}>
						<Text as={'h1'} weight={'medium'} size={'5xl'}>
							Авторская студия POLE
						</Text>
					</div>
					<div className={styles.description}>
						<Text as={'p'} weight={'medium'} size={'3xl'}>
							Интерьер — это не стены.
						</Text>
						<Text as={'p'} weight={'medium'} size={'3xl'}>
							Это сценарий жизни.
						</Text>
					</div>
				</div>
			</div>
		</Section>
	)
}
