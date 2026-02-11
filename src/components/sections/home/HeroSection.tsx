import LogoIcon from '@/components/icons/logo.svg'
import { Section } from '@/components/layout/Section/Section'
import { CapsuleLink } from '@/components/ui/CapsuleLink/CapsuleLink'
import { Text } from '@/components/ui/Text/Text'

import styles from './HeroSection.module.css'

export const HeroSection = () => {
	return (
		<Section>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<Text
						as={'h1'}
						size={'5xl'}
						weight={'semibold'}
						className={styles.heading}
					>
						Po
					</Text>
					<LogoIcon className={styles.logo} />
					<Text
						as={'h1'}
						size={'5xl'}
						weight={'semibold'}
						className={styles.heading}
					>
						le
					</Text>
				</div>
				<CapsuleLink href={'/contacts'}>
					<Text as={'span'} size={'xxl'} className={styles.headingLink}>
						Студия
					</Text>
				</CapsuleLink>
			</div>
		</Section>
	)
}
