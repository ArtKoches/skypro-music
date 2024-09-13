import React, { useMemo } from 'react'
import styles from './FilterList.module.css'

type Props = {
	options: string[]
}

export default function FilterList({ options }: Props) {
	return (
		<div className={styles.filterList}>
			<ul className={styles.listItems}>
				{useMemo(() => {
					return options.map((option, key: number) => (
						<li key={key} className={styles.listItem}>
							{option}
						</li>
					))
				}, [options])}
			</ul>
		</div>
	)
}
