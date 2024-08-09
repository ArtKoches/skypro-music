'use client'

import React, { useState } from 'react'
import styles from './Filter.module.css'
import FilterButton from '../FilterButton/FilterButton'
import { filterTypes, tracksDataTypes } from '@/lib/types'

const filterTitles: string[] = [
	filterTypes.author,
	filterTypes.year,
	filterTypes.genre,
]

type Props = {
	tracksData: tracksDataTypes[]
}

export default function Filter({ tracksData }: Props) {
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

	const getUniqueFilterLists = (option: string): string[] => {
		switch (option) {
			case filterTypes.author:
				return Array.from(
					new Set<string>(tracksData.map(track => track.author)),
				)
			case filterTypes.year:
				return ['По умолчанию', 'Сначала новые', 'Сначала старые']
			case filterTypes.genre:
				return Array.from(
					new Set<string>(tracksData.map(track => track.genre).flat()),
				)

			default:
				return []
		}
	}

	return (
		<div className={styles.centerblock__filter}>
			<div className={styles.filter__title}>Искать по:</div>
			{filterTitles.map((title, key: number) => {
				const getFilterLists = getUniqueFilterLists(title)

				return (
					<FilterButton
						key={key}
						title={title}
						openFilterCategory={openFilterCategory === title}
						handleOpenFilter={handleOpenFilter}
						getFilterLists={getFilterLists}
					/>
				)
			})}
		</div>
	)
}
