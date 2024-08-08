'use client'

import React, { useState } from 'react'
import styles from './Filter.module.css'
import FilterButton from '../FilterButton/FilterButton'

const filterTitles: string[] = ['исполнителю', 'году выпуска', 'жанру']

export default function Filter() {
	const [openFilterCategory, setOpenFilterCategory] = useState<string | null>(
		null,
	)

	const handleOpenFilter = (title: string) => {
		if (openFilterCategory === title) {
			setOpenFilterCategory(null)
		} else {
			setOpenFilterCategory(title)
		}
	}

	return (
		<div className={styles.centerblock__filter}>
			<div className={styles.filter__title}>Искать по:</div>
			{filterTitles.map((title, key: number) => (
				<FilterButton
					key={key}
					title={title}
					openFilterCategory={openFilterCategory === title}
					handleOpenFilter={handleOpenFilter}
				/>
			))}
		</div>
	)
}
