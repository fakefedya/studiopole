import { ReactNode } from 'react'

import styles from './Section.module.css'

interface Props {
	children: ReactNode
}

export const Section = ({ children }: Props) => {
	return <section className={styles.section}>{children}</section>
}
