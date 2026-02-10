import { ReactNode } from 'react'

import styles from './Main.module.css'

interface Props {
	children: ReactNode
}

export const Main = ({ children }: Props) => {
	return <main className={styles.main}>{children}</main>
}
