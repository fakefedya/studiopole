import { Typography } from '@/components/ui/Typography/Typography'

import styles from './HeroSection.module.css'

export const HeroSection = () => {
	return (
		<section className={styles.section}>
			<Typography tag={'h1'} variant={'h1'} className={styles.heading}>
				Pole
			</Typography>
		</section>
	)
}
