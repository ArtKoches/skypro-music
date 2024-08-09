import React from 'react'
import styles from './FilterButton.module.css'
import classNames from 'classnames'
import FilterList from '../FilterList/FilterList'

type Props = {
	title: string
	openFilterCategory: boolean
	handleOpenFilter: (title: string) => void
	getFilterLists: string[]
}

export default function FilterButton({
	title,
	openFilterCategory,
	handleOpenFilter,
	getFilterLists,
}: Props) {
	return (
		<div className={styles.filterWrapper}>
			<div
				className={classNames(styles.filter__button, styles._btn_text)}
				onClick={() => handleOpenFilter(title)}
			>
				{title}
			</div>

			{openFilterCategory && <FilterList options={getFilterLists} />}
		</div>
	)
}
