import { Text } from '@/components/ui/Text/Text'

import styles from './HeroSection.module.css'

export const HeroSection = () => {
	return (
		<section className={styles.section}>
			<Text as={'h1'} size={'5xl'}>
				Pole
			</Text>
		</section>
	)
}
