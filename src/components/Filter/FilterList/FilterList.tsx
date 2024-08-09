import React from 'react'
import styles from './FilterList.module.css'

type Props = {
	options: string[]
}

export default function FilterList({ options }: Props) {
	return (
		<div className={styles.filterList}>
			<ul className={styles.listItems}>
				{options.map((option, key: number) => (
					<li key={key}>{option}</li>
				))}
			</ul>
		</div>
	)
}
