import React from 'react'
import styles from './Filter.module.css'
import FilterButton from '../FilterButton/FilterButton'
import { FilterType, TrackDataType } from '@/lib/types'

const filterTitles: string[] = [
	FilterType.author,
	FilterType.year,
	FilterType.genre,
]

type Props = {
	playlist: TrackDataType[]
}

export default function Filter({ playlist }: Props) {
	const getUniqueFilterLists = (option: string): string[] => {
		switch (option) {
			case FilterType.author:
				return Array.from(new Set<string>(playlist.map(track => track.author)))
			case FilterType.year:
				return ['По умолчанию', 'Сначала новые', 'Сначала старые']
			case FilterType.genre:
				return Array.from(
					new Set<string>(playlist.map(track => track.genre).flat()),
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
						getFilterLists={getFilterLists}
					/>
				)
			})}
		</div>
	)
}
