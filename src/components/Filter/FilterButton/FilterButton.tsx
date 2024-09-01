import React, { useState } from 'react'
import styles from './FilterButton.module.css'
import classNames from 'classnames'
import FilterList from '../FilterList/FilterList'
import { useOutsideClick } from '@/hooks/useOutsideClick'

type Props = {
	title: string
	getFilterLists: string[]
}

export default function FilterButton({ title, getFilterLists }: Props) {
	const { visible, setVisible, ref } = useOutsideClick(false)
	const [openFilter, setOpenFilter] = useState<string | null>(null)

	const handleOpenFilter = (title: string) => {
		if (openFilter === title) {
			setOpenFilter(null)
		} else {
			setOpenFilter(title)
		}
		setVisible(prev => !prev)
	}

	return (
		<div className={styles.filterWrapper}>
			<div
				className={classNames(styles.filter__button, {
					[styles._btn_active]: visible,
				})}
				ref={ref}
				onClick={() => handleOpenFilter(title)}
			>
				{title}
			</div>

			{visible && <FilterList options={getFilterLists} />}
		</div>
	)
}
