import { Section } from '@/components/layout/Section/Section'
import { BeforeAfter } from '@/components/ui/BeforeAfter/BeforeAfter'
import { Text } from '@/components/ui/Text/Text'

import styles from './Transformation.module.css'

export const Transformation = () => {
	return (
		<Section className='wide'>
			<div className={styles.root}>
				<Text
					as={'h2'}
					size={'5xl'}
					weight={'medium'}
					className={styles.heading}
				>
					Сравнение
				</Text>
				<div className={styles.container}>
					<BeforeAfter
						beforeSrc='/images/projects/primorsky/1.jpg'
						afterSrc='/images/projects/primorsky/2.jpg'
						className={styles.comparison}
					/>
				</div>
			</div>
		</Section>
	)
}
