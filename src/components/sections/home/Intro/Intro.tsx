import { Section } from '@/components/layout/Section/Section'
import { ButtonLink } from '@/components/ui/ButtonLink/ButtonLink'
import { SplitEffect } from '@/components/ui/SplitEffect/SplitEffect'
import { Text } from '@/components/ui/Text/Text'

import styles from './Intro.module.css'

export const Intro = () => {
	return (
		<Section>
			<div className={styles.container}>
				<div className={styles.text}>
					<Text as={'h2'} size={'3xl'} className={styles.title}>
						Хороший дизайн способен изменить жизнь. Я создаю уникальные и
						функциональные решения, отражающие индивидуальность каждого
						заказчика, и проектирую пространства, которые вдохновляют.
					</Text>
				</div>
				<ButtonLink href={'/about'} className={styles.ctaLink}>
					<SplitEffect>
						<Text as={'span'} weight={'semibold'} size={'lg'}>
							Узнать больше о студии
						</Text>
					</SplitEffect>
				</ButtonLink>
			</div>
		</Section>
	)
}
