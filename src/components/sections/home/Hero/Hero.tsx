import Image from 'next/image'

import Icon from '@/components/icons/logo.svg'
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
							src={'/images/hero-background.jpg'}
							alt={'opiuj'}
							width={1920}
							height={2560}
							quality={100}
						/>
					</div>
				</div>
				<div className={styles.heading}>
					<div className={styles.headingWrapper}>
						<div className={styles.headingText}>
							<Text as={'span'} size={'5xl'} weight={'medium'}>
								P
							</Text>
							<Text as={'span'} size={'5xl'} weight={'medium'}>
								O
							</Text>
						</div>
						<div className={styles.headingContainer}>
							<Icon className={styles.logo} />
						</div>
						<div className={styles.headingText}>
							<Text as={'span'} size={'5xl'} weight={'medium'}>
								L
							</Text>
							<Text as={'span'} size={'5xl'} weight={'medium'}>
								E
							</Text>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}
