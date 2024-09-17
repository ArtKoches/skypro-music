import { FilterType } from '@/lib/types'
import { useAppSelector } from '@/store/store'
import { useCallback, useMemo } from 'react'
import FilterButton from '../FilterButton/FilterButton'
import styles from './Filter.module.css'

const filterTitles: string[] = [
	FilterType.author,
	FilterType.year,
	FilterType.genre,
]

export default function Filter() {
	const { mainPlaylist } = useAppSelector(state => state.playlist)

	const getUniqueFilterLists = useCallback(
		(option: string): string[] => {
			switch (option) {
				case FilterType.author:
					return Array.from(
						new Set<string>(mainPlaylist.map(track => track.author)),
					)
				case FilterType.year:
					return ['По умолчанию', 'Сначала новые', 'Сначала старые']
				case FilterType.genre:
					return Array.from(
						new Set<string>(mainPlaylist.map(track => track.genre).flat()),
					)
				default:
					return []
			}
		},
		[mainPlaylist],
	)

	return (
		<div className={styles.centerblock__filter}>
			<div className={styles.filter__title}>Искать по:</div>
			{useMemo(() => {
				return filterTitles.map((title, key: number) => {
					const getFilterLists = getUniqueFilterLists(title)

					return (
						<FilterButton
							key={key}
							title={title}
							getFilterLists={getFilterLists}
						/>
					)
				})
			}, [getUniqueFilterLists])}
		</div>
	)
}
