import { Section } from '@/components/layout/Section/Section'
import { CapsuleLink } from '@/components/ui/CapsuleLink/CapsuleLink'
import { Text } from '@/components/ui/Text/Text'

import styles from './HeroSection.module.css'

export const HeroSection = () => {
	return (
		<Section>
			<div className={styles.wrapper}>
				<Text as={'h1'} size={'5xl'} className={styles.heading}>
					Pole
				</Text>
				<CapsuleLink href={'/contacts'}>
					<Text as={'span'} size={'xxl'} className={styles.headingLink}>
						Студия
					</Text>
				</CapsuleLink>
			</div>
		</Section>
	)
}
