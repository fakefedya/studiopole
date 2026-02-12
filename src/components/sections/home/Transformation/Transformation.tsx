import { Section } from '@/components/layout/Section/Section'
import { BeforeAfter } from '@/components/ui/BeforeAfter/BeforeAfter'

import styles from './Transformation.module.css'

export const Transformation = () => {
	return (
		<Section>
			<BeforeAfter
				beforeSrc='/images/projects/primorsky/1.jpg'
				afterSrc='/images/projects/primorsky/2.jpg'
				className={styles.comparison}
			/>
		</Section>
	)
}
