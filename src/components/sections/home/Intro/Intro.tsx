import { Section } from '@/components/layout/Section/Section'
import { Text } from '@/components/ui/Text/Text'

import styles from './Intro.module.css'

export const Intro = () => {
	return (
		<Section>
			<div className={styles.wrapper}>
				<Text as={'h2'} size={'2xl'} weight={'medium'}>
					Хороший дизайн способен изменить жизнь. Я создаю уникальные и
					функциональные решения, отражающие индивидуальность каждого заказчика,
					и проектирую пространства, которые вдохновляют.
				</Text>
			</div>
		</Section>
	)
}
