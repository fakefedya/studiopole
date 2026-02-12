import Image from 'next/image'

import { Section } from '@/components/layout/Section/Section'
import { CapsuleLink } from '@/components/ui/CapsuleLink/CapsuleLink'
import { Text } from '@/components/ui/Text/Text'

import styles from './Hero.module.css'

export const Hero = () => {
	return (
		<Section>
			<div className={styles.heroBackground}>
				<div className={styles.heroBackgroundWrapper}>
					<Image
						className={styles.heroBackgroundImage}
						src={'/images/projects/zolotaya-rosha/cover.jpg'}
						alt={'opiuj'}
						width={2768}
						height={2400}
					/>
				</div>
			</div>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<Text as={'h1'} size={'5xl'} className={styles.heading}>
						Pole
					</Text>
				</div>
				<CapsuleLink href={'/contacts'}>
					<Text
						as={'span'}
						size={'xxl'}
						weight={'medium'}
						className={styles.headingLink}
					>
						Студия
					</Text>
				</CapsuleLink>
			</div>
		</Section>
	)
}
