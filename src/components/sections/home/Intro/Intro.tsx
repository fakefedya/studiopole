import Link from 'next/link'

import { Section } from '@/components/layout/Section/Section'
import { Text } from '@/components/ui/Text/Text'

import styles from './Intro.module.css'

export const Intro = () => {
	return (
		<Section>
			<div className={styles.container}>
				<div className={styles.text}>
					<Text
						as={'h2'}
						size={'3xl'}
						weight={'medium'}
						className={styles.title}
					>
						Хороший дизайн способен изменить жизнь. Я создаю уникальные и
						функциональные решения, отражающие индивидуальность каждого
						заказчика, и проектирую пространства, которые вдохновляют.
					</Text>
				</div>
				<Link href={'/about'}>Узнать больше о студии</Link>
			</div>
		</Section>
	)
}
