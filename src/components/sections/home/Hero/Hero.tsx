import Image from 'next/image'

import IconE from '@/components/icons/iconE.svg'
import IconL from '@/components/icons/iconL.svg'
import IconO from '@/components/icons/iconO.svg'
import IconP from '@/components/icons/iconP.svg'
import Icon from '@/components/icons/logo.svg'
import { Section } from '@/components/layout/Section/Section'
// import { Text } from '@/components/ui/Text/Text'

import styles from './Hero.module.css'

export const Hero = () => {
	return (
		<Section className={'wide'}>
			<div className={styles.root}>
				<div className={styles.background}>
					<div className={styles.backgroundWrapper}>
						<Image
							className={styles.image}
							src={'/images/home-background.jpg'}
							alt={'opiuj'}
							width={1080}
							height={1920}
						/>
					</div>
				</div>
				<div className={styles.heading}>
					<div className={styles.headingWrapper}>
						<div className={styles.letterWrapper}>
							<IconP className={styles.logoIcon} />
							<IconO className={styles.logoIcon} />
						</div>
						{/* <Text as={'span'} size={'5xl'} weight={'medium'}>
							P
							</Text> */}
						<div className={styles.headingContainer}>
							{/* <Text as={'span'} size={'5xl'} weight={'medium'}>
								O
							</Text> */}
							<Icon className={styles.logo} />
							{/* <Text as={'span'} size={'5xl'} weight={'medium'}>
								L
							</Text> */}
						</div>
						<div className={styles.letterWrapper}>
							<IconL className={styles.logoIcon} />

							<IconE className={styles.logoIcon} />
						</div>
						{/* <Text as={'span'} size={'5xl'} weight={'medium'}>
							E
						</Text> */}
					</div>
				</div>
			</div>
		</Section>
	)
}
