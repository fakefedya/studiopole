import { Section } from '@/components/layout/Section/Section'
import { BeforeAfter } from '@/components/ui/BeforeAfter/BeforeAfter'
import { Text } from '@/components/ui/Text/Text'

import styles from './Transformation.module.css'

export const Transformation = () => {
	return (
		<Section>
			<div className={styles.root}>
				<Text
					as={'h2'}
					size={'2xl'}
					weight={'medium'}
					className={styles.heading}
				>
					Сравнение
				</Text>
				<BeforeAfter
					beforeSrc='/images/projects/primorsky/1.jpg'
					afterSrc='/images/projects/primorsky/2.jpg'
					className={styles.comparison}
				/>
			</div>
		</Section>
	)
}
