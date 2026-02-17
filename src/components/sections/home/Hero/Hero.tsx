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
							src={'/images/projects/zolotaya-rosha/cover.jpg'}
							alt={'opiuj'}
							width={2768}
							height={2400}
						/>
					</div>
				</div>
				<div className={styles.heading}>
					<div className={styles.headingWrapper}>
						<Text as={'span'} size={'5xl'} weight={'medium'}>
							P
						</Text>
						<div className={styles.headingContainer}>
							<Text as={'span'} size={'5xl'} weight={'medium'}>
								O
							</Text>
							<Icon />
							<Text as={'span'} size={'5xl'} weight={'medium'}>
								L
							</Text>
						</div>
						<Text as={'span'} size={'5xl'} weight={'medium'}>
							E
						</Text>
					</div>
				</div>
			</div>
		</Section>
	)
}
